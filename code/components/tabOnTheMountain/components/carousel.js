import { html } from 'lit-element';
import moment from 'moment';
import { p } from '../translations';

function render__carousel__card() {
  return html`
    <div class="Wallop-item">SLIDER ITEM</div>
  `;
}

export function render__carousel() {
  // const { Conditions } = this.weather_data;
  moment.locale(this.language_translation);

  return html`
    <div id="district_slider" class="Wallop Wallop--slide">
      <div class="Wallop-list">${render__carousel__card()}</div>
      <button class="Wallop-buttonPrevious">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 501.5 501.5">
          <g>
            <path
              fill="#2E435A"
              d="M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z"
            />
          </g>
        </svg>
      </button>
      <button class="Wallop-buttonNext" id="Wallop-buttonNext">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 501.5 501.5">
          <g>
            <path
              fill="#2E435A"
              d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"
            />
          </g>
        </svg>
      </button>
    </div>
  `;
}
