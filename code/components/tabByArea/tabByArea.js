// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { css, html, LitElement, unsafeCSS } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import moment from "moment";
import "moment/locale/cs";
import "moment/locale/de";
import "moment/locale/fr";
import "moment/locale/it";
import "moment/locale/nl";
import "moment/locale/ru";
import { district_details_api_call } from "./api";
import { API_BASE_PATH, API_TOKEN } from "./constants";
import main from "./styles/main.scss";
import style__placeholder_loading from "./styles/placeholder-loading.css";
import style__typography from "./styles/typography.scss";
import { createSelectDiscrictOptions, p } from "./translations";

const WEATHER_ICON_SVG_PATH = `https://www.suedtirol.info/static/img/weatherIcons`;

class WeatherForecast extends LitElement {
  constructor() {
    super();
    this.language_translation = "en";
    this.token = API_TOKEN;
    this.base_url = API_BASE_PATH;
    this.district_details = {};
    this.is_loading = true;
    this.selected_district_id = 1;
    this.forecast_days = 4;

    this.district_details_api_call = district_details_api_call.bind(this);

    this.isSmallWidth = false;
    this.isSmallHeight = false;
  }
  static get properties() {
    return {
      selected_district_id: { type: Number },
      language_translation: { type: String },

      // Internal variables
      district_details: { type: Array },
      is_loading: { type: Boolean },
      forecast_days: { type: Number },
      isSmallWidth: { type: Boolean },
      isSmallHeight: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      ${unsafeCSS(style__placeholder_loading)}
      ${unsafeCSS(style__typography)}
      ${unsafeCSS(main)}
    `;
  }

  async firstUpdated() {
    await this.district_details_api_call(this.selected_district_id);
    this.is_loading = false;
  }

  async changeCurrentDistrict(e) {
    try {
      this.is_loading = true;
      this.selected_district_id = parseInt(e.target.value);
      await this.district_details_api_call(this.selected_district_id);
      this.is_loading = false;
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    moment.locale(this.language_translation);
    const { BezirksForecast, DistrictName } = this.district_details;
    let slice_of_bezirksforecast = BezirksForecast
      ? BezirksForecast.slice(1, this.forecast_days + 1)
      : [];

    const selectDiscrictOptions = createSelectDiscrictOptions(
      this.language_translation
    );

    return html`
      <div
        class=${classMap({
          meteo_widget: true,
          isSmallWidth: this.isSmallWidth,
        })}
      >
        ${this.is_loading
          ? html`<div class="meteo_widget__overlay"></div>`
          : ""}
        <div class="meteo_widget__title">
          <h1>${p["iWantToSeeTheForecastsOf"][this.language_translation]}</h1>
          <select @change="${this.changeCurrentDistrict}">
            ${selectDiscrictOptions.map((o) => {
              return html`<option value="${o.value}">${o.label}</option>`;
            })}
          </select>
        </div>
        <div class="forecast">
          ${slice_of_bezirksforecast.map(
            ({ date, WeatherCode, MinTemp, MaxTemp }) => {
              return html`
                <div class="forecast__item">
                  <p class="forecast__item__day">
                    ${moment(date).format(
                      this.language_translation === "de"
                        ? "dddd, DD.MM.YYYY"
                        : "dddd, DD/MM/YYYY"
                    )}
                  </p>
                  <img
                    src="${WEATHER_ICON_SVG_PATH}/${WeatherCode}.svg"
                    class="forecast__item__icon"
                  />
                  <p class="forecast__item__temp">
                    <span>${MaxTemp}</span> / ${MinTemp}°C
                  </p>
                </div>
              `;
            }
          )}
        </div>
      </div>
    `;
  }
}

if (!window.customElements.get("weather-forecast-byarea")) {
  window.customElements.define("weather-forecast-byarea", WeatherForecast);
}
