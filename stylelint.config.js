// @ts-check

/** @type {Partial<import('stylelint').Config>} */
const config = {
  extends: [
    // /!\ Order matters: the next one overrides rules from the previous one

    // Extends stylelint-config-standard-scss which extends stylelint-config-recommended-scss
    'stylelint-config-twbs-bootstrap',

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
