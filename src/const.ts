export const CARD_NAME = "miyoo-mini-card";
export const CARD_VERSION = "0.3.1";

// All the data points the card knows how to render. These are *logical*
// keys — the entity ID is derived from `<prefix>_<key>` (or overridden
// explicitly via config.entities). Names match miyoo-mqtt-reporter's
// discovery object_id fields.
export const ENTITY_KEYS = [
  // Required for any view
  "battery",        // sensor
  "charging",       // binary_sensor
  // Highly recommended
  "volume",
  "brightness",
  "temperature",
  "wifi_rssi",
  "ram",
  "cpu",
  "playtime_today_min",
  "playtime_total_hours",
  "uptime",
  "mode",
  "game",
  "core",
  "last_played",
  "most_played",
  "charging_source",
  "vbat",
  "ibat",
] as const;

export type EntityKey = (typeof ENTITY_KEYS)[number];
