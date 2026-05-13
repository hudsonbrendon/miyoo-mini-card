import { describe, it, expect } from "vitest";
import { computeStateLine } from "../src/helpers/compute-state-line";

const hass = (states: Record<string, string>) => ({
  states: Object.fromEntries(
    Object.entries(states).map(([k, v]) => [k, { state: v, attributes: {} }])
  ),
});

describe("computeStateLine", () => {
  it("shows game and core when in game mode", () => {
    const h = hass({
      "sensor.x_mode": "game",
      "sensor.x_game": "Pokemon FireRed",
      "sensor.x_core": "mgba",
    });
    expect(
      computeStateLine(h, {
        mode: "sensor.x_mode",
        game: "sensor.x_game",
        core: "sensor.x_core",
      } as never, "en")
    ).toBe("Playing Pokemon FireRed (mgba)");
  });

  it("shows mode label when not in game", () => {
    const h = hass({ "sensor.x_mode": "mainui" });
    expect(
      computeStateLine(h, { mode: "sensor.x_mode" } as never, "en")
    ).toBe("In menu");
  });

  it("falls back to standby for empty / unknown", () => {
    const h = hass({});
    expect(computeStateLine(h, { mode: "" } as never, "en")).toBe("Standby");
  });

  it("localizes to Portuguese", () => {
    const h = hass({
      "sensor.x_mode": "game",
      "sensor.x_game": "Mario",
      "sensor.x_core": "snes9x",
    });
    expect(
      computeStateLine(h, {
        mode: "sensor.x_mode",
        game: "sensor.x_game",
        core: "sensor.x_core",
      } as never, "pt-BR")
    ).toBe("Jogando Mario (snes9x)");
  });
});
