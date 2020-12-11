import "@babel/polyfill";
import leafletStyle from "leaflet/dist/leaflet.css";
import { css, html, LitElement, unsafeCSS } from "lit-element";
import { request__get_coordinates_from_search } from "./api/hereMaps";
import { render_details } from "./components/details";
import { render__mapControls } from "./components/mapControls";
import { render_searchPlaces } from "./components/searchPlaces";
import "./components/tabOnTheMountain/tabOnTheMountain";
import "./components/tabForecast/tabForecast";
import "./components/tabByArea/tabByArea";
import { render__tabVideo } from "./components/tabVideo";
import {
  drawStationsOnMap,
  drawUserOnMap,
  initializeMap,
} from "./mainClassMethods/map";
import { observed_properties } from "./observed-properties";
import "./shared_components/button/button";
import "./shared_components/languagePicker/languagePicker";
// Shared components
import "./shared_components/searchBar/searchBar";
import "./shared_components/sideModalHeader/sideModalHeader";
import "./shared_components/sideModalRow/sideModalRow";
import "./shared_components/sideModalTabs/sideModalTabs";
import "./shared_components/tag/tag";
import "./shared_components/dropdown/dropdown";
import { t } from "./translations";
import { debounce, isMobile, LANGUAGES } from "./utils";
import MeteoGenericStyle from "./webcomp-meteo-generic.scss";

export const CUSTOMstationCompetenceTypes = {
  tourism: "tourism",
  mobility: "mobility",
};

class MeteoGeneric extends LitElement {
  constructor() {
    super();
    this.height = "500px";
    this.width = "100%";
    this.fontFamily = "";
    this.mapAttribution = "";
    this.language = LANGUAGES.EN;

    this.isLoading = true;
    this.currentTab = 1;

    this.map = undefined;
    this.currentLocation = { lat: 46.479, lng: 11.331 };

    this.hereMapsPlacesFound = [];
    this.hereMapsQuery = "";

    this.filters = {
      radius: 0,
    };

    this.hereMapsQuery = "";

    this.currentStation = {};
    this.detailsOpen = false;
    this.mobilityStationMeasurements = [];
  }

  static get properties() {
    return observed_properties;
  }

  static get styles() {
    return css`
      /* Map */
      ${unsafeCSS(leafletStyle)}
      ${unsafeCSS(MeteoGenericStyle)}
    `;
  }

  async drawMap() {
    drawUserOnMap.bind(this)();
  }

  async firstUpdated() {
    if (this.currentTab === 1) {
      initializeMap.bind(this)();
      drawUserOnMap.bind(this)();
      await drawStationsOnMap.bind(this)();
    }
    this.isLoading = false;
  }

  handleChangeTab(id) {
    this.currentTab = id;
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === "currentTab") {
        if (oldValue === 1) {
          this.map.off();
          this.map.remove();
        }
        if (this.currentTab === 1 && oldValue !== undefined) {
          this.isLoading = true;
          initializeMap
            .bind(this)()
            .then(() => {
              console.log(drawUserOnMap);
              drawUserOnMap.bind(this)();
              drawStationsOnMap
                .bind(this)()
                .then(() => {
                  this.isLoading = false;
                });
            });
        }
      }
    });
  }

  handleSearch = (searchValue) => {
    console.log(searchValue);
  };

  handleSearchBarFilterAction = () => {
    console.log("Toggle filters");
    this.showFilters = !this.showFilters;
  };

  debounced__request__get_coordinates_from_search = debounce(
    500,
    request__get_coordinates_from_search.bind(this)
  );

  render() {
    return html`
      <style>
        * {
          --width: ${this.width};
          --height: ${this.height};
          --w-c-font-family: ${this.fontFamily};
        }
      </style>
      ${this.isLoading ? html`<div class="globalOverlay"></div>` : ""}
      ${this.tiles_url
        ? ""
        : html`
            <p style="color:red">Required attribute \`tiles_url\` is missing</p>
          `}

      <div
        class="meteo_generic 
          ${
          /*this.mobile_open ? `MODE__mobile__open` : `MODE__mobile__closed`*/ ""
        }
          ${isMobile() ? `mobile` : ``}
          ${/*this.getAnimationState()*/ ""}"
      >
        <div
          class="meteo_generic__language_picker ${this.currentTab === 1
            ? "big_margin"
            : ""}"
        >
          <wc-languagepicker
            .supportedLanguages="${LANGUAGES}"
            .language="${this.language}"
            .changeLanguageAction="${(language) => {
              this.language = language;
            }}"
          ></wc-languagepicker>
        </div>
        ${/*this.isFullScreen ? this.render_closeFullscreenButton() : null*/ ""}
        ${/*this.render_backgroundMap()*/ ""}

        <div class="meteo_generic__sideBar">
          <div class="meteo_generic__sideBar__tabBar">
            <wc-sidemodal-tabs
              .action="${(id) => {
                this.detailsOpen = false;
                this.currentTab = id;
              }}"
              .idSelected="${this.currentTab}"
              .elements="${[
                { label: t.map[this.language], id: 1 },
                { label: t.forecasts[this.language], id: 2 },
                { label: t.video[this.language], id: 3 },
                { label: t.inTheMountains[this.language], id: 4 },
                { label: t.byArea[this.language], id: 5 },
              ]}"
            ></wc-sidemodal-tabs>
          </div>
          ${this.currentTab === 1
            ? html`<div class="meteo_generic__sideBar__searchBar mt-4px">
                ${render_searchPlaces.bind(this)()}
              </div>`
            : ""}
          ${this.detailsOpen
            ? html`<div class="meteo_generic__sideBar__details mt-4px">
                ${render_details.bind(this)()}
              </div>`
            : ""}
        </div>
        ${this.currentTab === 1
          ? html`
              <div id="map"></div>
              ${render__mapControls.bind(this)()}
            `
          : ""}
        ${this.currentTab === 2
          ? html`<weather-forecast-widget
              .forecast_days="4"
              .selected_district_id="1"
              .language_translation="${this.language}"
            ></weather-forecast-widget>`
          : ""}
        ${this.currentTab === 3 ? render__tabVideo.bind(this)() : ""}
        ${this.currentTab === 4
          ? html`<meteo-mountain-widget
              .language_translation="${this.language}"
            ></meteo-mountain-widget>`
          : ""}
        ${this.currentTab === 5
          ? html`<weather-forecast-byarea
              .forecast_days="4"
              .selected_district_id="1"
              .language_translation="${this.language}"
            ></weather-forecast-byarea>`
          : ""}
      </div>
    `;
  }
}

customElements.get("webcomp-meteo-generic") ||
  customElements.define("webcomp-meteo-generic", MeteoGeneric);
