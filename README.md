# @tkrotoff/bootstrap-input-spinner

[![npm version](https://badge.fury.io/js/%40tkrotoff%2Fbootstrap-input-spinner.svg)](https://www.npmjs.com/package/@tkrotoff/bootstrap-input-spinner)
[![Node.js CI](https://github.com/tkrotoff/bootstrap-input-spinner/workflows/Node.js%20CI/badge.svg?branch=master)](https://github.com/tkrotoff/bootstrap-input-spinner/actions)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Bootstrap >= 5 spinner/loading/pending indicator for `<input>`, `<textarea>` and `<select>`

![demo](doc/demo.gif)

Example: https://codesandbox.io/s/github/tkrotoff/bootstrap-input-spinner/tree/codesandbox.io

- Small: ~200 lines of [SCSS](src/bootstrap-input-spinner.scss)
- Works in latest browsers and IE 11
- Uses [Bootstrap variables](https://getbootstrap.com/docs/5.0/customize/sass/#variable-defaults)

Check the [changelog](CHANGELOG.md) for breaking changes and fixes between releases.

⚠️ Latest implementation for Bootstrap >= 4.2 & < 5 is [@tkrotoff/bootstrap-spinner v0.0.4](https://github.com/tkrotoff/bootstrap-input-spinner/tree/v0.0.4)
⚠️ Latest implementation for Bootstrap < 4.2 is [@tkrotoff/bootstrap-input-spinner v0.10](https://github.com/tkrotoff/bootstrap-input-spinner/tree/v0.10.2)

## Usage

`npm install @tkrotoff/bootstrap-input-spinner`

Import [bootstrap-input-spinner.scss](src/bootstrap-input-spinner.scss):

```SCSS
@import '~@tkrotoff/bootstrap-input-spinner/src/bootstrap-input-spinner';
```

Modify your [Bootstrap 5 code](https://getbootstrap.com/docs/5.0/forms/overview/) as follow:

```HTML
<div class="mb-3">
  <label for="email">Email address</label>
  <div class="is-loading">
    <input type="email" id="email" class="form-control">
    <div class="spinner-border spinner-border-sm"></div>
  </div>
</div>
```
