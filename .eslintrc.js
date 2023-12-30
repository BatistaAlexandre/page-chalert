module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ["plugin:vue/base"],
  plugins: [],
  // add your custom rules here
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/no-v-for-template-key-on-child": "off",
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
};
