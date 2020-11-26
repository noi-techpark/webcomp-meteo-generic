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

export async function request__get_coordinates_from_search(query) {
  const r = 150 * 1000;
  try {
    if (query) {
      const response = await fetch(
        `https://places.ls.hereapi.com/places/v1/browse?apiKey=${process.env.TILES_API_KEY}&in=46.31,11.26;r=${r}&q=${query}`,
        {
          method: "GET",
          headers: new Headers({
            Accept: "application/json",
          }),
        }
      );
      const data = await response.json();
      this.hereMapsPlacesFound = data.results.items;
      console.log(this.hereMapsPlacesFound);
    }
  } catch (error) {
    this.hereMapsPlacesFound = [];
  }
}

export function getLatLongFromStationDetail(o) {
  return { lat: o.y, lng: o.x };
}
