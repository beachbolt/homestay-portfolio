import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import astroParser from "astro-eslint-parser";
import * as astroPlugin from "eslint-plugin-astro";

export default [
  {
    ignores: ["node_modules", "dist"],
  },

  // ✅ JS recommended config
  js.configs.recommended,

  // ✅ TS configs (spread the array at top-level, not nested)
  ...tseslint.configs.recommended,

  // ✅ Prettier formatting rules
  {
    plugins: { prettier },
    rules: {
      "prettier/prettier": "error",
    },
  },

  // ✅ Astro config
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
    plugins: {
      astro: astroPlugin,
    },
    rules: {
      "astro/no-conflict-set-directives": "error",
      "astro/no-deprecated-astro-canonicalurl": "warn",
      "astro/no-unused-css-selector": "warn",
    },
  },
];
