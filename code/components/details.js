import { html } from "lit-element";
import { t } from "../translations";
import { CUSTOMstationCompetenceTypes } from "../webcomp-meteo-generic";

export function render_details() {
  const { CUSTOMstationCompetence } = this.currentStation;
  console.log(CUSTOMstationCompetence, this.currentStation);
  const data = {
    title: "",
    subtitle: "",
    measurements: [],
  };
  if (CUSTOMstationCompetence === CUSTOMstationCompetenceTypes.mobility) {
    const { smetadata, stype, sdatatypes } = this.mobilityStationMeasurements;

    data.title = smetadata[`name_${this.language}`];
    data.linkedTagText = stype;
    data.measurements = Object.keys(sdatatypes).map((key) => {
      const { tdescription, tmeasurements, tunit, tname } = sdatatypes[key];
      return {
        name: `${tdescription || tname}`,
        value: `${tmeasurements[0].mvalue}${tunit}`,
      };
    });
  }

  if (CUSTOMstationCompetence === CUSTOMstationCompetenceTypes.tourism) {
    const {
      Shortname,
      Temperature,
      Altitude,
      SnowHeight,
    } = this.currentStation;

    data.title = Shortname;
    data.linkedTagText = "Measuring Point";
    data.measurements = [
      { name: t["temperature"][this.language], value: `${Temperature}C` },
      { name: t["altitude"][this.language], value: `${Altitude}m` },
      { name: t["snowHeight"][this.language], value: `${SnowHeight}cm` },
    ];
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
      ${data.measurements.map((o) => {
        return html`<wc-sidemodal-row
          .type="horizontal"
          .title="${o.name}"
          .text="${o.value}"
        ></wc-sidemodal-row> `;
      })}
    </div>
  </div>`;
}

// .tOptionalLink="${args.tOptionalLink}"
// .tIcon="${args.tIcon}"
