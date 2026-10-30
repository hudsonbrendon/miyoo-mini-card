import { ENTITY_KEYS, type EntityKey } from "../const";
import type { HassObject, MiyooMiniCardConfig, ResolvedEntities } from "../types";

const BINARY_KEYS = new Set<EntityKey>(["charging"]);

/**
 * Home Assistant builds MQTT-Discovery entity ids as
 *   `<domain>.<device_slug>_<entity_name_slug>`
 * Because miyoo-mqtt-reporter names every entity "Miyoo <X>" the slug starts
 * with `miyoo_`, so the resolved id is `<domain>.<prefix>_miyoo_<key>` —
 * NOT `<domain>.<prefix>_<key>` as one might first expect.
 */
// `entity:` prefix for the device's MQTT battery sensor, or undefined when the
// entity is not one (wrong platform/suffix, or no sibling charging sensor).
export function suggestPrefix(hass: HassObject, entityId: string): string | undefined {
  const entry = hass.entities?.[entityId];
  if (entry && entry.platform !== "mqtt") return undefined;
  const m = /^sensor\.(.+)_miyoo_battery$/.exec(entityId);
  if (!m) return undefined;
  const prefix = m[1];
  return hass.states[`binary_sensor.${prefix}_miyoo_charging`] ? prefix : undefined;
}

export function resolveEntities(config: MiyooMiniCardConfig): ResolvedEntities {
  const map = {} as ResolvedEntities;
  const overrides = config.entities ?? {};
  const prefix = config.entity?.trim() ?? "";

  for (const key of ENTITY_KEYS) {
    if (overrides[key]) {
      map[key] = overrides[key]!;
    } else if (prefix) {
      const domain = BINARY_KEYS.has(key) ? "binary_sensor" : "sensor";
      map[key] = `${domain}.${prefix}_miyoo_${key}`;
    } else {
      map[key] = "";
    }
  }
  return map;
}
