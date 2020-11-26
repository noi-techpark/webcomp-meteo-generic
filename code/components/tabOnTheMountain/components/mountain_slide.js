import { html } from 'lit-element';
import img__mountain_weather from '../img/mountain_weather.png';
import { p } from '../translations';
import moment from 'moment';

export function render__mountain_slide(
  {
    Temp1000,
    Temp2000,
    Temp3000,
    Temp4000,
    Title,
    Reliability,
    date,
    Sunrise,
    Sunset,
    Moonset,
    Moonrise,
    Zerolimit,
    Conditions,
    Southcode,
    Southdesc,
    Northcode,
    Northdesc,
    Winddesc
  } = {},
  day_code
) {
  let today_string = p.today[this.language_translation];
  let tomorrow_string = p.tomorrow[this.language_translation];

  if (!Title) {
    return html`
      <p class="meteo_mountain_widget__date_title">
        ${day_code === 0 ? today_string : tomorrow_string},
        ${moment(date)
          .add(1, 'days')
          .format('dddd, DD. MMMM')
          .toLocaleLowerCase()}
      </p>
      <div><p class="text-center text-bold p-5">Dati non ancora disponibili.</p></div>
    `;
  }

  return html`
    <p class="meteo_mountain_widget__date_title">
      ${day_code === 0 ? today_string : tomorrow_string},
      ${date
        ? moment(date)
            .format('dddd, DD. MMMM')
            .toLocaleLowerCase()
        : ''}
    </p>
    <div class="row meteo_mountain_widget__slide">
      <div class="col-4">
        <div class="meteo_mountain_widget__slide_section">
          <h3>${p.temperatures_in_the_mountains[this.language_translation]}</h3>
          <div class="mountain_temperature" style="background-image: url('${img__mountain_weather}')">
            <div class="meteo_mountain_widget__moutain_level_wind_container">
              <p class="meteo_mountain_widget__moutain_level_wind_title">${Title}</p>
              <p class="meteo_mountain_widget__moutain_level_wind_desc">${Winddesc}</p>
            </div>
            <div class="meteo_mountain_widget__moutain_level_line">
              <div class="meteo_mountain_widget__moutain_level_line__meters"><p>4000m</p></div>
              <div class="meteo_mountain_widget__moutain_level_line__temp"><p>${Temp4000}°C</p></div>
            </div>
            <div class="meteo_mountain_widget__moutain_level_line">
              <div class="meteo_mountain_widget__moutain_level_line__meters"><p>3000m</p></div>
              <div class="meteo_mountain_widget__moutain_level_line__temp"><p>${Temp3000}°C</p></div>
            </div>
            <div class="meteo_mountain_widget__moutain_level_line">
              <div class="meteo_mountain_widget__moutain_level_line__meters"><p>2000m</p></div>
              <div class="meteo_mountain_widget__moutain_level_line__temp"><p>${Temp2000}°C</p></div>
            </div>
            <div class="meteo_mountain_widget__moutain_level_line">
              <div class="meteo_mountain_widget__moutain_level_line__meters"><p>1000m</p></div>
              <div class="meteo_mountain_widget__moutain_level_line__temp"><p>${Temp1000}°C</p></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="meteo_mountain_widget__slide_section">
          <h3>${Title}</h3>
          <p class="meteo_mountain_widget__slide_section__conditions">${Conditions}</p>
          <div class="meteo_mountain_widget__slide_section__meteo_details">
            <p>Affidabilità</p>
            <p>${Reliability}%</p>
            <p>${p.sunrise_sunset[this.language_translation]}</p>
            <p>${Sunrise} / ${Sunset}</p>
            <p>${p.moonrise_moonset[this.language_translation]}</p>
            <p>${Moonrise} / ${Moonset}</p>
            <p>${p.zerolimit[this.language_translation]}</p>
            <p>${Zerolimit}m</p>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="meteo_mountain_widget__slide_section">
          <h3>${p.mountain_weather[this.language_translation]}</h3>
          <div class="meteo_mountain_widget__slide_section__north_south">
            <div class="meteo_mountain_widget__slide_section__north_south__element">
              <img src="https://www.suedtirol.info/static/img/weatherIcons/${Southcode}.svg" />
              <p><strong> ${p.main_chain_of_the_alps[this.language_translation]}</strong><br />${Southdesc}</p>
            </div>
            <div class="meteo_mountain_widget__slide_section__north_south__element">
              <img src="https://www.suedtirol.info/static/img/weatherIcons/${Northcode}.svg" />
              <p><strong>${p.dolomites_ortler_range[this.language_translation]}</strong><br />${Northdesc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
