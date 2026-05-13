import { describe, it, expect } from "vitest";
import { formatStat } from "../src/helpers/format-stat";

describe("formatStat", () => {
  it("returns em-dash for missing state", () => {
    expect(formatStat(undefined, { entity: "x", subtitle: "Battery" })).toBe("—");
    expect(formatStat({ state: "unknown" } as never, { entity: "x", subtitle: "Battery" })).toBe("—");
    expect(formatStat({ state: "unavailable" } as never, { entity: "x", subtitle: "Battery" })).toBe("—");
  });

  it("appends unit", () => {
    expect(formatStat({ state: "42" } as never, { entity: "x", subtitle: "S", unit: "%" })).toBe("42%");
  });

  it("multiplies before formatting", () => {
    expect(formatStat({ state: "1.5" } as never, { entity: "x", subtitle: "S", multiply: 60, unit: "min" })).toBe("90min");
  });

  it("respects precision", () => {
    expect(formatStat({ state: "3.14159" } as never, { entity: "x", subtitle: "S", precision: 2 })).toBe("3.14");
  });

  it("falls back to raw string for non-numeric state", () => {
    expect(formatStat({ state: "mainui" } as never, { entity: "x", subtitle: "Mode" })).toBe("mainui");
  });

  it("supports suffix on raw string fallback", () => {
    expect(formatStat({ state: "GBA" } as never, { entity: "x", subtitle: "Core", suffix: " core" })).toBe("GBA core");
  });
});
