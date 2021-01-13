import { t } from "./translations";

const DEFAULT_GEOLOCATION_TIMEOUT = 10000;
export const LANGUAGES = {
  EN: "en",
  DE: "de",
  IT: "it",
};

export const isMobile = () => {
  return document.body.offsetWidth < 992;
};

export function getCurrentPosition(options = {}) {
  //                 milli * s * m   = 1h
  const maximumAge = 1000 * 60 * 60;
  return new Promise((resolve, reject) => {
    if (navigator.geolocation && navigator.geolocation.getCurrentPosition) {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        maximumAge,
        timeout: DEFAULT_GEOLOCATION_TIMEOUT,
        ...options,
      });
    } else {
      alert("Not supported");
      reject(); // geolocalization probably not supported
    }
  });
}

export function get_system_language() {
  const locale = navigator.languages
    ? navigator.languages[0]
    : navigator.language;
  const lang = locale.substr(0, 2);
  return Object.values(LANGUAGES).includes(lang) ? lang : LANGUAGES.EN;
}

export function debounce(delay, fn) {
  let timerId;
  return (...args) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(async () => {
      fn(...args);
      timerId = null;
    }, delay);
  };
}

export function getLatLongFromStationDetail(o) {
  return { lat: o.y, lng: o.x };
}

// Tabs

export const ALL_TABS = [
  "map",
  "forecasts",
  "video",
  "onTheMountains",
  "byArea",
];

const tabArray = (language) => [
  { idString: ALL_TABS[0], label: t.map[language], id: 1 },
  { idString: ALL_TABS[1], label: t.forecasts[language], id: 2 },
  { idString: ALL_TABS[2], label: t.video[language], id: 3 },
  { idString: ALL_TABS[3], label: t.onTheMountains[language], id: 4 },
  { idString: ALL_TABS[4], label: t.byArea[language], id: 5 },
];

export const filteredTabsList = (visibleTabs, language) => {
  return tabArray(language).filter((o) => {
    return visibleTabs.includes(o.idString);
  });
};

export const getCurrentTab = (startingTab) => {
  return ALL_TABS.indexOf(startingTab) + 1;
};
