import { html } from 'lit-element';

export const new_suedtirol_map = language => {
  return language === 'it'
    ? html`
        <svg
          class="embed-responsive-item svg-map"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 228.83 139.63"
          xml:space="preserve"
        >
          <style type="text/css">
            .weather-map-default {
              fill: #dce0e4;
              stroke: #fff;
              stroke-width: 0.36;
              stroke-miterlimit: 10;
              transition: fill 0.3s ease;
            }
            .weather-map-active {
              fill: #a9bf00;
              stroke: #fff;
              stroke-width: 0.36;
              stroke-miterlimit: 10;
              transition: fill 0.3s ease;
            }
            .weather-map-town {
              fill: #50742f;
            }
            .weather-map-dolomiten {
              fill: #758592;
            }
          </style>
          <!-- MAP -->
          <g id="main_map" data-region="Ebene 2">
            <g id="inactive">
              <polyline
                id="bozen"
                class="weather-map-default"
                points="119.94 116.52 117.76 119.66 111.35 122.23 111.19 124.55 107.56 126.32 109.46 128.08 111.35 131.15 109.73 132.57 106.02 131.89 106.02 129.86 104.56 128.63 104.56 126.45 101.98 129.04 100.75 132.71 98.3 132.17 94.78 137.61 89.59 139.42 86.47 136.25 89.59 133.25 85.25 132.17 82.37 128.22 85.86 127.54 89.59 120.64 88.1 115.97 90 114.62 90.28 105.91 91.77 101.55 90.55 95.7 88.37 92.83 90.55 90.93 92.96 89.51 92.96 87.95 90.28 84.41 92.11 82.98 90.82 80.67 92.96 79.68 95.65 76.99 97.96 76.45 99.26 74.74 100.21 71.62 99.94 69.99 98.37 66.79 99.8 64.14 98.17 62.44 98.1 60.87 98.85 59.3 97.96 57.74 99.19 54.75 101.16 53.93 100.82 52.64 102.86 48.37 105.58 48.01 107.83 47.13 108.64 46.31 111.36 46.79 113.41 44.15 115.51 43.31 117.62 44.15 118.71 45.9 120.69 45.57 122.32 49.85 121.23 50.94 121.64 53.93 123.54 55.29 123.66 56.95 123.68 58.43 124.3 59.1 121.91 61.89 121.91 63.52 117.13 67.28 115.17 66.56 114.08 69.1 112.86 69.8 115.04 72.3 115.11 74.99 117.13 73.8 118.44 73.32 117.3 75.84 117.13 77.95 119.46 79.68 121.5 79.68 123 81.38 125.38 81.69 124.02 85.23 122.72 88.87 121.43 89.37 121.57 90.67 117.13 94.82 115.92 95.64 114.42 96.44 112.93 95.57 110.69 95.17 111.19 96.44 113.61 100.99 112.79 102.03 111.77 102.03 111.19 101.42 109.73 102.78 109.12 104.06 107.62 107.42 107.62 108.9 105.24 110.13 107.62 111.29 109.94 113.12 111.98 112.17 115.79 114.27 118.51 114.68 119.94 116.52"
                data-district_id="1"
              ></polyline>
              <polygon
                id="meran"
                class="weather-map-default"
                points="85.25 95.84 81.7 97.26 79.44 95.17 76.94 94.34 76.67 89.44 74.21 91.76 71.77 92.03 75.05 99.24 76.26 102.92 75.05 104 72.18 103.05 68.37 98.1 65.64 96.44 63.06 98.83 60.75 99.51 59.66 101.83 58.03 104.14 55.24 102.45 51.77 104.28 45.37 103.73 41.56 96.44 43.33 95.17 43.47 94.05 44.7 93.93 47.28 89.72 49.12 89.05 50.27 87.59 52.31 87.47 54.22 85.91 54.9 84.96 57.48 83.58 59.8 82.91 63.47 82.27 65.1 80.87 64.56 77.73 63.74 73.45 64.08 71.62 65.24 71.21 65.1 70.32 63.2 69.44 61.16 67.28 59.05 67.54 57.69 68.15 56.26 67.28 54.63 67.95 53.47 68.9 50.14 68.63 48.98 68.29 48.98 65.63 46.73 65.14 46.06 62.91 46.53 62.16 44.76 61.54 42.99 59.04 40.61 59.44 38.71 58.03 39.12 55.29 38.58 51.76 38.98 50.67 38.46 49.85 38.44 48.37 41.29 48.75 44.29 47.13 48.64 50.67 50 49.28 55.62 52.44 59.8 50.53 67.55 51.62 69.46 51.08 70.14 52.16 72.18 45.91 76.53 43.31 75.75 37.74 78.71 32.43 78.61 28.63 79.8 28.08 79.92 25.9 83.21 26.18 86.46 23.73 88.1 24.81 89.73 25.5 90.21 26.58 89.94 26.99 90.41 30.66 89.94 32.03 91.16 34.75 90.75 36.45 90.95 37.67 93.81 39.03 94.77 40.12 101.02 40.36 103 40.12 104.36 41.21 106.02 42.16 108.64 46.31 107.83 47.13 105.58 48.01 102.86 48.37 100.82 52.64 101.16 53.93 99.19 54.75 97.96 57.74 98.85 59.31 98.1 60.87 98.17 62.44 99.8 64.14 98.37 66.79 99.94 69.99 100.21 71.62 99.25 74.74 97.96 76.45 95.65 77 92.96 79.68 90.82 80.67 92.11 82.98 90.28 84.41 92.96 87.95 92.96 89.51 90.55 90.92 88.37 92.83 85.25 95.84"
                data-district_id="2"
              ></polygon>
              <polygon
                id="schlanders"
                class="weather-map-default"
                points="38.46 49.85 38.98 50.67 38.58 51.75 39.11 55.29 38.71 58.03 40.61 59.44 42.99 59.03 44.76 61.54 46.53 62.16 46.05 62.91 46.73 65.14 48.98 65.63 48.98 68.29 50.14 68.63 53.47 68.9 54.63 67.94 56.26 67.28 57.69 68.15 59.05 67.54 61.16 67.28 63.2 69.44 65.1 70.31 65.24 71.21 64.08 71.62 63.74 73.45 64.56 77.73 65.1 80.87 63.47 82.27 59.8 82.91 57.48 83.58 54.9 84.95 54.22 85.91 52.31 87.47 50.27 87.59 49.12 89.05 47.28 89.72 44.69 93.93 43.47 94.05 43.33 95.17 41.56 96.44 38.71 97.25 36.18 100.33 32.18 102.45 27.68 102.45 23.33 99.24 20.48 97.9 18.3 95.17 9.73 94.34 8.23 91.62 8.09 87.47 10 87.47 11.09 81.38 12.31 75.36 7.55 71.21 2.51 72.3 0.2 64.68 2.81 61.54 3.93 59.37 2.06 56.79 6.87 53.25 6.19 49.85 4.55 47.53 7 46.04 8.77 41.14 10.54 36.92 11.72 36.92 16.12 39.1 19.24 38.83 19.24 40.1 24.69 36.92 29.59 36.11 31.63 34.47 34.9 36.92 35.58 38.96 42.24 42.37 39.52 45.9 37.89 47.13 38.44 48.37 38.46 49.85"
                data-district_id="3"
              ></polygon>
              <polygon
                id="brixen"
                class="weather-map-default"
                points="154.9,67.7 151.8,67.8 149.6,68.4 147.9,67.4 145,67.9 142.2,69.4 140.2,68.2
137.6,66.9 135.6,68.4 134.8,68.4 134.2,69.6 133.1,69.7 135.4,71.4 137.5,71.9 138.1,74.1 138.1,74.9 139.2,75 140.6,76.5
140.6,77.9 140.6,77.9 139.7,78 138.3,82.2 136.7,80.1 135.4,79.2 130.7,79.7 129.1,79.7 126.9,80.1 126.4,81.6 125.4,81.7
123,81.4 121.5,79.7 119.5,79.7 117.1,78 117.3,75.8 118.4,73.3 117.1,73.8 115.1,75 115,72.3 112.9,69.8 114.1,69.1 115.2,66.6
117.1,67.3 121.9,63.5 121.9,61.9 124.3,59.1 123.7,58.4 123.7,57 123.5,55.3 121.6,53.9 121.2,50.9 122.3,49.9 120.7,45.6
120.7,45.6 123.1,43.5 126.6,43 133.8,44.6 137.7,45.5 141.4,44.5 144.2,41.7 148.4,39.1 148.4,39.1 148,40.8 147.9,43.3
151.8,44.2 152.9,43.6 153.5,45.3 151.9,47.5 154.3,48 154.6,50.1 156.2,52 157.1,52.8 158,55.3 158.3,56.5 159.5,58.8
159.6,60.9 157.7,62.9 156.3,63 154.6,66 154.9,67.7"
                data-district_id="4"
              ></polygon>
              <polygon
                id="sterzing"
                class="weather-map-default"
                points="120.72 45.58 123.11 43.48 126.61 42.98 133.81 44.58 137.72 45.48 141.41 44.48 144.22 41.68 148.41 39.08 148.41 39.08 148.31 37.48 150.72 35.28 152.12 35.18 152.31 34.18 151.51 31.88 149.72 30.98 148.51 29.18 148.91 24.18 148.22 21.58 148.91 20.08 145.12 15.98 140.12 16.18 135.62 12.38 130.72 15.28 126.11 17.18 124.02 14.48 120.11 13.08 118.81 15.98 117.11 16.08 111.81 20.68 109.52 19.18 107.02 16.98 104.61 17.08 99.42 17.18 95.22 19.48 90.72 20.58 88.92 19.68 87.11 20.58 85.92 20.68 86.52 23.68 88.11 24.78 89.72 25.48 90.22 26.58 89.92 26.98 90.42 30.68 89.92 31.98 91.22 34.78 90.81 36.48 91.02 37.68 93.81 38.98 94.81 40.08 101.02 40.38 103.02 40.08 104.42 41.18 106.02 42.18 108.61 46.28 111.42 46.78 113.42 44.18 115.52 43.28 117.61 44.18 118.72 45.88 120.72 45.58"
                data-district_id="5"
              ></polygon>
              <polygon
                id="bruneck"
                class="weather-map-default"
                points="158.88 57.61 158.88 57.61 158.88 57.61 161.5 57.61 162.18 57.44 163.95 55.77 164.84 55.65 166.06 55.53 166.47 55.84 167.39 55.4 168.24 55.84 169.8 55.27 171.37 55.29 172.39 56.44 174.16 58.15 174.02 58.7 175.11 58.56 175.86 59.03 174.84 60.53 175.72 61.01 176.74 61.13 177.69 61.82 178.1 60.87 178.92 60.87 179.04 60.4 180.96 60.4 183.48 60.26 183.48 60.27 185.25 59.52 185.72 57.49 188.17 56.52 190.43 57.26 191.91 56.66 191.38 53.14 196.07 52.9 200.91 52.44 201.03 50.67 204.47 49.28 206.13 47.47 207.15 47.82 207.16 47.81 208.79 46.59 207.97 44.15 210.42 40.12 207.14 35.57 207.02 33.12 203.26 31.48 200.44 34.48 197.9 29.71 194.91 29.71 192.32 28.09 194.63 24.95 194.23 22.64 191.38 20.46 191.38 17.34 190.43 13.39 192.46 10.94 194.36 11.62 199.26 9.58 200.44 5.5 203.07 3.73 200.9 1.55 196.07 0.19 189.87 2.78 186.61 2.51 184.29 4.83 181.44 4.95 179.53 7.3 171.37 7.95 164.97 12.29 158.31 16.24 152.59 16.24 148.92 20.05 148.17 21.55 148.93 24.21 148.51 29.17 149.69 31.01 151.5 31.9 152.32 34.21 152.12 35.16 150.69 35.28 148.31 37.47 148.44 39.11 148.03 40.81 147.9 43.31 151.84 44.15 152.93 43.6 153.46 45.3 151.91 47.47 154.29 48 154.64 50.06 156.2 52.03 157.15 52.78 158 55.3 158.31 56.52 158.88 57.61"
                data-district_id="6"
              ></polygon>
              <path
                id="dolomiten"
                class="weather-map-default"
                d="M156.81,89.38l1.63,3.45,9.12-3.49,3.81-.12L175,87.47l2,1.58,4.82-7.67-.14-4,2.45-5.22.82-5.72,4.21,3.28L193.14,73l5.17,1.5.13,4.49,2-2,3.05-1.43L205.38,74l4,1.34,2.72-2h2.31l2.45,1.56,2.45-.87-.41-2.81,2.59.14,2.86-4.07,4.33-2.14-.12-1L225,63.32l-6-4-2.86-9.11-4.9-1.51-3.26.53-.82-1.47-1-.34-1.66,1.81L201,50.67l-.12,1.77-4.84.45-4.69.24.53,3.52-1.48.6-2.26-.73-2.45,1-.47,2-1.77.75L181,60.4H179l-.12.47h-.82l-.41,1-.95-.69-1-.12-.88-.48,1-1.5-.75-.47-1.09.13.14-.54-1.77-1.71-1-1.15-1.57,0-1.56.57-.85-.44-.92.44-.41-.31-1.22.12-.89.12-1.77,1.66-.68.18h-2.62l.65,1.22.12,2-2,2-1.36.12-1.69,3,.24,1.76-3.1.07-2.17.61-1.71-1-2.93.45-2.79,1.59-2-1.3-2.65-1.29-1.93,1.5-.86.06-.62,1.16-1.08.13,2.38,1.71,2,.47.65,2.18v.82l1.05.12,1.43,1.44v1.49h0l-1,.08-1.35,4.15-1.65-2.06-1.29-.87-4.69.44h-1.64l-2.17.43-.48,1.51-1,.07L124,85.23l-1.29,3.64-1.3.51.14,1.29-4.44,4.15h0l-1.21.82-1.5.81-1.49-.88-2.25-.39.51,1.27,2.42,4.54-.82,1h-1l-.58-.61-1.46,1.36-.61,1.28-1.5,3.36v1.49l-2.37,1.22,2.37,1.17,2.32,1.82,2-1,3.81,2.11,2.72.41,1.43,1.83,5.3,1.23,2.72,1.07,1.36-5,4-.68,2.18-9h0l.67-4.9,2.87-2-2.32-2.66,4.9-.12,4.49-1.64h0l2.18.69,6.4-1.91,2.17-2.25m-18.49-7.2h0"
                data-district_id="7"
              ></path>
            </g>

            <!-- TEXT -->
            <g id="txt_DT_dolo_regionen_" data-name="txt_DT (+dolo_regionen)">
              <path
                class="weather-map-town"
                d="M165,49.48a1.28,1.28,0,0,1-.74.24.34.34,0,0,1-.25-.07,1.38,1.38,0,0,1-.25-.77c0-.14,0-.18.08-.24a1.28,1.28,0,0,1,.74-.24.34.34,0,0,1,.25.07,1.38,1.38,0,0,1,.25.77C165.05,49.38,165,49.42,165,49.48Z"
              ></path>
              <path
                class="weather-map-town"
                d="M116,31.79a1.24,1.24,0,0,1-.73.24A.34.34,0,0,1,115,32a1.32,1.32,0,0,1-.25-.76c0-.14,0-.18.08-.24a1.28,1.28,0,0,1,.74-.24.37.37,0,0,1,.25.07,1.42,1.42,0,0,1,.24.76C116.06,31.7,116.05,31.74,116,31.79Z"
              ></path>
              <path
                class="weather-map-town"
                d="M86.05,71.25a1.28,1.28,0,0,1-.74.24.34.34,0,0,1-.25-.07,1.38,1.38,0,0,1-.25-.77c0-.14,0-.18.08-.24a1.28,1.28,0,0,1,.74-.24.34.34,0,0,1,.25.07,1.38,1.38,0,0,1,.25.77C86.13,71.15,86.11,71.19,86.05,71.25Z"
              ></path>
              <path
                class="weather-map-town"
                d="M43.05,74.5a1.28,1.28,0,0,1-.74.24.34.34,0,0,1-.25-.07,1.38,1.38,0,0,1-.25-.77c0-.14,0-.18.08-.24a1.28,1.28,0,0,1,.74-.24.34.34,0,0,1,.25.07,1.38,1.38,0,0,1,.25.77C43.13,74.4,43.11,74.44,43.05,74.5Z"
              ></path>
              <path
                class="weather-map-town"
                d="M141.16,61.66a1.28,1.28,0,0,1-.74.24.34.34,0,0,1-.25-.07,1.38,1.38,0,0,1-.25-.77c0-.14,0-.18.08-.24a1.28,1.28,0,0,1,.74-.24.34.34,0,0,1,.25.07,1.38,1.38,0,0,1,.25.77C141.24,61.56,141.22,61.6,141.16,61.66Z"
              ></path>
              <path
                class="weather-map-town"
                d="M105.79,97.8a1.28,1.28,0,0,1-.74.24.34.34,0,0,1-.25-.07,1.38,1.38,0,0,1-.25-.77c0-.14,0-.18.08-.24a1.28,1.28,0,0,1,.74-.24.34.34,0,0,1,.25.07,1.38,1.38,0,0,1,.25.77C105.87,97.7,105.85,97.74,105.79,97.8Z"
              ></path>
              <!-- Dolomiten -->
              <path
                class="weather-map-dolomiten"
                d="M147.51,81a7.53,7.53,0,0,0-1,.52L148.15,85a5.47,5.47,0,0,0,.93-.36,2,2,0,0,0,1.24-2.85C149.76,80.62,148.76,80.41,147.51,81Zm1.33,3.24-.32.12-1.22-2.67a3.34,3.34,0,0,1,.45-.24,1.37,1.37,0,0,1,2,.69C150.18,83.05,149.87,83.76,148.84,84.23Z"
              ></path>
              <path
                class="weather-map-dolomiten"
                d="M151.79,80.19a1.36,1.36,0,0,0-.65,1.94,1.32,1.32,0,0,0,1.79.85,1.4,1.4,0,0,0,.64-2A1.3,1.3,0,0,0,151.79,80.19Zm1,2.32c-.4.18-.81,0-1.09-.64s-.16-1,.24-1.22.8,0,1.08.62S153.18,82.32,152.78,82.51Z"
              ></path>
              <path
                class="weather-map-dolomiten"
                d="M153.19,78.35,154.86,82l.55-.25L153.69,78A2.57,2.57,0,0,0,153.19,78.35Z"
              >
                <path
                  class="weather-map-dolomiten"
                  d="M151.79,80.19a1.36,1.36,0,0,0-.65,1.94,1.32,1.32,0,0,0,1.79.85,1.4,1.4,0,0,0,.64-2A1.3,1.3,0,0,0,151.79,80.19Zm1,2.32c-.4.18-.81,0-1.09-.64s-.16-1,.24-1.22.8,0,1.08.62S153.18,82.32,152.78,82.51Z"
                ></path>
              </path>
              <path
                class="weather-map-dolomiten"
                d="M151.79,80.19a1.36,1.36,0,0,0-.65,1.94,1.32,1.32,0,0,0,1.79.85,1.4,1.4,0,0,0,.64-2A1.3,1.3,0,0,0,151.79,80.19Zm1,2.32c-.4.18-.81,0-1.09-.64s-.16-1,.24-1.22.8,0,1.08.62S153.18,82.32,152.78,82.51Z"
              ></path>
              <path
                class="weather-map-dolomiten"
                d="M156.15,78.19a1.38,1.38,0,0,0-.65,1.94,1.33,1.33,0,0,0,1.8.85,1.38,1.38,0,0,0,.63-2A1.3,1.3,0,0,0,156.15,78.19Zm1,2.32c-.4.19-.81,0-1.09-.63s-.17-1,.24-1.23.8,0,1.08.62S157.55,80.33,157.15,80.51Z"
              ></path>
              <path
                class="weather-map-dolomiten"
                d="M160.88,76a.93.93,0,0,0-.63.86h0a.7.7,0,0,0-.89-.17.9.9,0,0,0-.59.93h0l-.24-.52a1.33,1.33,0,0,0-.45.32L159.22,80l.55-.25-.66-1.44a.76.76,0,0,1,.27-1.06c.29-.13.48.08.6.35l.78,1.7.54-.25-.66-1.44a.76.76,0,0,1,.28-1.06c.29-.13.47.08.59.35l.78,1.7.55-.25L162,76.6C161.8,76.08,161.41,75.79,160.88,76Z"
              ></path>
              <path
                class="weather-map-dolomiten"
                d="M162.28,74.8a.22.22,0,0,0,.15,0,.7.7,0,0,0,.33-.3s0-.07,0-.15a.87.87,0,0,0-.33-.37.19.19,0,0,0-.16,0,.67.67,0,0,0-.32.3.16.16,0,0,0,0,.15A.92.92,0,0,0,162.28,74.8Z"
              ></path>
              <path
                class="weather-map-dolomiten"
                d="M162.5,75.43,163.66,78l.55-.25L163,75.08A1.83,1.83,0,0,0,162.5,75.43Z"
              ></path>
              <path
                class="weather-map-dolomiten"
                d="M166.27,76.16a.72.72,0,0,1-.35.31c-.2.09-.39.1-.59-.33l-.58-1.27a4.44,4.44,0,0,0,.71-.39,1.48,1.48,0,0,0-.15-.44,6.42,6.42,0,0,1-.76.41l-.26-.57a2.18,2.18,0,0,0-.5.34l.22.48-.36.16a.69.69,0,0,0,.07.3.5.5,0,0,0,.09.14l.39-.18.59,1.28c.38.84.9.73,1.2.59a1.11,1.11,0,0,0,.55-.47A.85.85,0,0,0,166.27,76.16Z"
              ></path>
              <path
                class="weather-map-dolomiten"
                d="M165.77,73.2s.08,0,.15,0a.67.67,0,0,0,.32-.3.16.16,0,0,0,0-.15.92.92,0,0,0-.34-.38.22.22,0,0,0-.15,0,.7.7,0,0,0-.33.3.21.21,0,0,0,0,.15A.83.83,0,0,0,165.77,73.2Z"
              ></path>
              <path class="weather-map-dolomiten" d="M166.48,73.49a2.18,2.18,0,0,0-.5.34l1.17,2.55.54-.25Z"></path>
            </g>
          </g>
        </svg>
      `
    : html`
        <svg
          class="embed-responsive-item svg-map"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 228.83 139.63"
          xml:space="preserve"
        >
          <style type="text/css">
            .weather-map-default {
              fill: #dce0e4;
              stroke: #fff;
              stroke-width: 0.36;
              stroke-miterlimit: 10;
              transition: fill 0.3s ease;
            }
            .weather-map-active {
              fill: #a9bf00;
              stroke: #fff;
              stroke-width: 0.36;
              stroke-miterlimit: 10;
              transition: fill 0.3s ease;
            }
            .weather-map-town {
              fill: #50742f;
            }
            .weather-map-dolomiten {
              fill: #758592;
            }
          </style>
          <!-- MAP -->
          <g id="main_map" data-region="Ebene 2">
            <g id="inactive">
              <polyline
                id="bozen"
                class="weather-map-default"
                points="119.94 116.52 117.76 119.66 111.35 122.23 111.19 124.55 107.56 126.32 109.46 128.08 111.35 131.15 109.73 132.57 106.02 131.89 106.02 129.86 104.56 128.63 104.56 126.45 101.98 129.04 100.75 132.71 98.3 132.17 94.78 137.61 89.59 139.42 86.47 136.25 89.59 133.25 85.25 132.17 82.37 128.22 85.86 127.54 89.59 120.64 88.1 115.97 90 114.62 90.28 105.91 91.77 101.55 90.55 95.7 88.37 92.83 90.55 90.93 92.96 89.51 92.96 87.95 90.28 84.41 92.11 82.98 90.82 80.67 92.96 79.68 95.65 76.99 97.96 76.45 99.26 74.74 100.21 71.62 99.94 69.99 98.37 66.79 99.8 64.14 98.17 62.44 98.1 60.87 98.85 59.3 97.96 57.74 99.19 54.75 101.16 53.93 100.82 52.64 102.86 48.37 105.58 48.01 107.83 47.13 108.64 46.31 111.36 46.79 113.41 44.15 115.51 43.31 117.62 44.15 118.71 45.9 120.69 45.57 122.32 49.85 121.23 50.94 121.64 53.93 123.54 55.29 123.66 56.95 123.68 58.43 124.3 59.1 121.91 61.89 121.91 63.52 117.13 67.28 115.17 66.56 114.08 69.1 112.86 69.8 115.04 72.3 115.11 74.99 117.13 73.8 118.44 73.32 117.3 75.84 117.13 77.95 119.46 79.68 121.5 79.68 123 81.38 125.38 81.69 124.02 85.23 122.72 88.87 121.43 89.37 121.57 90.67 117.13 94.82 115.92 95.64 114.42 96.44 112.93 95.57 110.69 95.17 111.19 96.44 113.61 100.99 112.79 102.03 111.77 102.03 111.19 101.42 109.73 102.78 109.12 104.06 107.62 107.42 107.62 108.9 105.24 110.13 107.62 111.29 109.94 113.12 111.98 112.17 115.79 114.27 118.51 114.68 119.94 116.52"
                data-district_id="1"
              ></polyline>
              <polygon
                id="meran"
                class="weather-map-default"
                points="85.25 95.84 81.7 97.26 79.44 95.17 76.94 94.34 76.67 89.44 74.21 91.76 71.77 92.03 75.05 99.24 76.26 102.92 75.05 104 72.18 103.05 68.37 98.1 65.64 96.44 63.06 98.83 60.75 99.51 59.66 101.83 58.03 104.14 55.24 102.45 51.77 104.28 45.37 103.73 41.56 96.44 43.33 95.17 43.47 94.05 44.7 93.93 47.28 89.72 49.12 89.05 50.27 87.59 52.31 87.47 54.22 85.91 54.9 84.96 57.48 83.58 59.8 82.91 63.47 82.27 65.1 80.87 64.56 77.73 63.74 73.45 64.08 71.62 65.24 71.21 65.1 70.32 63.2 69.44 61.16 67.28 59.05 67.54 57.69 68.15 56.26 67.28 54.63 67.95 53.47 68.9 50.14 68.63 48.98 68.29 48.98 65.63 46.73 65.14 46.06 62.91 46.53 62.16 44.76 61.54 42.99 59.04 40.61 59.44 38.71 58.03 39.12 55.29 38.58 51.76 38.98 50.67 38.46 49.85 38.44 48.37 41.29 48.75 44.29 47.13 48.64 50.67 50 49.28 55.62 52.44 59.8 50.53 67.55 51.62 69.46 51.08 70.14 52.16 72.18 45.91 76.53 43.31 75.75 37.74 78.71 32.43 78.61 28.63 79.8 28.08 79.92 25.9 83.21 26.18 86.46 23.73 88.1 24.81 89.73 25.5 90.21 26.58 89.94 26.99 90.41 30.66 89.94 32.03 91.16 34.75 90.75 36.45 90.95 37.67 93.81 39.03 94.77 40.12 101.02 40.36 103 40.12 104.36 41.21 106.02 42.16 108.64 46.31 107.83 47.13 105.58 48.01 102.86 48.37 100.82 52.64 101.16 53.93 99.19 54.75 97.96 57.74 98.85 59.31 98.1 60.87 98.17 62.44 99.8 64.14 98.37 66.79 99.94 69.99 100.21 71.62 99.25 74.74 97.96 76.45 95.65 77 92.96 79.68 90.82 80.67 92.11 82.98 90.28 84.41 92.96 87.95 92.96 89.51 90.55 90.92 88.37 92.83 85.25 95.84"
                data-district_id="2"
              ></polygon>
              <polygon
                id="schlanders"
                class="weather-map-default"
                points="38.46 49.85 38.98 50.67 38.58 51.75 39.11 55.29 38.71 58.03 40.61 59.44 42.99 59.03 44.76 61.54 46.53 62.16 46.05 62.91 46.73 65.14 48.98 65.63 48.98 68.29 50.14 68.63 53.47 68.9 54.63 67.94 56.26 67.28 57.69 68.15 59.05 67.54 61.16 67.28 63.2 69.44 65.1 70.31 65.24 71.21 64.08 71.62 63.74 73.45 64.56 77.73 65.1 80.87 63.47 82.27 59.8 82.91 57.48 83.58 54.9 84.95 54.22 85.91 52.31 87.47 50.27 87.59 49.12 89.05 47.28 89.72 44.69 93.93 43.47 94.05 43.33 95.17 41.56 96.44 38.71 97.25 36.18 100.33 32.18 102.45 27.68 102.45 23.33 99.24 20.48 97.9 18.3 95.17 9.73 94.34 8.23 91.62 8.09 87.47 10 87.47 11.09 81.38 12.31 75.36 7.55 71.21 2.51 72.3 0.2 64.68 2.81 61.54 3.93 59.37 2.06 56.79 6.87 53.25 6.19 49.85 4.55 47.53 7 46.04 8.77 41.14 10.54 36.92 11.72 36.92 16.12 39.1 19.24 38.83 19.24 40.1 24.69 36.92 29.59 36.11 31.63 34.47 34.9 36.92 35.58 38.96 42.24 42.37 39.52 45.9 37.89 47.13 38.44 48.37 38.46 49.85"
                data-district_id="3"
              ></polygon>
              <polygon
                id="brixen"
                class="weather-map-default"
                points="154.9,67.7 151.8,67.8 149.6,68.4 147.9,67.4 145,67.9 142.2,69.4 140.2,68.2
137.6,66.9 135.6,68.4 134.8,68.4 134.2,69.6 133.1,69.7 135.4,71.4 137.5,71.9 138.1,74.1 138.1,74.9 139.2,75 140.6,76.5
140.6,77.9 140.6,77.9 139.7,78 138.3,82.2 136.7,80.1 135.4,79.2 130.7,79.7 129.1,79.7 126.9,80.1 126.4,81.6 125.4,81.7
123,81.4 121.5,79.7 119.5,79.7 117.1,78 117.3,75.8 118.4,73.3 117.1,73.8 115.1,75 115,72.3 112.9,69.8 114.1,69.1 115.2,66.6
117.1,67.3 121.9,63.5 121.9,61.9 124.3,59.1 123.7,58.4 123.7,57 123.5,55.3 121.6,53.9 121.2,50.9 122.3,49.9 120.7,45.6
120.7,45.6 123.1,43.5 126.6,43 133.8,44.6 137.7,45.5 141.4,44.5 144.2,41.7 148.4,39.1 148.4,39.1 148,40.8 147.9,43.3
151.8,44.2 152.9,43.6 153.5,45.3 151.9,47.5 154.3,48 154.6,50.1 156.2,52 157.1,52.8 158,55.3 158.3,56.5 159.5,58.8
159.6,60.9 157.7,62.9 156.3,63 154.6,66 154.9,67.7"
                data-district_id="4"
              ></polygon>
              <polygon
                id="sterzing"
                class="weather-map-default"
                points="120.72 45.58 123.11 43.48 126.61 42.98 133.81 44.58 137.72 45.48 141.41 44.48 144.22 41.68 148.41 39.08 148.41 39.08 148.31 37.48 150.72 35.28 152.12 35.18 152.31 34.18 151.51 31.88 149.72 30.98 148.51 29.18 148.91 24.18 148.22 21.58 148.91 20.08 145.12 15.98 140.12 16.18 135.62 12.38 130.72 15.28 126.11 17.18 124.02 14.48 120.11 13.08 118.81 15.98 117.11 16.08 111.81 20.68 109.52 19.18 107.02 16.98 104.61 17.08 99.42 17.18 95.22 19.48 90.72 20.58 88.92 19.68 87.11 20.58 85.92 20.68 86.52 23.68 88.11 24.78 89.72 25.48 90.22 26.58 89.92 26.98 90.42 30.68 89.92 31.98 91.22 34.78 90.81 36.48 91.02 37.68 93.81 38.98 94.81 40.08 101.02 40.38 103.02 40.08 104.42 41.18 106.02 42.18 108.61 46.28 111.42 46.78 113.42 44.18 115.52 43.28 117.61 44.18 118.72 45.88 120.72 45.58"
                data-district_id="5"
              ></polygon>
              <polygon
                id="bruneck"
                class="weather-map-default"
                points="158.88 57.61 158.88 57.61 158.88 57.61 161.5 57.61 162.18 57.44 163.95 55.77 164.84 55.65 166.06 55.53 166.47 55.84 167.39 55.4 168.24 55.84 169.8 55.27 171.37 55.29 172.39 56.44 174.16 58.15 174.02 58.7 175.11 58.56 175.86 59.03 174.84 60.53 175.72 61.01 176.74 61.13 177.69 61.82 178.1 60.87 178.92 60.87 179.04 60.4 180.96 60.4 183.48 60.26 183.48 60.27 185.25 59.52 185.72 57.49 188.17 56.52 190.43 57.26 191.91 56.66 191.38 53.14 196.07 52.9 200.91 52.44 201.03 50.67 204.47 49.28 206.13 47.47 207.15 47.82 207.16 47.81 208.79 46.59 207.97 44.15 210.42 40.12 207.14 35.57 207.02 33.12 203.26 31.48 200.44 34.48 197.9 29.71 194.91 29.71 192.32 28.09 194.63 24.95 194.23 22.64 191.38 20.46 191.38 17.34 190.43 13.39 192.46 10.94 194.36 11.62 199.26 9.58 200.44 5.5 203.07 3.73 200.9 1.55 196.07 0.19 189.87 2.78 186.61 2.51 184.29 4.83 181.44 4.95 179.53 7.3 171.37 7.95 164.97 12.29 158.31 16.24 152.59 16.24 148.92 20.05 148.17 21.55 148.93 24.21 148.51 29.17 149.69 31.01 151.5 31.9 152.32 34.21 152.12 35.16 150.69 35.28 148.31 37.47 148.44 39.11 148.03 40.81 147.9 43.31 151.84 44.15 152.93 43.6 153.46 45.3 151.91 47.47 154.29 48 154.64 50.06 156.2 52.03 157.15 52.78 158 55.3 158.31 56.52 158.88 57.61"
                data-district_id="6"
              ></polygon>
              <path
                id="dolomiten"
                class="weather-map-default"
                d="M156.81,89.38l1.63,3.45,9.12-3.49,3.81-.12L175,87.47l2,1.58,4.82-7.67-.14-4,2.45-5.22.82-5.72,4.21,3.28L193.14,73l5.17,1.5.13,4.49,2-2,3.05-1.43L205.38,74l4,1.34,2.72-2h2.31l2.45,1.56,2.45-.87-.41-2.81,2.59.14,2.86-4.07,4.33-2.14-.12-1L225,63.32l-6-4-2.86-9.11-4.9-1.51-3.26.53-.82-1.47-1-.34-1.66,1.81L201,50.67l-.12,1.77-4.84.45-4.69.24.53,3.52-1.48.6-2.26-.73-2.45,1-.47,2-1.77.75L181,60.4H179l-.12.47h-.82l-.41,1-.95-.69-1-.12-.88-.48,1-1.5-.75-.47-1.09.13.14-.54-1.77-1.71-1-1.15-1.57,0-1.56.57-.85-.44-.92.44-.41-.31-1.22.12-.89.12-1.77,1.66-.68.18h-2.62l.65,1.22.12,2-2,2-1.36.12-1.69,3,.24,1.76-3.1.07-2.17.61-1.71-1-2.93.45-2.79,1.59-2-1.3-2.65-1.29-1.93,1.5-.86.06-.62,1.16-1.08.13,2.38,1.71,2,.47.65,2.18v.82l1.05.12,1.43,1.44v1.49h0l-1,.08-1.35,4.15-1.65-2.06-1.29-.87-4.69.44h-1.64l-2.17.43-.48,1.51-1,.07L124,85.23l-1.29,3.64-1.3.51.14,1.29-4.44,4.15h0l-1.21.82-1.5.81-1.49-.88-2.25-.39.51,1.27,2.42,4.54-.82,1h-1l-.58-.61-1.46,1.36-.61,1.28-1.5,3.36v1.49l-2.37,1.22,2.37,1.17,2.32,1.82,2-1,3.81,2.11,2.72.41,1.43,1.83,5.3,1.23,2.72,1.07,1.36-5,4-.68,2.18-9h0l.67-4.9,2.87-2-2.32-2.66,4.9-.12,4.49-1.64h0l2.18.69,6.4-1.91,2.17-2.25m-18.49-7.2h0"
                data-district_id="7"
              ></path>
            </g>

            <!-- TEXT -->
            <g id="txt_DT_dolo_regionen_" data-name="txt_DT (+dolo_regionen)">
              <path
                class="weather-map-town"
                d="M165,49.48a1.28,1.28,0,0,1-.74.24.34.34,0,0,1-.25-.07,1.38,1.38,0,0,1-.25-.77c0-.14,0-.18.08-.24a1.28,1.28,0,0,1,.74-.24.34.34,0,0,1,.25.07,1.38,1.38,0,0,1,.25.77C165.05,49.38,165,49.42,165,49.48Z"
              ></path>
              <path
                class="weather-map-town"
                d="M116,31.79a1.24,1.24,0,0,1-.73.24A.34.34,0,0,1,115,32a1.32,1.32,0,0,1-.25-.76c0-.14,0-.18.08-.24a1.28,1.28,0,0,1,.74-.24.37.37,0,0,1,.25.07,1.42,1.42,0,0,1,.24.76C116.06,31.7,116.05,31.74,116,31.79Z"
              ></path>
              <path
                class="weather-map-town"
                d="M86.05,71.25a1.28,1.28,0,0,1-.74.24.34.34,0,0,1-.25-.07,1.38,1.38,0,0,1-.25-.77c0-.14,0-.18.08-.24a1.28,1.28,0,0,1,.74-.24.34.34,0,0,1,.25.07,1.38,1.38,0,0,1,.25.77C86.13,71.15,86.11,71.19,86.05,71.25Z"
              ></path>
              <path
                class="weather-map-town"
                d="M43.05,74.5a1.28,1.28,0,0,1-.74.24.34.34,0,0,1-.25-.07,1.38,1.38,0,0,1-.25-.77c0-.14,0-.18.08-.24a1.28,1.28,0,0,1,.74-.24.34.34,0,0,1,.25.07,1.38,1.38,0,0,1,.25.77C43.13,74.4,43.11,74.44,43.05,74.5Z"
              ></path>
              <path
                class="weather-map-town"
                d="M141.16,61.66a1.28,1.28,0,0,1-.74.24.34.34,0,0,1-.25-.07,1.38,1.38,0,0,1-.25-.77c0-.14,0-.18.08-.24a1.28,1.28,0,0,1,.74-.24.34.34,0,0,1,.25.07,1.38,1.38,0,0,1,.25.77C141.24,61.56,141.22,61.6,141.16,61.66Z"
              ></path>
              <path
                class="weather-map-town"
                d="M105.79,97.8a1.28,1.28,0,0,1-.74.24.34.34,0,0,1-.25-.07,1.38,1.38,0,0,1-.25-.77c0-.14,0-.18.08-.24a1.28,1.28,0,0,1,.74-.24.34.34,0,0,1,.25.07,1.38,1.38,0,0,1,.25.77C105.87,97.7,105.85,97.74,105.79,97.8Z"
              ></path>
              <!-- Dolomiten -->
              <path
                class="weather-map-dolomiten"
                d="M148.42,80.3c1.24-.57,2.25-.36,2.81.85A2.05,2.05,0,0,1,150,84a5.1,5.1,0,0,1-.94.36l-1.61-3.53A7.26,7.26,0,0,1,148.42,80.3Zm1.32,3.25q1.55-.72.93-2.1a1.37,1.37,0,0,0-2-.69,2.65,2.65,0,0,0-.46.24l1.22,2.67Z"
              ></path>
              <path
                class="weather-map-dolomiten"
                d="M154.48,80.33a1.4,1.4,0,0,1-.64,2,1.34,1.34,0,0,1-1.8-.85,1.37,1.37,0,0,1,.65-1.94A1.31,1.31,0,0,1,154.48,80.33ZM152.84,80c-.41.18-.52.61-.24,1.22s.69.82,1.09.64.51-.62.23-1.24S153.24,79.78,152.84,80Z"
              ></path>
              <path class="weather-map-dolomiten" d="M156.31,81.07l-.54.25-1.67-3.65a1.83,1.83,0,0,1,.5-.35Z"></path>
              <path
                class="weather-map-dolomiten"
                d="M158.84,78.34a1.38,1.38,0,0,1-.64,2,1.32,1.32,0,0,1-1.79-.85,1.37,1.37,0,0,1,.65-1.94A1.3,1.3,0,0,1,158.84,78.34ZM157.2,78c-.4.19-.51.61-.23,1.22s.68.83,1.09.64.51-.62.23-1.24S157.61,77.79,157.2,78Z"
              ></path>
              <path
                class="weather-map-dolomiten"
                d="M161.15,76.21h0a.93.93,0,0,1,.63-.86c.53-.24.91.05,1.15.57l.8,1.75-.54.25-.78-1.7c-.12-.27-.31-.48-.6-.35a.76.76,0,0,0-.27,1.06l.66,1.44-.55.25-.77-1.7c-.13-.27-.31-.48-.6-.35a.76.76,0,0,0-.27,1.06l.66,1.44-.55.25L159,76.78a1.58,1.58,0,0,1,.44-.33l.25.53h0a.88.88,0,0,1,.59-.92A.72.72,0,0,1,161.15,76.21Z"
              ></path>
              <path
                class="weather-map-dolomiten"
                d="M163.66,73.79a.63.63,0,0,1-.32.3.23.23,0,0,1-.15,0,.92.92,0,0,1-.34-.38c0-.08,0-.1,0-.15a.63.63,0,0,1,.32-.3.17.17,0,0,1,.15,0,.83.83,0,0,1,.34.37C163.68,73.72,163.68,73.74,163.66,73.79ZM165.11,77l-.54.25-1.17-2.54a2.2,2.2,0,0,1,.5-.35Z"
              ></path>
              <path
                class="weather-map-dolomiten"
                d="M164.63,74.48a.69.69,0,0,1-.07-.3l.36-.16-.22-.48a2.07,2.07,0,0,1,.5-.35l.26.58a7.43,7.43,0,0,0,.76-.41,2.5,2.5,0,0,1,.15.44,4.44,4.44,0,0,1-.71.39l.58,1.27c.19.43.39.42.59.33a.72.72,0,0,0,.35-.32,1,1,0,0,1,.26.36,1.08,1.08,0,0,1-.54.48c-.31.14-.82.25-1.2-.59l-.59-1.28-.39.18A.5.5,0,0,1,164.63,74.48Z"
              ></path>

              <path
                class="weather-map-dolomiten"
                d="M168,74.53a.65.65,0,0,0,.89.31,1.31,1.31,0,0,0,.62-.53,1,1,0,0,1,.28.38,1.42,1.42,0,0,1-.73.61,1.24,1.24,0,0,1-1.76-.78,1.4,1.4,0,0,1,.59-2,.82.82,0,0,1,1.19.35C169.34,73.42,169.14,73.86,168,74.53Zm-.19-.38c.7-.45.85-.72.73-1a.33.33,0,0,0-.48-.15C167.72,73.18,167.63,73.61,167.84,74.15Z"
              ></path>
              <path
                class="weather-map-dolomiten"
                d="M172,71.78l.8,1.76-.54.25-.78-1.71c-.12-.26-.31-.47-.62-.33a.77.77,0,0,0-.3,1.07l.66,1.44-.55.25L169.49,72a1.58,1.58,0,0,1,.44-.33l.24.53h0a.93.93,0,0,1,.61-.94C171.35,71,171.75,71.26,172,71.78Z"
              ></path>
            </g>
          </g>
        </svg>
      `;
};

const dolomiten = `
 
`;