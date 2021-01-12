import Glide from "@glidejs/glide";
import { css, html, LitElement, unsafeCSS } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import moment from "moment";
import "moment/locale/cs";
import "moment/locale/de";
import "moment/locale/fr";
import "moment/locale/it";
import "moment/locale/nl";
import "moment/locale/ru";
import { basic_weather_request, districts_details_api_call } from "./api";
import { render__carousel } from "./components/carousel";
import { render__location } from "./components/location";
import {
  API_BASE_PATH,
  localities_class,
  WEATHER_ICON_PATH,
} from "./constants";
import style__carousel_card from "./styles/carousel_card.css";
import style_glide_theme from "./styles/glide-theme.css";
import style_glide_core from "./styles/glide.css";
import main from "./styles/main.scss";
import style__placeholder_loading from "./styles/placeholder-loading.css";
import style__towns from "./styles/towns.scss";
import style__typography from "./styles/typography.css";
import { new_suedtirol_map } from "./svg/new_map";
import { debounce, placeholder_places, render__placehoder } from "./utils";

class Meteo extends LitElement {
  constructor() {
    super();
    this.language_translation = "en";
    this.weather_data = {};
    this.base_url = API_BASE_PATH;
    this.slider = {};
    this.is_loading = true;
    this.selected_district_id = 1;
    this.forecast_days = 4;

    this.height = "";
    this.width = "";

    // binded actions
    this.render__carousel = render__carousel.bind(this);
    this.basic_weather_request = basic_weather_request.bind(this);
    this.districts_details_api_call = districts_details_api_call.bind(this);
    this.render__location = render__location.bind(this);
  }

  static get properties() {
    return {
      language_translation: { type: String },
      is_loading: { type: Boolean },
      forecast_days: { type: Number },
      selected_district_id: { type: Number },
    };
  }

  static get styles() {
    return css`
      ${unsafeCSS(style__carousel_card)}
      ${unsafeCSS(style_glide_theme)}
      ${unsafeCSS(style_glide_core)}
      ${unsafeCSS(style__placeholder_loading)}
      ${unsafeCSS(style__towns)}
      ${unsafeCSS(style__typography)}
      ${unsafeCSS(main)}
    `;
  }

  async firstUpdated() {
    await this.districts_details_api_call();
    await this.basic_weather_request();
    await this.requestUpdate();

    const main_slider_element = this.shadowRoot.getElementById("main_slider");
    this.slider = new Glide(main_slider_element, {
      type: "carousel",
      animationDuration: 300,
    });

    let main_map_target = this.shadowRoot.getElementById("main_map");

    let map_bozen = this.shadowRoot.getElementById("bozen");
    let map_meran = this.shadowRoot.getElementById("meran");
    let map_schlanders = this.shadowRoot.getElementById("schlanders");
    let map_brixen = this.shadowRoot.getElementById("brixen");
    let map_sterzing = this.shadowRoot.getElementById("sterzing");
    let map_bruneck = this.shadowRoot.getElementById("bruneck");
    let map_dolomiten = this.shadowRoot.getElementById("dolomiten");

    let array_districts_getted_elements = [
      map_bozen,
      map_meran,
      map_schlanders,
      map_brixen,
      map_sterzing,
      map_bruneck,
      map_dolomiten,
    ];

    let debounced_manage_map_events = debounce(function (event) {
      switch (event.type) {
        case "mouseleave":
          if (event.path && event.path[0].id === "main_map") {
            this.slider.go("=0");
          }
          if (
            event.explicitOriginalTarget &&
            event.explicitOriginalTarget.firstElementChild.id === "main_map"
          ) {
            this.slider.go("=0");
          }
          break;
        case "mouseenter":
          let target = {};
          if (event.path) {
            target = event.path[0];
          }
          if (event.explicitOriginalTarget) {
            target = event.explicitOriginalTarget;
          }
          let district = parseInt(target.getAttribute("data-district_id"));
          target.classList.remove("weather-map-default");
          target.classList.add("weather-map-active");
          this.slider.go(`=${district}`);
          break;
        default:
          break;
      }
    }, 300).bind(this);

    this.slider.on(["run.after"], (e) => {
      const index = this.slider.index;
      array_districts_getted_elements.map((o) => {
        o.classList.remove("weather-map-active");
        o.classList.add("weather-map-default");
      });
      if (index) {
        let target = array_districts_getted_elements[index - 1];
        target.classList.remove("weather-map-default");
        target.classList.add("weather-map-active");
      }
      this.selected_district_id = index;
    });

    main_map_target.onmouseleave = debounced_manage_map_events;

    array_districts_getted_elements.map((o) => {
      o.onmouseenter = debounced_manage_map_events;
      o.onmouseleave = debounced_manage_map_events;
    });
    this.slider.mount();
    if (this.selected_district_id) {
      this.slider.go(`=${this.selected_district_id}`);
    }
  }

