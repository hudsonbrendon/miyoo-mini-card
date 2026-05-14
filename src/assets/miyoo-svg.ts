import { svg, type TemplateResult } from "lit";

/**
 * Stylized portrait illustration of a transparent-smoke Miyoo Mini Plus.
 *
 * Aspect ratio ≈ 3:4. Semi-translucent black shell with a green-tinted PCB
 * hint visible through the lower half, 4 visible screws around the control
 * area, glossy-dome ABXY in classic SNES layout (X blue top / A red right /
 * B yellow bottom / Y green-teal left), classic plus-shape D-pad, a small
 * round function (menu) button between the D-pad and ABXY, SELECT + START
 * pill buttons bottom-center, an angled-slot speaker grille at the
 * bottom-right, and a small status element at the bottom-left.
 *
 * 3D effects: feGaussianBlur drop shadows on the body and on each control,
 * multi-stop radial gradients with bright top-left specular highlights, and
 * a glossy white half-overlay on every action button.
 */
export function miyooSvg(opts: {
  screenLine1: string;
  screenLine2: string;
  charging: boolean;
}): TemplateResult {
  return svg`
    <svg viewBox="0 0 280 380" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <!-- Semi-translucent smoke-black shell -->
        <linearGradient id="mmcShell" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stop-color="#3c4048"/>
          <stop offset="8%"   stop-color="#22262c"/>
          <stop offset="60%"  stop-color="#0d1014"/>
          <stop offset="92%"  stop-color="#0a0c10"/>
          <stop offset="100%" stop-color="#181b21"/>
        </linearGradient>

        <!-- PCB hint that bleeds through the lower half of the shell -->
        <linearGradient id="mmcPCB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stop-color="#0c2418" stop-opacity="0"/>
          <stop offset="40%"  stop-color="#0c2a1a" stop-opacity="0.30"/>
          <stop offset="100%" stop-color="#143a25" stop-opacity="0.45"/>
        </linearGradient>

        <linearGradient id="mmcShoulder" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stop-color="#252830"/>
          <stop offset="100%" stop-color="#06080b"/>
        </linearGradient>

        <!-- Screen vignette + glare -->
        <radialGradient id="mmcScreen" cx="50%" cy="40%" r="80%">
          <stop offset="0%"   stop-color="#14213d"/>
          <stop offset="70%"  stop-color="#0a1322"/>
          <stop offset="100%" stop-color="#020611"/>
        </radialGradient>
        <linearGradient id="mmcScreenGlare" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stop-color="#ffffff" stop-opacity="0.08"/>
          <stop offset="55%" stop-color="#ffffff" stop-opacity="0"/>
        </linearGradient>

        <!-- D-pad recess -->
        <radialGradient id="mmcDpad" cx="42%" cy="35%" r="75%">
          <stop offset="0%"   stop-color="#4c525a"/>
          <stop offset="55%"  stop-color="#1f2228"/>
          <stop offset="100%" stop-color="#05070a"/>
        </radialGradient>

        <!-- ABXY glossy-dome gradients (specular highlight at upper-left) -->
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

        <!-- Screw head detail -->
        <radialGradient id="mmcScrew" cx="40%" cy="35%" r="65%">
          <stop offset="0%"   stop-color="#6b7077"/>
          <stop offset="55%"  stop-color="#34383f"/>
          <stop offset="100%" stop-color="#0d1014"/>
        </radialGradient>

        <!-- Shadows -->
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

      <!-- Body -->
      <g filter="url(#mmcBodyShadow)">
        <rect x="14" y="14" width="252" height="346" rx="26" ry="26"
              fill="url(#mmcShell)" stroke="#000" stroke-width="0.9"/>
        <!-- PCB hint bleeding through the translucent lower half -->
        <rect x="18" y="180" width="244" height="178" rx="22"
              fill="url(#mmcPCB)" opacity="0.85"/>
        <!-- Top rim highlight -->
        <rect x="18" y="17" width="244" height="2" rx="1" fill="#5c626c" opacity="0.55"/>
        <!-- Subtle internal "trace" lines visible through smoke -->
        <g stroke="#1a3a26" stroke-width="0.4" opacity="0.55">
          <line x1="30"  y1="262" x2="100" y2="262"/>
          <line x1="170" y1="262" x2="250" y2="262"/>
          <line x1="60"  y1="300" x2="220" y2="300"/>
          <line x1="50"  y1="338" x2="80"  y2="338"/>
          <line x1="200" y1="338" x2="240" y2="338"/>
        </g>
      </g>

      <!-- Decorative top accent line under shoulder -->
      <line x1="50" y1="26" x2="230" y2="26" stroke="#3a3f47" stroke-width="0.7" opacity="0.6"/>

      <!-- Screen recess + screen -->
      <rect x="28" y="32" width="224" height="184" rx="10" fill="#03050a" stroke="#000" stroke-width="0.5"/>
      <rect x="30" y="34" width="220" height="180" rx="9"  fill="none" stroke="#171c2a" stroke-width="1"/>
      <rect x="36" y="40" width="208" height="168" rx="4" fill="url(#mmcScreen)"/>
      <rect x="36" y="40" width="208" height="92"  rx="4" fill="url(#mmcScreenGlare)"/>

      <!-- Screen text -->
      <text x="140" y="115" class="mmc-screen-text">${opts.screenLine1}</text>
      <text x="140" y="148" class="mmc-screen-sub">${opts.screenLine2}</text>

      <!-- Four visible Phillips-head screws around the control area -->
      <g>
        <g transform="translate(38,234)">
          <circle r="3.2" fill="url(#mmcScrew)"/>
          <line x1="-2.2" y1="0" x2="2.2" y2="0" stroke="#06080b" stroke-width="0.6"/>
          <line x1="0" y1="-2.2" x2="0" y2="2.2" stroke="#06080b" stroke-width="0.6"/>
        </g>
        <g transform="translate(242,234)">
          <circle r="3.2" fill="url(#mmcScrew)"/>
          <line x1="-2.2" y1="0" x2="2.2" y2="0" stroke="#06080b" stroke-width="0.6"/>
          <line x1="0" y1="-2.2" x2="0" y2="2.2" stroke="#06080b" stroke-width="0.6"/>
        </g>
        <g transform="translate(38,332)">
          <circle r="3.2" fill="url(#mmcScrew)"/>
          <line x1="-2.2" y1="0" x2="2.2" y2="0" stroke="#06080b" stroke-width="0.6"/>
          <line x1="0" y1="-2.2" x2="0" y2="2.2" stroke="#06080b" stroke-width="0.6"/>
        </g>
        <g transform="translate(242,332)">
          <circle r="3.2" fill="url(#mmcScrew)"/>
          <line x1="-2.2" y1="0" x2="2.2" y2="0" stroke="#06080b" stroke-width="0.6"/>
          <line x1="0" y1="-2.2" x2="0" y2="2.2" stroke="#06080b" stroke-width="0.6"/>
        </g>
      </g>

      <!-- D-pad (left) -->
      <g transform="translate(64,270)" filter="url(#mmcBtnShadow)">
        <rect x="-11" y="-32" width="22" height="64" rx="4" fill="url(#mmcDpad)"/>
        <rect x="-32" y="-11" width="64" height="22" rx="4" fill="url(#mmcDpad)"/>
        <rect x="-9"  y="-30" width="18" height="1.5" rx="0.75" fill="#5e646d" opacity="0.7"/>
        <rect x="-30" y="-9"  width="60" height="1.5" rx="0.75" fill="#5e646d" opacity="0.7"/>
        <circle cx="0" cy="0" r="4.5" fill="#03050a"/>
        <circle cx="0" cy="0" r="3"   fill="#10131a" opacity="0.9"/>
      </g>

      <!-- Function (menu) button — small round, top-center between D-pad and ABXY -->
      <g transform="translate(140,245)" filter="url(#mmcBtnShadow)">
        <circle r="7" fill="#1a1c20" stroke="#06080b" stroke-width="0.5"/>
        <circle r="7" fill="url(#mmcBtnGloss)"/>
        <text y="3" text-anchor="middle" font-family="sans-serif" font-size="6"
              font-weight="700" fill="#9aa0aa" opacity="0.95">M</text>
      </g>

      <!-- ABXY diamond (right). X top blue / Y left green-teal / A right red / B bottom yellow -->
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

      <!-- SELECT + START pills (bottom-center, just two of them) -->
      <g transform="translate(140,316)">
        <g filter="url(#mmcBtnShadow)">
          <rect x="-46" y="-6" width="40" height="12" rx="6" fill="#1a1c20"/>
          <rect x="6"   y="-6" width="40" height="12" rx="6" fill="#1a1c20"/>
          <rect x="-45" y="-5" width="38" height="1" rx="0.5" fill="#4a5058" opacity="0.7"/>
          <rect x="7"   y="-5" width="38" height="1" rx="0.5" fill="#4a5058" opacity="0.7"/>
        </g>
        <g fill="#a8aeb8" font-family="sans-serif" font-size="6.5" text-anchor="middle"
           letter-spacing="0.8" font-weight="600">
          <text x="-26" y="2">SELECT</text>
          <text x="26"  y="2">START</text>
        </g>
      </g>

      <!-- Small status element bottom-left (power/reset indicator) -->
      <g transform="translate(60,348)">
        <rect x="-12" y="-3" width="24" height="6" rx="1.5" fill="#06080b"/>
        <rect x="-10" y="-2" width="20" height="1" rx="0.5" fill="#2a2e35" opacity="0.8"/>
      </g>

      <!-- Speaker grille bottom-right — angled parallel slots -->
      <g transform="translate(220,348)" stroke="#06080b" stroke-width="1.6" stroke-linecap="round">
        <line x1="-18" y1="4"  x2="-2"  y2="-4"/>
        <line x1="-12" y1="4"  x2="4"   y2="-4"/>
        <line x1="-6"  y1="4"  x2="10"  y2="-4"/>
        <line x1="0"   y1="4"  x2="16"  y2="-4"/>
        <line x1="6"   y1="4"  x2="22"  y2="-4"/>
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
