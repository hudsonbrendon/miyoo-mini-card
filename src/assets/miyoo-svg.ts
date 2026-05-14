import { svg, type TemplateResult } from "lit";

/**
 * Stylized portrait illustration of the Miyoo Mini Plus.
 *
 * Layout (top → bottom): translucent body, large 4:3 screen near the top,
 * D-pad bottom-left, ABXY diamond bottom-right with the Mini Plus colour
 * scheme (X blue / A red / B yellow / Y green), then SELECT/MENU/START pills
 * row, then speaker grilles. Charging LED on the shoulder strip animates
 * when `charging`.
 *
 * 3D effects come from SVG filters: a body-wide drop shadow, per-button soft
 * shadows, multi-stop radial gradients with bright specular highlights, and
 * an additional glossy half-overlay on each button.
 */
export function miyooSvg(opts: {
  screenLine1: string;
  screenLine2: string;
  charging: boolean;
}): TemplateResult {
  return svg`
    <svg viewBox="0 0 260 380" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <!-- Body — graphite plastic with top rim highlight + bottom faint reflection -->
        <linearGradient id="mmcBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stop-color="#3a3f47"/>
          <stop offset="6%"   stop-color="#22262c"/>
          <stop offset="92%"  stop-color="#0b0d11"/>
          <stop offset="100%" stop-color="#15181d"/>
        </linearGradient>

        <linearGradient id="mmcShoulder" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stop-color="#252830"/>
          <stop offset="100%" stop-color="#06080b"/>
        </linearGradient>

        <!-- Screen: subtle vignette from center -->
        <radialGradient id="mmcScreen" cx="50%" cy="38%" r="75%">
          <stop offset="0%"   stop-color="#13203a"/>
          <stop offset="70%"  stop-color="#0a1322"/>
          <stop offset="100%" stop-color="#020611"/>
        </radialGradient>

        <!-- Subtle glossy reflection across the top half of the screen -->
        <linearGradient id="mmcScreenGlare" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stop-color="#ffffff" stop-opacity="0.08"/>
          <stop offset="60%" stop-color="#ffffff" stop-opacity="0"/>
        </linearGradient>

        <!-- D-pad: dark recess -->
        <radialGradient id="mmcDpad" cx="45%" cy="35%" r="70%">
          <stop offset="0%"   stop-color="#4a5058"/>
          <stop offset="55%"  stop-color="#22262c"/>
          <stop offset="100%" stop-color="#06080b"/>
        </radialGradient>

        <!-- ABXY buttons: multi-stop radial gradients with bright specular -->
        <radialGradient id="mmcA" cx="32%" cy="28%" r="78%">
          <stop offset="0%"   stop-color="#fee2e2"/>
          <stop offset="14%"  stop-color="#fca5a5"/>
          <stop offset="45%"  stop-color="#dc2626"/>
          <stop offset="80%"  stop-color="#991b1b"/>
          <stop offset="100%" stop-color="#450a0a"/>
        </radialGradient>
        <radialGradient id="mmcB" cx="32%" cy="28%" r="78%">
          <stop offset="0%"   stop-color="#fef9c3"/>
          <stop offset="14%"  stop-color="#fde047"/>
          <stop offset="45%"  stop-color="#eab308"/>
          <stop offset="80%"  stop-color="#854d0e"/>
          <stop offset="100%" stop-color="#422006"/>
        </radialGradient>
        <radialGradient id="mmcX" cx="32%" cy="28%" r="78%">
          <stop offset="0%"   stop-color="#dbeafe"/>
          <stop offset="14%"  stop-color="#93c5fd"/>
          <stop offset="45%"  stop-color="#3b82f6"/>
          <stop offset="80%"  stop-color="#1e40af"/>
          <stop offset="100%" stop-color="#172554"/>
        </radialGradient>
        <radialGradient id="mmcY" cx="32%" cy="28%" r="78%">
          <stop offset="0%"   stop-color="#dcfce7"/>
          <stop offset="14%"  stop-color="#86efac"/>
          <stop offset="45%"  stop-color="#22c55e"/>
          <stop offset="80%"  stop-color="#15803d"/>
          <stop offset="100%" stop-color="#052e16"/>
        </radialGradient>

        <!-- Specular gloss applied on top of every button (top-half highlight) -->
        <linearGradient id="mmcBtnGloss" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stop-color="#ffffff" stop-opacity="0.55"/>
          <stop offset="55%" stop-color="#ffffff" stop-opacity="0.0"/>
        </linearGradient>

        <!-- Drop shadow for the whole body -->
        <filter id="mmcBodyShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
          <feOffset dx="0" dy="5" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.55"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <!-- Soft per-button shadow -->
        <filter id="mmcBtnShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.6"/>
          <feOffset dx="1" dy="2" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.55"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <!-- Inner screen shadow (vignette) -->
        <filter id="mmcInsetShadow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2"/>
          <feComposite in2="SourceGraphic" operator="out"/>
        </filter>
      </defs>

      <!-- Ground shadow -->
      <ellipse cx="130" cy="372" rx="115" ry="5" fill="#000" opacity="0.30"/>

      <!-- Shoulder strip + groove -->
      <rect x="34" y="4"  width="192" height="14" rx="7" fill="url(#mmcShoulder)"/>
      <rect x="36" y="6"  width="188" height="3"  rx="1.5" fill="#000" opacity="0.55"/>

      <!-- Body with drop shadow -->
      <g filter="url(#mmcBodyShadow)">
        <rect x="10" y="14" width="240" height="340" rx="26" ry="26"
              fill="url(#mmcBody)" stroke="#000" stroke-width="0.9"/>
        <!-- Top rim highlight -->
        <rect x="14" y="17" width="232" height="2" rx="1" fill="#5a606a" opacity="0.55"/>
        <!-- Bottom subtle reflection band -->
        <rect x="14" y="342" width="232" height="2" rx="1" fill="#2a2e35" opacity="0.6"/>
      </g>

      <!-- Decorative manufacturer line under shoulder -->
      <line x1="44" y1="26" x2="216" y2="26" stroke="#3a3f47" stroke-width="0.7" opacity="0.6"/>

      <!-- Screen bezel (matte black recess) -->
      <rect x="24" y="32" width="212" height="180" rx="9" fill="#03050a" stroke="#000" stroke-width="0.5"/>
      <rect x="26" y="34" width="208" height="176" rx="8" fill="none" stroke="#171c2a" stroke-width="1"/>

      <!-- Screen panel -->
      <rect x="32" y="40" width="196" height="164" rx="4" fill="url(#mmcScreen)"/>
      <!-- Screen glare highlight -->
      <rect x="32" y="40" width="196" height="90"  rx="4" fill="url(#mmcScreenGlare)"/>

      <!-- Screen text -->
      <text x="130" y="110" class="mmc-screen-text">${opts.screenLine1}</text>
      <text x="130" y="142" class="mmc-screen-sub">${opts.screenLine2}</text>

      <!-- D-pad cross — slightly elevated with center dimple -->
      <g transform="translate(58,255)" filter="url(#mmcBtnShadow)">
        <rect x="-10" y="-30" width="20" height="60" rx="4" fill="url(#mmcDpad)"/>
        <rect x="-30" y="-10" width="60" height="20" rx="4" fill="url(#mmcDpad)"/>
        <!-- Highlights along the top edges -->
        <rect x="-8" y="-28" width="16" height="1.5" rx="0.75" fill="#5e646d" opacity="0.7"/>
        <rect x="-28" y="-8" width="56" height="1.5" rx="0.75" fill="#5e646d" opacity="0.7"/>
        <!-- Center recess -->
        <circle cx="0" cy="0" r="4" fill="#03050a"/>
        <circle cx="0" cy="0" r="2.5" fill="#10131a" opacity="0.9"/>
      </g>

      <!-- ABXY diamond — bigger, with gloss + per-button shadow -->
      <g transform="translate(202,255)" filter="url(#mmcBtnShadow)">
        <!-- X (top, blue) -->
        <circle cx="0" cy="-26" r="14" fill="url(#mmcX)"/>
        <circle cx="0" cy="-26" r="14" fill="url(#mmcBtnGloss)"/>
        <text x="0" y="-22" text-anchor="middle" font-family="sans-serif"
              font-size="11" font-weight="700" fill="#ffffff" opacity="0.9">X</text>

        <!-- A (right, red) -->
        <circle cx="26" cy="0" r="14" fill="url(#mmcA)"/>
        <circle cx="26" cy="0" r="14" fill="url(#mmcBtnGloss)"/>
        <text x="26" y="4" text-anchor="middle" font-family="sans-serif"
              font-size="11" font-weight="700" fill="#ffffff" opacity="0.9">A</text>

        <!-- B (bottom, yellow) -->
        <circle cx="0" cy="26" r="14" fill="url(#mmcB)"/>
        <circle cx="0" cy="26" r="14" fill="url(#mmcBtnGloss)"/>
        <text x="0" y="30" text-anchor="middle" font-family="sans-serif"
              font-size="11" font-weight="700" fill="#1a1a1a" opacity="0.9">B</text>

        <!-- Y (left, green) -->
        <circle cx="-26" cy="0" r="14" fill="url(#mmcY)"/>
        <circle cx="-26" cy="0" r="14" fill="url(#mmcBtnGloss)"/>
        <text x="-26" y="4" text-anchor="middle" font-family="sans-serif"
              font-size="11" font-weight="700" fill="#ffffff" opacity="0.9">Y</text>
      </g>

      <!-- SELECT / MENU / START pills — moved below ABXY so they don't overlap -->
      <g transform="translate(130,305)">
        <g filter="url(#mmcBtnShadow)">
          <rect x="-44" y="-5" width="28" height="10" rx="5" fill="#1c2026"/>
          <rect x="-14" y="-5" width="28" height="10" rx="5" fill="#1c2026"/>
          <rect x="16"  y="-5" width="28" height="10" rx="5" fill="#1c2026"/>
          <!-- Pill top highlights -->
          <rect x="-43" y="-4" width="26" height="1" rx="0.5" fill="#4a5058" opacity="0.6"/>
          <rect x="-13" y="-4" width="26" height="1" rx="0.5" fill="#4a5058" opacity="0.6"/>
          <rect x="17"  y="-4" width="26" height="1" rx="0.5" fill="#4a5058" opacity="0.6"/>
        </g>
        <g fill="#9aa0aa" font-family="sans-serif" font-size="6.5" text-anchor="middle" letter-spacing="0.5">
          <text x="-30" y="14">SELECT</text>
          <text x="0"   y="14">MENU</text>
          <text x="30"  y="14">START</text>
        </g>
      </g>

      <!-- Speaker grilles at the bottom corners -->
      <g fill="#06080b">
        <circle cx="34"  cy="332" r="2.6"/>
        <circle cx="44"  cy="332" r="2.6"/>
        <circle cx="54"  cy="332" r="2.6"/>
        <circle cx="64"  cy="332" r="2.6"/>
        <circle cx="196" cy="332" r="2.6"/>
        <circle cx="206" cy="332" r="2.6"/>
        <circle cx="216" cy="332" r="2.6"/>
        <circle cx="226" cy="332" r="2.6"/>
      </g>

      <!-- Charging LED on shoulder strip — bright pulse when active -->
      ${opts.charging
        ? svg`<g>
                <circle cx="130" cy="11" r="5" fill="#22c55e" opacity="0.4">
                  <animate attributeName="r" values="4;7;4" dur="1.6s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.4;0.0;0.4" dur="1.6s" repeatCount="indefinite"/>
                </circle>
                <circle cx="130" cy="11" r="3.5" fill="#22c55e">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="1.6s" repeatCount="indefinite"/>
                </circle>
              </g>`
        : svg`<circle cx="130" cy="11" r="3" fill="#3a3f46"/>`}
    </svg>
  `;
}
