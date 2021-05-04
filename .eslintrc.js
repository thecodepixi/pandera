module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": "warn",
    "import/extensions": "disable",
  },
  settings: {
    usePrettierrc: true,
  },
};
