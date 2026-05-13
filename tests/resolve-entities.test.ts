import { describe, it, expect } from "vitest";
import { resolveEntities } from "../src/helpers/resolve-entities";
import { ENTITY_KEYS } from "../src/const";

describe("resolveEntities", () => {
  it("derives every key from the prefix when no overrides are given", () => {
    const out = resolveEntities({ type: "x", entity: "miyoo_main" });
    for (const k of ENTITY_KEYS) {
      const expected = k === "charging" ? `binary_sensor.miyoo_main_${k}` : `sensor.miyoo_main_${k}`;
      expect(out[k]).toBe(expected);
    }
  });

  it("uses explicit overrides instead of the prefix", () => {
    const out = resolveEntities({
      type: "x",
      entity: "miyoo_main",
      entities: { battery: "sensor.custom_battery", game: "sensor.custom_game" },
    });
    expect(out.battery).toBe("sensor.custom_battery");
    expect(out.game).toBe("sensor.custom_game");
    expect(out.volume).toBe("sensor.miyoo_main_volume");
  });

  it("works with only overrides (no prefix)", () => {
    const out = resolveEntities({
      type: "x",
      entities: { battery: "sensor.b", charging: "binary_sensor.c" },
    });
    expect(out.battery).toBe("sensor.b");
    expect(out.charging).toBe("binary_sensor.c");
    expect(out.volume).toBe("");
  });
});
