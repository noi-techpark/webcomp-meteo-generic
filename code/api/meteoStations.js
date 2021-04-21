import { BASE_PATH_MOBILITY, BASE_PATH_TOURISM } from "./config";

export const requestTourismMeasuringpoint = async () => {
  try {
    const request = await fetch(`${BASE_PATH_TOURISM}/Weather/Measuringpoint`);
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
      `${BASE_PATH_MOBILITY}/tree,node/MeteoStation/*?where=sactive.eq.true&limit=-1`
    );
    if (request.status !== 200) {
      throw new Error(request.statusText);
    }
    const response = await request.json();
    console.log(response);
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
      `${BASE_PATH_MOBILITY}/tree,node/MeteoStation/*/latest?limit=-1&where=scode.eq.${scode}`
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
