import { svg, type TemplateResult } from "lit";

/**
 * Stylized portrait illustration of the Miyoo Mini Plus.
 *
 * Layout (top → bottom): translucent body, large 4:3 screen near the top,
 * D-pad bottom-left, ABXY diamond bottom-right with the Mini Plus colour
 * scheme (X blue / A red / B yellow / Y green), select+menu+start row.
 *
 * Charging LED on the shoulder strip animates when `charging`.
 */
export function miyooSvg(opts: {
  screenLine1: string;
  screenLine2: string;
  charging: boolean;
}): TemplateResult {
  return svg`
    <svg viewBox="0 0 260 360" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="mmcBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stop-color="#2a2d33"/>
          <stop offset="55%"  stop-color="#16181d"/>
          <stop offset="100%" stop-color="#0a0b0d"/>
        </linearGradient>
        <linearGradient id="mmcShoulder" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stop-color="#1a1c20"/>
          <stop offset="100%" stop-color="#0a0b0d"/>
        </linearGradient>
        <linearGradient id="mmcScreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stop-color="#0c1320"/>
          <stop offset="100%" stop-color="#1b2538"/>
        </linearGradient>
        <radialGradient id="mmcDpad" cx="50%" cy="40%" r="65%">
          <stop offset="0%"   stop-color="#454a52"/>
          <stop offset="100%" stop-color="#0c0e11"/>
        </radialGradient>
        <radialGradient id="mmcA" cx="35%" cy="30%" r="80%">
          <stop offset="0%"   stop-color="#f87171"/>
          <stop offset="60%"  stop-color="#dc2626"/>
          <stop offset="100%" stop-color="#7f1d1d"/>
        </radialGradient>
        <radialGradient id="mmcB" cx="35%" cy="30%" r="80%">
          <stop offset="0%"   stop-color="#fde047"/>
          <stop offset="60%"  stop-color="#eab308"/>
          <stop offset="100%" stop-color="#854d0e"/>
        </radialGradient>
        <radialGradient id="mmcX" cx="35%" cy="30%" r="80%">
          <stop offset="0%"   stop-color="#60a5fa"/>
          <stop offset="60%"  stop-color="#2563eb"/>
          <stop offset="100%" stop-color="#1e3a8a"/>
        </radialGradient>
        <radialGradient id="mmcY" cx="35%" cy="30%" r="80%">
          <stop offset="0%"   stop-color="#4ade80"/>
          <stop offset="60%"  stop-color="#16a34a"/>
          <stop offset="100%" stop-color="#14532d"/>
        </radialGradient>
      </defs>

      <!-- soft ground shadow -->
      <ellipse cx="130" cy="352" rx="105" ry="4" fill="#000" opacity="0.22"/>

      <!-- shoulder strip behind body -->
      <rect x="32" y="6" width="196" height="12" rx="6" fill="url(#mmcShoulder)"/>

      <!-- body -->
      <rect x="12" y="14" width="236" height="332" rx="22" ry="22"
            fill="url(#mmcBody)" stroke="#000" stroke-width="0.6"/>

      <!-- top accent line -->
      <line x1="40" y1="22" x2="220" y2="22" stroke="#3a3f47" stroke-width="0.7"/>

      <!-- screen bezel + screen -->
      <rect x="28" y="30" width="204" height="172" rx="6" fill="#06080b"/>
      <rect x="34" y="36" width="192" height="160" rx="3" fill="url(#mmcScreen)"/>

      <!-- screen text -->
      <text x="130" y="108" class="mmc-screen-text">${opts.screenLine1}</text>
      <text x="130" y="138" class="mmc-screen-sub">${opts.screenLine2}</text>

      <!-- D-pad (bottom-left) -->
      <g transform="translate(58,265)">
        <rect x="-9"  y="-26" width="18" height="52" rx="3" fill="url(#mmcDpad)"/>
        <rect x="-26" y="-9"  width="52" height="18" rx="3" fill="url(#mmcDpad)"/>
        <circle cx="0" cy="0" r="3.5" fill="#06080b"/>
      </g>

      <!-- ABXY diamond (bottom-right). X top, A right, B bottom, Y left. -->
      <g transform="translate(202,265)">
        <circle cx="0"   cy="-22" r="11" fill="url(#mmcX)"/>
        <circle cx="22"  cy="0"   r="11" fill="url(#mmcA)"/>
        <circle cx="0"   cy="22"  r="11" fill="url(#mmcB)"/>
        <circle cx="-22" cy="0"   r="11" fill="url(#mmcY)"/>
        <text x="0"   y="-19" text-anchor="middle" font-family="sans-serif"
              font-size="9" font-weight="700" fill="#ffffff" opacity="0.85">X</text>
        <text x="22"  y="3"   text-anchor="middle" font-family="sans-serif"
              font-size="9" font-weight="700" fill="#ffffff" opacity="0.85">A</text>
        <text x="0"   y="26"  text-anchor="middle" font-family="sans-serif"
              font-size="9" font-weight="700" fill="#1a1a1a" opacity="0.85">B</text>
        <text x="-22" y="3"   text-anchor="middle" font-family="sans-serif"
              font-size="9" font-weight="700" fill="#ffffff" opacity="0.85">Y</text>
      </g>

      <!-- Select / Menu / Start pills -->
      <g fill="#1a1c20">
        <rect x="98"  y="255" width="20" height="6" rx="3"/>
        <rect x="124" y="255" width="20" height="6" rx="3"/>
        <rect x="150" y="255" width="20" height="6" rx="3"/>
      </g>
      <g fill="#5e636b" font-family="sans-serif" font-size="6" text-anchor="middle">
        <text x="108" y="272">SEL</text>
        <text x="134" y="272">MENU</text>
        <text x="160" y="272">STRT</text>
      </g>

      <!-- Speaker grilles bottom corners -->
      <g fill="#06080b">
        <circle cx="36"  cy="320" r="2.4"/>
        <circle cx="44"  cy="320" r="2.4"/>
        <circle cx="52"  cy="320" r="2.4"/>
        <circle cx="60"  cy="320" r="2.4"/>
        <circle cx="200" cy="320" r="2.4"/>
        <circle cx="208" cy="320" r="2.4"/>
        <circle cx="216" cy="320" r="2.4"/>
        <circle cx="224" cy="320" r="2.4"/>
      </g>

      <!-- Charging LED on shoulder strip -->
      ${opts.charging
        ? svg`<circle cx="130" cy="12" r="3.5" fill="#22c55e">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="1.6s" repeatCount="indefinite"/>
              </circle>`
        : svg`<circle cx="130" cy="12" r="3" fill="#3a3f46"/>`}
    </svg>
  `;
}
