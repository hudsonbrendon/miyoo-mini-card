import { LitElement, html, type TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { MiyooMiniCardConfig } from "./types";

@customElement("miyoo-mini-card-editor")
export class MiyooMiniCardEditor extends LitElement {
  @property({ attribute: false }) hass?: unknown;
  @property({ attribute: false }) _config?: MiyooMiniCardConfig;

  setConfig(config: MiyooMiniCardConfig): void {
    this._config = config;
  }

  render(): TemplateResult {
    return html`
      <div style="padding:12px;font-family:sans-serif;">
        <p>
          Edit YAML directly in the dashboard. Minimum config:
        </p>
        <pre style="background:#0a0a0a;color:#ccc;padding:10px;border-radius:6px;">
type: custom:miyoo-mini-card
entity: miyoo_mini_plus_miyoominiplus
name: My Miyoo</pre>
        <p>See the
          <a href="https://github.com/hudsonbrendon/miyoo-mini-card"
             target="_blank" rel="noreferrer">README</a>
          for all options.
        </p>
      </div>
    `;
  }
}
