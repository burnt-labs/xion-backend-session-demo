const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
  root: true,
  extends: ["next/core-web-vitals", "next/typescript"],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    project,
  },
  ignorePatterns: ["node_modules/", "dist/", ".next/"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
      node: {
        extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-alert": "off",
    "import/no-default-export": "off",
  },
};
