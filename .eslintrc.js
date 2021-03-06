module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ["standard", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    semi: ["error", "always"],
  },
};
