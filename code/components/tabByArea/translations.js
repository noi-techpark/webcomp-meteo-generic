// SPDX-FileCopyrightText: 2021 NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

/**
 * All translations mapped
 */
export const p = {
  today: {
    en: "today",
    de: "heute",
    it: "oggi",
    nl: "today",
    cs: "today",
    pl: "today",
    fr: "today",
    ru: "today",
  },
  iWantToSeeTheForecastsOf: {
    en: "I want to see the forecasts of",
    de: "Ich möchte die Prognosen von sehen",
    it: "Voglio vedere le previsioni di",
    nl: "I want to see the forecasts of",
    cs: "I want to see the forecasts of",
    pl: "I want to see the forecasts of",
    fr: "Je veux voir les prévisions de",
    ru: "I want to see the forecasts of",
  },
};

export const createSelectDiscrictOptions = (language) => [
  {
    value: "1",
    label: {
      en: "Bolzano, Überetsch and Unterland",
      de: "Bozen, Überetsch und Unterland",
      it: "Bolzano, Oltradige e Bassa Atesina",
    }[language],
  },
  {
    value: "2",
    label: {
      en: "Burggrafenamt - Meran and surroundings",
      de: "Burggrafenamt - Meran und Umgebung",
      it: "Burgraviato - Merano e dintorni",
    }[language],
  },
  {
    value: "3",
    label: {
      en: "Vinschgau",
      de: "Vinschgau",
      it: "Val Venosta",
    }[language],
  },
  {
    value: "4",
    label: {
      en: "Eisacktal and Sarntal",
      de: "Eisacktal und Sarntal",
      it: "Val d´Isarco e Val Sarentino",
    }[language],
  },
  {
    value: "5",
    label: {
      en: "Wipptal - Sterzing and surroundings",
      de: "Wipptal - Sterzing und Umgebung",
      it: "Alta Val d'Isarco - Vipiteno e dintorni",
    }[language],
  },
  {
    value: "6",
    label: {
      en: "Pustertal",
      de: "Pustertal",
      it: "Val Pusteria",
    }[language],
  },
  {
    value: "7",
    label: {
      en: "Ladinia - Dolomites",
      de: "Ladinien - Dolomiten",
      it: "Ladinia - Dolomiti",
    }[language],
  },
];
