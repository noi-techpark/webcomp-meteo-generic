// SPDX-FileCopyrightText: 2021 NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { isArray } from "lodash";
import { BASE_PATH_MOBILITY, BASE_PATH_TOURISM, ORIGIN } from "./config";

export async function request__get_coordinates_from_search(query) {
  this.isLoading = true;
  const r = 150 * 1000;
  try {
    if (query) {
      // Stations related data

      // Tourism meteo measuring points
      const tourismMeasuringPointsRequest = await fetch(
        `${BASE_PATH_TOURISM}/Weather/Measuringpoint?searchfilter=${query}&` + ORIGIN
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

      const mobilityMeteoStationRequest = await fetch(
        `${BASE_PATH_MOBILITY}/tree,node/MeteoStation/*?where=and(or(smetadata.name_it.ire."${query}",smetadata.name_en.ire."${query}",smetadata.name_de.ire."${query}",sname.ire."${query}"),sactive.eq.true)&limit=-1&` + ORIGIN
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
            title:
              item.smetadata[`name_${this.language}`] || item.sname || "---",
          };
        });
      }

      // ---

      // Tourism

      const tourismResponse = await fetch(
        `${BASE_PATH_TOURISM}/Poi?pagenumber=1&pagesize=10000&poitype=511&searchfilter=${query}&` + ORIGIN,
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

      // HereMaps

      const noOdhResultsCondition = !formattedTourismData.length;

      let formattedHereData = [];
      if (process.env.HEREMAPS_API_KEY && noOdhResultsCondition) {
        const hereResponse = await fetch(
          `https://places.ls.hereapi.com/places/v1/browse?apiKey=${process.env.HEREMAPS_API_KEY}&in=46.31,11.26;r=${r}&q=${query}&` + ORIGIN,
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
        "Other results": [...formattedTourismData, ...formattedHereData],
      };
    }
    this.isLoading = false;
  } catch (error) {
    console.error(error);
    this.searchPlacesFound = {};
  }
}