  render() {
    let isSmallWidth = false;
    if (this.width.includes("px")) {
      isSmallWidth = parseInt(this.width.replace("px")) <= 800;
    }
    let isSmallHeight = false;
    if (this.height.includes("px")) {
      isSmallHeight = parseInt(this.height.replace("px")) <= 800;
    }
    console.log(isSmallWidth, isSmallHeight);

    const { Stationdata, Forecast } = this.weather_data;

    /** The first six records are about today */
    let localities_today = Stationdata ? Stationdata.slice(0, 6) : [];
    let current_forecast = this.districts_details
      ? this.districts_details.filter((o) => o.Id === this.selected_district_id)
      : [];
    const placeholder_mod = !localities_today.length;

    if (this.districts_details) {
      const { MaxTemp } = this.districts_details[6].BezirksForecast[0];

      localities_today = [
        ...localities_today,
        {
          ...this.districts_details[6].BezirksForecast[0],
          CityName: "dolomiten",
          Id: 7,
          Maxtemp: MaxTemp,
        },
      ];
    }

    return html`
      <div
        class=${classMap({
          meteo_widget: true,
          isSmallWidth: isSmallWidth,
        })}
      >
        <div class="meteo_widget__content">
          <div class="meteo_widget__map_container__responsive_manger">
            <div class="meteo_widget__map_container">
              ${new_suedtirol_map(this.language_translation)}
              ${placeholder_mod
                ? placeholder_places.map(
                    ({ Id, CityName, Maxtemp, MinTemp, WeatherCode }) => {
                      return this.render__location(
                        localities_class[Id],
                        CityName.split("/")[0],
                        Maxtemp,
                        MinTemp,
                        WeatherCode,
                        placeholder_mod
                      );
                    }
                  )
                : localities_today.map(
                    ({ Id, CityName, Maxtemp, MinTemp, WeatherCode }) => {
                      return this.render__location(
                        localities_class[Id],
                        CityName.split("/")[0],
                        Maxtemp,
                        MinTemp,
                        WeatherCode
                      );
                    }
                  )}
            </div>
          </div>
          ${this.render__carousel(localities_today)}
        </div>
        <div class="forecast">
          ${Forecast && this.selected_district_id === 0
            ? Forecast.slice(0, this.forecast_days).map(
                ({ date, Weathercode, TempMinmin, TempMaxmax }) => {
                  let weather_icon = `${WEATHER_ICON_PATH}/${Weathercode}.svg`;
                  return html`
                    <div class="forecast__item">
                      <p class="forecast__item__day">
                        ${moment(date).format("dddd")}
                      </p>
                      <img src=${weather_icon} class="forecast__item__icon" />
                      <p class="forecast__item__temp">
                        <span>${TempMaxmax}</span> / ${TempMinmin}°C
                      </p>
                    </div>
                  `;
                }
              )
            : [0, 1, 2, 3].slice(0, this.forecast_days).map(() => {
                if (this.selected_district_id === 0) {
                  return html`
                    <div class="forecast__item">
                      ${[
                        "forecast__date",
                        "forecast__icon",
                        "forecast__rain",
                      ].map((o) => render__placehoder(o))}
                    </div>
                  `;
                }
              })}
          ${current_forecast.length && this.selected_district_id !== 0
            ? current_forecast.map(({ BezirksForecast }) => {
                let slice_of_bezirksforecast = BezirksForecast.slice(
                  1,
                  this.forecast_days + 1
                );
                return slice_of_bezirksforecast.map(
                  ({ date, WeatherCode, MinTemp, MaxTemp }) => {
                    return html`
                      <div class="forecast__item">
                        <p class="forecast__item__day">
                          ${moment(date).format("dddd")}
                        </p>
                        <img
                          src="${WEATHER_ICON_PATH}/${WeatherCode}.svg"
                          class="forecast__item__icon"
                        />
                        <p class="forecast__item__temp">
                          <span>${MaxTemp}</span> / ${MinTemp}°C
                        </p>
                      </div>
                    `;
                  }
                );
              })
            : [0, 1, 2, 3].slice(0, this.forecast_days).map(() => {
                if (this.selected_district_id !== 0) {
                  return html`
                    <div class="forecast__item">
                      ${[
                        "forecast__date",
                        "forecast__icon",
                        "forecast__rain",
                      ].map((o) => render__placehoder(o))}
                    </div>
                  `;
                }
              })}
        </div>
      </div>
    `;
  }
}

if (!window.customElements.get("weather-forecast-widget")) {
  window.customElements.define("weather-forecast-widget", Meteo);
}
