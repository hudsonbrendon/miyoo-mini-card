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
import "./editor";

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

  static getConfigElement(): HTMLElement {
    return document.createElement("miyoo-mini-card-editor");
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

  private _intState(entityId: string | undefined): number | undefined {
    if (!entityId || !this.hass) return undefined;
    const s = this.hass.states[entityId]?.state;
    if (!s || s === "unknown" || s === "unavailable") return undefined;
    const n = Number(s);
    return Number.isFinite(n) ? n : undefined;
  }

  private _batteryIcon(pct: number | undefined, charging: boolean): string {
    if (pct === undefined) return "mdi:battery-unknown";
    if (charging) {
      if (pct >= 90) return "mdi:battery-charging-100";
      if (pct >= 70) return "mdi:battery-charging-80";
      if (pct >= 50) return "mdi:battery-charging-60";
      if (pct >= 30) return "mdi:battery-charging-40";
      if (pct >= 10) return "mdi:battery-charging-20";
      return "mdi:battery-charging-outline";
    }
    if (pct >= 95) return "mdi:battery";
    if (pct >= 80) return "mdi:battery-80";
    if (pct >= 60) return "mdi:battery-60";
    if (pct >= 40) return "mdi:battery-40";
    if (pct >= 20) return "mdi:battery-20";
    return "mdi:battery-alert";
  }

  private _volumeIcon(vol: number | undefined): string {
    if (vol === undefined) return "mdi:volume-off";
    if (vol <= 0) return "mdi:volume-mute";
    if (vol < 33) return "mdi:volume-low";
    if (vol < 66) return "mdi:volume-medium";
    return "mdi:volume-high";
  }

  private _wifiIcon(rssi: number | undefined): string {
    if (rssi === undefined) return "mdi:wifi-off";
    if (rssi >= -55) return "mdi:wifi-strength-4";
    if (rssi >= -65) return "mdi:wifi-strength-3";
    if (rssi >= -75) return "mdi:wifi-strength-2";
    if (rssi >= -85) return "mdi:wifi-strength-1";
    return "mdi:wifi-strength-outline";
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

    const batteryPct = this._intState(resolved.battery);
    const volPct = this._intState(resolved.volume);
    const playtimeMin = this._intState(resolved["playtime_today_min" as keyof ResolvedEntities]);
    const rssi = this._intState(resolved.wifi_rssi);
    const muteState = this.hass.states[`binary_sensor.${this._config.entity}_miyoo_mute`]?.state;
    const isMuted = muteState === "on" || muteState === "ON";
    const ntpState = this.hass.states[`binary_sensor.${this._config.entity}_miyoo_ntp_synced`]?.state;
    const ntpSynced = ntpState === "on" || ntpState === "ON";

    const stateLine = computeStateLine(this.hass, resolved, lang);
    const inGame = modeState === "game";

    const KNOWN_MODES = new Set(["mainui", "switcher", "apps", "advmenu", "drastic", "launching"]);
    let screenLine1: string;
    let screenLine2 = "";
    if (inGame && resolved.game) {
      const g = this.hass.states[resolved.game]?.state;
      screenLine1 = g && g !== "unknown" && g !== "unavailable" ? g : localize("state.standby", lang);
      const c = resolved.core ? this.hass.states[resolved.core]?.state : undefined;
      if (c && c !== "unknown" && c !== "unavailable") {
        screenLine2 = String(c).toUpperCase();
      }
    } else if (modeState && KNOWN_MODES.has(modeState)) {
      screenLine1 = localize(`mode.${modeState}`, lang);
    } else {
      screenLine1 = localize("state.standby", lang);
    }

    const stats = (this._config.stats ?? DEFAULT_STATS).slice(0, 4);

    return html`
      <ha-card>
        <!-- Header: 3 status badges + kebab -->
        <div class="mmc-header">
          <span class="badge">
            <ha-icon icon="${this._volumeIcon(volPct)}"></ha-icon>
            ${volPct ?? "—"}%
          </span>
          <span class="badge">
            <ha-icon icon="${this._batteryIcon(batteryPct, isCharging)}"></ha-icon>
            ${batteryPct ?? "—"}%
          </span>
          <span class="badge">
            <ha-icon icon="mdi:clock-outline"></ha-icon>
            ${playtimeMin ?? 0}m
          </span>
          <span class="spacer"></span>
          <span class="menu-dot">⋮</span>
        </div>

        <!-- Device illustration -->
        <div class="mmc-device">
          ${miyooSvg({ screenLine1, screenLine2, charging: isCharging })}
        </div>

        <!-- Name + status -->
        ${this._config.name
          ? html`<div class="mmc-name">${this._config.name}</div>`
          : nothing}
        <div class="mmc-status">
          ${inGame ? html`<span class="play-icon">▶</span>` : nothing}
          ${stateLine}
          ${isCharging ? html`<span class="charging-icon">⚡</span>` : nothing}
        </div>

        <!-- Stats grid -->
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

        <!-- Action bar: state indicators -->
        <div class="mmc-actions">
          <div class="group">
            <ha-icon icon="mdi:refresh" title="refresh"></ha-icon>
            <ha-icon icon="${inGame ? "mdi:gamepad-square" : "mdi:home"}" class="active" title="mode"></ha-icon>
          </div>
          <div class="group">
            <ha-icon icon="${this._wifiIcon(rssi)}" class="${rssi !== undefined ? "active" : ""}" title="wifi"></ha-icon>
            <ha-icon icon="${ntpSynced ? "mdi:clock-check" : "mdi:clock-alert-outline"}" class="${ntpSynced ? "good" : ""}" title="ntp"></ha-icon>
            <ha-icon icon="${isMuted ? "mdi:volume-off" : "mdi:volume-high"}" class="${isMuted ? "bad" : ""}" title="mute"></ha-icon>
          </div>
        </div>
      </ha-card>
    `;
  }
}
