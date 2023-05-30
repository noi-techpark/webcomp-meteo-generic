// SPDX-FileCopyrightText: 2021 NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import leafletStyle from "leaflet/dist/leaflet.css";
import { css, LitElement, unsafeCSS } from "lit-element";
import { debounce as _debounce } from "lodash";
import { observed_properties } from "./observed-properties";
import {
  ALL_TABS,
  getCurrentTab,
  get_system_language,
  isMobile,
  LANGUAGES,
} from "./utils";
import MeteoGenericStyle from "./odh-meteo-generic.scss";

export class BaseMeteoGeneric extends LitElement {
  constructor() {
    super();
    this.height = "500px";
    this.width = "100%";
    this.fontFamily = "";
    this.mapAttribution = "";
    this.language = get_system_language();
    this.visibleTabs = ALL_TABS;

    this.isMobile = isMobile();

    this.isLoading = true;

    this.map = undefined;
    this.currentLocation = { lat: 46.479, lng: 11.331 };

    this.searchPlacesFound = {};
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

    if (this.startingTab) {
      this.currentTab = getCurrentTab(this.startingTab);
    } else {
      this.currentTab = getCurrentTab(this.visibleTabs[0]);
      this.startingTab = this.visibleTabs[0];
    }

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
