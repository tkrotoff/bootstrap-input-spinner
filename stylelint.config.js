// @ts-check

/** @type {Partial<import('stylelint').Configuration>} */
const config = {
  extends: [
    // /!\ Order matters: the next one overrides rules from the previous one

    // Includes stylelint-config-recommended-scss and stylelint-config-standard
    'stylelint-config-twbs-bootstrap/scss',

    'stylelint-prettier/recommended'
  ],

  rules: {
    'selector-no-qualifying-type': null,
    // Instead of 4: https://github.com/twbs/stylelint-config-twbs-bootstrap/blob/v2.1.0/css/index.js#L257
    'selector-max-class': 5,
    'no-invalid-position-at-import-rule': null
  }
};

module.exports = config;
