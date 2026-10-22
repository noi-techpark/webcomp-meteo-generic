// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { html } from "lit-element";
import { t } from "../translations";
import { CUSTOMstationCompetenceTypes } from "../odh-meteo-generic";

export function render_details() {
  const { CUSTOMstationCompetence } = this.currentStation;

  const data = {
    title: "",
    subtitle: "",
    measurements: [],
  };
  if (CUSTOMstationCompetence === CUSTOMstationCompetenceTypes.mobility) {
    const {
      smetadata,
      stype,
      sdatatypes,
      sname,
    } = this.mobilityStationMeasurements;

    if (smetadata) {
      data.title = smetadata[`name_${this.language}`] || sname;
    }
    data.linkedTagText = stype || "";
    if (sdatatypes) {
      data.measurements = Object.keys(sdatatypes).map((key) => {
        const { tdescription, tmeasurements, tunit, tname } = sdatatypes[key];
        return {
          tname,
          name: `${tdescription || tname}`,
          value: `${tmeasurements[0].mvalue}${tunit}`,
        };
      });
      data.measurements = data.measurements.filter((m) => {
        if (this.visibleParameters && this.visibleParameters.length) {
          return this.visibleParameters.includes(m.tname.toLowerCase());
        }
        return true;
      });
    }
  }

  if (CUSTOMstationCompetence === CUSTOMstationCompetenceTypes.tourism) {
    const { Shortname, Temperature, SnowHeight, GpsInfo } = this.currentStation;
    const gps = (GpsInfo && GpsInfo[0]) || {};

    data.title = Shortname;
    data.linkedTagText = "Measuring Point";
    data.measurements = [
      Temperature != null
        ? {
            tname: "Temperature",
            name: t["temperature"][this.language],
            value: `${Temperature}C`,
          }
        : null,
      gps.Altitude != null
        ? {
            tname: "Altitude",
            name: t["altitude"][this.language],
            value: `${gps.Altitude}${gps.AltitudeUnitofMeasure || ""}`,
          }
        : null,
      SnowHeight != null
        ? {
            tname: "SnowHeight",
            name: t["snowHeight"][this.language],
            value: `${SnowHeight}cm`,
          }
        : null,
    ]
      .filter(Boolean)
      .filter((m) => {
        if (this.visibleParameters && this.visibleParameters.length) {
          return this.visibleParameters.includes(m.tname.toLowerCase());
        }
        return true;
      });
  }

  return html` <div class="details">
    <div class="header">
      <wc-sidemodal-header
        .type="title"
        .tTitle="${data.title}"
        .tSubtitle="${data.subtitle}"
        .tLinkedTagText="${data.linkedTagText}"
        .closeModalAction="${() => {
          this.detailsOpen = false;
        }}"
      ></wc-sidemodal-header>
    </div>

    <div>
      ${data.measurements.length
        ? data.measurements.map((o) => {
            return html`<wc-sidemodal-row
              .type="horizontal"
              .title="${o.name}"
              .text="${o.value}"
            ></wc-sidemodal-row> `;
          })
        : html`<p class="mx-16px emptySet">${t["noData"][this.language]}</p>`}
    </div>
  </div>`;
}
