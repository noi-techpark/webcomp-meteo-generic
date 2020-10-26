import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import user__marker from "../assets/user.svg";

export async function initializeMap() {
  const DefaultIcon = L.icon({
    iconUrl: icon,
    iconAnchor: [12.5, 41],
    shadowUrl: iconShadow,
  });
  L.Marker.prototype.options.icon = DefaultIcon;

  this.map = L.map(this.shadowRoot.getElementById("map"), {
    zoomControl: false,
  });

  const tileUrl = process.env.HERE_API_KEY
    ? `${this.tiles_url}${process.env.HERE_API_KEY}`
    : this.tiles_url;

  L.tileLayer(tileUrl, {
    attribution: this.attribution,
  }).addTo(this.map);

  this.map.setView(
    { lat: this.current_location.lat, lon: this.current_location.lng },
    13
  );
}

export function drawUserOnMap() {
  /**
   * User Icon
   */
  const user_icon = L.icon({
    iconUrl: user__marker,
    iconSize: [25, 25],
  });
  const user = L.marker(
    [this.current_location.lat, this.current_location.lng],
    {
      icon: user_icon,
    }
  );
  /**
   * Circle around the user
   */
  const circle = L.circle(
    [this.current_location.lat, this.current_location.lng],
    {
      radius: this.filters.radius * 1000,
      color: "rgba(66, 133, 244, 0.6)",
      fillColor: "rgba(66, 133, 244, 0.5)",
      weight: 1,
    }
  );
  /**
   * Add to map
   */
  this.layer_user = L.layerGroup([user, circle], {});
  this.layer_user.addTo(this.map);
}
