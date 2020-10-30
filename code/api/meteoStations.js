import { BASE_PATH } from "./config";

const requestMeteoStations = async () => {
  const request = fetch(`${BASE_PATH}/Weather/Measuringpoint`);
};
