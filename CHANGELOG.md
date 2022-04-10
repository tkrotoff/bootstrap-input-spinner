## 0.20.4 (2021/04/11)

- Update npm packages, switch to Parcel 2

## 0.20.3 (2021/11/27)

- Update npm packages

## 0.20.2 (2021/05/08)

- Update npm packages
- Bootstrap 5.0.0 (instead of 5.0.0-beta3)

## 0.20.1 (2021/04/24)

- Fix links to Bootstrap 4 versions

## 0.20.0 (2021/04/18)

- Switch from Bootstrap 4 to Bootstrap 5 (5.0.0-beta3)
- Handle input-group cleanly
- Better example

## 0.10.2 (2021/04/08)

- Fix example's debug checkbox under IE
- Small improvements

## 0.10.1 (2021/04/08)

- Update npm packages

## 0.10.0 (2021/02/19)

- Breaking change: full rewrite to support `<textarea>` and `<select>`

  - `is-loading` must be on the input's parent instead of on the input
  - no more `is-loading-sm`

  ```HTML
  <!-- Before -->
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" id="email" class="form-control is-loading is-loading-sm">
    <span class="spinner-border spinner-border-sm"></span>
  </div>

  <!-- After -->
  <div class="form-group">
    <label for="email">Email address</label>
    <div class="is-loading">
      <input type="email" id="email" class="form-control">
      <div class="spinner-border spinner-border-sm"></div>
    </div>
  </div>
  ```

- Way more tests
- Update npm packages
- Needs Bootstrap >= 4.4

## 0.4.1 (2020/08/18)

- Opacify the spinner in a readonly input

## 0.4.0 (2020/08/17)

- Breaking change: rename bootstrap4-input-spinner.scss to bootstrap-input-spinner.scss
  - I won't have the man power to maintain Bootstrap 4 & 5

## 0.3.2 (2020/08/17)

- Opacify the spinner in a disabled input
- Update npm packages

## 0.3.1 (2020/03/18)

- CI/CD with GitHub Actions
- Update npm packages

## 0.3.0 (2020/01/05)

- Update npm packages

## 0.2.1 (2019/09/10)

- Fix scss with npm package sass
- Switch from node-sass to sass

## 0.2.0 (2019/09/10)

- Support is-loading and is-valid/is-invalid at the same time
- Use ~ instead of + otherwise it doesn't play nice with @tkrotoff/bootstrap-floating-label

## 0.1.1 (2019/06/19)

- Fix password input under IE: remove inner calc()

## 0.1.0 (2019/06/18)

- Rename from bootstrap-spinner to bootstrap-input-spinner
- Rewrite to support Bootstrap >= 4.2

## 0.0.4 (2019/06/17)

- Use Stylelint
- Switch from Yarn to npm

## 0.0.3 (2019/03/25)

- No package.json side effects
- Improve documentation

## 0.0.2 (2019/03/18)

First release
