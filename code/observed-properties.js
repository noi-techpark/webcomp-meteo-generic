// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

export const observed_properties = {
  height: { type: String },
  width: { type: String },
  fontFamily: { type: String },
  language: { type: String },
  tiles_url: { type: String, attribute: "tiles-url" },
  enabledStations: { type: String },
  visibleParameters: { type: Array },

  showFilters: { type: Boolean },
  isLoading: { type: Boolean },

  hereMapsQuery: { type: String },
  searchPlacesFound: { type: Array },

  mapAttribution: { type: String },

  currentStation: { type: Object },

  currentTab: { type: Number },

  currentLocation: { type: Object },

  isMobile: { type: Boolean },

  detailsOpen: { type: Boolean },
  mobilityStationMeasurements: { type: Array },

  isSmallWidth: { type: Boolean },
  isSmallHeight: { type: Boolean },

  visibleTabs: { type: Array },
  startingTab: { type: String },
};
