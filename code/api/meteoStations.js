// SPDX-FileCopyrightText: 2021 NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { BASE_PATH_MOBILITY, BASE_PATH_TOURISM, ORIGIN } from "./config";

export const requestTourismMeasuringpoint = async () => {
  try {
    const request = await fetch(`${BASE_PATH_TOURISM}/Weather/Measuringpoint?` + ORIGIN);
    if (request.status !== 200) {
      throw new Error(request.statusText);
    }
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const requestMobilityMeteoStationSelectedData = async () => {
  try {
    const request = await fetch(
      `${BASE_PATH_MOBILITY}/tree,node/MeteoStation/*?where=sactive.eq.true&limit=-1&`+ ORIGIN
    );
    if (request.status !== 200) {
      throw new Error(request.statusText);
    }
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const requestMobilityMeteoStationLatestDetails = async ({
  scode,
  tname,
}) => {
  try {
    const request = await fetch(
      `${BASE_PATH_MOBILITY}/tree,node/MeteoStation/*/latest?limit=-1&where=scode.eq.${scode}&` + ORIGIN
    );
    if (request.status !== 200) {
      throw new Error(request.statusText);
    }
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
