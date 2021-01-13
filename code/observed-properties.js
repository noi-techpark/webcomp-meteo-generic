export const observed_properties = {
  height: { type: String },
  width: { type: String },
  fontFamily: { type: String },
  language: { type: String },
  tiles_url: { type: String, attribute: "tiles-url" },

  showFilters: { type: Boolean },
  isLoading: { type: Boolean },

  hereMapsQuery: { type: String },
  hereMapsPlacesFound: { type: Array },

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
