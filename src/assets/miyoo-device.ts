import { html, nothing, svg, type TemplateResult } from "lit";

/**
 * Flat line-art illustration of the Miyoo Mini Plus, modelled after the
 * vacuum-card aesthetic (white body, #AAA / #666 strokes, no gradients).
 *
 * The screen rectangle inside the SVG is at viewBox (42,56)→(198,192).
 * The CSS overlay (`.mmc-screen-overlay` in styles.ts) is positioned in
 * percentages that match that rectangle so the game/mode text scales with
 * the SVG.
 */
export function miyooDevice(opts: {
  screenLine1: string;
  screenLine2: string;
  charging: boolean;
}): TemplateResult {
  return html`
    <div class="mmc-photo">
      <svg
        class="mmc-photo-img"
        viewBox="0 0 240 400"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Miyoo Mini Plus"
      >
        ${deviceSvgBody}
      </svg>
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

const deviceSvgBody = svg`
  <!-- Outer shell -->
  <rect x="6" y="6" width="228" height="388" rx="24" ry="24"
        fill="#ffffff" stroke="#aaaaaa" stroke-width="2"/>
  <!-- Inner inset line (subtle bezel) -->
  <rect x="14" y="14" width="212" height="372" rx="18" ry="18"
        fill="none" stroke="#ececec" stroke-width="1"/>

  <!-- Shoulder buttons silhouette (top edge) -->
  <path d="M 32 8 Q 24 16 36 22" fill="none" stroke="#aaaaaa" stroke-width="1.5"/>
  <path d="M 208 8 Q 216 16 204 22" fill="none" stroke="#aaaaaa" stroke-width="1.5"/>

  <!-- Function button (top center, small circle) -->
  <circle cx="120" cy="26" r="3.5" fill="none" stroke="#aaaaaa" stroke-width="1.5"/>

  <!-- Power LED indicator (top right) -->
  <circle cx="206" cy="26" r="2.5" fill="#aaaaaa"/>

  <!-- Screen bezel -->
  <rect x="36" y="50" width="168" height="148" rx="8" ry="8"
        fill="none" stroke="#666666" stroke-width="2"/>
  <!-- Screen surface (left intentionally near-white so the HA overlay text reads) -->
  <rect x="42" y="56" width="156" height="136" rx="4" ry="4"
        fill="#ffffff" stroke="#cccccc" stroke-width="1"/>

  <!-- MIYOO brand text -->
  <text x="120" y="218" text-anchor="middle"
        font-family="-apple-system, system-ui, sans-serif"
        font-size="11" font-weight="700"
        letter-spacing="3" fill="#aaaaaa">MIYOO</text>

  <!-- D-pad (plus path, centered at 60,276) -->
  <path d="M 49 243 H 71 V 265 H 93 V 287 H 71 V 309 H 49 V 287 H 27 V 265 H 49 Z"
        fill="none" stroke="#666666" stroke-width="2"
        stroke-linejoin="round"/>

  <!-- ABXY cluster, centered at 180,275, diamond layout -->
  <circle cx="180" cy="247" r="11" fill="none" stroke="#666666" stroke-width="2"/>
  <text x="180" y="251" text-anchor="middle"
        font-family="-apple-system, system-ui, sans-serif"
        font-size="11" font-weight="700" fill="#666666">X</text>

  <circle cx="208" cy="275" r="11" fill="none" stroke="#666666" stroke-width="2"/>
  <text x="208" y="279" text-anchor="middle"
        font-family="-apple-system, system-ui, sans-serif"
        font-size="11" font-weight="700" fill="#666666">A</text>

  <circle cx="180" cy="303" r="11" fill="none" stroke="#666666" stroke-width="2"/>
  <text x="180" y="307" text-anchor="middle"
        font-family="-apple-system, system-ui, sans-serif"
        font-size="11" font-weight="700" fill="#666666">B</text>

  <circle cx="152" cy="275" r="11" fill="none" stroke="#666666" stroke-width="2"/>
  <text x="152" y="279" text-anchor="middle"
        font-family="-apple-system, system-ui, sans-serif"
        font-size="11" font-weight="700" fill="#666666">Y</text>

  <!-- SELECT pill -->
  <rect x="68" y="333" width="48" height="14" rx="7" ry="7"
        fill="none" stroke="#aaaaaa" stroke-width="1.5"/>
  <text x="92" y="343" text-anchor="middle"
        font-family="-apple-system, system-ui, sans-serif"
        font-size="8" font-weight="700" fill="#aaaaaa" letter-spacing="1.5">SEL</text>

  <!-- START pill -->
  <rect x="124" y="333" width="48" height="14" rx="7" ry="7"
        fill="none" stroke="#aaaaaa" stroke-width="1.5"/>
  <text x="148" y="343" text-anchor="middle"
        font-family="-apple-system, system-ui, sans-serif"
        font-size="8" font-weight="700" fill="#aaaaaa" letter-spacing="1.5">START</text>

  <!-- Speaker grille (left, 2x3 dots) -->
  <g fill="#cccccc">
    <circle cx="36" cy="365" r="2"/><circle cx="46" cy="365" r="2"/><circle cx="56" cy="365" r="2"/>
    <circle cx="36" cy="375" r="2"/><circle cx="46" cy="375" r="2"/><circle cx="56" cy="375" r="2"/>
  </g>
  <!-- Speaker grille (right, 2x3 dots) -->
  <g fill="#cccccc">
    <circle cx="184" cy="365" r="2"/><circle cx="194" cy="365" r="2"/><circle cx="204" cy="365" r="2"/>
    <circle cx="184" cy="375" r="2"/><circle cx="194" cy="375" r="2"/><circle cx="204" cy="375" r="2"/>
  </g>

  <!-- USB-C / TF-card slot hint (bottom edge centerline) -->
  <rect x="106" y="378" width="28" height="4" rx="2" ry="2"
        fill="#eeeeee" stroke="#cccccc" stroke-width="0.8"/>
`;
