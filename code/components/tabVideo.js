// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

const { html } = require("lit-element");

export function render__tabVideo() {
  return html` <div class="tab__video">
    ${this.language === "it"
      ? html`
          <!-- IT --><iframe
            src="https://player.vimeo.com/video/291500549?color=FFFFFF&byline=0"
            style="position:absolute;inset:0;width:100%;height:100%;border:0;"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>
        `
      : html`
          <!-- DE --><iframe
            src="https://player.vimeo.com/video/291499111?color=FFFFFF&byline=0"
            style="position:absolute;inset:0;width:100%;height:100%;border:0;"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>
        `}
  </div>`;
}
// position:absolute;top:0;left:0;
// position:absolute;top:0;left:0;