module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "standard-with-typescript",
    // ほかの設定を上書きするため最後に配置
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-use-before-define": ["error", { variables: false }],
    "@typescript-eslint/no-parameter-properties": [
      "error",
      { allows: ["private"] },
    ],
  },
};
