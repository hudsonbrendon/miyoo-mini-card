import { css } from "lit";

export const cardStyles = css`
  :host {
    --mmc-bg: var(--ha-card-background, var(--card-background-color, #1c1f25));
    --mmc-fg: var(--primary-text-color, #fff);
    --mmc-muted: var(--secondary-text-color, #94a3b8);
    --mmc-accent: var(--accent-color, #38bdf8);
    --mmc-divider: rgba(255, 255, 255, 0.06);
    display: block;
  }
  ha-card {
    padding: 14px 14px 6px;
    background: var(--mmc-bg);
    color: var(--mmc-fg);
  }

  /* ── Header: 3 status badges + kebab ──────────────────────────────── */
  .mmc-header {
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 4px 4px 8px;
  }
  .mmc-header .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--mmc-muted);
    font-size: 0.95rem;
    font-variant-numeric: tabular-nums;
  }
  .mmc-header ha-icon {
    --mdc-icon-size: 18px;
    color: var(--mmc-muted);
  }
  .mmc-header .spacer { flex: 1; }
  .mmc-header .menu-dot {
    color: var(--mmc-muted);
    font-size: 1.1rem;
    cursor: default;
    padding: 0 4px;
  }

  /* ── Device illustration (photo + screen overlay + charging LED) ─── */
  .mmc-device {
    display: flex;
    justify-content: center;
    margin: 4px 0 6px;
  }
  .mmc-photo {
    position: relative;
    width: 100%;
    max-width: 260px;
    line-height: 0;
  }
  .mmc-photo-img {
    width: 100%;
    height: auto;
    display: block;
  }
  /* Overlay positioned over the screen region of the photo.
     Tuned for the cropped 218×300 product shot. */
  .mmc-screen-overlay {
    position: absolute;
    top: 7.5%;
    bottom: 53%;
    left: 14%;
    right: 14%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    pointer-events: none;
    line-height: 1.2;
  }
  .mmc-screen-line1 {
    color: #fff;
    font: 700 14px sans-serif;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .mmc-screen-line2 {
    color: #94a3b8;
    font: 500 10px sans-serif;
    letter-spacing: 1px;
    margin-top: 4px;
  }
  .mmc-led-charging {
    position: absolute;
    top: 2.5%;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 6px #22c55e, 0 0 10px #22c55e;
    animation: mmc-pulse 1.6s ease-in-out infinite;
  }
  @keyframes mmc-pulse {
    0%, 100% { opacity: 0.7; transform: translateX(-50%) scale(1); }
    50%      { opacity: 1.0; transform: translateX(-50%) scale(1.3); }
  }

  /* ── Device name + status line ────────────────────────────────────── */
  .mmc-name {
    text-align: center;
    font-size: 1.4rem;
    font-weight: 600;
    margin: 6px 0 2px;
  }
  .mmc-status {
    text-align: center;
    color: var(--mmc-muted);
    font-size: 0.95rem;
    margin: 0 0 14px;
    min-height: 1.2em;
  }
  .mmc-status .play-icon {
    font-size: 0.85em;
    margin-right: 6px;
  }
  .mmc-status .charging-icon {
    color: var(--mmc-accent);
    margin-left: 6px;
  }

  /* ── Stats grid: 4 columns with vertical dividers ─────────────────── */
  .mmc-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid var(--mmc-divider);
    border-bottom: 1px solid var(--mmc-divider);
    padding: 14px 0;
  }
  .mmc-stat {
    text-align: center;
    border-right: 1px solid var(--mmc-divider);
    padding: 0 4px;
  }
  .mmc-stat:last-child {
    border-right: none;
  }
  .mmc-stat-val {
    font-size: 1.25rem;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }
  .mmc-stat-sub {
    font-size: 0.78rem;
    color: var(--mmc-muted);
    margin-top: 2px;
  }

  /* ── Action bar at bottom ─────────────────────────────────────────── */
  .mmc-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 2px 6px;
  }
  .mmc-actions .group {
    display: flex;
    gap: 18px;
    align-items: center;
  }
  .mmc-actions ha-icon {
    --mdc-icon-size: 22px;
    color: var(--mmc-muted);
    cursor: default;
    transition: color 0.18s ease;
  }
  .mmc-actions ha-icon.active { color: var(--mmc-fg); }
  .mmc-actions ha-icon.warn   { color: #fbbf24; }
  .mmc-actions ha-icon.good   { color: #22c55e; }
  .mmc-actions ha-icon.bad    { color: #ef4444; }

`;
