import leafletStyle from "leaflet/dist/leaflet.css";
import { css, LitElement, unsafeCSS } from "lit-element";
import { observed_properties } from "./observed-properties";
import { isMobile, LANGUAGES } from "./utils";
import MeteoGenericStyle from "./webcomp-meteo-generic.scss";
import { debounce as _debounce } from "lodash";

export class BaseMeteoGeneric extends LitElement {
  constructor() {
    super();
    this.height = "500px";
    this.width = "100%";
    this.fontFamily = "";
    this.mapAttribution = "";
    this.language = LANGUAGES.EN;

    this.isMobile = isMobile();

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

  handleWindowResize() {
    if (isMobile() !== this.isMobile) {
      if (!this.isMobile) {
        this.mobileOpen = false;
      }
      this.isMobile = isMobile();
    }
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener(
      "resize",
      _debounce(this.handleWindowResize.bind(this), 150)
    );
  }

  disconnectedCallback() {
    window.removeEventListener("resize", this.handleWindowResize.bind(this));
    super.disconnectedCallback();
  }
}
