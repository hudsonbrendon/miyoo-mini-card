import { svg, type TemplateResult } from "lit";

/**
 * Stylized portrait illustration of a transparent-smoke Miyoo Mini Plus.
 *
 * Layered render order — required to read the "ghosted internals" effect:
 *   1. Ground shadow + body shell (smoke-tinted gradient + drop shadow)
 *   2. PCB layer visible through lower half (dark green with traces, SMD
 *      component rectangles, capacitor dots, ribbon cable connector blocks)
 *   3. Transition band between screen and control area
 *   4. Six silver Phillips screws
 *   5. Speaker internal chamber (darker silhouette under the grille)
 *   6. Button-membrane recess rings (translucent dark circles behind every
 *      action button)
 *   7. Controls (D-pad / ABXY / function / SELECT / START) — glossy domes
 *      pop in vibrant primaries against the dark translucent background
 *   8. Speaker grille diagonal slots and pulsing charging LED on top
 */
export function miyooSvg(opts: {
  screenLine1: string;
  screenLine2: string;
  charging: boolean;
}): TemplateResult {
  return svg`
    <svg viewBox="0 0 280 380" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="mmcShell" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stop-color="#3c4048"/>
          <stop offset="8%"   stop-color="#22262c"/>
          <stop offset="60%"  stop-color="#0d1014"/>
          <stop offset="92%"  stop-color="#0a0c10"/>
          <stop offset="100%" stop-color="#181b21"/>
        </linearGradient>

        <!-- PCB visible through the lower translucent half -->
        <linearGradient id="mmcPCB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stop-color="#0c2418" stop-opacity="0"/>
          <stop offset="25%"  stop-color="#0c2a1a" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#164028" stop-opacity="0.55"/>
        </linearGradient>

        <linearGradient id="mmcShoulder" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stop-color="#252830"/>
          <stop offset="100%" stop-color="#06080b"/>
        </linearGradient>

        <radialGradient id="mmcScreen" cx="50%" cy="40%" r="80%">
          <stop offset="0%"   stop-color="#14213d"/>
          <stop offset="70%"  stop-color="#0a1322"/>
          <stop offset="100%" stop-color="#020611"/>
        </radialGradient>
        <linearGradient id="mmcScreenGlare" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stop-color="#ffffff" stop-opacity="0.08"/>
          <stop offset="55%" stop-color="#ffffff" stop-opacity="0"/>
        </linearGradient>

        <!-- D-pad — slightly translucent matching shell tint -->
        <radialGradient id="mmcDpad" cx="42%" cy="35%" r="75%">
          <stop offset="0%"   stop-color="#3a3e46"/>
          <stop offset="55%"  stop-color="#181b21"/>
          <stop offset="100%" stop-color="#05070a"/>
        </radialGradient>

        <!-- Translucent black for SELECT / START / function pills -->
        <linearGradient id="mmcTranslucentBlk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stop-color="#2a2e36"/>
          <stop offset="100%" stop-color="#0a0c10"/>
        </linearGradient>

        <!-- ABXY glossy-dome gradients with bright top-left specular -->
        <radialGradient id="mmcA" cx="30%" cy="25%" r="80%">
          <stop offset="0%"   stop-color="#fee2e2"/>
          <stop offset="14%"  stop-color="#fca5a5"/>
          <stop offset="45%"  stop-color="#dc2626"/>
          <stop offset="82%"  stop-color="#7f1d1d"/>
          <stop offset="100%" stop-color="#3f0a0a"/>
        </radialGradient>
        <radialGradient id="mmcB" cx="30%" cy="25%" r="80%">
          <stop offset="0%"   stop-color="#fef9c3"/>
          <stop offset="14%"  stop-color="#fde047"/>
          <stop offset="45%"  stop-color="#eab308"/>
          <stop offset="82%"  stop-color="#854d0e"/>
          <stop offset="100%" stop-color="#3b1f04"/>
        </radialGradient>
        <radialGradient id="mmcX" cx="30%" cy="25%" r="80%">
          <stop offset="0%"   stop-color="#dbeafe"/>
          <stop offset="14%"  stop-color="#93c5fd"/>
          <stop offset="45%"  stop-color="#3b82f6"/>
          <stop offset="82%"  stop-color="#1e40af"/>
          <stop offset="100%" stop-color="#0f1a4a"/>
        </radialGradient>
        <radialGradient id="mmcY" cx="30%" cy="25%" r="80%">
          <stop offset="0%"   stop-color="#ccfbf1"/>
          <stop offset="14%"  stop-color="#5eead4"/>
          <stop offset="45%"  stop-color="#14b8a6"/>
          <stop offset="82%"  stop-color="#0f766e"/>
          <stop offset="100%" stop-color="#042f2e"/>
        </radialGradient>

        <linearGradient id="mmcBtnGloss" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stop-color="#ffffff" stop-opacity="0.55"/>
          <stop offset="55%" stop-color="#ffffff" stop-opacity="0"/>
        </linearGradient>

        <!-- Silver metallic Phillips screw head -->
        <radialGradient id="mmcScrew" cx="35%" cy="30%" r="70%">
          <stop offset="0%"   stop-color="#e5e7eb"/>
          <stop offset="30%"  stop-color="#9ca3af"/>
          <stop offset="80%"  stop-color="#4b5563"/>
          <stop offset="100%" stop-color="#1f2937"/>
        </radialGradient>

        <filter id="mmcBodyShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
          <feOffset dx="0" dy="5" result="o"/>
          <feComponentTransfer><feFuncA type="linear" slope="0.55"/></feComponentTransfer>
          <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="mmcBtnShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.6"/>
          <feOffset dx="1" dy="2" result="o"/>
          <feComponentTransfer><feFuncA type="linear" slope="0.55"/></feComponentTransfer>
          <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <!-- Ground shadow -->
      <ellipse cx="140" cy="372" rx="120" ry="5" fill="#000" opacity="0.30"/>

      <!-- Shoulder strip -->
      <rect x="40" y="4"  width="200" height="14" rx="7" fill="url(#mmcShoulder)"/>
      <rect x="42" y="6"  width="196" height="3"  rx="1.5" fill="#000" opacity="0.55"/>

      <!-- Body (1) -->
      <g filter="url(#mmcBodyShadow)">
        <rect x="14" y="14" width="252" height="346" rx="26" ry="26"
              fill="url(#mmcShell)" stroke="#000" stroke-width="0.9"/>
        <rect x="18" y="17" width="244" height="2" rx="1" fill="#5c626c" opacity="0.55"/>
        <rect x="18" y="355" width="244" height="2" rx="1" fill="#2a2e35" opacity="0.6"/>
      </g>

      <!-- PCB layer visible through translucent lower half (2) -->
      <g>
        <rect x="20" y="222" width="240" height="132" rx="20" fill="url(#mmcPCB)" opacity="0.95"/>

        <!-- Faint copper/solder-mask trace lines -->
        <g stroke="#1a3a26" stroke-width="0.5" opacity="0.55" fill="none">
          <path d="M 30 240 L 90 240 L 95 246 L 130 246"/>
          <path d="M 165 244 L 200 244 L 210 252 L 250 252"/>
          <path d="M 40 282 L 80 282"/>
          <path d="M 200 282 L 245 282"/>
          <path d="M 28 308 L 90 308 L 100 314 L 175 314 L 185 308 L 248 308"/>
          <path d="M 30 332 L 70 332"/>
          <path d="M 90 348 L 195 348"/>
          <path d="M 210 332 L 248 332"/>
        </g>

        <!-- Small SMD chips / ICs (rectangular silhouettes) -->
        <g fill="#0b1e14" opacity="0.85">
          <rect x="40"  y="232" width="14" height="9" rx="0.5"/>
          <rect x="222" y="232" width="14" height="9" rx="0.5"/>
          <rect x="42"  y="294" width="9"  height="6" rx="0.5"/>
          <rect x="225" y="294" width="9"  height="6" rx="0.5"/>
          <rect x="120" y="345" width="40" height="7" rx="0.5"/>
        </g>
        <!-- Tiny capacitor / resistor dots -->
        <g fill="#163524" opacity="0.85">
          <circle cx="60"  cy="246" r="1.4"/>
          <circle cx="64"  cy="246" r="1.4"/>
          <circle cx="220" cy="246" r="1.4"/>
          <circle cx="216" cy="246" r="1.4"/>
          <circle cx="58"  cy="304" r="1.2"/>
          <circle cx="220" cy="304" r="1.2"/>
          <circle cx="120" cy="332" r="1.2"/>
          <circle cx="160" cy="332" r="1.2"/>
        </g>
        <!-- Ribbon-cable connector blocks -->
        <g fill="#0a1c12" opacity="0.9" stroke="#1f3d28" stroke-width="0.3">
          <rect x="100" y="232" width="20" height="6" rx="0.5"/>
          <rect x="160" y="232" width="20" height="6" rx="0.5"/>
        </g>
        <g fill="#143424" opacity="0.6">
          <rect x="102" y="234" width="1.5" height="2"/>
          <rect x="106" y="234" width="1.5" height="2"/>
          <rect x="110" y="234" width="1.5" height="2"/>
          <rect x="114" y="234" width="1.5" height="2"/>
          <rect x="162" y="234" width="1.5" height="2"/>
          <rect x="166" y="234" width="1.5" height="2"/>
          <rect x="170" y="234" width="1.5" height="2"/>
          <rect x="174" y="234" width="1.5" height="2"/>
        </g>
      </g>

      <!-- Transition band between screen and controls (3) -->
      <rect x="14" y="216" width="252" height="10" fill="#0a0d12" opacity="0.65"/>

      <!-- Decorative top accent line -->
      <line x1="50" y1="26" x2="230" y2="26" stroke="#3a3f47" stroke-width="0.7" opacity="0.6"/>

      <!-- Screen recess + screen -->
      <rect x="28" y="32" width="224" height="184" rx="10" fill="#03050a" stroke="#000" stroke-width="0.5"/>
      <rect x="30" y="34" width="220" height="180" rx="9"  fill="none" stroke="#171c2a" stroke-width="1"/>
      <rect x="36" y="40" width="208" height="168" rx="4" fill="url(#mmcScreen)"/>
      <rect x="36" y="40" width="208" height="92"  rx="4" fill="url(#mmcScreenGlare)"/>

      <text x="140" y="115" class="mmc-screen-text">${opts.screenLine1}</text>
      <text x="140" y="148" class="mmc-screen-sub">${opts.screenLine2}</text>

      <!-- Six silver Phillips screws (4) -->
      ${[
        [38, 230], [140, 230], [242, 230],
        [38, 348], [140, 348], [242, 348],
      ].map(([cx, cy]) => svg`
        <g transform="translate(${cx},${cy})">
          <circle r="4" fill="url(#mmcScrew)"/>
          <circle r="3.2" fill="none" stroke="#0a0c10" stroke-width="0.4"/>
          <line x1="-2.4" y1="0" x2="2.4" y2="0" stroke="#0a0c10" stroke-width="0.7"/>
          <line x1="0" y1="-2.4" x2="0" y2="2.4" stroke="#0a0c10" stroke-width="0.7"/>
        </g>
      `)}

      <!-- Speaker internal chamber visible behind grille (5) -->
      <rect x="195" y="338" width="48" height="20" rx="3" fill="#020405" opacity="0.85"/>
      <circle cx="219" cy="348" r="9" fill="#06080b" opacity="0.9"/>
      <circle cx="219" cy="348" r="5" fill="#10131a" opacity="0.85"/>

      <!-- Button-membrane recess rings (6) — translucent dark behind ABXY -->
      <g transform="translate(216,270)" opacity="0.7">
        <circle cx="0"   cy="-28" r="18" fill="#0a0d12"/>
        <circle cx="28"  cy="0"   r="18" fill="#0a0d12"/>
        <circle cx="0"   cy="28"  r="18" fill="#0a0d12"/>
        <circle cx="-28" cy="0"   r="18" fill="#0a0d12"/>
      </g>
      <!-- D-pad recess outline -->
      <g transform="translate(64,270)" opacity="0.45">
        <rect x="-36" y="-36" width="72" height="72" rx="10" fill="#0a0d12"/>
      </g>

      <!-- D-pad (7a) -->
      <g transform="translate(64,270)" filter="url(#mmcBtnShadow)">
        <rect x="-11" y="-32" width="22" height="64" rx="4" fill="url(#mmcDpad)"/>
        <rect x="-32" y="-11" width="64" height="22" rx="4" fill="url(#mmcDpad)"/>
        <rect x="-9"  y="-30" width="18" height="1.5" rx="0.75" fill="#4a4f57" opacity="0.7"/>
        <rect x="-30" y="-9"  width="60" height="1.5" rx="0.75" fill="#4a4f57" opacity="0.7"/>
        <circle cx="0" cy="0" r="4.5" fill="#03050a"/>
        <circle cx="0" cy="0" r="3"   fill="#10131a" opacity="0.9"/>
      </g>

      <!-- Function (MENU) button — translucent black (7b) -->
      <g transform="translate(140,250)" filter="url(#mmcBtnShadow)">
        <circle r="9"   fill="#000" opacity="0.55"/>
        <circle r="7.5" fill="url(#mmcTranslucentBlk)" stroke="#06080b" stroke-width="0.4"/>
        <circle r="7.5" fill="url(#mmcBtnGloss)" opacity="0.35"/>
        <text y="3" text-anchor="middle" font-family="sans-serif" font-size="6"
              font-weight="700" fill="#9aa0aa" opacity="0.9">M</text>
      </g>

      <!-- ABXY diamond (7c) -->
      <g transform="translate(216,270)" filter="url(#mmcBtnShadow)">
        <circle cx="0"   cy="-28" r="15" fill="url(#mmcX)"/>
        <circle cx="0"   cy="-28" r="15" fill="url(#mmcBtnGloss)"/>
        <text x="0" y="-24" text-anchor="middle" font-family="sans-serif"
              font-size="11" font-weight="700" fill="#ffffff" opacity="0.9">X</text>

        <circle cx="28"  cy="0"   r="15" fill="url(#mmcA)"/>
        <circle cx="28"  cy="0"   r="15" fill="url(#mmcBtnGloss)"/>
        <text x="28" y="4"  text-anchor="middle" font-family="sans-serif"
              font-size="11" font-weight="700" fill="#ffffff" opacity="0.9">A</text>

        <circle cx="0"   cy="28"  r="15" fill="url(#mmcB)"/>
        <circle cx="0"   cy="28"  r="15" fill="url(#mmcBtnGloss)"/>
        <text x="0" y="32" text-anchor="middle" font-family="sans-serif"
              font-size="11" font-weight="700" fill="#1a1a1a" opacity="0.9">B</text>

        <circle cx="-28" cy="0"   r="15" fill="url(#mmcY)"/>
        <circle cx="-28" cy="0"   r="15" fill="url(#mmcBtnGloss)"/>
        <text x="-28" y="4" text-anchor="middle" font-family="sans-serif"
              font-size="11" font-weight="700" fill="#ffffff" opacity="0.9">Y</text>
      </g>

      <!-- SELECT + START translucent pills (7d) -->
      <g transform="translate(140,318)">
        <g filter="url(#mmcBtnShadow)">
          <rect x="-46" y="-7" width="40" height="14" rx="7" fill="url(#mmcTranslucentBlk)" stroke="#06080b" stroke-width="0.4"/>
          <rect x="6"   y="-7" width="40" height="14" rx="7" fill="url(#mmcTranslucentBlk)" stroke="#06080b" stroke-width="0.4"/>
          <rect x="-45" y="-6" width="38" height="2" rx="1" fill="#ffffff" opacity="0.10"/>
          <rect x="7"   y="-6" width="38" height="2" rx="1" fill="#ffffff" opacity="0.10"/>
        </g>
        <g fill="#a8aeb8" font-family="sans-serif" font-size="6.5" text-anchor="middle"
           letter-spacing="0.8" font-weight="600">
          <text x="-26" y="3">SELECT</text>
          <text x="26"  y="3">START</text>
        </g>
      </g>

      <!-- Speaker grille diagonal slots (8) -->
      <g transform="translate(220,348)" stroke="#06080b" stroke-width="1.6" stroke-linecap="round">
        <line x1="-20" y1="6"  x2="-4"  y2="-6"/>
        <line x1="-14" y1="6"  x2="2"   y2="-6"/>
        <line x1="-8"  y1="6"  x2="8"   y2="-6"/>
        <line x1="-2"  y1="6"  x2="14"  y2="-6"/>
        <line x1="4"   y1="6"  x2="20"  y2="-6"/>
      </g>

      <!-- Charging LED on shoulder strip -->
      ${opts.charging
        ? svg`<g>
                <circle cx="140" cy="11" r="5" fill="#22c55e" opacity="0.4">
                  <animate attributeName="r"       values="4;7;4"      dur="1.6s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.4;0;0.4"  dur="1.6s" repeatCount="indefinite"/>
                </circle>
                <circle cx="140" cy="11" r="3.5" fill="#22c55e">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="1.6s" repeatCount="indefinite"/>
                </circle>
              </g>`
        : svg`<circle cx="140" cy="11" r="3" fill="#3a3f46"/>`}
    </svg>
  `;
}
