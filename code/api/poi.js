import { isArray } from "lodash";
import { BASE_PATH_MOBILITY, BASE_PATH_TOURISM } from "./config";

export async function request__get_coordinates_from_search(query) {
  this.isLoading = true;
  const r = 150 * 1000;
  try {
    if (query) {
      // Stations related data

      // Tourism meteo measuring points
      const tourismMeasuringPointsRequest = await fetch(
        `${BASE_PATH_TOURISM}/Weather/Measuringpoint?searchfilter=${query}`
      );
      const tourismMeasuringPointsResponse = await tourismMeasuringPointsRequest.json();
      let formattedTourismMeasuringPoints = [];
      if (isArray(tourismMeasuringPointsResponse)) {
        formattedTourismMeasuringPoints = tourismMeasuringPointsResponse.map(
          (o) => {
            return {
              position: [o.Latitude, o.Longitude],
              title: o.LocationInfo.TvInfo.Name[this.language],
            };
          }
        );
      }

      // Mobility MeteoStation

      // try Gargazzone as query
      const mobilityMeteoStationRequest = await fetch(
        `${BASE_PATH_MOBILITY}/tree,node/MeteoStation/*?where=and(sname.ire."${query}",sactive.eq.true)&limit=-1`
      );
      const mobilityMeteoStationResponse = await mobilityMeteoStationRequest.json();
      let formattedMobilityMeteoStationData = [];
      if (
        mobilityMeteoStationResponse.data &&
        mobilityMeteoStationResponse.data.MeteoStation &&
        mobilityMeteoStationResponse.data.MeteoStation.stations
      ) {
        formattedMobilityMeteoStationData = Object.values(
          mobilityMeteoStationResponse.data.MeteoStation.stations
        ).map((item) => {
          return {
            position: [item.scoordinate.y, item.scoordinate.x],
            title: item.smetadata[`name_${this.language}`],
          };
        });
      }

      // ---

      // Tourism

      const tourismResponse = await fetch(
        `https://tourism.opendatahub.bz.it/api/Poi?pagenumber=1&pagesize=10000&poitype=511&searchfilter=${query}`,
        {
          method: "GET",
          headers: new Headers({
            Accept: "application/json",
          }),
        }
      );
      const tourismData = await tourismResponse.json();

      let formattedTourismData = [];
      if (tourismData.Items) {
        formattedTourismData = tourismData.Items.map((item) => {
          return {
            position: [item.GpsInfo[0].Latitude, item.GpsInfo[0].Longitude],
            title: item.Detail[this.language].Title,
          };
        });
      }

      // Mobility

      const mobilityReponse = await fetch(
        `${BASE_PATH_MOBILITY}/tree,node/MeteoStation/*/latest?limit=-1&where=or(smetadata.name_it.ire."${query}",smetadata.name_en.ire."${query}",smetadata.name_de.ire."${query}",sname.ire."${query}")`
      );
      const mobilityData = await mobilityReponse.json();
      let formattedMobilityData = [];
      if (
        mobilityData.data &&
        mobilityData.data.MeteoStation &&
        mobilityData.data.MeteoStation.stations
      ) {
        formattedMobilityData = Object.values(
          mobilityData.data.MeteoStation.stations
        ).map((item) => {
          return {
            position: [item.scoordinate.y, item.scoordinate.x],
            title: item.smetadata[`name_${this.language}`],
          };
        });
      }

      // HereMaps

      const noOdhResultsCondition = !(
        formattedTourismData.length || formattedMobilityData.length
      );

      let formattedHereData = [];
      if (process.env.HEREMAPS_API_KEY && noOdhResultsCondition) {
        const hereResponse = await fetch(
          `https://places.ls.hereapi.com/places/v1/browse?apiKey=${process.env.HEREMAPS_API_KEY}&in=46.31,11.26;r=${r}&q=${query}`,
          {
            method: "GET",
            headers: new Headers({
              Accept: "application/json",
            }),
          }
        );
        const hereData = await hereResponse.json();
        formattedHereData = hereData.results.items.map((item) => {
          return {
            position: item.position,
            title: item.title,
          };
        });
      }

      this.searchPlacesFound = {
        "Open Data Hub": [
          ...formattedMobilityMeteoStationData,
          ...formattedTourismMeasuringPoints,
        ],
        "Other results": [
          ...formattedTourismData,
          ...formattedMobilityData,
          ...formattedHereData,
        ],
      };
    }
    this.isLoading = false;
  } catch (error) {
    console.error(error);
    this.searchPlacesFound = {};
  }
}
