export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: ["error", "double", { avoidEscape: true }],
    "jsx-quotes": ["error", "prefer-double"],
    // Otras reglas de ESLint que necesites
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
