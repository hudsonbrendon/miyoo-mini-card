import type { HassObject, ResolvedEntities } from "../types";
import { localize } from "../localize";

const KNOWN_MODES = ["mainui", "switcher", "apps", "advmenu", "drastic", "launching"];

export function computeStateLine(
  hass: HassObject,
  entities: ResolvedEntities,
  lang: string
): string {
  const modeState = entities.mode ? hass.states[entities.mode]?.state : undefined;
  const game = entities.game ? hass.states[entities.game]?.state : undefined;
  const core = entities.core ? hass.states[entities.core]?.state : undefined;

  if (modeState === "game" && game && game !== "unknown" && game !== "unavailable") {
    const coreSuffix = core && core !== "unknown" && core !== "unavailable" ? ` (${core})` : "";
    return `${localize("state.playing", lang)} ${game}${coreSuffix}`;
  }

  if (modeState && KNOWN_MODES.includes(modeState)) {
    return localize(`mode.${modeState}`, lang);
  }
  return localize("state.standby", lang);
}
