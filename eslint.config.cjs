module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: {
        require: "readonly",
        exports: "readonly",
        module: "writable",
        __filename: "readonly",
        __dirname: "readonly",
        process: "readonly",
        Buffer: "readonly",
        global: "readonly",
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
      }
    },
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "indent": ["error", 2],
      "no-unused-vars": "warn",
      "no-console": "off",
      "max-len": ["error", { "code": 140 }]
    }
  }
];