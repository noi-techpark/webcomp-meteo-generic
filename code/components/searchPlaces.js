import { html } from "lit-element";
import { debounce, request__get_coordinates_from_search } from "../utils";
import { t } from "../translations";
import findPositionBlueIcon from "../assets/find-position-blue.svg";

export function render_searchPlaces() {
  const handle_onchange = (value) => {
    if (value) {
      this.nominatimQuery = value;
      this.debounced__request__get_coordinates_from_search(value);
      this.showFilters = false;
    } else {
      this.nominatimPlacesFound = [];
    }
  };

  const manage_map = (lat, lng) => {
    this.current_location = { lat: parseFloat(lat), lng: parseFloat(lng) };
    this.current_station = {};
    this.nominatimPlacesFound = [];
    this.showFilters = false;
    this.map.flyTo([lat, lng], 15);
    this.map.removeLayer(this.layer_user);
    this.drawMap();
    this.isLoading = false;
  };

  const handle__move_to_current_position = () => {
    try {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted") {
          this.isLoading = true;
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              const { latitude, longitude } = pos.coords;
              manage_map(latitude, longitude);
            },
            () => {}
          );
        } else {
          this.isLoading = false;
        }
      });
    } catch (error) {
      this.isLoading = false;
    }
  };

  const handleMoveToPlace = (lat, lng) => {
    this.isLoading = true;
    this.nominatimPlacesFound = [];
    this.nominatimQuery = "";
    manage_map(lat, lng);
  };

  const handle_focus_input = () => {
    this.debounced__request__get_coordinates_from_search(this.nominatimQuery);
    if (this.nominatimQuery.length) {
      this.showFilters = false;
    }
  };

  const render__places_list = () => {
    return html`
      <div class="searchBox__resoult_list">
        <ul>
          <li @click="${handle__move_to_current_position}" class="">
            <img class="" src="${findPositionBlueIcon}" alt="" />
            ${t.my_location[this.language]}
          </li>
          ${this.nominatimPlacesFound.map((o) => {
            return html`
              <li @click="${() => handleMoveToPlace(o.lat, o.lon)}" class="">
                ${o.display_name}
              </li>
            `;
          })}
        </ul>
      </div>
    `;
  };

  return html`
    <div class="searchBox">
      <wc-searchbar
        .searchValue="${this.nominatimQuery}"
        placeHolder="${t.search.it}..."
        .filtersNumber="${0}"
        .filtersAction="${this.handleSearchBarFilterAction}"
        .action="${handle_onchange}"
        @focus=${handle_focus_input}
      ></wc-searchbar>

      ${this.nominatimPlacesFound.length && this.nominatimQuery.length
        ? render__places_list()
        : ""}
    </div>
  `;
}
