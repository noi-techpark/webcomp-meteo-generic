import { html } from "lit-element";
import { LANGUAGES } from "../utils";

import flagIt from "../assets/flags/flag_it.svg";
import flagDe from "../assets/flags/flag_de.svg";
import flagEn from "../assets/flags/flag_en.svg";

const mapLanguageToFlag = {
  [LANGUAGES.IT]: flagIt,
  [LANGUAGES.DE]: flagDe,
  [LANGUAGES.EN]: flagEn,
};

export function render__languagePicker() {

  
  const setLanguage = (language) => {
    this.language = language;
  };

  return html`
    <div class="languagePicker">
      <wc-button
        @click="${() => {}}"
        type="square"
        .image="${mapLanguageToFlag[this.language]}"
      ></wc-button>
      <div class="languagePicker__menu">
        <div class="languagePicker__menu__element">
          <img
            src=${flagIt}
            alt="italiano"
            class=${this.language === LANGUAGES.IT ? "active" : ""}
            @click=${() => setLanguage(LANGUAGES.IT)}
          />
          ${LANGUAGES.IT.toUpperCase()}
        </div>

        <div class="languagePicker__menu__element">
          <img
            src=${flagDe}
            alt="deutsch"
            class=${this.language === LANGUAGES.DE ? "active" : ""}
            @click=${() => setLanguage(LANGUAGES.DE)}
          />
          ${LANGUAGES.DE.toUpperCase()}
        </div>
        <div class="languagePicker__menu__element">
          <img
            src=${flagEn}
            alt="english"
            class=${this.language === LANGUAGES.EN ? "active" : ""}
            @click=${() => setLanguage(LANGUAGES.EN)}
          />
          ${LANGUAGES.EN.toUpperCase()}
        </div>
      </div>
    </div>
  `;
}
