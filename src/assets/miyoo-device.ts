import { html, nothing, type TemplateResult } from "lit";
import { MIYOO_IMAGE } from "./miyoo-image";

/**
 * Renders the device as the actual cropped product photo (~218×300 PNG with
 * transparent background, embedded as a data: URL). A positioned overlay
 * paints the current game / mode lines into the screen area, and an animated
 * green LED dot appears on the shoulder strip when `charging` is true.
 *
 * The overlay rectangle is positioned as a percentage of the image so it
 * scales with whatever `max-width` the wrapper enforces.
 */
export function miyooDevice(opts: {
  screenLine1: string;
  screenLine2: string;
  charging: boolean;
}): TemplateResult {
  return html`
    <div class="mmc-photo">
      <img class="mmc-photo-img" src=${MIYOO_IMAGE} alt="Miyoo Mini Plus" />
      <div class="mmc-screen-overlay">
        <div class="mmc-screen-line1">${opts.screenLine1}</div>
        ${opts.screenLine2
          ? html`<div class="mmc-screen-line2">${opts.screenLine2}</div>`
          : nothing}
      </div>
      ${opts.charging
        ? html`<span class="mmc-led-charging" aria-hidden="true"></span>`
        : nothing}
    </div>
  `;
}
