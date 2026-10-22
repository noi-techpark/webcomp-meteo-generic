// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
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
        formattedTourismMeasuringPoints = tourismMeasuringPointsResponse
          .filter((o) => {
            const gps = o.GpsInfo && o.GpsInfo[0];
            return gps && gps.Latitude != null && gps.Longitude != null;
          })
          .map((o) => {
            const gps = o.GpsInfo[0];
            const names =
              o.LocationInfo &&
              o.LocationInfo.TvInfo &&
              o.LocationInfo.TvInfo.Name;
            const title =
              (names && (names[this.language] || names.en)) || o.Shortname;
            return {
              position: [gps.Latitude, gps.Longitude],
              title,
            };
          })
          .filter((o) => o.title);
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
        )
          .filter((item) => {
            const coordinate = item.scoordinate;
            return coordinate && coordinate.y != null && coordinate.x != null;
          })
          .map((item) => {
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
        formattedTourismData = tourismData.Items
          .filter((item) => {
            const gps = item.GpsInfo && item.GpsInfo[0];
            return gps && gps.Latitude != null && gps.Longitude != null;
          })
          .map((item) => {
            const gps = item.GpsInfo[0];
            const detail =
              item.Detail && (item.Detail[this.language] || item.Detail.en);
            return {
              position: [gps.Latitude, gps.Longitude],
              title: detail && detail.Title,
            };
          })
          .filter((item) => item.title);
      }

      // HereMaps

      const noOdhResultsCondition = !formattedTourismData.length;

      let formattedHereData = [];
      const hereMapsApiKey =
        typeof process !== "undefined" ? process.env.HEREMAPS_API_KEY : "";
      if (hereMapsApiKey && noOdhResultsCondition) {
        const hereResponse = await fetch(
          `https://places.ls.hereapi.com/places/v1/browse?apiKey=${hereMapsApiKey}&in=46.31,11.26;r=${r}&q=${query}&` + ORIGIN,
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
  } catch (error) {
    console.error(error);
    this.searchPlacesFound = {};
  } finally {
    this.isLoading = false;
  }
}
