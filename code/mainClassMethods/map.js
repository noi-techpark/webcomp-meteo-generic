import Leaflet from "leaflet";
import leaflet_mrkcls from "leaflet.markercluster";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import {
  requestMobilityMeteoStationLatestDetails,
  requestMobilityMeteoStationSelectedData,
  requestTourismMeasuringpoint,
} from "../api/meteoStations";
import stationIcon from "../assets/station.svg";
import user__marker from "../assets/user.svg";
import { getLatLongFromStationDetail } from "../utils";
import { CUSTOMstationCompetenceTypes } from "../webcomp-meteo-generic";

export async function initializeMap() {
  const DefaultIcon = Leaflet.icon({
    iconUrl: icon,
    iconAnchor: [12.5, 41],
    shadowUrl: iconShadow,
  });
  Leaflet.Marker.prototype.options.icon = DefaultIcon;

  this.map = Leaflet.map(this.shadowRoot.getElementById("map"), {
    zoomControl: false,
  });

  Leaflet.tileLayer(this.tiles_url, {
    attribution: this.mapAttribution,
  }).addTo(this.map);

  this.map.setView(
    { lat: this.currentLocation.lat, lon: this.currentLocation.lng },
    10
  );
}

export function drawUserOnMap() {
  /**
   * User Icon
   */
  const user_icon = Leaflet.icon({
    iconUrl: user__marker,
    iconSize: [25, 25],
  });
  const user = Leaflet.marker(
    [this.currentLocation.lat, this.currentLocation.lng],
    {
      icon: user_icon,
    }
  );
  /**
   * Circle around the user
   */
  const circle = Leaflet.circle(
    [this.currentLocation.lat, this.currentLocation.lng],
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
  this.layer_user = Leaflet.layerGroup([user, circle], {});
  this.layer_user.addTo(this.map);
}

export async function drawStationsOnMap() {
  const stations_layer_array = [];

  const mobilityStations = await requestMobilityMeteoStationSelectedData();
  const flatMobilityStations = mobilityStations
    ? Object.keys(mobilityStations.data.MeteoStation.stations).map((id) => {
        return {
          ...mobilityStations.data.MeteoStation.stations[id],
        };
      })
    : [];

  const tourismStations = await requestTourismMeasuringpoint();

  const enabledStations = this.enabledStations
    ? this.enabledStations.split(",")
    : [];

  flatMobilityStations
    .filter((station) => {
      if (enabledStations.length) {
        return enabledStations.includes(station.scode);
      }
      return true;
    })
    .map((station) => {
      const marker_position = getLatLongFromStationDetail(station.scoordinate);
      const station_icon = Leaflet.icon({
        iconUrl: stationIcon,
        iconSize: [36, 36],
      });
      const marker = Leaflet.marker(
        [marker_position.lat, marker_position.lng],
        {
          icon: station_icon,
        }
      );

      const action = async () => {
        this.searchPlacesFound = {};
        this.hereMapsQuery = "";
        this.currentStation = {
          ...station,
          CUSTOMstationCompetence: CUSTOMstationCompetenceTypes.mobility,
        };

        const details = await requestMobilityMeteoStationLatestDetails({
          scode: station.scode,
          tname: station.tname,
        });

        if (details && Object.keys(details.data).length !== 0) {
          const data = Object.values(details.data.MeteoStation.stations)[0];
          if (data !== undefined) {
            this.mobilityStationMeasurements = data;
          } else {
            this.mobilityStationMeasurements = [];
          }
          this.detailsOpen = true;
        } else {
          this.mobilityStationMeasurements = [];
          this.detailsOpen = true;
        }
      };

      marker.on("mousedown", action);
      stations_layer_array.push(marker);
    });

  tourismStations
    .filter((station) => {
      if (enabledStations.length) {
        return enabledStations.includes(station.Id);
      }
      return true;
    })
    .map((station) => {
      const marker_position = getLatLongFromStationDetail({
        x: station.Longitude,
        y: station.Latitude,
      });
      const station_icon = Leaflet.icon({
        iconUrl: stationIcon,
        iconSize: [36, 36],
      });
      const marker = Leaflet.marker(
        [marker_position.lat, marker_position.lng],
        {
          icon: station_icon,
        }
      );
      const action = () => {
        this.searchPlacesFound = {};
        this.hereMapsQuery = "";
        this.currentStation = {
          ...station,
          CUSTOMstationCompetence: CUSTOMstationCompetenceTypes.tourism,
        };
        this.detailsOpen = true;
      };

      marker.on("mousedown", action);
      stations_layer_array.push(marker);
    });

  // if (!this.language) {
  //   this.language = get_system_language();
  // }

  const stations_layer = Leaflet.layerGroup(stations_layer_array, {});

  this.layer_stations = new leaflet_mrkcls.MarkerClusterGroup({
    showCoverageOnHover: false,
    chunkedLoading: true,
    iconCreateFunction(cluster) {
      return Leaflet.divIcon({
        html: `<div class="marker_cluster__marker">${cluster.getChildCount()}</div>`,
        iconSize: Leaflet.point(36, 36),
      });
    },
  });
  /** Add maker layer in the cluster group */
  this.layer_stations.addLayer(stations_layer);
  /** Add the cluster group to the map */
  this.map.addLayer(this.layer_stations);
}
