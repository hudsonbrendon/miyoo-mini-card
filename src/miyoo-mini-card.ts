import { LitElement, html, nothing, type TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { CARD_NAME, CARD_VERSION } from "./const";
import { cardStyles } from "./styles";
import { miyooSvg } from "./assets/miyoo-svg";
import { resolveEntities } from "./helpers/resolve-entities";
import { computeStateLine } from "./helpers/compute-state-line";
import { formatStat } from "./helpers/format-stat";
import { localize } from "./localize";
import type {
  HassObject,
  MiyooMiniCardConfig,
  ResolvedEntities,
  StatConfig,
} from "./types";

console.info(
  `%c MIYOO-MINI-CARD %c v${CARD_VERSION} `,
  "color: white; background: #1f2937; font-weight: 700;",
  "color: white; background: #38bdf8; font-weight: 700;"
);

interface CustomCardWindow extends Window {
  customCards?: Array<{ type: string; name: string; description: string; preview: boolean }>;
}
const w = window as CustomCardWindow;
w.customCards = w.customCards || [];
w.customCards.push({
  type: CARD_NAME,
  name: "Miyoo Mini Card",
  description: "Card for Miyoo Mini Plus via miyoo-mqtt-reporter MQTT integration",
  preview: false,
});

const DEFAULT_STATS: StatConfig[] = [
  { entity: "battery", unit: "%", subtitle: "stat.battery" },
  { entity: "volume", unit: "%", subtitle: "stat.volume" },
  { entity: "temperature", unit: "°C", subtitle: "stat.temperature" },
  { entity: "playtime_today_min", unit: " min", subtitle: "stat.playtime_today" },
];

@customElement(CARD_NAME)
export class MiyooMiniCard extends LitElement {
  static styles = cardStyles;

  @property({ attribute: false }) hass?: HassObject;
  @state() private _config?: MiyooMiniCardConfig;

  setConfig(config: MiyooMiniCardConfig): void {
    if (!config) throw new Error("invalid_config: empty");
    const hasPrefix = typeof config.entity === "string" && config.entity.length > 0;
    const ents = config.entities ?? {};
    const hasMinEntities = !!ents.battery && !!ents.charging;
    if (!hasPrefix && !hasMinEntities) {
      throw new Error(
        "missing required entity: provide `entity:` prefix or `entities.battery` + `entities.charging`"
      );
    }
    if (config.stats && config.stats.length > 4) {
      throw new Error("invalid_config: stats can have at most 4 items");
    }
    this._config = config;
  }

  getCardSize(): number {
    return 5;
  }

  static getStubConfig(): MiyooMiniCardConfig {
    return { type: `custom:${CARD_NAME}`, entity: "miyoo_mini_plus_miyoominiplus" };
  }

  private _lang(): string {
    return this._config?.language ?? this.hass?.language ?? "en";
  }

  private _resolveStatEntity(id: string, resolved: ResolvedEntities): string {
    // If the stat config's `entity` is a logical EntityKey, map via resolved table.
    if (id in resolved) return resolved[id as keyof ResolvedEntities];
    return id;
  }

  render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass) return nothing;
    const resolved = resolveEntities(this._config);
    const lang = this._lang();

    const modeState = resolved.mode ? this.hass.states[resolved.mode]?.state : undefined;
    const chargingState = resolved.charging
      ? this.hass.states[resolved.charging]?.state
      : undefined;
    const isCharging = chargingState === "on" || chargingState === "ON";

    const stateLine = computeStateLine(this.hass, resolved, lang);

    const screenLine1 = modeState === "game" && resolved.game
      ? (this.hass.states[resolved.game]?.state || localize("state.standby", lang))
      : localize(`mode.${modeState ?? ""}`, lang) || localize("state.standby", lang);
    const screenLine2 = resolved.core && this.hass.states[resolved.core]?.state
      ? String(this.hass.states[resolved.core].state).toUpperCase()
      : "";

    const stats = (this._config.stats ?? DEFAULT_STATS).slice(0, 4);

    return html`
      <ha-card>
        ${this._config.name ? html`<div class="mmc-title">${this._config.name}</div>` : nothing}
        <div class="mmc-state-line">
          ${stateLine}
          ${isCharging ? html`<span class="charging">⚡</span>` : nothing}
        </div>
        <div class="mmc-svg-wrap">
          ${miyooSvg({ screenLine1, screenLine2, charging: isCharging })}
        </div>
        <div class="mmc-stats">
          ${stats.map((s) => {
            const id = this._resolveStatEntity(s.entity, resolved);
            const v = id ? this.hass!.states[id] : undefined;
            return html`
              <div class="mmc-stat">
                <div class="mmc-stat-val">${formatStat(v, s)}</div>
                <div class="mmc-stat-sub">${localize(s.subtitle, lang)}</div>
              </div>
            `;
          })}
        </div>
      </ha-card>
    `;
  }
}
