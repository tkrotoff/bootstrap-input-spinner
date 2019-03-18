# @tkrotoff/bootstrap-spinner

[![Build Status](https://travis-ci.org/tkrotoff/bootstrap-spinner.svg?branch=master)](https://travis-ci.org/tkrotoff/bootstrap-spinner)

⚠️ This code is kind of "obsolete" now since Bootstrap >= 4.2 includes spinners: https://getbootstrap.com/docs/4.2/components/spinners/

Example of a Bootstrap >= 4.2 spinner inside an `<input>`:

```HTML
<input class="form-control is-pending is-pending-sm">
<span class="spinner-border spinner-border-sm"></span>

<input class="form-control is-pending">
<span class="spinner-border"></span>
```

```SCSS
// Fix for IE, see https://github.com/postcss/autoprefixer/issues/1153
$input-height-without-calc-for-ie: str-replace($input-height, 'calc');

input.is-pending {
  padding-right: calc(#{$spinner-width} - #{$input-border-width} * 2 + #{$input-padding-x});

  &.is-pending-sm {
    padding-right: calc(#{$spinner-width-sm} - #{$input-border-width} * 2 + #{$input-padding-x});
  }

  + .spinner-border {
    float: right;
    margin-right: $input-padding-x / 2;
    margin-top: calc((#{$input-height-without-calc-for-ie} + #{$spinner-height}) / -2);

    &.spinner-border-sm {
      margin-top: calc((#{$input-height-without-calc-for-ie} + #{$spinner-height-sm}) / -2);
    }
  }
}
```

<hr>

Bootstrap 4 spinner for `<input>` and `<button>`

![demo](doc/demo.gif)

Example: https://codesandbox.io/s/github/tkrotoff/bootstrap-spinner

- Small: less than 100 lines of [SCSS](src/bootstrap4-spinner.scss)
- No SVG, image... just CSS
- Works in latest browsers and IE >= 10
- Uses [Bootstrap variables](https://getbootstrap.com/docs/4.3/getting-started/theming/#variable-defaults): nothing hardcoded

## Usage

`yarn add @tkrotoff/bootstrap-spinner` or `npm install @tkrotoff/bootstrap-spinner`

Import [bootstrap4-spinner.scss](src/bootstrap4-spinner.scss) and then modify your [Bootstrap 4 code](https://getbootstrap.com/docs/4.3/components/forms/) as follow:

```HTML
<div class="form-group">
  <label for="email">Email address</label>
  <input type="email" id="email" class="form-control is-pending">
  <span class="spinner"></span>
</div>
```

```HTML
<button class="btn btn-primary btn-spinner">
  <span class="spinner"></span>
  Submit
</button>
```

You can change the spinner size by overwriting Sass variable `$spinner-size`:

```SCSS
import '~@tkrotoff/bootstrap-spinner/src/bootstrap4-spinner';

$spinner-size: 40px;
```
