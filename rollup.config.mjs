import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/miyoo-mini-card.ts",
  output: {
    file: "dist/miyoo-mini-card.js",
    format: "es",
    sourcemap: false,
  },
  plugins: [resolve(), commonjs(), json(), typescript(), terser()],
};
