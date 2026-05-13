import { ENTITY_KEYS, type EntityKey } from "../const";
import type { MiyooMiniCardConfig, ResolvedEntities } from "../types";

const BINARY_KEYS = new Set<EntityKey>(["charging"]);

/**
 * Home Assistant builds MQTT-Discovery entity ids as
 *   `<domain>.<device_slug>_<entity_name_slug>`
 * Because miyoo-mqtt-reporter names every entity "Miyoo <X>" the slug starts
 * with `miyoo_`, so the resolved id is `<domain>.<prefix>_miyoo_<key>` —
 * NOT `<domain>.<prefix>_<key>` as one might first expect.
 */
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
