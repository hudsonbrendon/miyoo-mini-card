import { describe, it, expect } from "vitest";
import "../src/miyoo-mini-card";
import { CARD_NAME } from "../src/const";
import type { MiyooMiniCardConfig } from "../src/types";

interface Entry {
  type: string;
  documentationURL?: string;
  getEntitySuggestion?: (hass: unknown, id: string) => unknown;
}
interface CardCtor extends CustomElementConstructor {
  getConfigForm(): { schema: Array<{ name: string }>; computeLabel(s: { name: string }): string };
  getConfigElement?: unknown;
}
interface CardEl extends HTMLElement {
  setConfig(c: MiyooMiniCardConfig): void;
  getCardSize(): number;
  getGridOptions(): { rows: number; columns: number };
}

const st = (id: string, state: string) => [id, { state, attributes: {} }] as const;
const hass = {
  states: Object.fromEntries([
    st("sensor.miyoo_main_miyoo_battery", "80"),
    st("binary_sensor.miyoo_main_miyoo_charging", "off"),
    st("sensor.phone_battery_level", "50"),
  ]),
};

describe("card registration", () => {
  const entry = (window as Window & { customCards?: Entry[] }).customCards!.find((c) => c.type === CARD_NAME)!;

  it("defines the element and documents it", () => {
    expect(customElements.get(CARD_NAME)).toBeTruthy();
    expect(entry.documentationURL).toBe("https://github.com/hudsonbrendon/miyoo-mini-card");
  });

  it("suggests the card only for a battery sensor with a sibling charging sensor", () => {
    expect(entry.getEntitySuggestion!(hass, "sensor.miyoo_main_miyoo_battery")).toEqual({
      config: { type: `custom:${CARD_NAME}`, entity: "miyoo_main" },
    });
    expect(entry.getEntitySuggestion!(hass, "sensor.phone_battery_level")).toBeNull();
    expect(entry.getEntitySuggestion!(hass, "binary_sensor.miyoo_main_miyoo_charging")).toBeNull();
  });
});

describe("card API", () => {
  it("getGridOptions matches getCardSize", () => {
    const c = document.createElement(CARD_NAME) as CardEl;
    c.setConfig({ type: `custom:${CARD_NAME}`, entity: "miyoo_main" });
    expect(c.getGridOptions()).toMatchObject({ rows: c.getCardSize(), columns: 6 });
  });

  it("getConfigForm exposes an ha-form schema and no stub editor", () => {
    const Card = customElements.get(CARD_NAME) as CardCtor;
    const form = Card.getConfigForm();
    expect(form.schema.map((s) => s.name)).toEqual(["entity", "name", "language"]);
    expect(form.computeLabel({ name: "name" })).toBe("Name");
    expect(Card.getConfigElement).toBeUndefined();
    expect(customElements.get(`${CARD_NAME}-editor`)).toBeUndefined();
  });
});
