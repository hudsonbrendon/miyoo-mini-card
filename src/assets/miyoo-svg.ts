import { svg, type TemplateResult } from "lit";

export function miyooSvg(opts: {
  screenLine1: string;
  screenLine2: string;
  charging: boolean;
}): TemplateResult {
  return svg`
    <svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="mmcBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2f343a"/>
          <stop offset="100%" stop-color="#15181c"/>
        </linearGradient>
        <linearGradient id="mmcScreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0d1117"/>
          <stop offset="100%" stop-color="#1f2937"/>
        </linearGradient>
        <radialGradient id="mmcDpad" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="#3b4148"/>
          <stop offset="100%" stop-color="#0e1013"/>
        </radialGradient>
        <radialGradient id="mmcBtnA" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="#ef4444"/>
          <stop offset="100%" stop-color="#7f1d1d"/>
        </radialGradient>
        <radialGradient id="mmcBtnB" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="#fbbf24"/>
          <stop offset="100%" stop-color="#92400e"/>
        </radialGradient>
        <radialGradient id="mmcBtnX" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#075985"/>
        </radialGradient>
        <radialGradient id="mmcBtnY" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="#22c55e"/>
          <stop offset="100%" stop-color="#14532d"/>
        </radialGradient>
      </defs>
      <ellipse cx="180" cy="214" rx="160" ry="4" fill="#000" opacity="0.18"/>

      <!-- Body -->
      <rect x="14" y="18" width="332" height="184" rx="28" ry="28" fill="url(#mmcBody)" stroke="#000" stroke-width="0.5"/>

      <!-- Shoulder buttons -->
      <rect x="30" y="12" width="40" height="10" rx="4" fill="#1c2026"/>
      <rect x="290" y="12" width="40" height="10" rx="4" fill="#1c2026"/>

      <!-- Screen -->
      <rect x="98" y="34" width="164" height="124" rx="6" fill="url(#mmcScreen)" stroke="#000" stroke-width="0.5"/>
      <text x="180" y="92" class="mmc-screen-text">${opts.screenLine1}</text>
      <text x="180" y="118" class="mmc-screen-sub">${opts.screenLine2}</text>

      <!-- D-pad (left) -->
      <g transform="translate(56,114)">
        <rect x="-6" y="-22" width="12" height="44" rx="3" fill="url(#mmcDpad)"/>
        <rect x="-22" y="-6" width="44" height="12" rx="3" fill="url(#mmcDpad)"/>
      </g>

      <!-- ABXY (right, diamond) -->
      <g transform="translate(304,114)">
        <circle cx="0" cy="-18" r="9" fill="url(#mmcBtnX)"/>
        <circle cx="18" cy="0" r="9" fill="url(#mmcBtnA)"/>
        <circle cx="0" cy="18" r="9" fill="url(#mmcBtnB)"/>
        <circle cx="-18" cy="0" r="9" fill="url(#mmcBtnY)"/>
      </g>

      <!-- Select / Start / Menu under screen -->
      <rect x="124" y="170" width="22" height="6" rx="3" fill="#1c2026"/>
      <rect x="170" y="170" width="22" height="6" rx="3" fill="#1c2026"/>
      <rect x="214" y="170" width="22" height="6" rx="3" fill="#1c2026"/>

      <!-- Speaker grilles -->
      <g fill="#0e1013">
        <circle cx="48" cy="178" r="2"/>
        <circle cx="56" cy="178" r="2"/>
        <circle cx="64" cy="178" r="2"/>
        <circle cx="296" cy="178" r="2"/>
        <circle cx="304" cy="178" r="2"/>
        <circle cx="312" cy="178" r="2"/>
      </g>

      <!-- Charging LED -->
      ${opts.charging
        ? svg`<circle cx="180" cy="28" r="4" fill="#22c55e">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="1.6s" repeatCount="indefinite"/>
              </circle>`
        : svg`<circle cx="180" cy="28" r="3" fill="#3a3f46"/>`}
    </svg>
  `;
}
