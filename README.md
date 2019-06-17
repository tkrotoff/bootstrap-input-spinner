# @tkrotoff/bootstrap-input-spinner

[![npm version](https://badge.fury.io/js/%40tkrotoff%2Fbootstrap-input-spinner.svg)](https://www.npmjs.com/package/@tkrotoff/bootstrap-input-spinner)
[![Build Status](https://travis-ci.org/tkrotoff/bootstrap-input-spinner.svg?branch=master)](https://travis-ci.org/tkrotoff/bootstrap-input-spinner)

Bootstrap >= 4.2 spinner/loading/pending indicator for `<input>`

![demo](doc/demo.gif)

Example: https://codesandbox.io/s/github/tkrotoff/bootstrap-input-spinner

- Small: less than 50 lines of [SCSS](src/bootstrap4-input-spinner.scss)
- Works in latest browsers and IE >= 10
- Uses [Bootstrap variables](https://getbootstrap.com/docs/4.3/getting-started/theming/#variable-defaults): nothing hardcoded

⚠️ Latest implementation for Bootstrap < 4.2 is [bootstrap-spinner v0.0.4](https://github.com/tkrotoff/bootstrap-input-spinner/tree/v0.0.4)

## Usage

`npm install @tkrotoff/bootstrap-input-spinner`

Import [bootstrap4-input-spinner.scss](src/bootstrap4-input-spinner.scss):

```SCSS
@import '~@tkrotoff/bootstrap-input-spinner/src/bootstrap4-input-spinner';
```

Modify your [Bootstrap 4 code](https://getbootstrap.com/docs/4.3/components/forms/) as follow:

```HTML
<div class="form-group">
  <label for="email">Email address</label>
  <input type="email" id="email" class="form-control is-loading is-loading-sm">
  <span class="spinner-border spinner-border-sm"></span>
</div>
```
