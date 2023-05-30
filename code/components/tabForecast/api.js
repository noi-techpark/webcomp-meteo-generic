// SPDX-FileCopyrightText: 2021 NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { API_BASE_PATH } from "./constants";
import { ORIGIN } from "../../api/config";


export async function basic_weather_request() {
  let language =
    this.language_translation === "en" ||
    this.language_translation === "it" ||
    this.language_translation === "de"
      ? this.language_translation
      : "en";
  let request = await fetch(this.base_url + `?language=${language}&` + ORIGIN, {
    method: "GET",
    headers: new Headers({
      Accept: "application/json",
      Authorization: `Bearer ${this.token}`,
    }),
  });

  const response = await request.json();
  this.weather_data = response;
  return response;
}

export async function districts_details_api_call() {
  this.is_loading = true;
  let language =
    this.language_translation === "en" ||
    this.language_translation === "it" ||
    this.language_translation === "de"
      ? this.language_translation
      : "en";
  let tmp_districs_details = [];
  for (let i = 1; i < 8; i++) {
    let request = await fetch(
      `${API_BASE_PATH}/District?language=${language}&locfilter=${i}&` + ORIGIN,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/json",
          Authorization: `Bearer ${this.token}`,
        }),
      }
    );
    const response = await request.json();
    tmp_districs_details = [...tmp_districs_details, response];
  }
  this.districts_details = [...tmp_districs_details];
  return [...tmp_districs_details];
}
