// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  plugins: ["vue"],
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  "extends": ["eslint:recommended", "vue"],
  "rules": {
    'vue/jsx-uses-vars': 2,
    // enable additional rules
    "indent": [2, 2],
    "semi": ["error", "never"],

    // override default options for rules from base configurations
    "comma-dangle": ["error", "never"],
    "no-cond-assign": ["error", "always"],

    // disable rules from base configurations
    "no-console": "off",
  }
}
