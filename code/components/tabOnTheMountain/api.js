// SPDX-FileCopyrightText: 2021 NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

// const BASE_PATH_WEATHER = 'https://tourism.opendatahub.bz.it/api/Weather';
// import { html } from "lit-element";
// import Glide from "@glidejs/glide";

import { ORIGIN } from "../../api/config";


export async function basic_weather_request() {
  let language =
    this.language === "en" || this.language === "it" || this.language === "de"
      ? this.language
      : "en";
  let request = await fetch(this.base_url + `?language=${language}&` + ORIGIN, {
    method: "GET",
    headers: new Headers({
      Accept: "application/json",
      // Authorization: `Bearer ${this.token}`,
    }),
  });

  const response = await request.json();
  // const { Mountain } = response;

  return response;
}
