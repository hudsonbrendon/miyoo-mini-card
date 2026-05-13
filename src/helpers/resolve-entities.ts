import { ENTITY_KEYS, type EntityKey } from "../const";
import type { MiyooMiniCardConfig, ResolvedEntities } from "../types";

const BINARY_KEYS = new Set<EntityKey>(["charging"]);

export function resolveEntities(config: MiyooMiniCardConfig): ResolvedEntities {
  const map = {} as ResolvedEntities;
  const overrides = config.entities ?? {};
  const prefix = config.entity?.trim() ?? "";

  for (const key of ENTITY_KEYS) {
    if (overrides[key]) {
      map[key] = overrides[key]!;
    } else if (prefix) {
      const domain = BINARY_KEYS.has(key) ? "binary_sensor" : "sensor";
      map[key] = `${domain}.${prefix}_${key}`;
    } else {
      map[key] = "";
    }
  }
  return map;
}
