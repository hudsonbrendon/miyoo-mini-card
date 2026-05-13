import { css } from "lit";

export const cardStyles = css`
  :host {
    --mmc-bg: var(--ha-card-background, var(--card-background-color, #1a1a1a));
    --mmc-fg: var(--primary-text-color, #fff);
    --mmc-muted: var(--secondary-text-color, #aaa);
    --mmc-accent: var(--accent-color, #38bdf8);
    display: block;
  }
  ha-card {
    padding: 16px;
    background: var(--mmc-bg);
    color: var(--mmc-fg);
  }
  .mmc-title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 6px;
  }
  .mmc-state-line {
    font-size: 0.92rem;
    color: var(--mmc-muted);
    margin-bottom: 12px;
    min-height: 1.2em;
  }
  .mmc-state-line .charging {
    color: var(--mmc-accent);
    margin-left: 6px;
  }
  .mmc-svg-wrap {
    display: flex;
    justify-content: center;
    margin: 6px 0 14px;
  }
  .mmc-svg-wrap svg {
    width: 100%;
    max-width: 280px;
    height: auto;
  }
  .mmc-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
  .mmc-stat {
    background: rgba(255, 255, 255, 0.04);
    border-radius: 10px;
    padding: 8px 6px;
    text-align: center;
  }
  .mmc-stat-val {
    font-size: 1rem;
    font-weight: 700;
  }
  .mmc-stat-sub {
    font-size: 0.72rem;
    color: var(--mmc-muted);
    margin-top: 2px;
  }
  .mmc-screen-text {
    font: 700 16px sans-serif;
    fill: #fff;
    text-anchor: middle;
    dominant-baseline: middle;
  }
  .mmc-screen-sub {
    font: 500 11px sans-serif;
    fill: #94a3b8;
    text-anchor: middle;
    letter-spacing: 1px;
  }
`;
