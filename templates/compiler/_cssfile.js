var _cssfile= `
*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #414141;
  text-align: left;
  background-color: #fff;
}

[tabindex="-1"]:focus {
  outline: 0 !important;
}

h1, h2, h3, h4, h5, h6, p {
  margin-top: 0;
  margin-bottom: 0;
}

ol, ul, dl {
  margin-top: 0;
  margin-bottom: 0;
}

small {
  font-size: 80%;
}

sub, sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -.25em;
}

sup {
  top: -.5em;
}

a {
  color: inherit;
  text-decoration: none;
  background-color: transparent;
  outline: 0;
}

a:hover {
  color: inherit;
}

img {
  vertical-align: middle;
  border-style: none;
}

svg {
  overflow: hidden;
  vertical-align: middle;
}

label {
  display: inline-block;
  margin-bottom: 0;
}

button {
  border-radius: 0;
}

button:focus {
  outline: 0;
}

input, button, select, optgroup, textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button, input {
  overflow: visible;
}

button, select {
  text-transform: none;
}

select {
  word-wrap: normal;
}

button, [type="button"], [type="reset"], [type="submit"] {
  -webkit-appearance: button;
}

button:not(:disabled), [type="button"]:not(:disabled), [type="reset"]:not(:disabled), [type="submit"]:not(:disabled) {
  cursor: pointer;
}

button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

input[type="radio"], input[type="checkbox"] {
  box-sizing: border-box;
  padding: 0;
}

input[type="date"], input[type="time"], input[type="datetime-local"], input[type="month"] {
  -webkit-appearance: listbox;
}

textarea {
  overflow: auto;
  resize: vertical;
}

h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
  margin-bottom: 0;
  font-weight: 500;
  line-height: 1.2;
}

h1, .h1 {
  font-size: 2.5rem;
}

h2, .h2 {
  font-size: 2rem;
}

h3, .h3 {
  font-size: 1.75rem;
}

h4, .h4 {
  font-size: 1.5rem;
}

h5, .h5 {
  font-size: 1.25rem;
}

h6, .h6 {
  font-size: 1rem;
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

.list-inline-item {
  display: inline-block;
}

.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  max-width: 100%;
  height: auto;
}
.container {
  width: 100%;
  max-width: 1336px;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.pointer {
  cursor: pointer;
}
.btn:hover {
  color: #212529;
  text-decoration: none;
}

.btn:focus, .btn.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.btn.disabled, .btn:disabled {
  opacity: 0.65;
  pointer-events: none;
}


input[type="submit"].btn-block, input[type="reset"].btn-block, input[type="button"].btn-block {
  width: 100%;
}

.fade {
  transition: opacity 0.15s linear;
}

.show {
  display: block!important;
}
.fade:not(.show) {
  opacity: 0;
}

.collapse:not(.show) {
  display: none;
}

.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}


.custom-control {
  position: relative;
  display: block;
  min-height: 1.5rem;
  padding-left: 1.5rem;
}

.custom-control-inline {
  display: -ms-inline-flexbox;
  display: inline-flex;
  margin-right: 1rem;
}

.custom-control-input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}


.custom-control-input:not(:disabled):active ~ .custom-control-label::before {
  color: #fff;
  background-color: #b3d7ff;
}


.custom-control-label {
  position: relative;
  margin-bottom: 0;
  vertical-align: top;
}

.custom-control-label::before {
  position: absolute;
  top: 0.25rem;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  pointer-events: none;
  content: "";
  background-color: #fff;
  border: 1px solid #C4C4C4;
}

.custom-control-label::after {
  position: absolute;
  top: 0.25rem;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  content: "";
  background: no-repeat 50% / 50% 50%;
}

.custom-checkbox .custom-control-label::before {
  border-radius: 0.25rem;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%234e4e4e' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

.custom-radio .custom-control-label::before {
  border-radius: 50%;
}

.custom-radio .custom-control-input:checked ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}

.custom-switch {
  padding-left: 2.25rem;
}

.custom-switch .custom-control-label::before {
  left: -2.25rem;
  width: 1.75rem;
  pointer-events: all;
  border-radius: 0.5rem;
}

.custom-switch .custom-control-label::after {
  top: calc(0.25rem + 2px);
  left: calc(-2.25rem + 2px);
  width: calc(1rem - 4px);
  height: calc(1rem - 4px);
  background-color: #adb5bd;
  border-radius: 0.5rem;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out;
  transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out;
}

.custom-switch .custom-control-input:checked ~ .custom-control-label::after {
  background-color: #fff;
  -webkit-transform: translateX(0.75rem);
  transform: translateX(0.75rem);
}

.custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before {
  background-color: rgba(0, 123, 255, 0.5);
}

.custom-select {
  display: inline-block;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #4e4e4e;
  vertical-align: middle;
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right 0.75rem center/8px 10px;
  background-color: #fff;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.custom-select:hover {
  border: 1px solid #A6A6A6;
}
input:hover {
  border: 1px solid #A6A6A6!important;
}
input::placeholder {
  color: #4e4e4e;
  opacity: 0.5;
  transition-duration: 0.3s;
}
input:-webkit-autofill
{
  -webkit-box-shadow: 0 0 0 30px white inset !important;
}
input:hover::placeholder {
  color: #4e4e4e;
  opacity: 1;
}

.custom-file {
  position: relative;
  display: inline-block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  margin-bottom: 0;
}

.custom-file-input {
  position: relative;
  z-index: 2;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  margin: 0;
  opacity: 0;
}

.custom-file-input:focus ~ .custom-file-label {
  border-color: #80bdff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-file-input:disabled ~ .custom-file-label {
  background-color: #e9ecef;
}

.custom-file-input:lang(en) ~ .custom-file-label::after {
  content: "Browse";
}

.custom-file-input ~ .custom-file-label[data-browse]::after {
  content: attr(data-browse);
}

.custom-file-label {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

.custom-file-label::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: block;
  height: calc(1.5em + 0.75rem);
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  color: #495057;
  content: "Browse";
  background-color: #e9ecef;
  border-left: inherit;
  border-radius: 0 0.25rem 0.25rem 0;
}

.custom-range {
  width: 100%;
  height: calc(1rem + 0.4rem);
  padding: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.custom-range:focus {
  outline: none;
}

.custom-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-range:focus::-ms-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-range::-moz-focus-outer {
  border: 0;
}

.custom-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -0.25rem;
  background-color: #007bff;
  border: 0;
  border-radius: 1rem;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  appearance: none;
}


.custom-range::-webkit-slider-thumb:active {
  background-color: #b3d7ff;
}

.custom-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}

.custom-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  background-color: #007bff;
  border: 0;
  border-radius: 1rem;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -moz-appearance: none;
  appearance: none;
}


.custom-range::-moz-range-thumb:active {
  background-color: #b3d7ff;
}

.custom-range::-moz-range-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}

.custom-range::-ms-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: 0;
  margin-right: 0.2rem;
  margin-left: 0.2rem;
  background-color: #007bff;
  border: 0;
  border-radius: 1rem;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
}


.custom-range::-ms-thumb:active {
  background-color: #b3d7ff;
}

.custom-range::-ms-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: transparent;
  border-color: transparent;
  border-width: 0.5rem;
}

.custom-range::-ms-fill-lower {
  background-color: #dee2e6;
  border-radius: 1rem;
}

.custom-range::-ms-fill-upper {
  margin-right: 15px;
  background-color: #dee2e6;
  border-radius: 1rem;
}

.custom-range:disabled::-webkit-slider-thumb {
  background-color: #adb5bd;
}

.custom-range:disabled::-webkit-slider-runnable-track {
  cursor: default;
}

.custom-range:disabled::-moz-range-thumb {
  background-color: #adb5bd;
}

.custom-range:disabled::-moz-range-track {
  cursor: default;
}

.custom-range:disabled::-ms-thumb {
  background-color: #adb5bd;
}

.custom-control-label::before, .custom-file-label, .custom-select {
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}


.align-baseline {
  vertical-align: baseline !important;
}

.align-top {
  vertical-align: top !important;
}

.align-middle {
  vertical-align: middle !important;
}

.align-bottom {
  vertical-align: bottom !important;
}

.align-text-bottom {
  vertical-align: text-bottom !important;
}

.align-text-top {
  vertical-align: text-top !important;
}

.rounded {
  border-radius: 0.25rem!important;
}

.rounded-top {
  border-top-left-radius: 0.25rem!important;
  border-top-right-radius: 0.25rem!important;
}

.rounded-right {
  border-top-right-radius: 0.25rem!important;
  border-bottom-right-radius: 0.25rem!important;
}

.rounded-bottom {
  border-bottom-right-radius: 0.25rem!important;
  border-bottom-left-radius: 0.25rem!important;
}

.rounded-left {
  border-top-left-radius: 0.25rem!important;
  border-bottom-left-radius: 0.25rem!important;
}

.rounded-circle {
  border-radius: 50% !important;
}

.rounded-0 {
  border-radius: 0 !important;
}


.d-none {
  display: none !important;
}

.d-inline {
  display: inline !important;
}

.d-inline-block {
  display: inline-block !important;
}

.d-block {
  display: block !important;
}

.d-flex {
  display: -ms-flexbox !important;
  display: flex !important;
}

.d-inline-flex {
  display: -ms-inline-flexbox !important;
  display: inline-flex !important;
}


.flex-row {
  -ms-flex-direction: row !important;
  flex-direction: row !important;
}

.flex-column {
  -ms-flex-direction: column !important;
  flex-direction: column !important;
}

.flex-row-reverse {
  -ms-flex-direction: row-reverse !important;
  flex-direction: row-reverse !important;
}

.flex-column-reverse {
  -ms-flex-direction: column-reverse !important;
  flex-direction: column-reverse !important;
}

.flex-wrap {
  -ms-flex-wrap: wrap !important;
  flex-wrap: wrap !important;
}

.flex-nowrap {
  -ms-flex-wrap: nowrap !important;
  flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
  -ms-flex-wrap: wrap-reverse !important;
  flex-wrap: wrap-reverse !important;
}

.flex-fill {
  -ms-flex: 1 1 auto !important;
  flex: 1 1 auto !important;
}

.flex-grow-0 {
  -ms-flex-positive: 0 !important;
  flex-grow: 0 !important;
}

.flex-grow-1 {
  -ms-flex-positive: 1 !important;
  flex-grow: 1 !important;
}

.flex-shrink-0 {
  -ms-flex-negative: 0 !important;
  flex-shrink: 0 !important;
}

.flex-shrink-1 {
  -ms-flex-negative: 1 !important;
  flex-shrink: 1 !important;
}

.justify-content-start {
  -ms-flex-pack: start !important;
  justify-content: flex-start !important;
}

.justify-content-end {
  -ms-flex-pack: end !important;
  justify-content: flex-end !important;
}

.justify-content-center {
  -ms-flex-pack: center !important;
  justify-content: center !important;
}

.justify-content-between {
  -ms-flex-pack: justify !important;
  justify-content: space-between !important;
}

.justify-content-around {
  -ms-flex-pack: distribute !important;
  justify-content: space-around !important;
}

.align-items-start {
  -ms-flex-align: start !important;
  align-items: flex-start !important;
}

.align-items-end {
  -ms-flex-align: end !important;
  align-items: flex-end !important;
}

.align-items-center {
  -ms-flex-align: center !important;
  align-items: center !important;
}

.align-items-baseline {
  -ms-flex-align: baseline !important;
  align-items: baseline !important;
}

.align-items-stretch {
  -ms-flex-align: stretch !important;
  align-items: stretch !important;
}

.align-content-start {
  -ms-flex-line-pack: start !important;
  align-content: flex-start !important;
}

.align-content-end {
  -ms-flex-line-pack: end !important;
  align-content: flex-end !important;
}

.align-content-center {
  -ms-flex-line-pack: center !important;
  align-content: center !important;
}

.align-content-between {
  -ms-flex-line-pack: justify !important;
  align-content: space-between !important;
}

.align-content-around {
  -ms-flex-line-pack: distribute !important;
  align-content: space-around !important;
}

.align-content-stretch {
  -ms-flex-line-pack: stretch !important;
  align-content: stretch !important;
}
.fit-cover {
  object-fit: cover;
}
.fit-contain {
  object-fit: contain;
}

.align-self-auto {
  -ms-flex-item-align: auto !important;
  align-self: auto !important;
}

.align-self-start {
  -ms-flex-item-align: start !important;
  align-self: flex-start !important;
}

.align-self-end {
  -ms-flex-item-align: end !important;
  align-self: flex-end !important;
}

.align-self-center {
  -ms-flex-item-align: center !important;
  align-self: center !important;
}

.align-self-baseline {
  -ms-flex-item-align: baseline !important;
  align-self: baseline !important;
}

.align-self-stretch {
  -ms-flex-item-align: stretch !important;
  align-self: stretch !important;
}


.float-left {
  float: left !important;
}

.float-right {
  float: right !important;
}

.float-none {
  float: none !important;
}



.overflow-auto {
  overflow: auto !important;
}

.overflow-hidden {
  overflow: hidden !important;
}

.position-static {
  position: static !important;
}

.position-relative {
  position: relative !important;
}

.position-absolute {
  position: absolute !important;
}

.position-fixed {
  position: fixed !important;
}

.position-sticky {
  position: -webkit-sticky !important;
  position: sticky !important;
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}

.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

.shadow-none {
  box-shadow: none !important;
}


.w-20 {
  width: 20% !important;
}

.w-25 {
  width: 25% !important;
}

.w-1-3 {
  width: 33.3% !important;
}

.w-40 {
  width: 40% !important;
}

.w-50 {
  width: 50% !important;
}

.w-60 {
  width: 60% !important;
}

.w-2-3 {
  width: 66.7% !important;
}

.w-75 {
  width: 75% !important;
}

.w-80 {
  width: 80% !important;
}

.w-100 {
  width: 100% !important;
}

.w-auto {
  width: auto !important;
}

.h-20 {
  height: 20% !important;
}

.h-25 {
  height: 25% !important;
}

.h-1-3 {
  height: 33.3% !important;
}

.h-40 {
  height: 40% !important;
}

.h-50 {
  height: 50% !important;
}

.h-60 {
  height: 60% !important;
}

.h-2-3 {
  height: 66.7% !important;
}

.h-75 {
  height: 75% !important;
}

.h-80 {
  height: 80% !important;
}

.h-100 {
  height: 100% !important;
}

.h-auto {
  height: auto !important;
}

.mw-100 {
  max-width: 100% !important;
}

.mh-100 {
  max-height: 100% !important;
}

.min-vw-100 {
  min-width: 100vw !important;
}

.min-vh-100 {
  min-height: 100vh !important;
}

.vw-100 {
  width: 100vw !important;
}

.vh-100 {
  height: 100vh !important;
}


.m-0 {
  margin: 0 !important;
}

.mt-0, .my-0 {
  margin-top: 0 !important;
}

.mr-0, .mx-0 {
  margin-right: 0 !important;
}

.mb-0, .my-0 {
  margin-bottom: 0 !important;
}

.ml-0, .mx-0 {
  margin-left: 0 !important;
}

.m-1 {
  margin: 0.25rem!important;
}

.mt-1, .my-1 {
  margin-top: 0.25rem!important;
}

.mr-1, .mx-1 {
  margin-right: 0.25rem!important;
}

.mb-1, .my-1 {
  margin-bottom: 0.25rem!important;
}

.ml-1, .mx-1 {
  margin-left: 0.25rem!important;
}

.m-2 {
  margin: 0.5rem !important;
}

.mt-2, .my-2 {
  margin-top: 0.5rem !important;
}

.mr-2, .mx-2 {
  margin-right: 0.5rem !important;
}

.mb-2, .my-2 {
  margin-bottom: 0.5rem !important;
}

.ml-2, .mx-2 {
  margin-left: 0.5rem !important;
}

.m-3 {
  margin: 0.75rem !important;
}

.mt-3, .my-3 {
  margin-top: 0.75rem !important;
}

.mr-3, .mx-3 {
  margin-right: 0.75rem !important;
}

.mb-3, .my-3 {
  margin-bottom: 0.75rem !important;
}

.ml-3, .mx-3 {
  margin-left: 0.75rem !important;
}

.m-4 {
  margin: 1rem !important;
}

.mt-4, .my-4 {
  margin-top: 1rem !important;
}

.mr-4, .mx-4 {
  margin-right: 1rem !important;
}

.mb-4, .my-4 {
  margin-bottom: 1rem !important;
}

.ml-4, .mx-4 {
  margin-left: 1rem !important;
}

.m-5 {
  margin: 1.25rem!important;
}

.mt-5, .my-5 {
  margin-top: 1.25rem!important;
}

.mr-5, .mx-5 {
  margin-right: 1.25rem!important;
}

.mb-5, .my-5 {
  margin-bottom: 1.25rem!important;
}

.ml-5, .mx-5 {
  margin-left: 1.25rem!important;
}

.m-6 {
  margin: 1.5rem !important;
}

.mt-6, .my-6 {
  margin-top: 1.5rem !important;
}

.mr-6, .mx-6 {
  margin-right: 1.5rem !important;
}

.mb-6, .my-6 {
  margin-bottom: 1.5rem !important;
}

.ml-6, .mx-6 {
  margin-left: 1.5rem !important;
}

.m-7 {
  margin: 1.75rem !important;
}

.mt-7, .my-7 {
  margin-top: 1.75rem !important;
}

.mr-7, .mx-7 {
  margin-right: 1.75rem !important;
}

.mb-7, .my-7 {
  margin-bottom: 1.75rem !important;
}

.ml-7, .mx-7 {
  margin-left: 1.75rem !important;
}

.m-8 {
  margin: 2rem !important;
}

.mt-8, .my-8 {
  margin-top: 2rem !important;
}

.mr-8, .mx-8 {
  margin-right: 2rem !important;
}

.mb-8, .my-8 {
  margin-bottom: 2rem !important;
}

.ml-8, .mx-8 {
  margin-left: 2rem !important;
}

.m-9 {
  margin: 2.25rem !important;
}

.mt-9, .my-9 {
  margin-top: 2.25rem !important;
}

.mr-9, .mx-9 {
  margin-right: 2.25rem !important;
}

.mb-9, .my-9 {
  margin-bottom: 2.25rem !important;
}

.ml-9, .mx-9 {
  margin-left: 2.25rem !important;
}

.m-10 {
  margin: 2.5rem !important;
}

.mt-10, .my-10 {
  margin-top: 2.5rem !important;
}

.mr-10, .mx-10 {
  margin-right: 2.5rem !important;
}

.mb-10, .my-10 {
  margin-bottom: 2.5rem !important;
}

.ml-10, .mx-10 {
  margin-left: 2.5rem !important;
}

.m-11 {
  margin: 2.75rem !important;
}

.mt-11, .my-11 {
  margin-top: 2.75rem !important;
}

.mr-11, .mx-11 {
  margin-right: 2.75rem !important;
}

.mb-11, .my-11 {
  margin-bottom: 2.75rem !important;
}

.ml-11, .mx-11 {
  margin-left: 2.75rem !important;
}

.m-12 {
  margin: 3rem !important;
}

.mt-12, .my-12 {
  margin-top: 3rem !important;
}

.mr-12, .mx-12 {
  margin-right: 3rem !important;
}

.mb-12, .my-12 {
  margin-bottom: 3rem !important;
}

.ml-12, .mx-12 {
  margin-left: 3rem !important;
}

.p-0 {
  padding: 0 !important;
}

.pt-0, .py-0 {
  padding-top: 0 !important;
}

.pr-0, .px-0 {
  padding-right: 0 !important;
}

.pb-0, .py-0 {
  padding-bottom: 0 !important;
}

.pl-0, .px-0 {
  padding-left: 0 !important;
}

.p-1 {
  padding: 0.25rem!important;
}

.pt-1, .py-1 {
  padding-top: 0.25rem!important;
}

.pr-1, .px-1 {
  padding-right: 0.25rem!important;
}

.pb-1, .py-1 {
  padding-bottom: 0.25rem!important;
}

.pl-1, .px-1 {
  padding-left: 0.25rem!important;
}

.p-2 {
  padding: 0.5rem !important;
}

.pt-2, .py-2 {
  padding-top: 0.5rem !important;
}

.pr-2, .px-2 {
  padding-right: 0.5rem !important;
}

.pb-2, .py-2 {
  padding-bottom: 0.5rem !important;
}

.pl-2, .px-2 {
  padding-left: 0.5rem !important;
}

.p-3 {
  padding: 0.75rem !important;
}

.pt-3, .py-3 {
  padding-top: 0.75rem !important;
}

.pr-3, .px-3 {
  padding-right: 0.75rem !important;
}

.pb-3, .py-3 {
  padding-bottom: 0.75rem !important;
}

.pl-3, .px-3 {
  padding-left: 0.75rem !important;
}

.p-4 {
  padding: 1rem !important;
}

.pt-4, .py-4 {
  padding-top: 1rem !important;
}

.pr-4, .px-4 {
  padding-right: 1rem !important;
}

.pb-4, .py-4 {
  padding-bottom: 1rem !important;
}

.pl-4, .px-4 {
  padding-left: 1rem !important;
}

.p-5 {
  padding: 1.25rem!important;
}

.pt-5, .py-5 {
  padding-top: 1.25rem!important;
}

.pr-5, .px-5 {
  padding-right: 1.25rem!important;
}

.pb-5, .py-5 {
  padding-bottom: 1.25rem!important;
}

.pl-5, .px-5 {
  padding-left: 1.25rem!important;
}

.p-6 {
  padding: 1.5rem !important;
}

.pt-6, .py-6 {
  padding-top: 1.5rem !important;
}

.pr-6, .px-6 {
  padding-right: 1.5rem !important;
}

.pb-6, .py-6 {
  padding-bottom: 1.5rem !important;
}

.pl-6, .px-6 {
  padding-left: 1.5rem !important;
}

.p-7 {
  padding: 1.75rem !important;
}

.pt-7, .py-7 {
  padding-top: 1.75rem !important;
}

.pr-7, .px-7 {
  padding-right: 1.75rem !important;
}

.pb-7, .py-7 {
  padding-bottom: 1.75rem !important;
}

.pl-7, .px-7 {
  padding-left: 1.75rem !important;
}

.p-8 {
  padding: 2rem !important;
}

.pt-8, .py-8 {
  padding-top: 2rem !important;
}

.pr-8, .px-8 {
  padding-right: 2rem !important;
}

.pb-8, .py-8 {
  padding-bottom: 2rem !important;
}

.pl-8, .px-8 {
  padding-left: 2rem !important;
}

.p-9 {
  padding: 2.25rem !important;
}

.pt-9, .py-9 {
  padding-top: 2.25rem !important;
}

.pr-9, .px-9 {
  padding-right: 2.25rem !important;
}

.pb-9, .py-9 {
  padding-bottom: 2.25rem !important;
}

.pl-9, .px-9 {
  padding-left: 2.25rem !important;
}

.p-10 {
  padding: 2.5rem !important;
}

.pt-10, .py-10 {
  padding-top: 2.5rem !important;
}

.pr-10, .px-10 {
  padding-right: 2.5rem !important;
}

.pb-10, .py-10 {
  padding-bottom: 2.5rem !important;
}

.pl-10, .px-10 {
  padding-left: 2.5rem !important;
}

.p-11 {
  padding: 2.75rem !important;
}

.pt-11, .py-11 {
  padding-top: 2.75rem !important;
}

.pr-11, .px-11 {
  padding-right: 2.75rem !important;
}

.pb-11, .py-11 {
  padding-bottom: 2.75rem !important;
}

.pl-11, .px-11 {
  padding-left: 2.75rem !important;
}

.p-12 {
  padding: 3rem !important;
}

.pt-12, .py-12 {
  padding-top: 3rem !important;
}

.pr-12, .px-12 {
  padding-right: 3rem !important;
}

.pb-12, .py-12 {
  padding-bottom: 3rem !important;
}

.pl-12, .px-12 {
  padding-left: 3rem !important;
}

.m-n1 {
  margin: -0.25rem!important;
}

.mt-n1, .my-n1 {
  margin-top: -0.25rem!important;
}

.mr-n1, .mx-n1 {
  margin-right: -0.25rem!important;
}

.mb-n1, .my-n1 {
  margin-bottom: -0.25rem!important;
}

.ml-n1, .mx-n1 {
  margin-left: -0.25rem!important;
}

.m-n2 {
  margin: -0.5rem !important;
}

.mt-n2, .my-n2 {
  margin-top: -0.5rem !important;
}

.mr-n2, .mx-n2 {
  margin-right: -0.5rem !important;
}

.mb-n2, .my-n2 {
  margin-bottom: -0.5rem !important;
}

.ml-n2, .mx-n2 {
  margin-left: -0.5rem !important;
}

.m-n3 {
  margin: -0.75rem !important;
}

.mt-n3, .my-n3 {
  margin-top: -0.75rem !important;
}

.mr-n3, .mx-n3 {
  margin-right: -0.75rem !important;
}

.mb-n3, .my-n3 {
  margin-bottom: -0.75rem !important;
}

.ml-n3, .mx-n3 {
  margin-left: -0.75rem !important;
}

.m-n4 {
  margin: -0.75rem !important;
}

.mt-n4, .my-n4 {
  margin-top: -0.75rem !important;
}

.mr-n4, .mx-n4 {
  margin-right: -0.75rem !important;
}

.mb-n4, .my-n4 {
  margin-bottom: -0.75rem !important;
}

.ml-n4, .mx-n4 {
  margin-left: -0.75rem !important;
}

.m-n5 {
  margin: -1.25rem!important;
}

.mt-n5, .my-n5 {
  margin-top: -1.25rem!important;
}

.mr-n5, .mx-n5 {
  margin-right: -1.25rem!important;
}

.mb-n5, .my-n5 {
  margin-bottom: -1.25rem!important;
}

.ml-n5, .mx-n5 {
  margin-left: -1.25rem!important;
}

.m-auto {
  margin: auto !important;
}

.mt-auto, .my-auto {
  margin-top: auto !important;
}

.mr-auto, .mx-auto {
  margin-right: auto !important;
}

.mb-auto, .my-auto {
  margin-bottom: auto !important;
}

.ml-auto, .mx-auto {
  margin-left: auto !important;
}

.text-monospace {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
}

.text-justify {
  text-align: justify !important;
}

.text-wrap {
  white-space: normal !important;
}

.text-nowrap {
  white-space: nowrap !important;
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-left {
  text-align: left !important;
}

.text-right {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}



.text-lowercase {
  text-transform: lowercase !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.text-capitalize {
  text-transform: capitalize !important;
}

.font-weight-light {
  font-weight: 300 !important;
}

.font-weight-lighter {
  font-weight: lighter !important;
}

.font-weight-normal {
  font-weight: 400 !important;
}

.font-weight-bold {
  font-weight: 700 !important;
}

.font-weight-bolder {
  font-weight: bolder !important;
}

.font-italic {
  font-style: italic !important;
}

.text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.text-decoration-none {
  text-decoration: none !important;
}

.text-break {
  word-break: break-word !important;
  overflow-wrap: break-word !important;
}

.text-reset {
  color: inherit !important;
}

.visible {
  visibility: visible !important;
}

.invisible {
  visibility: hidden !important;
}
div, footer, form, header, img, label, section, select, textarea, button, input, h1, h2, h3, h4, h5, h6, p {
  margin: 0;
  padding: 0;
  border: 0;
  color: inherit;
  box-sizing: border-box;
  display: block;
  vertical-align: baseline;
  text-decoration: none;
  -webkit-transition-duration: .25s;
  -o-transition-duration: .25s;
  transition-duration: .25s
}
a{
  margin: 0;
  padding: 0;
  border: 0;
  color: inherit;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: baseline;
  text-decoration: none;
  -webkit-transition-duration: .25s;
  -o-transition-duration: .25s;
  transition-duration: .25s
}
#app {
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  color: #4e4e4e;
  line-height: 1.5rem;
  font-weight: 400;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.no-overflow {
  height: 100vh;
  overflow: hidden;
}

textarea, input[type='text'], input[type='password']  {
  width: 100%;
  height: 44px;
  border: 1px solid #c4c4c4;
  padding: 12px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  outline: 0!important;
}
input[type='checkbox'] {
  height: 14px;
  margin-top: 2px;
  margin-right: 9px;
}
textarea {
  height: 110px;
  resize: none;
}
select {
  width: 200px;
  height: 28px;
  padding: 0 12px;
  border: 1px solid #C4C4C4;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #4e4e4e;
}
select:focus {
  color: #495057;
  background-color: #fff;
  outline: 0!important;
  border: 1px solid #A6A6A6;
}
a {
  display: inline-block;
}
h1 {
  font-size: 3.75rem;
  line-height: 5.125rem;
}
h2 {
  font-size: 3rem;
  line-height: 4rem;
  font-weight: bold;
}
h3 {
  font-size: 2.25rem;
  line-height: 3rem;
}
h4 {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
}
h5 {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: normal;
}
ul, ol {
  padding-left: 0;
  list-style-position: inside;
}
.subtitle {
  font-size: 1.125rem;
  line-height: 1.5rem;
}
.cap1 {
  font-size: 0.875rem;
  line-height: 1.3rem;
}
.cap2 {
  font-size: 0.75rem;
  line-height: 1rem;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.container_half {
  max-width: 700px;
  margin: 0;
}
.button {
  background-color: #DB5C34;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  color: white;
  display: block;
  width: 196px;
  height: 48px;
  text-align: center;
  line-height: 48px;
  border-radius: 4px;
  cursor: pointer;
}
.button:hover {
  background-color: #F25928;
  color: white;
}
.button:active {
  background-color: #C04F2B;
  color: white;
}
.button:disabled {
  background-color: #F1F1F1;
  color: white;
}
.button-orange {
  background-color: #DBA234;
  color: white;
}
.button-orange:hover {
  background-color: #F2b035;
  color: white;
}
.button-orange:active {
  background-color: #c28b26;
  color: white;
}
.login_overlay {
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  z-index: 5;
  text-align: center;
}
.login_overlay--opened {
  display: block;
}
.login_img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 15px;
  background-color: #DB5C34;
}
.login {
  width: 100%;
  margin: 15% auto;
  max-width: 350px;
  background-color: white;
}
.login_header {
  padding: 12px 16px;
  border-bottom: 1px solid #C4C4C4;
}
.login input{
  margin-bottom: 10px;
}
.login a{
  margin-top: 24px
}
.successful_close {
  position: absolute;
  top: 10px;
  right: 10px;
}
.successful_overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.2);
  z-index: 4;

}
.successful_overlay--opened {
  display: block;
}
.successful {
  position: relative;
  width: 100%;
  margin: 25% auto;
  padding: 20px 16px;
  max-width: 435px;
  color: #3A7D04;
  background-color: #D1FFAD;
  text-align: center;
}
.colored-link {
  color: #3498DB;
}
.colored-link:hover {
  color: #2c65ba;
}
.site-name {
  color: #DB5C34;
}
.header {
  height: 128px;
  border-bottom: 1px solid #c4c4c4;
}
.logo_img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: #c4c4c4;
}
.nav_link span {
  border-bottom: 1px solid transparent;
  padding-bottom: 2px;
  color: inherit;
}
.nav_link {
  color: inherit;
  padding: 8px;
  margin: 0 4px;
}
.nav_link:hover .link_span {
  color: #DB5C34;
  border-bottom: 1px solid #DB5C34;
}
.dropdown-menu_overlay {
  position: fixed;
  display: none;
  top: 64px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 64px);
  background-color: rgba(0,0,0,0.5);
  z-index: 1;
}
.dropdown-menu_overlay--opened {
  display: block;
}
.dropdown-menu_list {
  display: flex;
}
.banner {
  height: 706px;
  background: url('../home-banner.png');
  box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
  background-size: cover;
}
.banner h2 {
  font-weight: 600;
}
.banner_block {
  margin-left: 84px;
}
.block-1 {
  padding: 100px 0 90px;
}
.tablet-slides img{
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  opacity: 0;
  z-index: 1;
  transition: opacity 1s;
}
.tablet-slides img:first-child{
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
  transition: opacity 1s;
}

.mobile-slides img{
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  opacity: 0;
  z-index: 1;
  transition: opacity 1s;
}
.mobile-slides img:first-child{
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
  transition: opacity 1s;
}

.slide-show{
  opacity: 1!important;
  z-index: 2!important;
}

.control {
  position: relative;
  width: 18px;
  height: 18px;
  margin: 4px;
  border-radius: 50%;
  border: 1px solid #A6A6A6;
  cursor: pointer;
}
.control-show {
  border: 1px solid #DB5C34;
}
.control-show:before {
  content: '';
  position: absolute;
  width: 12px;
  top: 2px;
  left: 2px;
  height: 12px;
  border-radius: 50%;
  background-color: #DB5C34;
}
.block-2 {
  padding: 100px 0;
  background: url('../checkout-bg.png') center;
  box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.7);
  background-size: cover;
}
.block-3 > div {
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 0;
}
.block-3 > * {
  width: 50%;
}
.text_title {
  padding-bottom: 14px;
  color: #DB5C34;
}
.footer > div {
  width: 25%;
}
.footer_link {
  display: block;
  padding-bottom: 16px;
  font-weight: 600;
}
.block-about li {
  padding-bottom: 24px;
}
.support_container {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.support_container > div {
  width: 33%;
  max-width: 320px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.support_image {
  height: 203px;
  object-fit: cover;
}
.image-live-call {
  position: absolute;
  bottom: 20px;
  left: -80px;
}
.question_block {
  background-color: #F1F1F1;
  border-top: 1px solid #C4C4C4;
}
.question {
  padding: 16px 12px 16px 42px;
  position: relative;
  border-bottom: 1px solid #c4c4c4;
  cursor: pointer;
  overflow: hidden;
}
.question:before {
  content: '';
  position: absolute;
  width: 24px;
  height: 24px;
  top: 16px;
  left: 16px;
  background: url('../arrow.svg');
  background-size: cover;
  opacity: 0.5;
  transform: rotate(-90deg);
  transition-duration: inherit;
}
.question.rotate:before {
  opacity: 1;
  transform: rotate(0deg);
}
.question_answer {
  display: none;
}
.question_answer div {
  padding-top: 16px;
}
.contacts_title {
  padding-top: 32px;
  padding-bottom: 16px;
}
.form_send > * {
  margin-bottom: 16px;
}
.sign-up_info {
  background: url('../start-bg.png');
  background-size: cover;
  height: 128px;
  color: white;
  display: flex;
  align-items: center;
}
.sign-up_info.first {
  background: url('../media-everywhere-bg.png');
  background-size: cover;
}
.sign-up_banner {
  padding: 100px 0;
  display: flex;
  background: url('../sign-up-banner.png');
  box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.74);
  background-size: cover;
  color: white;
}
.sign-up_create {
  padding-bottom: 72px;
}
.sign-up_content {
  padding: 100px 0;
}
.sign-up_form input[type='text'] {
  margin-bottom: 16px;
}
.sign-up_input {
  width: 48%;
}
.sign-up_block {
  width: 32%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
.sign-up_block h5 {
  padding: 16px 0;
}
.sign-up_block img {
  height: 224px;
  object-fit: none;
}
.membership_container > div {
  width: 48.5%
}
.membership_block {
  border: 6px solid #F1BCAB;
  padding: 44px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.membership_sub-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid #C4C4C4;
  padding: 16px 44px;
}
.payments_form {
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  width: 46%;
}
.payments_form select{
  height: 44px;
}
.payments_form input[type='text'], .payments_form select {
  width: 100%;
  margin-bottom: 16px;
}
.receipt_block {
  border: 6px solid #F1BCAB;
  padding: 76px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.block-terms h5 {
  margin-top: 32px;
  margin-bottom: 16px;
  font-weight: bold;
}
.block-terms .subtitle {
  font-weight: 600;
}
.block-terms .subtitle, .block-terms p {
  margin-top: 16px;
  margin-bottom: 16px;
}
.receipt_container > div:first-child {
  width: 39%;
}
.receipt_container > div:last-child {
  width: 60%;
}

@media (min-width: 1400px) {
  .float-xl-left {
    float: left !important;
  }
  .float-xl-right {
    float: right !important;
  }
  .float-xl-none {
    float: none !important;
  }
  .d-xl-none {
    display: none !important;
  }
  .d-xl-inline {
    display: inline !important;
  }
  .d-xl-inline-block {
    display: inline-block !important;
  }
  .d-xl-block {
    display: block !important;
  }
  .d-xl-flex {
    display: -ms-flexbox !important;
    display: flex !important;
  }
  .d-xl-inline-flex {
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
  }
  .text-xl-left {
    text-align: left !important;
  }
  .text-xl-right {
    text-align: right !important;
  }
  .text-xl-center {
    text-align: center !important;
  }
  .flex-xl-row {
    -ms-flex-direction: row !important;
    flex-direction: row !important;
  }
  .flex-xl-column {
    -ms-flex-direction: column !important;
    flex-direction: column !important;
  }
  .flex-xl-row-reverse {
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
  }
  .flex-xl-column-reverse {
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important;
  }
  .flex-xl-wrap {
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
  }
  .flex-xl-nowrap {
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
  }
  .flex-xl-wrap-reverse {
    -ms-flex-wrap: wrap-reverse !important;
    flex-wrap: wrap-reverse !important;
  }
  .flex-xl-fill {
    -ms-flex: 1 1 auto !important;
    flex: 1 1 auto !important;
  }
  .flex-xl-grow-0 {
    -ms-flex-positive: 0 !important;
    flex-grow: 0 !important;
  }
  .flex-xl-grow-1 {
    -ms-flex-positive: 1 !important;
    flex-grow: 1 !important;
  }
  .flex-xl-shrink-0 {
    -ms-flex-negative: 0 !important;
    flex-shrink: 0 !important;
  }
  .flex-xl-shrink-1 {
    -ms-flex-negative: 1 !important;
    flex-shrink: 1 !important;
  }
  .justify-content-xl-start {
    -ms-flex-pack: start !important;
    justify-content: flex-start !important;
  }
  .justify-content-xl-end {
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
  }
  .justify-content-xl-center {
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }
  .justify-content-xl-between {
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
  }
  .justify-content-xl-around {
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
  }
  .align-items-xl-start {
    -ms-flex-align: start !important;
    align-items: flex-start !important;
  }
  .align-items-xl-end {
    -ms-flex-align: end !important;
    align-items: flex-end !important;
  }
  .align-items-xl-center {
    -ms-flex-align: center !important;
    align-items: center !important;
  }
  .align-items-xl-baseline {
    -ms-flex-align: baseline !important;
    align-items: baseline !important;
  }
  .align-items-xl-stretch {
    -ms-flex-align: stretch !important;
    align-items: stretch !important;
  }
  .align-content-xl-start {
    -ms-flex-line-pack: start !important;
    align-content: flex-start !important;
  }
  .align-content-xl-end {
    -ms-flex-line-pack: end !important;
    align-content: flex-end !important;
  }
  .align-content-xl-center {
    -ms-flex-line-pack: center !important;
    align-content: center !important;
  }
  .align-content-xl-between {
    -ms-flex-line-pack: justify !important;
    align-content: space-between !important;
  }
  .align-content-xl-around {
    -ms-flex-line-pack: distribute !important;
    align-content: space-around !important;
  }
  .align-content-xl-stretch {
    -ms-flex-line-pack: stretch !important;
    align-content: stretch !important;
  }
  .align-self-xl-auto {
    -ms-flex-item-align: auto !important;
    align-self: auto !important;
  }
  .align-self-xl-start {
    -ms-flex-item-align: start !important;
    align-self: flex-start !important;
  }
  .align-self-xl-end {
    -ms-flex-item-align: end !important;
    align-self: flex-end !important;
  }
  .align-self-xl-center {
    -ms-flex-item-align: center !important;
    align-self: center !important;
  }
  .align-self-xl-baseline {
    -ms-flex-item-align: baseline !important;
    align-self: baseline !important;
  }
  .align-self-xl-stretch {
    -ms-flex-item-align: stretch !important;
    align-self: stretch !important;
  }
  .m-xl-0 {
    margin: 0 !important;
  }
  .mt-xl-0, .my-xl-0 {
    margin-top: 0 !important;
  }
  .mr-xl-0, .mx-xl-0 {
    margin-right: 0 !important;
  }
  .mb-xl-0, .my-xl-0 {
    margin-bottom: 0 !important;
  }
  .ml-xl-0, .mx-xl-0 {
    margin-left: 0 !important;
  }
  .m-xl-1 {
    margin: 0.25rem!important;
  }
  .mt-xl-1, .my-xl-1 {
    margin-top: 0.25rem!important;
  }
  .mr-xl-1, .mx-xl-1 {
    margin-right: 0.25rem!important;
  }
  .mb-xl-1, .my-xl-1 {
    margin-bottom: 0.25rem!important;
  }
  .ml-xl-1, .mx-xl-1 {
    margin-left: 0.25rem!important;
  }
  .m-xl-2 {
    margin: 0.5rem !important;
  }
  .mt-xl-2, .my-xl-2 {
    margin-top: 0.5rem !important;
  }
  .mr-xl-2, .mx-xl-2 {
    margin-right: 0.5rem !important;
  }
  .mb-xl-2, .my-xl-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-xl-2, .mx-xl-2 {
    margin-left: 0.5rem !important;
  }
  .m-xl-3 {
    margin: 0.75rem !important;
  }
  .mt-xl-3, .my-xl-3 {
    margin-top: 0.75rem !important;
  }
  .mr-xl-3, .mx-xl-3 {
    margin-right: 0.75rem !important;
  }
  .mb-xl-3, .my-xl-3 {
    margin-bottom: 0.75rem !important;
  }
  .ml-xl-3, .mx-xl-3 {
    margin-left: 0.75rem !important;
  }
  .m-xl-4 {
    margin: 1rem !important;
  }
  .mt-xl-4, .my-xl-4 {
    margin-top: 1rem !important;
  }
  .mr-xl-4, .mx-xl-4 {
    margin-right: 1rem !important;
  }
  .mb-xl-4, .my-xl-4 {
    margin-bottom: 1rem !important;
  }
  .ml-xl-4, .mx-xl-4 {
    margin-left: 1rem !important;
  }
  .m-xl-5 {
    margin: 1.25rem!important;
  }
  .mt-xl-5, .my-xl-5 {
    margin-top: 1.25rem!important;
  }
  .mr-xl-5, .mx-xl-5 {
    margin-right: 1.25rem!important;
  }
  .mb-xl-5, .my-xl-5 {
    margin-bottom: 1.25rem!important;
  }
  .ml-xl-5, .mx-xl-5 {
    margin-left: 1.25rem!important;
  }
  .p-xl-0 {
    padding: 0 !important;
  }
  .pt-xl-0, .py-xl-0 {
    padding-top: 0 !important;
  }
  .pr-xl-0, .px-xl-0 {
    padding-right: 0 !important;
  }
  .pb-xl-0, .py-xl-0 {
    padding-bottom: 0 !important;
  }
  .pl-xl-0, .px-xl-0 {
    padding-left: 0 !important;
  }
  .p-xl-1 {
    padding: 0.25rem!important;
  }
  .pt-xl-1, .py-xl-1 {
    padding-top: 0.25rem!important;
  }
  .pr-xl-1, .px-xl-1 {
    padding-right: 0.25rem!important;
  }
  .pb-xl-1, .py-xl-1 {
    padding-bottom: 0.25rem!important;
  }
  .pl-xl-1, .px-xl-1 {
    padding-left: 0.25rem!important;
  }
  .p-xl-2 {
    padding: 0.5rem !important;
  }
  .pt-xl-2, .py-xl-2 {
    padding-top: 0.5rem !important;
  }
  .pr-xl-2, .px-xl-2 {
    padding-right: 0.5rem !important;
  }
  .pb-xl-2, .py-xl-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-xl-2, .px-xl-2 {
    padding-left: 0.5rem !important;
  }
  .p-xl-3 {
    padding: 0.75rem !important;
  }
  .pt-xl-3, .py-xl-3 {
    padding-top: 0.75rem !important;
  }
  .pr-xl-3, .px-xl-3 {
    padding-right: 0.75rem !important;
  }
  .pb-xl-3, .py-xl-3 {
    padding-bottom: 0.75rem !important;
  }
  .pl-xl-3, .px-xl-3 {
    padding-left: 0.75rem !important;
  }
  .p-xl-4 {
    padding: 1rem !important;
  }
  .pt-xl-4, .py-xl-4 {
    padding-top: 1rem !important;
  }
  .pr-xl-4, .px-xl-4 {
    padding-right: 1rem !important;
  }
  .pb-xl-4, .py-xl-4 {
    padding-bottom: 1rem !important;
  }
  .pl-xl-4, .px-xl-4 {
    padding-left: 1rem !important;
  }
  .p-xl-5 {
    padding: 1.25rem!important;
  }
  .pt-xl-5, .py-xl-5 {
    padding-top: 1.25rem!important;
  }
  .pr-xl-5, .px-xl-5 {
    padding-right: 1.25rem!important;
  }
  .pb-xl-5, .py-xl-5 {
    padding-bottom: 1.25rem!important;
  }
  .pl-xl-5, .px-xl-5 {
    padding-left: 1.25rem!important;
  }
  .m-xl-n1 {
    margin: -0.25rem!important;
  }
  .mt-xl-n1, .my-xl-n1 {
    margin-top: -0.25rem!important;
  }
  .mr-xl-n1, .mx-xl-n1 {
    margin-right: -0.25rem!important;
  }
  .mb-xl-n1, .my-xl-n1 {
    margin-bottom: -0.25rem!important;
  }
  .ml-xl-n1, .mx-xl-n1 {
    margin-left: -0.25rem!important;
  }
  .m-xl-n2 {
    margin: -0.5rem !important;
  }
  .mt-xl-n2, .my-xl-n2 {
    margin-top: -0.5rem !important;
  }
  .mr-xl-n2, .mx-xl-n2 {
    margin-right: -0.5rem !important;
  }
  .mb-xl-n2, .my-xl-n2 {
    margin-bottom: -0.5rem !important;
  }
  .ml-xl-n2, .mx-xl-n2 {
    margin-left: -0.5rem !important;
  }
  .m-xl-n3 {
    margin: -0.75rem !important;
  }
  .mt-xl-n3, .my-xl-n3 {
    margin-top: -0.75rem !important;
  }
  .mr-xl-n3, .mx-xl-n3 {
    margin-right: -0.75rem !important;
  }
  .mb-xl-n3, .my-xl-n3 {
    margin-bottom: -0.75rem !important;
  }
  .ml-xl-n3, .mx-xl-n3 {
    margin-left: -0.75rem !important;
  }
  .m-xl-n4 {
    margin: -0.75rem !important;
  }
  .mt-xl-n4, .my-xl-n4 {
    margin-top: -0.75rem !important;
  }
  .mr-xl-n4, .mx-xl-n4 {
    margin-right: -0.75rem !important;
  }
  .mb-xl-n4, .my-xl-n4 {
    margin-bottom: -0.75rem !important;
  }
  .ml-xl-n4, .mx-xl-n4 {
    margin-left: -0.75rem !important;
  }
  .m-xl-n5 {
    margin: -1.25rem!important;
  }
  .mt-xl-n5, .my-xl-n5 {
    margin-top: -1.25rem!important;
  }
  .mr-xl-n5, .mx-xl-n5 {
    margin-right: -1.25rem!important;
  }
  .mb-xl-n5, .my-xl-n5 {
    margin-bottom: -1.25rem!important;
  }
  .ml-xl-n5, .mx-xl-n5 {
    margin-left: -1.25rem!important;
  }
  .m-xl-auto {
    margin: auto !important;
  }
  .mt-xl-auto, .my-xl-auto {
    margin-top: auto !important;
  }
  .mr-xl-auto, .mx-xl-auto {
    margin-right: auto !important;
  }
  .mb-xl-auto, .my-xl-auto {
    margin-bottom: auto !important;
  }
  .ml-xl-auto, .mx-xl-auto {
    margin-left: auto !important;
  }
}
@media (min-width: 992px) and (max-width: 1399px) {
  .d-lg-none {
    display: none !important;
  }
  .d-lg-inline {
    display: inline !important;
  }
  .d-lg-inline-block {
    display: inline-block !important;
  }
  .d-lg-block {
    display: block !important;
  }
  .d-lg-flex {
    display: -ms-flexbox !important;
    display: flex !important;
  }
  .d-lg-inline-flex {
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
  }
  .float-lg-left {
    float: left !important;
  }
  .float-lg-right {
    float: right !important;
  }
  .float-lg-none {
    float: none !important;
  }
  .m-lg-0 {
    margin: 0 !important;
  }
  .mt-lg-0, .my-lg-0 {
    margin-top: 0 !important;
  }
  .mr-lg-0, .mx-lg-0 {
    margin-right: 0 !important;
  }
  .mb-lg-0, .my-lg-0 {
    margin-bottom: 0 !important;
  }
  .ml-lg-0, .mx-lg-0 {
    margin-left: 0 !important;
  }
  .m-lg-1 {
    margin: 0.25rem!important;
  }
  .mt-lg-1, .my-lg-1 {
    margin-top: 0.25rem!important;
  }
  .mr-lg-1, .mx-lg-1 {
    margin-right: 0.25rem!important;
  }
  .mb-lg-1, .my-lg-1 {
    margin-bottom: 0.25rem!important;
  }
  .ml-lg-1, .mx-lg-1 {
    margin-left: 0.25rem!important;
  }
  .m-lg-2 {
    margin: 0.5rem !important;
  }
  .mt-lg-2, .my-lg-2 {
    margin-top: 0.5rem !important;
  }
  .mr-lg-2, .mx-lg-2 {
    margin-right: 0.5rem !important;
  }
  .mb-lg-2, .my-lg-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-lg-2, .mx-lg-2 {
    margin-left: 0.5rem !important;
  }
  .m-lg-3 {
    margin: 0.75rem !important;
  }
  .mt-lg-3, .my-lg-3 {
    margin-top: 0.75rem !important;
  }
  .mr-lg-3, .mx-lg-3 {
    margin-right: 0.75rem !important;
  }
  .mb-lg-3, .my-lg-3 {
    margin-bottom: 0.75rem !important;
  }
  .ml-lg-3, .mx-lg-3 {
    margin-left: 0.75rem !important;
  }
  .m-lg-4 {
    margin: 1rem !important;
  }
  .mt-lg-4, .my-lg-4 {
    margin-top: 1rem !important;
  }
  .mr-lg-4, .mx-lg-4 {
    margin-right: 1rem !important;
  }
  .mb-lg-4, .my-lg-4 {
    margin-bottom: 1rem !important;
  }
  .ml-lg-4, .mx-lg-4 {
    margin-left: 1rem !important;
  }
  .m-lg-5 {
    margin: 1.25rem!important;
  }
  .mt-lg-5, .my-lg-5 {
    margin-top: 1.25rem!important;
  }
  .mr-lg-5, .mx-lg-5 {
    margin-right: 1.25rem!important;
  }
  .mb-lg-5, .my-lg-5 {
    margin-bottom: 1.25rem!important;
  }
  .ml-lg-5, .mx-lg-5 {
    margin-left: 1.25rem!important;
  }
  .p-lg-0 {
    padding: 0 !important;
  }
  .pt-lg-0, .py-lg-0 {
    padding-top: 0 !important;
  }
  .pr-lg-0, .px-lg-0 {
    padding-right: 0 !important;
  }
  .pb-lg-0, .py-lg-0 {
    padding-bottom: 0 !important;
  }
  .pl-lg-0, .px-lg-0 {
    padding-left: 0 !important;
  }
  .p-lg-1 {
    padding: 0.25rem!important;
  }
  .pt-lg-1, .py-lg-1 {
    padding-top: 0.25rem!important;
  }
  .pr-lg-1, .px-lg-1 {
    padding-right: 0.25rem!important;
  }
  .pb-lg-1, .py-lg-1 {
    padding-bottom: 0.25rem!important;
  }
  .pl-lg-1, .px-lg-1 {
    padding-left: 0.25rem!important;
  }
  .p-lg-2 {
    padding: 0.5rem !important;
  }
  .pt-lg-2, .py-lg-2 {
    padding-top: 0.5rem !important;
  }
  .pr-lg-2, .px-lg-2 {
    padding-right: 0.5rem !important;
  }
  .pb-lg-2, .py-lg-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-lg-2, .px-lg-2 {
    padding-left: 0.5rem !important;
  }
  .p-lg-3 {
    padding: 0.75rem !important;
  }
  .pt-lg-3, .py-lg-3 {
    padding-top: 0.75rem !important;
  }
  .pr-lg-3, .px-lg-3 {
    padding-right: 0.75rem !important;
  }
  .pb-lg-3, .py-lg-3 {
    padding-bottom: 0.75rem !important;
  }
  .pl-lg-3, .px-lg-3 {
    padding-left: 0.75rem !important;
  }
  .p-lg-4 {
    padding: 1rem !important;
  }
  .pt-lg-4, .py-lg-4 {
    padding-top: 1rem !important;
  }
  .pr-lg-4, .px-lg-4 {
    padding-right: 1rem !important;
  }
  .pb-lg-4, .py-lg-4 {
    padding-bottom: 1rem !important;
  }
  .pl-lg-4, .px-lg-4 {
    padding-left: 1rem !important;
  }
  .p-lg-5 {
    padding: 1.25rem!important;
  }
  .pt-lg-5, .py-lg-5 {
    padding-top: 1.25rem!important;
  }
  .pr-lg-5, .px-lg-5 {
    padding-right: 1.25rem!important;
  }
  .pb-lg-5, .py-lg-5 {
    padding-bottom: 1.25rem!important;
  }
  .pl-lg-5, .px-lg-5 {
    padding-left: 1.25rem!important;
  }
  .m-lg-n1 {
    margin: -0.25rem!important;
  }
  .mt-lg-n1, .my-lg-n1 {
    margin-top: -0.25rem!important;
  }
  .mr-lg-n1, .mx-lg-n1 {
    margin-right: -0.25rem!important;
  }
  .mb-lg-n1, .my-lg-n1 {
    margin-bottom: -0.25rem!important;
  }
  .ml-lg-n1, .mx-lg-n1 {
    margin-left: -0.25rem!important;
  }
  .m-lg-n2 {
    margin: -0.5rem !important;
  }
  .mt-lg-n2, .my-lg-n2 {
    margin-top: -0.5rem !important;
  }
  .mr-lg-n2, .mx-lg-n2 {
    margin-right: -0.5rem !important;
  }
  .mb-lg-n2, .my-lg-n2 {
    margin-bottom: -0.5rem !important;
  }
  .ml-lg-n2, .mx-lg-n2 {
    margin-left: -0.5rem !important;
  }
  .m-lg-n3 {
    margin: -0.75rem !important;
  }
  .mt-lg-n3, .my-lg-n3 {
    margin-top: -0.75rem !important;
  }
  .mr-lg-n3, .mx-lg-n3 {
    margin-right: -0.75rem !important;
  }
  .mb-lg-n3, .my-lg-n3 {
    margin-bottom: -0.75rem !important;
  }
  .ml-lg-n3, .mx-lg-n3 {
    margin-left: -0.75rem !important;
  }
  .m-lg-n4 {
    margin: -0.75rem !important;
  }
  .mt-lg-n4, .my-lg-n4 {
    margin-top: -0.75rem !important;
  }
  .mr-lg-n4, .mx-lg-n4 {
    margin-right: -0.75rem !important;
  }
  .mb-lg-n4, .my-lg-n4 {
    margin-bottom: -0.75rem !important;
  }
  .ml-lg-n4, .mx-lg-n4 {
    margin-left: -0.75rem !important;
  }
  .m-lg-n5 {
    margin: -1.25rem!important;
  }
  .mt-lg-n5, .my-lg-n5 {
    margin-top: -1.25rem!important;
  }
  .mr-lg-n5, .mx-lg-n5 {
    margin-right: -1.25rem!important;
  }
  .mb-lg-n5, .my-lg-n5 {
    margin-bottom: -1.25rem!important;
  }
  .ml-lg-n5, .mx-lg-n5 {
    margin-left: -1.25rem!important;
  }
  .m-lg-auto {
    margin: auto !important;
  }
  .mt-lg-auto, .my-lg-auto {
    margin-top: auto !important;
  }
  .mr-lg-auto, .mx-lg-auto {
    margin-right: auto !important;
  }
  .mb-lg-auto, .my-lg-auto {
    margin-bottom: auto !important;
  }
  .ml-lg-auto, .mx-lg-auto {
    margin-left: auto !important;
  }
  .text-lg-left {
    text-align: left !important;
  }
  .text-lg-right {
    text-align: right !important;
  }
  .text-lg-center {
    text-align: center !important;
  }
  .flex-lg-row {
    -ms-flex-direction: row !important;
    flex-direction: row !important;
  }
  .flex-lg-column {
    -ms-flex-direction: column !important;
    flex-direction: column !important;
  }
  .flex-lg-row-reverse {
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
  }
  .flex-lg-column-reverse {
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important;
  }
  .flex-lg-wrap {
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
  }
  .flex-lg-nowrap {
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
  }
  .flex-lg-wrap-reverse {
    -ms-flex-wrap: wrap-reverse !important;
    flex-wrap: wrap-reverse !important;
  }
  .flex-lg-fill {
    -ms-flex: 1 1 auto !important;
    flex: 1 1 auto !important;
  }
  .flex-lg-grow-0 {
    -ms-flex-positive: 0 !important;
    flex-grow: 0 !important;
  }
  .flex-lg-grow-1 {
    -ms-flex-positive: 1 !important;
    flex-grow: 1 !important;
  }
  .flex-lg-shrink-0 {
    -ms-flex-negative: 0 !important;
    flex-shrink: 0 !important;
  }
  .flex-lg-shrink-1 {
    -ms-flex-negative: 1 !important;
    flex-shrink: 1 !important;
  }
  .justify-content-lg-start {
    -ms-flex-pack: start !important;
    justify-content: flex-start !important;
  }
  .justify-content-lg-end {
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
  }
  .justify-content-lg-center {
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }
  .justify-content-lg-between {
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
  }
  .justify-content-lg-around {
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
  }
  .align-items-lg-start {
    -ms-flex-align: start !important;
    align-items: flex-start !important;
  }
  .align-items-lg-end {
    -ms-flex-align: end !important;
    align-items: flex-end !important;
  }
  .align-items-lg-center {
    -ms-flex-align: center !important;
    align-items: center !important;
  }
  .align-items-lg-baseline {
    -ms-flex-align: baseline !important;
    align-items: baseline !important;
  }
  .align-items-lg-stretch {
    -ms-flex-align: stretch !important;
    align-items: stretch !important;
  }
  .align-content-lg-start {
    -ms-flex-line-pack: start !important;
    align-content: flex-start !important;
  }
  .align-content-lg-end {
    -ms-flex-line-pack: end !important;
    align-content: flex-end !important;
  }
  .align-content-lg-center {
    -ms-flex-line-pack: center !important;
    align-content: center !important;
  }
  .align-content-lg-between {
    -ms-flex-line-pack: justify !important;
    align-content: space-between !important;
  }
  .align-content-lg-around {
    -ms-flex-line-pack: distribute !important;
    align-content: space-around !important;
  }
  .align-content-lg-stretch {
    -ms-flex-line-pack: stretch !important;
    align-content: stretch !important;
  }
  .align-self-lg-auto {
    -ms-flex-item-align: auto !important;
    align-self: auto !important;
  }
  .align-self-lg-start {
    -ms-flex-item-align: start !important;
    align-self: flex-start !important;
  }
  .align-self-lg-end {
    -ms-flex-item-align: end !important;
    align-self: flex-end !important;
  }
  .align-self-lg-center {
    -ms-flex-item-align: center !important;
    align-self: center !important;
  }
  .align-self-lg-baseline {
    -ms-flex-item-align: baseline !important;
    align-self: baseline !important;
  }
  .align-self-lg-stretch {
    -ms-flex-item-align: stretch !important;
    align-self: stretch !important;
  }
}
@media (max-width: 991px) {
  .container {
    padding-left: 16px;
    padding-right: 16px;
  }
  .header {
    height: 64px;
    margin-bottom: 80px;
    border-bottom: none;
  }
  .logo_img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
  .sup_phones {
    position: absolute;
    width: 100%;
    height: 80px;
    top: 64px;
    left: 0;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #F1F1F1;
  }
  .sup_phones br {
    display: none;
  }
  .banner {
    height: auto;
    padding: 100px 0 120px;
    background-position: center;
  }
  .banner_block {
    max-width: 360px;
    margin-left: 32px;
  }
  .banner .subtitle {
    padding-bottom: 24px;
  }
  .block-1 {
    padding: 72px 0;
  }
  .block-2 {
    padding: 72px 0;
  }
  .block-3 > div {
    padding-top: 72px;
    padding-bottom: 72px;
  }
  .support_container {
    flex-wrap: wrap;
  }
  .support_container > div {
    width: 50%;
    max-width: initial;
  }
  .support_container > div:first-child {
    width: 100%;
    max-width: initial;
  }
  .support_container > div:last-child {
    padding-right: 5%;
  }
  .image-live-call {
    position: absolute;
    bottom: 20px;
    left: -80px;
  }
  .sign-up_banner {
    padding: 60px 0;
  }
  .sign-up_create {
    padding-bottom: 40px;
  }
  .sign-up_banner .container > div{
    width: 100% !important;
    max-width: 550px;
  }
  .sign-up_content {
    padding: 60px 0;
  }
  .sign-up_block {
    width: 100%;
    max-width: 315px;
    padding-top: 24px;
  }

  .sign-up_block img {
    width: 100%;
    object-fit: contain;
  }
  .payments_form {
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
  }
  .membership_container > div {
    width: 100%;
    max-width: 490px;
    margin-left: auto;
    margin-right: auto;
  }
  .receipt_container > div:first-child {
    width: 100%;
    max-width: 400px;
    margin: 0 auto 32px;
  }
  .receipt_container > div:last-child {
    width: 100%;
  }

}
@media (min-width: 480px) and (max-width: 991px) {
  .d-md-none {
    display: none !important;
  }
  .d-md-inline {
    display: inline !important;
  }
  .d-md-inline-block {
    display: inline-block !important;
  }
  .d-md-block {
    display: block !important;
  }
  .d-md-flex {
    display: -ms-flexbox !important;
    display: flex !important;
  }
  .d-md-inline-flex {
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
  }
  .flex-md-row {
    -ms-flex-direction: row !important;
    flex-direction: row !important;
  }
  .flex-md-column {
    -ms-flex-direction: column !important;
    flex-direction: column !important;
  }
  .flex-md-row-reverse {
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
  }
  .flex-md-column-reverse {
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important;
  }
  .flex-md-wrap {
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
  }
  .flex-md-nowrap {
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
  }
  .flex-md-wrap-reverse {
    -ms-flex-wrap: wrap-reverse !important;
    flex-wrap: wrap-reverse !important;
  }
  .flex-md-fill {
    -ms-flex: 1 1 auto !important;
    flex: 1 1 auto !important;
  }
  .flex-md-grow-0 {
    -ms-flex-positive: 0 !important;
    flex-grow: 0 !important;
  }
  .flex-md-grow-1 {
    -ms-flex-positive: 1 !important;
    flex-grow: 1 !important;
  }
  .flex-md-shrink-0 {
    -ms-flex-negative: 0 !important;
    flex-shrink: 0 !important;
  }
  .flex-md-shrink-1 {
    -ms-flex-negative: 1 !important;
    flex-shrink: 1 !important;
  }
  .justify-content-md-start {
    -ms-flex-pack: start !important;
    justify-content: flex-start !important;
  }
  .justify-content-md-end {
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
  }
  .justify-content-md-center {
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }
  .justify-content-md-between {
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
  }
  .justify-content-md-around {
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
  }
  .align-items-md-start {
    -ms-flex-align: start !important;
    align-items: flex-start !important;
  }
  .align-items-md-end {
    -ms-flex-align: end !important;
    align-items: flex-end !important;
  }
  .align-items-md-center {
    -ms-flex-align: center !important;
    align-items: center !important;
  }
  .align-items-md-baseline {
    -ms-flex-align: baseline !important;
    align-items: baseline !important;
  }
  .align-items-md-stretch {
    -ms-flex-align: stretch !important;
    align-items: stretch !important;
  }
  .align-content-md-start {
    -ms-flex-line-pack: start !important;
    align-content: flex-start !important;
  }
  .align-content-md-end {
    -ms-flex-line-pack: end !important;
    align-content: flex-end !important;
  }
  .align-content-md-center {
    -ms-flex-line-pack: center !important;
    align-content: center !important;
  }
  .align-content-md-between {
    -ms-flex-line-pack: justify !important;
    align-content: space-between !important;
  }
  .align-content-md-around {
    -ms-flex-line-pack: distribute !important;
    align-content: space-around !important;
  }
  .align-content-md-stretch {
    -ms-flex-line-pack: stretch !important;
    align-content: stretch !important;
  }
  .align-self-md-auto {
    -ms-flex-item-align: auto !important;
    align-self: auto !important;
  }
  .align-self-md-start {
    -ms-flex-item-align: start !important;
    align-self: flex-start !important;
  }
  .align-self-md-end {
    -ms-flex-item-align: end !important;
    align-self: flex-end !important;
  }
  .align-self-md-center {
    -ms-flex-item-align: center !important;
    align-self: center !important;
  }
  .align-self-md-baseline {
    -ms-flex-item-align: baseline !important;
    align-self: baseline !important;
  }
  .align-self-md-stretch {
    -ms-flex-item-align: stretch !important;
    align-self: stretch !important;
  }
  .float-md-left {
    float: left !important;
  }
  .float-md-right {
    float: right !important;
  }
  .float-md-none {
    float: none !important;
  }
  .w-md-20 {
    width: 20% !important;
  }

  .w-md-25 {
    width: 25% !important;
  }

  .w-md-1-3 {
    width: 33.3% !important;
  }

  .w-md-40 {
    width: 40% !important;
  }

  .w-md-50 {
    width: 50% !important;
  }

  .w-md-60 {
    width: 60% !important;
  }

  .w-md-2-3 {
    width: 66.7% !important;
  }

  .w-md-75 {
    width: 75% !important;
  }

  .w-md-80 {
    width: 80% !important;
  }

  .w-md-100 {
    width: 100%!important;
  }
  .m-md-0 {
    margin: 0 !important;
  }
  .mt-md-0, .my-md-0 {
    margin-top: 0 !important;
  }
  .mr-md-0, .mx-md-0 {
    margin-right: 0 !important;
  }
  .mb-md-0, .my-md-0 {
    margin-bottom: 0 !important;
  }
  .ml-md-0, .mx-md-0 {
    margin-left: 0 !important;
  }
  .m-md-1 {
    margin: 0.25rem!important;
  }
  .mt-md-1, .my-md-1 {
    margin-top: 0.25rem!important;
  }
  .mr-md-1, .mx-md-1 {
    margin-right: 0.25rem!important;
  }
  .mb-md-1, .my-md-1 {
    margin-bottom: 0.25rem!important;
  }
  .ml-md-1, .mx-md-1 {
    margin-left: 0.25rem!important;
  }
  .m-md-2 {
    margin: 0.5rem !important;
  }
  .mt-md-2, .my-md-2 {
    margin-top: 0.5rem !important;
  }
  .mr-md-2, .mx-md-2 {
    margin-right: 0.5rem !important;
  }
  .mb-md-2, .my-md-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-md-2, .mx-md-2 {
    margin-left: 0.5rem !important;
  }
  .m-md-3 {
    margin: 0.75rem !important;
  }
  .mt-md-3, .my-md-3 {
    margin-top: 0.75rem !important;
  }
  .mr-md-3, .mx-md-3 {
    margin-right: 0.75rem !important;
  }
  .mb-md-3, .my-md-3 {
    margin-bottom: 0.75rem !important;
  }
  .ml-md-3, .mx-md-3 {
    margin-left: 0.75rem !important;
  }
  .m-md-4 {
    margin: 1rem !important;
  }
  .mt-md-4, .my-md-4 {
    margin-top: 1rem !important;
  }
  .mr-md-4, .mx-md-4 {
    margin-right: 1rem !important;
  }
  .mb-md-4, .my-md-4 {
    margin-bottom: 1rem !important;
  }
  .ml-md-4, .mx-md-4 {
    margin-left: 1rem !important;
  }
  .m-md-5 {
    margin: 1.25rem!important;
  }
  .mt-md-5, .my-md-5 {
    margin-top: 1.25rem!important;
  }
  .mr-md-5, .mx-md-5 {
    margin-right: 1.25rem!important;
  }
  .mb-md-5, .my-md-5 {
    margin-bottom: 1.25rem!important;
  }
  .ml-md-5, .mx-md-5 {
    margin-left: 1.25rem!important;
  }
  .p-md-0 {
    padding: 0 !important;
  }
  .pt-md-0, .py-md-0 {
    padding-top: 0 !important;
  }
  .pr-md-0, .px-md-0 {
    padding-right: 0 !important;
  }
  .pb-md-0, .py-md-0 {
    padding-bottom: 0 !important;
  }
  .pl-md-0, .px-md-0 {
    padding-left: 0 !important;
  }
  .p-md-1 {
    padding: 0.25rem!important;
  }
  .pt-md-1, .py-md-1 {
    padding-top: 0.25rem!important;
  }
  .pr-md-1, .px-md-1 {
    padding-right: 0.25rem!important;
  }
  .pb-md-1, .py-md-1 {
    padding-bottom: 0.25rem!important;
  }
  .pl-md-1, .px-md-1 {
    padding-left: 0.25rem!important;
  }
  .p-md-2 {
    padding: 0.5rem !important;
  }
  .pt-md-2, .py-md-2 {
    padding-top: 0.5rem !important;
  }
  .pr-md-2, .px-md-2 {
    padding-right: 0.5rem !important;
  }
  .pb-md-2, .py-md-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-md-2, .px-md-2 {
    padding-left: 0.5rem !important;
  }
  .p-md-3 {
    padding: 0.75rem !important;
  }
  .pt-md-3, .py-md-3 {
    padding-top: 0.75rem !important;
  }
  .pr-md-3, .px-md-3 {
    padding-right: 0.75rem !important;
  }
  .pb-md-3, .py-md-3 {
    padding-bottom: 0.75rem !important;
  }
  .pl-md-3, .px-md-3 {
    padding-left: 0.75rem !important;
  }
  .p-md-4 {
    padding: 1rem !important;
  }
  .pt-md-4, .py-md-4 {
    padding-top: 1rem !important;
  }
  .pr-md-4, .px-md-4 {
    padding-right: 1rem !important;
  }
  .pb-md-4, .py-md-4 {
    padding-bottom: 1rem !important;
  }
  .pl-md-4, .px-md-4 {
    padding-left: 1rem !important;
  }
  .p-md-5 {
    padding: 1.25rem!important;
  }
  .pt-md-5, .py-md-5 {
    padding-top: 1.25rem!important;
  }
  .pr-md-5, .px-md-5 {
    padding-right: 1.25rem!important;
  }
  .pb-md-5, .py-md-5 {
    padding-bottom: 1.25rem!important;
  }
  .pl-md-5, .px-md-5 {
    padding-left: 1.25rem!important;
  }
  .m-md-n1 {
    margin: -0.25rem!important;
  }
  .mt-md-n1, .my-md-n1 {
    margin-top: -0.25rem!important;
  }
  .mr-md-n1, .mx-md-n1 {
    margin-right: -0.25rem!important;
  }
  .mb-md-n1, .my-md-n1 {
    margin-bottom: -0.25rem!important;
  }
  .ml-md-n1, .mx-md-n1 {
    margin-left: -0.25rem!important;
  }
  .m-md-n2 {
    margin: -0.5rem !important;
  }
  .mt-md-n2, .my-md-n2 {
    margin-top: -0.5rem !important;
  }
  .mr-md-n2, .mx-md-n2 {
    margin-right: -0.5rem !important;
  }
  .mb-md-n2, .my-md-n2 {
    margin-bottom: -0.5rem !important;
  }
  .ml-md-n2, .mx-md-n2 {
    margin-left: -0.5rem !important;
  }
  .m-md-n3 {
    margin: -0.75rem !important;
  }
  .mt-md-n3, .my-md-n3 {
    margin-top: -0.75rem !important;
  }
  .mr-md-n3, .mx-md-n3 {
    margin-right: -0.75rem !important;
  }
  .mb-md-n3, .my-md-n3 {
    margin-bottom: -0.75rem !important;
  }
  .ml-md-n3, .mx-md-n3 {
    margin-left: -0.75rem !important;
  }
  .m-md-n4 {
    margin: -0.75rem !important;
  }
  .mt-md-n4, .my-md-n4 {
    margin-top: -0.75rem !important;
  }
  .mr-md-n4, .mx-md-n4 {
    margin-right: -0.75rem !important;
  }
  .mb-md-n4, .my-md-n4 {
    margin-bottom: -0.75rem !important;
  }
  .ml-md-n4, .mx-md-n4 {
    margin-left: -0.75rem !important;
  }
  .m-md-n5 {
    margin: -1.25rem!important;
  }
  .mt-md-n5, .my-md-n5 {
    margin-top: -1.25rem!important;
  }
  .mr-md-n5, .mx-md-n5 {
    margin-right: -1.25rem!important;
  }
  .mb-md-n5, .my-md-n5 {
    margin-bottom: -1.25rem!important;
  }
  .ml-md-n5, .mx-md-n5 {
    margin-left: -1.25rem!important;
  }
  .m-md-auto {
    margin: auto !important;
  }
  .mt-md-auto, .my-md-auto {
    margin-top: auto !important;
  }
  .mr-md-auto, .mx-md-auto {
    margin-right: auto !important;
  }
  .mb-md-auto, .my-md-auto {
    margin-bottom: auto !important;
  }
  .ml-md-auto, .mx-md-auto {
    margin-left: auto !important;
  }
  .text-md-left {
    text-align: left !important;
  }
  .text-md-right {
    text-align: right !important;
  }
  .text-md-center {
    text-align: center !important;
  }
}
@media (max-width: 479px) {
  .float-sm-left {
    float: left !important;
  }
  .float-sm-right {
    float: right !important;
  }
  .float-sm-none {
    float: none !important;
  }
  .text-sm-left {
    text-align: left !important;
  }
  .text-sm-right {
    text-align: right !important;
  }
  .text-sm-center {
    text-align: center !important;
  }
  .d-sm-none {
    display: none !important;
  }
  .d-sm-inline {
    display: inline !important;
  }
  .d-sm-inline-block {
    display: inline-block !important;
  }
  .d-sm-block {
    display: block !important;
  }
  .d-sm-flex {
    display: -ms-flexbox !important;
    display: flex !important;
  }
  .d-sm-inline-flex {
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
  }
  .flex-sm-row {
    -ms-flex-direction: row !important;
    flex-direction: row !important;
  }
  .flex-sm-column {
    -ms-flex-direction: column !important;
    flex-direction: column !important;
  }
  .flex-sm-row-reverse {
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
  }
  .flex-sm-column-reverse {
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important;
  }
  .flex-sm-wrap {
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
  }
  .flex-sm-nowrap {
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
  }
  .flex-sm-wrap-reverse {
    -ms-flex-wrap: wrap-reverse !important;
    flex-wrap: wrap-reverse !important;
  }
  .flex-sm-fill {
    -ms-flex: 1 1 auto !important;
    flex: 1 1 auto !important;
  }
  .flex-sm-grow-0 {
    -ms-flex-positive: 0 !important;
    flex-grow: 0 !important;
  }
  .flex-sm-grow-1 {
    -ms-flex-positive: 1 !important;
    flex-grow: 1 !important;
  }
  .flex-sm-shrink-0 {
    -ms-flex-negative: 0 !important;
    flex-shrink: 0 !important;
  }
  .flex-sm-shrink-1 {
    -ms-flex-negative: 1 !important;
    flex-shrink: 1 !important;
  }
  .justify-content-sm-start {
    -ms-flex-pack: start !important;
    justify-content: flex-start !important;
  }
  .justify-content-sm-end {
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
  }
  .justify-content-sm-center {
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }
  .justify-content-sm-between {
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
  }
  .justify-content-sm-around {
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
  }
  .align-items-sm-start {
    -ms-flex-align: start !important;
    align-items: flex-start !important;
  }
  .align-items-sm-end {
    -ms-flex-align: end !important;
    align-items: flex-end !important;
  }
  .align-items-sm-center {
    -ms-flex-align: center !important;
    align-items: center !important;
  }
  .align-items-sm-baseline {
    -ms-flex-align: baseline !important;
    align-items: baseline !important;
  }
  .align-items-sm-stretch {
    -ms-flex-align: stretch !important;
    align-items: stretch !important;
  }
  .align-content-sm-start {
    -ms-flex-line-pack: start !important;
    align-content: flex-start !important;
  }
  .align-content-sm-end {
    -ms-flex-line-pack: end !important;
    align-content: flex-end !important;
  }
  .align-content-sm-center {
    -ms-flex-line-pack: center !important;
    align-content: center !important;
  }
  .align-content-sm-between {
    -ms-flex-line-pack: justify !important;
    align-content: space-between !important;
  }
  .align-content-sm-around {
    -ms-flex-line-pack: distribute !important;
    align-content: space-around !important;
  }
  .align-content-sm-stretch {
    -ms-flex-line-pack: stretch !important;
    align-content: stretch !important;
  }
  .align-self-sm-auto {
    -ms-flex-item-align: auto !important;
    align-self: auto !important;
  }
  .align-self-sm-start {
    -ms-flex-item-align: start !important;
    align-self: flex-start !important;
  }
  .align-self-sm-end {
    -ms-flex-item-align: end !important;
    align-self: flex-end !important;
  }
  .align-self-sm-center {
    -ms-flex-item-align: center !important;
    align-self: center !important;
  }
  .align-self-sm-baseline {
    -ms-flex-item-align: baseline !important;
    align-self: baseline !important;
  }
  .align-self-sm-stretch {
    -ms-flex-item-align: stretch !important;
    align-self: stretch !important;
  }
  .w-sm-20 {
    width: 20% !important;
  }

  .w-sm-25 {
    width: 25% !important;
  }

  .w-sm-1-3 {
    width: 33.3% !important;
  }

  .w-sm-40 {
    width: 40% !important;
  }

  .w-sm-50 {
    width: 50% !important;
  }

  .w-sm-60 {
    width: 60% !important;
  }

  .w-sm-2-3 {
    width: 66.7% !important;
  }

  .w-sm-75 {
    width: 75% !important;
  }

  .w-sm-80 {
    width: 80% !important;
  }

  .w-sm-100 {
    width: 100%!important;
  }
  .m-sm-0 {
    margin: 0 !important;
  }
  .mt-sm-0, .my-sm-0 {
    margin-top: 0 !important;
  }
  .mr-sm-0, .mx-sm-0 {
    margin-right: 0 !important;
  }
  .mb-sm-0, .my-sm-0 {
    margin-bottom: 0 !important;
  }
  .ml-sm-0, .mx-sm-0 {
    margin-left: 0 !important;
  }
  .m-sm-1 {
    margin: 0.25rem!important;
  }
  .mt-sm-1, .my-sm-1 {
    margin-top: 0.25rem!important;
  }
  .mr-sm-1, .mx-sm-1 {
    margin-right: 0.25rem!important;
  }
  .mb-sm-1, .my-sm-1 {
    margin-bottom: 0.25rem!important;
  }
  .ml-sm-1, .mx-sm-1 {
    margin-left: 0.25rem!important;
  }
  .m-sm-2 {
    margin: 0.5rem !important;
  }
  .mt-sm-2, .my-sm-2 {
    margin-top: 0.5rem !important;
  }
  .mr-sm-2, .mx-sm-2 {
    margin-right: 0.5rem !important;
  }
  .mb-sm-2, .my-sm-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-sm-2, .mx-sm-2 {
    margin-left: 0.5rem !important;
  }
  .m-sm-3 {
    margin: 0.75rem !important;
  }
  .mt-sm-3, .my-sm-3 {
    margin-top: 0.75rem !important;
  }
  .mr-sm-3, .mx-sm-3 {
    margin-right: 0.75rem !important;
  }
  .mb-sm-3, .my-sm-3 {
    margin-bottom: 0.75rem !important;
  }
  .ml-sm-3, .mx-sm-3 {
    margin-left: 0.75rem !important;
  }
  .m-sm-4 {
    margin: 1rem !important;
  }
  .mt-sm-4, .my-sm-4 {
    margin-top: 1rem !important;
  }
  .mr-sm-4, .mx-sm-4 {
    margin-right: 1rem !important;
  }
  .mb-sm-4, .my-sm-4 {
    margin-bottom: 1rem !important;
  }
  .ml-sm-4, .mx-sm-4 {
    margin-left: 1rem !important;
  }
  .m-sm-5 {
    margin: 1.25rem!important;
  }
  .mt-sm-5, .my-sm-5 {
    margin-top: 1.25rem!important;
  }
  .mr-sm-5, .mx-sm-5 {
    margin-right: 1.25rem!important;
  }
  .mb-sm-5, .my-sm-5 {
    margin-bottom: 1.25rem!important;
  }
  .ml-sm-5, .mx-sm-5 {
    margin-left: 1.25rem!important;
  }
  .p-sm-0 {
    padding: 0 !important;
  }
  .pt-sm-0, .py-sm-0 {
    padding-top: 0 !important;
  }
  .pr-sm-0, .px-sm-0 {
    padding-right: 0 !important;
  }
  .pb-sm-0, .py-sm-0 {
    padding-bottom: 0 !important;
  }
  .pl-sm-0, .px-sm-0 {
    padding-left: 0 !important;
  }
  .p-sm-1 {
    padding: 0.25rem!important;
  }
  .pt-sm-1, .py-sm-1 {
    padding-top: 0.25rem!important;
  }
  .pr-sm-1, .px-sm-1 {
    padding-right: 0.25rem!important;
  }
  .pb-sm-1, .py-sm-1 {
    padding-bottom: 0.25rem!important;
  }
  .pl-sm-1, .px-sm-1 {
    padding-left: 0.25rem!important;
  }
  .p-sm-2 {
    padding: 0.5rem !important;
  }
  .pt-sm-2, .py-sm-2 {
    padding-top: 0.5rem !important;
  }
  .pr-sm-2, .px-sm-2 {
    padding-right: 0.5rem !important;
  }
  .pb-sm-2, .py-sm-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-sm-2, .px-sm-2 {
    padding-left: 0.5rem !important;
  }
  .p-sm-3 {
    padding: 0.75rem !important;
  }
  .pt-sm-3, .py-sm-3 {
    padding-top: 0.75rem !important;
  }
  .pr-sm-3, .px-sm-3 {
    padding-right: 0.75rem !important;
  }
  .pb-sm-3, .py-sm-3 {
    padding-bottom: 0.75rem !important;
  }
  .pl-sm-3, .px-sm-3 {
    padding-left: 0.75rem !important;
  }
  .p-sm-4 {
    padding: 1rem !important;
  }
  .pt-sm-4, .py-sm-4 {
    padding-top: 1rem !important;
  }
  .pr-sm-4, .px-sm-4 {
    padding-right: 1rem !important;
  }
  .pb-sm-4, .py-sm-4 {
    padding-bottom: 1rem !important;
  }
  .pl-sm-4, .px-sm-4 {
    padding-left: 1rem !important;
  }
  .p-sm-5 {
    padding: 1.25rem!important;
  }
  .pt-sm-5, .py-sm-5 {
    padding-top: 1.25rem!important;
  }
  .pr-sm-5, .px-sm-5 {
    padding-right: 1.25rem!important;
  }
  .pb-sm-5, .py-sm-5 {
    padding-bottom: 1.25rem!important;
  }
  .pl-sm-5, .px-sm-5 {
    padding-left: 1.25rem!important;
  }
  .m-sm-n1 {
    margin: -0.25rem!important;
  }
  .mt-sm-n1, .my-sm-n1 {
    margin-top: -0.25rem!important;
  }
  .mr-sm-n1, .mx-sm-n1 {
    margin-right: -0.25rem!important;
  }
  .mb-sm-n1, .my-sm-n1 {
    margin-bottom: -0.25rem!important;
  }
  .ml-sm-n1, .mx-sm-n1 {
    margin-left: -0.25rem!important;
  }
  .m-sm-n2 {
    margin: -0.5rem !important;
  }
  .mt-sm-n2, .my-sm-n2 {
    margin-top: -0.5rem !important;
  }
  .mr-sm-n2, .mx-sm-n2 {
    margin-right: -0.5rem !important;
  }
  .mb-sm-n2, .my-sm-n2 {
    margin-bottom: -0.5rem !important;
  }
  .ml-sm-n2, .mx-sm-n2 {
    margin-left: -0.5rem !important;
  }
  .m-sm-n3 {
    margin: -0.75rem !important;
  }
  .mt-sm-n3, .my-sm-n3 {
    margin-top: -0.75rem !important;
  }
  .mr-sm-n3, .mx-sm-n3 {
    margin-right: -0.75rem !important;
  }
  .mb-sm-n3, .my-sm-n3 {
    margin-bottom: -0.75rem !important;
  }
  .ml-sm-n3, .mx-sm-n3 {
    margin-left: -0.75rem !important;
  }
  .m-sm-n4 {
    margin: -0.75rem !important;
  }
  .mt-sm-n4, .my-sm-n4 {
    margin-top: -0.75rem !important;
  }
  .mr-sm-n4, .mx-sm-n4 {
    margin-right: -0.75rem !important;
  }
  .mb-sm-n4, .my-sm-n4 {
    margin-bottom: -0.75rem !important;
  }
  .ml-sm-n4, .mx-sm-n4 {
    margin-left: -0.75rem !important;
  }
  .m-sm-n5 {
    margin: -1.25rem!important;
  }
  .mt-sm-n5, .my-sm-n5 {
    margin-top: -1.25rem!important;
  }
  .mr-sm-n5, .mx-sm-n5 {
    margin-right: -1.25rem!important;
  }
  .mb-sm-n5, .my-sm-n5 {
    margin-bottom: -1.25rem!important;
  }
  .ml-sm-n5, .mx-sm-n5 {
    margin-left: -1.25rem!important;
  }
  .m-sm-auto {
    margin: auto !important;
  }
  .mt-sm-auto, .my-sm-auto {
    margin-top: auto !important;
  }
  .mr-sm-auto, .mx-sm-auto {
    margin-right: auto !important;
  }
  .mb-sm-auto, .my-sm-auto {
    margin-bottom: auto !important;
  }
  .ml-sm-auto, .mx-sm-auto {
    margin-left: auto !important;
  }
  .sup_phones br {
    display: inline;
  }
  .dropdown-menu {
    width: 24px;
    height: 20px;
    display: flex;
    background: url('../menu-open.png') no-repeat center;
    background-size: contain;
    cursor: pointer;
  }
  .dropdown-menu--opened {
    background: url('../menu-close.png') no-repeat center;
    background-size: contain;
  }
  .dropdown-menu_list {
    display: none;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 64px;
    left: 0;
    width: 100%;
    z-index: 3;
    border-top: 1px solid #C4C4C4;
    background-color: white;
  }
  .dropdown-menu_list--opened {
    display: flex;
  }
  .nav_link {
    margin: 8px auto;
  }
  .footer {
    flex-wrap: wrap;
  }
  .footer > div {
    width: 100%;
  }
  .footer_links {
    order: -1;
    padding-bottom: 8px;
  }
  .footer_link {
    margin-bottom: 8px;
  }
  .footer_copyright {
    font-size: 12px;
    line-height: 16px;
    padding-bottom: 8px;
    text-align: left!important;
  }
  .banner {
    padding: 72px 0 ;
  }
  .banner_block {
    margin-left: 0;
  }
  .banner .subtitle {
    padding-bottom: 36px;
  }
  .banner h2 {
    font-size: 36px;
    line-height: 49px;
    font-weight: bold;
  }
  .block-1 h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
  }
  .block-1 img {
    width: 100%;
  }
  .block-2 h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
  }
  .block-3 > * {
    width: 100%;
  }
  .block-3 > div {
    padding-left: 16px;
  }
  .block-about {
    padding: 40px 0!important;
  }
  .block-about li {
    padding-bottom: 16px;
  }
  .block-terms h4 {
    margin-top: 8px;
  }
  .block-terms h5, .block-terms .subtitle {
    margin-top: 16px;
    margin-bottom: 8px;
  }
  .block-terms h5 {
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: 600;
  }
  .block-terms .subtitle {
    font-size: 1rem;
  }
  .block-terms p {
    margin-top: 8px;
    margin-bottom: 16px;
  }
  .support_container > div {
    width: 100%;
  }
  .support_container > div:first-child {
    order: -2;
    margin-bottom: -12px;
  }
  .support_container > div:last-child {
    padding-right: 0;
    margin-bottom: 24px;
    order: -1;
  }
  .image-live-call {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .sign-up_info {
    height: auto;
    padding: 40px 0;
  }
  .sign-up_info .container > div{
    width: 100% !important;
  }
  .sign-up_banner {
    padding: 40px 0;
  }
  .sign-up_create {
    padding-bottom: 32px;
  }
  .sign-up_form {
    padding: 32px 16px!important;
  }
  .sign-up_form form > a.colored-link {
    margin-top: 12px;
    width: 100%;
    order: 5;
    text-align: center;
  }
  .sign-up_input {
    width: 100%;
  }
  .sign-up_content {
    padding: 40px 0;
  }
}
.black {
  background-color: #000000 !important;
  border-color: #000000 !important;
}

.black--text {
  color: #000000 !important;
  caret-color: #000000 !important;
}

.white {
  background-color: #FFFFFF !important;
  border-color: #FFFFFF !important;
}

.white--text {
  color: #FFFFFF !important;
  caret-color: #FFFFFF !important;
}

.transparent {
  background-color: transparent !important;
  border-color: transparent !important;
}

.transparent--text {
  color: transparent !important;
  caret-color: transparent !important;
}

.red {
  background-color: #F44336 !important;
  border-color: #F44336 !important;
}

.red--text {
  color: #F44336 !important;
  caret-color: #F44336 !important;
}

.red.lighten-5 {
  background-color: #FFEBEE !important;
  border-color: #FFEBEE !important;
}

.red--text.text--lighten-5 {
  color: #FFEBEE !important;
  caret-color: #FFEBEE !important;
}

.red.lighten-4 {
  background-color: #FFCDD2 !important;
  border-color: #FFCDD2 !important;
}

.red--text.text--lighten-4 {
  color: #FFCDD2 !important;
  caret-color: #FFCDD2 !important;
}

.red.lighten-3 {
  background-color: #EF9A9A !important;
  border-color: #EF9A9A !important;
}

.red--text.text--lighten-3 {
  color: #EF9A9A !important;
  caret-color: #EF9A9A !important;
}

.red.lighten-2 {
  background-color: #E57373 !important;
  border-color: #E57373 !important;
}

.red--text.text--lighten-2 {
  color: #E57373 !important;
  caret-color: #E57373 !important;
}

.red.lighten-1 {
  background-color: #EF5350 !important;
  border-color: #EF5350 !important;
}

.red--text.text--lighten-1 {
  color: #EF5350 !important;
  caret-color: #EF5350 !important;
}

.red.darken-1 {
  background-color: #E53935 !important;
  border-color: #E53935 !important;
}

.red--text.text--darken-1 {
  color: #E53935 !important;
  caret-color: #E53935 !important;
}

.red.darken-2 {
  background-color: #D32F2F !important;
  border-color: #D32F2F !important;
}

.red--text.text--darken-2 {
  color: #D32F2F !important;
  caret-color: #D32F2F !important;
}

.red.darken-3 {
  background-color: #C62828 !important;
  border-color: #C62828 !important;
}

.red--text.text--darken-3 {
  color: #C62828 !important;
  caret-color: #C62828 !important;
}

.red.darken-4 {
  background-color: #B71C1C !important;
  border-color: #B71C1C !important;
}

.red--text.text--darken-4 {
  color: #B71C1C !important;
  caret-color: #B71C1C !important;
}

.red.accent-1 {
  background-color: #FF8A80 !important;
  border-color: #FF8A80 !important;
}

.red--text.text--accent-1 {
  color: #FF8A80 !important;
  caret-color: #FF8A80 !important;
}

.red.accent-2 {
  background-color: #FF5252 !important;
  border-color: #FF5252 !important;
}

.red--text.text--accent-2 {
  color: #FF5252 !important;
  caret-color: #FF5252 !important;
}

.red.accent-3 {
  background-color: #FF1744 !important;
  border-color: #FF1744 !important;
}

.red--text.text--accent-3 {
  color: #FF1744 !important;
  caret-color: #FF1744 !important;
}

.red.accent-4 {
  background-color: #D50000 !important;
  border-color: #D50000 !important;
}

.red--text.text--accent-4 {
  color: #D50000 !important;
  caret-color: #D50000 !important;
}

.pink {
  background-color: #e91e63 !important;
  border-color: #e91e63 !important;
}

.pink--text {
  color: #e91e63 !important;
  caret-color: #e91e63 !important;
}

.pink.lighten-5 {
  background-color: #fce4ec !important;
  border-color: #fce4ec !important;
}

.pink--text.text--lighten-5 {
  color: #fce4ec !important;
  caret-color: #fce4ec !important;
}

.pink.lighten-4 {
  background-color: #f8bbd0 !important;
  border-color: #f8bbd0 !important;
}

.pink--text.text--lighten-4 {
  color: #f8bbd0 !important;
  caret-color: #f8bbd0 !important;
}

.pink.lighten-3 {
  background-color: #f48fb1 !important;
  border-color: #f48fb1 !important;
}

.pink--text.text--lighten-3 {
  color: #f48fb1 !important;
  caret-color: #f48fb1 !important;
}

.pink.lighten-2 {
  background-color: #f06292 !important;
  border-color: #f06292 !important;
}

.pink--text.text--lighten-2 {
  color: #f06292 !important;
  caret-color: #f06292 !important;
}

.pink.lighten-1 {
  background-color: #ec407a !important;
  border-color: #ec407a !important;
}

.pink--text.text--lighten-1 {
  color: #ec407a !important;
  caret-color: #ec407a !important;
}

.pink.darken-1 {
  background-color: #d81b60 !important;
  border-color: #d81b60 !important;
}

.pink--text.text--darken-1 {
  color: #d81b60 !important;
  caret-color: #d81b60 !important;
}

.pink.darken-2 {
  background-color: #c2185b !important;
  border-color: #c2185b !important;
}

.pink--text.text--darken-2 {
  color: #c2185b !important;
  caret-color: #c2185b !important;
}

.pink.darken-3 {
  background-color: #ad1457 !important;
  border-color: #ad1457 !important;
}

.pink--text.text--darken-3 {
  color: #ad1457 !important;
  caret-color: #ad1457 !important;
}

.pink.darken-4 {
  background-color: #880e4f !important;
  border-color: #880e4f !important;
}

.pink--text.text--darken-4 {
  color: #880e4f !important;
  caret-color: #880e4f !important;
}

.pink.accent-1 {
  background-color: #ff80ab !important;
  border-color: #ff80ab !important;
}

.pink--text.text--accent-1 {
  color: #ff80ab !important;
  caret-color: #ff80ab !important;
}

.pink.accent-2 {
  background-color: #ff4081 !important;
  border-color: #ff4081 !important;
}

.pink--text.text--accent-2 {
  color: #ff4081 !important;
  caret-color: #ff4081 !important;
}

.pink.accent-3 {
  background-color: #f50057 !important;
  border-color: #f50057 !important;
}

.pink--text.text--accent-3 {
  color: #f50057 !important;
  caret-color: #f50057 !important;
}

.pink.accent-4 {
  background-color: #c51162 !important;
  border-color: #c51162 !important;
}

.pink--text.text--accent-4 {
  color: #c51162 !important;
  caret-color: #c51162 !important;
}

.purple {
  background-color: #9c27b0 !important;
  border-color: #9c27b0 !important;
}

.purple--text {
  color: #9c27b0 !important;
  caret-color: #9c27b0 !important;
}

.purple.lighten-5 {
  background-color: #f3e5f5 !important;
  border-color: #f3e5f5 !important;
}

.purple--text.text--lighten-5 {
  color: #f3e5f5 !important;
  caret-color: #f3e5f5 !important;
}

.purple.lighten-4 {
  background-color: #e1bee7 !important;
  border-color: #e1bee7 !important;
}

.purple--text.text--lighten-4 {
  color: #e1bee7 !important;
  caret-color: #e1bee7 !important;
}

.purple.lighten-3 {
  background-color: #ce93d8 !important;
  border-color: #ce93d8 !important;
}

.purple--text.text--lighten-3 {
  color: #ce93d8 !important;
  caret-color: #ce93d8 !important;
}

.purple.lighten-2 {
  background-color: #ba68c8 !important;
  border-color: #ba68c8 !important;
}

.purple--text.text--lighten-2 {
  color: #ba68c8 !important;
  caret-color: #ba68c8 !important;
}

.purple.lighten-1 {
  background-color: #ab47bc !important;
  border-color: #ab47bc !important;
}

.purple--text.text--lighten-1 {
  color: #ab47bc !important;
  caret-color: #ab47bc !important;
}

.purple.darken-1 {
  background-color: #8e24aa !important;
  border-color: #8e24aa !important;
}

.purple--text.text--darken-1 {
  color: #8e24aa !important;
  caret-color: #8e24aa !important;
}

.purple.darken-2 {
  background-color: #7b1fa2 !important;
  border-color: #7b1fa2 !important;
}

.purple--text.text--darken-2 {
  color: #7b1fa2 !important;
  caret-color: #7b1fa2 !important;
}

.purple.darken-3 {
  background-color: #6a1b9a !important;
  border-color: #6a1b9a !important;
}

.purple--text.text--darken-3 {
  color: #6a1b9a !important;
  caret-color: #6a1b9a !important;
}

.purple.darken-4 {
  background-color: #4a148c !important;
  border-color: #4a148c !important;
}

.purple--text.text--darken-4 {
  color: #4a148c !important;
  caret-color: #4a148c !important;
}

.purple.accent-1 {
  background-color: #ea80fc !important;
  border-color: #ea80fc !important;
}

.purple--text.text--accent-1 {
  color: #ea80fc !important;
  caret-color: #ea80fc !important;
}

.purple.accent-2 {
  background-color: #e040fb !important;
  border-color: #e040fb !important;
}

.purple--text.text--accent-2 {
  color: #e040fb !important;
  caret-color: #e040fb !important;
}

.purple.accent-3 {
  background-color: #d500f9 !important;
  border-color: #d500f9 !important;
}

.purple--text.text--accent-3 {
  color: #d500f9 !important;
  caret-color: #d500f9 !important;
}

.purple.accent-4 {
  background-color: #aa00ff !important;
  border-color: #aa00ff !important;
}

.purple--text.text--accent-4 {
  color: #aa00ff !important;
  caret-color: #aa00ff !important;
}

.deep-purple {
  background-color: #673ab7 !important;
  border-color: #673ab7 !important;
}

.deep-purple--text {
  color: #673ab7 !important;
  caret-color: #673ab7 !important;
}

.deep-purple.lighten-5 {
  background-color: #ede7f6 !important;
  border-color: #ede7f6 !important;
}

.deep-purple--text.text--lighten-5 {
  color: #ede7f6 !important;
  caret-color: #ede7f6 !important;
}

.deep-purple.lighten-4 {
  background-color: #d1c4e9 !important;
  border-color: #d1c4e9 !important;
}

.deep-purple--text.text--lighten-4 {
  color: #d1c4e9 !important;
  caret-color: #d1c4e9 !important;
}

.deep-purple.lighten-3 {
  background-color: #b39ddb !important;
  border-color: #b39ddb !important;
}

.deep-purple--text.text--lighten-3 {
  color: #b39ddb !important;
  caret-color: #b39ddb !important;
}

.deep-purple.lighten-2 {
  background-color: #9575cd !important;
  border-color: #9575cd !important;
}

.deep-purple--text.text--lighten-2 {
  color: #9575cd !important;
  caret-color: #9575cd !important;
}

.deep-purple.lighten-1 {
  background-color: #7e57c2 !important;
  border-color: #7e57c2 !important;
}

.deep-purple--text.text--lighten-1 {
  color: #7e57c2 !important;
  caret-color: #7e57c2 !important;
}

.deep-purple.darken-1 {
  background-color: #5e35b1 !important;
  border-color: #5e35b1 !important;
}

.deep-purple--text.text--darken-1 {
  color: #5e35b1 !important;
  caret-color: #5e35b1 !important;
}

.deep-purple.darken-2 {
  background-color: #512da8 !important;
  border-color: #512da8 !important;
}

.deep-purple--text.text--darken-2 {
  color: #512da8 !important;
  caret-color: #512da8 !important;
}

.deep-purple.darken-3 {
  background-color: #4527a0 !important;
  border-color: #4527a0 !important;
}

.deep-purple--text.text--darken-3 {
  color: #4527a0 !important;
  caret-color: #4527a0 !important;
}

.deep-purple.darken-4 {
  background-color: #311b92 !important;
  border-color: #311b92 !important;
}

.deep-purple--text.text--darken-4 {
  color: #311b92 !important;
  caret-color: #311b92 !important;
}

.deep-purple.accent-1 {
  background-color: #b388ff !important;
  border-color: #b388ff !important;
}

.deep-purple--text.text--accent-1 {
  color: #b388ff !important;
  caret-color: #b388ff !important;
}

.deep-purple.accent-2 {
  background-color: #7c4dff !important;
  border-color: #7c4dff !important;
}

.deep-purple--text.text--accent-2 {
  color: #7c4dff !important;
  caret-color: #7c4dff !important;
}

.deep-purple.accent-3 {
  background-color: #651fff !important;
  border-color: #651fff !important;
}

.deep-purple--text.text--accent-3 {
  color: #651fff !important;
  caret-color: #651fff !important;
}

.deep-purple.accent-4 {
  background-color: #6200ea !important;
  border-color: #6200ea !important;
}

.deep-purple--text.text--accent-4 {
  color: #6200ea !important;
  caret-color: #6200ea !important;
}

.indigo {
  background-color: #3f51b5 !important;
  border-color: #3f51b5 !important;
}

.indigo--text {
  color: #3f51b5 !important;
  caret-color: #3f51b5 !important;
}

.indigo.lighten-5 {
  background-color: #e8eaf6 !important;
  border-color: #e8eaf6 !important;
}

.indigo--text.text--lighten-5 {
  color: #e8eaf6 !important;
  caret-color: #e8eaf6 !important;
}

.indigo.lighten-4 {
  background-color: #c5cae9 !important;
  border-color: #c5cae9 !important;
}

.indigo--text.text--lighten-4 {
  color: #c5cae9 !important;
  caret-color: #c5cae9 !important;
}

.indigo.lighten-3 {
  background-color: #9fa8da !important;
  border-color: #9fa8da !important;
}

.indigo--text.text--lighten-3 {
  color: #9fa8da !important;
  caret-color: #9fa8da !important;
}

.indigo.lighten-2 {
  background-color: #7986cb !important;
  border-color: #7986cb !important;
}

.indigo--text.text--lighten-2 {
  color: #7986cb !important;
  caret-color: #7986cb !important;
}

.indigo.lighten-1 {
  background-color: #5c6bc0 !important;
  border-color: #5c6bc0 !important;
}

.indigo--text.text--lighten-1 {
  color: #5c6bc0 !important;
  caret-color: #5c6bc0 !important;
}

.indigo.darken-1 {
  background-color: #3949ab !important;
  border-color: #3949ab !important;
}

.indigo--text.text--darken-1 {
  color: #3949ab !important;
  caret-color: #3949ab !important;
}

.indigo.darken-2 {
  background-color: #303f9f !important;
  border-color: #303f9f !important;
}

.indigo--text.text--darken-2 {
  color: #303f9f !important;
  caret-color: #303f9f !important;
}

.indigo.darken-3 {
  background-color: #283593 !important;
  border-color: #283593 !important;
}

.indigo--text.text--darken-3 {
  color: #283593 !important;
  caret-color: #283593 !important;
}

.indigo.darken-4 {
  background-color: #1a237e !important;
  border-color: #1a237e !important;
}

.indigo--text.text--darken-4 {
  color: #1a237e !important;
  caret-color: #1a237e !important;
}

.indigo.accent-1 {
  background-color: #8c9eff !important;
  border-color: #8c9eff !important;
}

.indigo--text.text--accent-1 {
  color: #8c9eff !important;
  caret-color: #8c9eff !important;
}

.indigo.accent-2 {
  background-color: #536dfe !important;
  border-color: #536dfe !important;
}

.indigo--text.text--accent-2 {
  color: #536dfe !important;
  caret-color: #536dfe !important;
}

.indigo.accent-3 {
  background-color: #3d5afe !important;
  border-color: #3d5afe !important;
}

.indigo--text.text--accent-3 {
  color: #3d5afe !important;
  caret-color: #3d5afe !important;
}

.indigo.accent-4 {
  background-color: #304ffe !important;
  border-color: #304ffe !important;
}

.indigo--text.text--accent-4 {
  color: #304ffe !important;
  caret-color: #304ffe !important;
}

.blue {
  background-color: #2196F3 !important;
  border-color: #2196F3 !important;
}

.blue--text {
  color: #2196F3 !important;
  caret-color: #2196F3 !important;
}

.blue.lighten-5 {
  background-color: #E3F2FD !important;
  border-color: #E3F2FD !important;
}

.blue--text.text--lighten-5 {
  color: #E3F2FD !important;
  caret-color: #E3F2FD !important;
}

.blue.lighten-4 {
  background-color: #BBDEFB !important;
  border-color: #BBDEFB !important;
}

.blue--text.text--lighten-4 {
  color: #BBDEFB !important;
  caret-color: #BBDEFB !important;
}

.blue.lighten-3 {
  background-color: #90CAF9 !important;
  border-color: #90CAF9 !important;
}

.blue--text.text--lighten-3 {
  color: #90CAF9 !important;
  caret-color: #90CAF9 !important;
}

.blue.lighten-2 {
  background-color: #64B5F6 !important;
  border-color: #64B5F6 !important;
}

.blue--text.text--lighten-2 {
  color: #64B5F6 !important;
  caret-color: #64B5F6 !important;
}

.blue.lighten-1 {
  background-color: #42A5F5 !important;
  border-color: #42A5F5 !important;
}

.blue--text.text--lighten-1 {
  color: #42A5F5 !important;
  caret-color: #42A5F5 !important;
}

.blue.darken-1 {
  background-color: #1E88E5 !important;
  border-color: #1E88E5 !important;
}

.blue--text.text--darken-1 {
  color: #1E88E5 !important;
  caret-color: #1E88E5 !important;
}

.blue.darken-2 {
  background-color: #1976D2 !important;
  border-color: #1976D2 !important;
}

.blue--text.text--darken-2 {
  color: #1976D2 !important;
  caret-color: #1976D2 !important;
}

.blue.darken-3 {
  background-color: #1565C0 !important;
  border-color: #1565C0 !important;
}

.blue--text.text--darken-3 {
  color: #1565C0 !important;
  caret-color: #1565C0 !important;
}

.blue.darken-4 {
  background-color: #0D47A1 !important;
  border-color: #0D47A1 !important;
}

.blue--text.text--darken-4 {
  color: #0D47A1 !important;
  caret-color: #0D47A1 !important;
}

.blue.accent-1 {
  background-color: #82B1FF !important;
  border-color: #82B1FF !important;
}

.blue--text.text--accent-1 {
  color: #82B1FF !important;
  caret-color: #82B1FF !important;
}

.blue.accent-2 {
  background-color: #448AFF !important;
  border-color: #448AFF !important;
}

.blue--text.text--accent-2 {
  color: #448AFF !important;
  caret-color: #448AFF !important;
}

.blue.accent-3 {
  background-color: #2979FF !important;
  border-color: #2979FF !important;
}

.blue--text.text--accent-3 {
  color: #2979FF !important;
  caret-color: #2979FF !important;
}

.blue.accent-4 {
  background-color: #2962FF !important;
  border-color: #2962FF !important;
}

.blue--text.text--accent-4 {
  color: #2962FF !important;
  caret-color: #2962FF !important;
}

.light-blue {
  background-color: #03a9f4 !important;
  border-color: #03a9f4 !important;
}

.light-blue--text {
  color: #03a9f4 !important;
  caret-color: #03a9f4 !important;
}

.light-blue.lighten-5 {
  background-color: #e1f5fe !important;
  border-color: #e1f5fe !important;
}

.light-blue--text.text--lighten-5 {
  color: #e1f5fe !important;
  caret-color: #e1f5fe !important;
}

.light-blue.lighten-4 {
  background-color: #b3e5fc !important;
  border-color: #b3e5fc !important;
}

.light-blue--text.text--lighten-4 {
  color: #b3e5fc !important;
  caret-color: #b3e5fc !important;
}

.light-blue.lighten-3 {
  background-color: #81d4fa !important;
  border-color: #81d4fa !important;
}

.light-blue--text.text--lighten-3 {
  color: #81d4fa !important;
  caret-color: #81d4fa !important;
}

.light-blue.lighten-2 {
  background-color: #4fc3f7 !important;
  border-color: #4fc3f7 !important;
}

.light-blue--text.text--lighten-2 {
  color: #4fc3f7 !important;
  caret-color: #4fc3f7 !important;
}

.light-blue.lighten-1 {
  background-color: #29b6f6 !important;
  border-color: #29b6f6 !important;
}

.light-blue--text.text--lighten-1 {
  color: #29b6f6 !important;
  caret-color: #29b6f6 !important;
}

.light-blue.darken-1 {
  background-color: #039be5 !important;
  border-color: #039be5 !important;
}

.light-blue--text.text--darken-1 {
  color: #039be5 !important;
  caret-color: #039be5 !important;
}

.light-blue.darken-2 {
  background-color: #0288d1 !important;
  border-color: #0288d1 !important;
}

.light-blue--text.text--darken-2 {
  color: #0288d1 !important;
  caret-color: #0288d1 !important;
}

.light-blue.darken-3 {
  background-color: #0277bd !important;
  border-color: #0277bd !important;
}

.light-blue--text.text--darken-3 {
  color: #0277bd !important;
  caret-color: #0277bd !important;
}

.light-blue.darken-4 {
  background-color: #01579b !important;
  border-color: #01579b !important;
}

.light-blue--text.text--darken-4 {
  color: #01579b !important;
  caret-color: #01579b !important;
}

.light-blue.accent-1 {
  background-color: #80d8ff !important;
  border-color: #80d8ff !important;
}

.light-blue--text.text--accent-1 {
  color: #80d8ff !important;
  caret-color: #80d8ff !important;
}

.light-blue.accent-2 {
  background-color: #40c4ff !important;
  border-color: #40c4ff !important;
}

.light-blue--text.text--accent-2 {
  color: #40c4ff !important;
  caret-color: #40c4ff !important;
}

.light-blue.accent-3 {
  background-color: #00b0ff !important;
  border-color: #00b0ff !important;
}

.light-blue--text.text--accent-3 {
  color: #00b0ff !important;
  caret-color: #00b0ff !important;
}

.light-blue.accent-4 {
  background-color: #0091ea !important;
  border-color: #0091ea !important;
}

.light-blue--text.text--accent-4 {
  color: #0091ea !important;
  caret-color: #0091ea !important;
}

.cyan {
  background-color: #00bcd4 !important;
  border-color: #00bcd4 !important;
}

.cyan--text {
  color: #00bcd4 !important;
  caret-color: #00bcd4 !important;
}

.cyan.lighten-5 {
  background-color: #e0f7fa !important;
  border-color: #e0f7fa !important;
}

.cyan--text.text--lighten-5 {
  color: #e0f7fa !important;
  caret-color: #e0f7fa !important;
}

.cyan.lighten-4 {
  background-color: #b2ebf2 !important;
  border-color: #b2ebf2 !important;
}

.cyan--text.text--lighten-4 {
  color: #b2ebf2 !important;
  caret-color: #b2ebf2 !important;
}

.cyan.lighten-3 {
  background-color: #80deea !important;
  border-color: #80deea !important;
}

.cyan--text.text--lighten-3 {
  color: #80deea !important;
  caret-color: #80deea !important;
}

.cyan.lighten-2 {
  background-color: #4dd0e1 !important;
  border-color: #4dd0e1 !important;
}

.cyan--text.text--lighten-2 {
  color: #4dd0e1 !important;
  caret-color: #4dd0e1 !important;
}

.cyan.lighten-1 {
  background-color: #26c6da !important;
  border-color: #26c6da !important;
}

.cyan--text.text--lighten-1 {
  color: #26c6da !important;
  caret-color: #26c6da !important;
}

.cyan.darken-1 {
  background-color: #00acc1 !important;
  border-color: #00acc1 !important;
}

.cyan--text.text--darken-1 {
  color: #00acc1 !important;
  caret-color: #00acc1 !important;
}

.cyan.darken-2 {
  background-color: #0097a7 !important;
  border-color: #0097a7 !important;
}

.cyan--text.text--darken-2 {
  color: #0097a7 !important;
  caret-color: #0097a7 !important;
}

.cyan.darken-3 {
  background-color: #00838f !important;
  border-color: #00838f !important;
}

.cyan--text.text--darken-3 {
  color: #00838f !important;
  caret-color: #00838f !important;
}

.cyan.darken-4 {
  background-color: #006064 !important;
  border-color: #006064 !important;
}

.cyan--text.text--darken-4 {
  color: #006064 !important;
  caret-color: #006064 !important;
}

.cyan.accent-1 {
  background-color: #84ffff !important;
  border-color: #84ffff !important;
}

.cyan--text.text--accent-1 {
  color: #84ffff !important;
  caret-color: #84ffff !important;
}

.cyan.accent-2 {
  background-color: #18ffff !important;
  border-color: #18ffff !important;
}

.cyan--text.text--accent-2 {
  color: #18ffff !important;
  caret-color: #18ffff !important;
}

.cyan.accent-3 {
  background-color: #00e5ff !important;
  border-color: #00e5ff !important;
}

.cyan--text.text--accent-3 {
  color: #00e5ff !important;
  caret-color: #00e5ff !important;
}

.cyan.accent-4 {
  background-color: #00b8d4 !important;
  border-color: #00b8d4 !important;
}

.cyan--text.text--accent-4 {
  color: #00b8d4 !important;
  caret-color: #00b8d4 !important;
}

.teal {
  background-color: #009688 !important;
  border-color: #009688 !important;
}

.teal--text {
  color: #009688 !important;
  caret-color: #009688 !important;
}

.teal.lighten-5 {
  background-color: #e0f2f1 !important;
  border-color: #e0f2f1 !important;
}

.teal--text.text--lighten-5 {
  color: #e0f2f1 !important;
  caret-color: #e0f2f1 !important;
}

.teal.lighten-4 {
  background-color: #b2dfdb !important;
  border-color: #b2dfdb !important;
}

.teal--text.text--lighten-4 {
  color: #b2dfdb !important;
  caret-color: #b2dfdb !important;
}

.teal.lighten-3 {
  background-color: #80cbc4 !important;
  border-color: #80cbc4 !important;
}

.teal--text.text--lighten-3 {
  color: #80cbc4 !important;
  caret-color: #80cbc4 !important;
}

.teal.lighten-2 {
  background-color: #4db6ac !important;
  border-color: #4db6ac !important;
}

.teal--text.text--lighten-2 {
  color: #4db6ac !important;
  caret-color: #4db6ac !important;
}

.teal.lighten-1 {
  background-color: #26a69a !important;
  border-color: #26a69a !important;
}

.teal--text.text--lighten-1 {
  color: #26a69a !important;
  caret-color: #26a69a !important;
}

.teal.darken-1 {
  background-color: #00897b !important;
  border-color: #00897b !important;
}

.teal--text.text--darken-1 {
  color: #00897b !important;
  caret-color: #00897b !important;
}

.teal.darken-2 {
  background-color: #00796b !important;
  border-color: #00796b !important;
}

.teal--text.text--darken-2 {
  color: #00796b !important;
  caret-color: #00796b !important;
}

.teal.darken-3 {
  background-color: #00695c !important;
  border-color: #00695c !important;
}

.teal--text.text--darken-3 {
  color: #00695c !important;
  caret-color: #00695c !important;
}

.teal.darken-4 {
  background-color: #004d40 !important;
  border-color: #004d40 !important;
}

.teal--text.text--darken-4 {
  color: #004d40 !important;
  caret-color: #004d40 !important;
}

.teal.accent-1 {
  background-color: #a7ffeb !important;
  border-color: #a7ffeb !important;
}

.teal--text.text--accent-1 {
  color: #a7ffeb !important;
  caret-color: #a7ffeb !important;
}

.teal.accent-2 {
  background-color: #64ffda !important;
  border-color: #64ffda !important;
}

.teal--text.text--accent-2 {
  color: #64ffda !important;
  caret-color: #64ffda !important;
}

.teal.accent-3 {
  background-color: #1de9b6 !important;
  border-color: #1de9b6 !important;
}

.teal--text.text--accent-3 {
  color: #1de9b6 !important;
  caret-color: #1de9b6 !important;
}

.teal.accent-4 {
  background-color: #00bfa5 !important;
  border-color: #00bfa5 !important;
}

.teal--text.text--accent-4 {
  color: #00bfa5 !important;
  caret-color: #00bfa5 !important;
}

.green {
  background-color: #4CAF50 !important;
  border-color: #4CAF50 !important;
}

.green--text {
  color: #4CAF50 !important;
  caret-color: #4CAF50 !important;
}

.green.lighten-5 {
  background-color: #E8F5E9 !important;
  border-color: #E8F5E9 !important;
}

.green--text.text--lighten-5 {
  color: #E8F5E9 !important;
  caret-color: #E8F5E9 !important;
}

.green.lighten-4 {
  background-color: #C8E6C9 !important;
  border-color: #C8E6C9 !important;
}

.green--text.text--lighten-4 {
  color: #C8E6C9 !important;
  caret-color: #C8E6C9 !important;
}

.green.lighten-3 {
  background-color: #A5D6A7 !important;
  border-color: #A5D6A7 !important;
}

.green--text.text--lighten-3 {
  color: #A5D6A7 !important;
  caret-color: #A5D6A7 !important;
}

.green.lighten-2 {
  background-color: #81C784 !important;
  border-color: #81C784 !important;
}

.green--text.text--lighten-2 {
  color: #81C784 !important;
  caret-color: #81C784 !important;
}

.green.lighten-1 {
  background-color: #66BB6A !important;
  border-color: #66BB6A !important;
}

.green--text.text--lighten-1 {
  color: #66BB6A !important;
  caret-color: #66BB6A !important;
}

.green.darken-1 {
  background-color: #43A047 !important;
  border-color: #43A047 !important;
}

.green--text.text--darken-1 {
  color: #43A047 !important;
  caret-color: #43A047 !important;
}

.green.darken-2 {
  background-color: #388E3C !important;
  border-color: #388E3C !important;
}

.green--text.text--darken-2 {
  color: #388E3C !important;
  caret-color: #388E3C !important;
}

.green.darken-3 {
  background-color: #2E7D32 !important;
  border-color: #2E7D32 !important;
}

.green--text.text--darken-3 {
  color: #2E7D32 !important;
  caret-color: #2E7D32 !important;
}

.green.darken-4 {
  background-color: #1B5E20 !important;
  border-color: #1B5E20 !important;
}

.green--text.text--darken-4 {
  color: #1B5E20 !important;
  caret-color: #1B5E20 !important;
}

.green.accent-1 {
  background-color: #B9F6CA !important;
  border-color: #B9F6CA !important;
}

.green--text.text--accent-1 {
  color: #B9F6CA !important;
  caret-color: #B9F6CA !important;
}

.green.accent-2 {
  background-color: #69F0AE !important;
  border-color: #69F0AE !important;
}

.green--text.text--accent-2 {
  color: #69F0AE !important;
  caret-color: #69F0AE !important;
}

.green.accent-3 {
  background-color: #00E676 !important;
  border-color: #00E676 !important;
}

.green--text.text--accent-3 {
  color: #00E676 !important;
  caret-color: #00E676 !important;
}

.green.accent-4 {
  background-color: #00C853 !important;
  border-color: #00C853 !important;
}

.green--text.text--accent-4 {
  color: #00C853 !important;
  caret-color: #00C853 !important;
}

.light-green {
  background-color: #8bc34a !important;
  border-color: #8bc34a !important;
}

.light-green--text {
  color: #8bc34a !important;
  caret-color: #8bc34a !important;
}

.light-green.lighten-5 {
  background-color: #f1f8e9 !important;
  border-color: #f1f8e9 !important;
}

.light-green--text.text--lighten-5 {
  color: #f1f8e9 !important;
  caret-color: #f1f8e9 !important;
}

.light-green.lighten-4 {
  background-color: #dcedc8 !important;
  border-color: #dcedc8 !important;
}

.light-green--text.text--lighten-4 {
  color: #dcedc8 !important;
  caret-color: #dcedc8 !important;
}

.light-green.lighten-3 {
  background-color: #c5e1a5 !important;
  border-color: #c5e1a5 !important;
}

.light-green--text.text--lighten-3 {
  color: #c5e1a5 !important;
  caret-color: #c5e1a5 !important;
}

.light-green.lighten-2 {
  background-color: #aed581 !important;
  border-color: #aed581 !important;
}

.light-green--text.text--lighten-2 {
  color: #aed581 !important;
  caret-color: #aed581 !important;
}

.light-green.lighten-1 {
  background-color: #9ccc65 !important;
  border-color: #9ccc65 !important;
}

.light-green--text.text--lighten-1 {
  color: #9ccc65 !important;
  caret-color: #9ccc65 !important;
}

.light-green.darken-1 {
  background-color: #7cb342 !important;
  border-color: #7cb342 !important;
}

.light-green--text.text--darken-1 {
  color: #7cb342 !important;
  caret-color: #7cb342 !important;
}

.light-green.darken-2 {
  background-color: #689f38 !important;
  border-color: #689f38 !important;
}

.light-green--text.text--darken-2 {
  color: #689f38 !important;
  caret-color: #689f38 !important;
}

.light-green.darken-3 {
  background-color: #558b2f !important;
  border-color: #558b2f !important;
}

.light-green--text.text--darken-3 {
  color: #558b2f !important;
  caret-color: #558b2f !important;
}

.light-green.darken-4 {
  background-color: #33691e !important;
  border-color: #33691e !important;
}

.light-green--text.text--darken-4 {
  color: #33691e !important;
  caret-color: #33691e !important;
}

.light-green.accent-1 {
  background-color: #ccff90 !important;
  border-color: #ccff90 !important;
}

.light-green--text.text--accent-1 {
  color: #ccff90 !important;
  caret-color: #ccff90 !important;
}

.light-green.accent-2 {
  background-color: #b2ff59 !important;
  border-color: #b2ff59 !important;
}

.light-green--text.text--accent-2 {
  color: #b2ff59 !important;
  caret-color: #b2ff59 !important;
}

.light-green.accent-3 {
  background-color: #76ff03 !important;
  border-color: #76ff03 !important;
}

.light-green--text.text--accent-3 {
  color: #76ff03 !important;
  caret-color: #76ff03 !important;
}

.light-green.accent-4 {
  background-color: #64dd17 !important;
  border-color: #64dd17 !important;
}

.light-green--text.text--accent-4 {
  color: #64dd17 !important;
  caret-color: #64dd17 !important;
}

.lime {
  background-color: #cddc39 !important;
  border-color: #cddc39 !important;
}

.lime--text {
  color: #cddc39 !important;
  caret-color: #cddc39 !important;
}

.lime.lighten-5 {
  background-color: #f9fbe7 !important;
  border-color: #f9fbe7 !important;
}

.lime--text.text--lighten-5 {
  color: #f9fbe7 !important;
  caret-color: #f9fbe7 !important;
}

.lime.lighten-4 {
  background-color: #f0f4c3 !important;
  border-color: #f0f4c3 !important;
}

.lime--text.text--lighten-4 {
  color: #f0f4c3 !important;
  caret-color: #f0f4c3 !important;
}

.lime.lighten-3 {
  background-color: #e6ee9c !important;
  border-color: #e6ee9c !important;
}

.lime--text.text--lighten-3 {
  color: #e6ee9c !important;
  caret-color: #e6ee9c !important;
}

.lime.lighten-2 {
  background-color: #dce775 !important;
  border-color: #dce775 !important;
}

.lime--text.text--lighten-2 {
  color: #dce775 !important;
  caret-color: #dce775 !important;
}

.lime.lighten-1 {
  background-color: #d4e157 !important;
  border-color: #d4e157 !important;
}

.lime--text.text--lighten-1 {
  color: #d4e157 !important;
  caret-color: #d4e157 !important;
}

.lime.darken-1 {
  background-color: #c0ca33 !important;
  border-color: #c0ca33 !important;
}

.lime--text.text--darken-1 {
  color: #c0ca33 !important;
  caret-color: #c0ca33 !important;
}

.lime.darken-2 {
  background-color: #afb42b !important;
  border-color: #afb42b !important;
}

.lime--text.text--darken-2 {
  color: #afb42b !important;
  caret-color: #afb42b !important;
}

.lime.darken-3 {
  background-color: #9e9d24 !important;
  border-color: #9e9d24 !important;
}

.lime--text.text--darken-3 {
  color: #9e9d24 !important;
  caret-color: #9e9d24 !important;
}

.lime.darken-4 {
  background-color: #827717 !important;
  border-color: #827717 !important;
}

.lime--text.text--darken-4 {
  color: #827717 !important;
  caret-color: #827717 !important;
}

.lime.accent-1 {
  background-color: #f4ff81 !important;
  border-color: #f4ff81 !important;
}

.lime--text.text--accent-1 {
  color: #f4ff81 !important;
  caret-color: #f4ff81 !important;
}

.lime.accent-2 {
  background-color: #eeff41 !important;
  border-color: #eeff41 !important;
}

.lime--text.text--accent-2 {
  color: #eeff41 !important;
  caret-color: #eeff41 !important;
}

.lime.accent-3 {
  background-color: #c6ff00 !important;
  border-color: #c6ff00 !important;
}

.lime--text.text--accent-3 {
  color: #c6ff00 !important;
  caret-color: #c6ff00 !important;
}

.lime.accent-4 {
  background-color: #aeea00 !important;
  border-color: #aeea00 !important;
}

.lime--text.text--accent-4 {
  color: #aeea00 !important;
  caret-color: #aeea00 !important;
}

.yellow {
  background-color: #ffeb3b !important;
  border-color: #ffeb3b !important;
}

.yellow--text {
  color: #ffeb3b !important;
  caret-color: #ffeb3b !important;
}

.yellow.lighten-5 {
  background-color: #fffde7 !important;
  border-color: #fffde7 !important;
}

.yellow--text.text--lighten-5 {
  color: #fffde7 !important;
  caret-color: #fffde7 !important;
}

.yellow.lighten-4 {
  background-color: #fff9c4 !important;
  border-color: #fff9c4 !important;
}

.yellow--text.text--lighten-4 {
  color: #fff9c4 !important;
  caret-color: #fff9c4 !important;
}

.yellow.lighten-3 {
  background-color: #fff59d !important;
  border-color: #fff59d !important;
}

.yellow--text.text--lighten-3 {
  color: #fff59d !important;
  caret-color: #fff59d !important;
}

.yellow.lighten-2 {
  background-color: #fff176 !important;
  border-color: #fff176 !important;
}

.yellow--text.text--lighten-2 {
  color: #fff176 !important;
  caret-color: #fff176 !important;
}

.yellow.lighten-1 {
  background-color: #ffee58 !important;
  border-color: #ffee58 !important;
}

.yellow--text.text--lighten-1 {
  color: #ffee58 !important;
  caret-color: #ffee58 !important;
}

.yellow.darken-1 {
  background-color: #fdd835 !important;
  border-color: #fdd835 !important;
}

.yellow--text.text--darken-1 {
  color: #fdd835 !important;
  caret-color: #fdd835 !important;
}

.yellow.darken-2 {
  background-color: #fbc02d !important;
  border-color: #fbc02d !important;
}

.yellow--text.text--darken-2 {
  color: #fbc02d !important;
  caret-color: #fbc02d !important;
}

.yellow.darken-3 {
  background-color: #f9a825 !important;
  border-color: #f9a825 !important;
}

.yellow--text.text--darken-3 {
  color: #f9a825 !important;
  caret-color: #f9a825 !important;
}

.yellow.darken-4 {
  background-color: #f57f17 !important;
  border-color: #f57f17 !important;
}

.yellow--text.text--darken-4 {
  color: #f57f17 !important;
  caret-color: #f57f17 !important;
}

.yellow.accent-1 {
  background-color: #ffff8d !important;
  border-color: #ffff8d !important;
}

.yellow--text.text--accent-1 {
  color: #ffff8d !important;
  caret-color: #ffff8d !important;
}

.yellow.accent-2 {
  background-color: #ffff00 !important;
  border-color: #ffff00 !important;
}

.yellow--text.text--accent-2 {
  color: #ffff00 !important;
  caret-color: #ffff00 !important;
}

.yellow.accent-3 {
  background-color: #ffea00 !important;
  border-color: #ffea00 !important;
}

.yellow--text.text--accent-3 {
  color: #ffea00 !important;
  caret-color: #ffea00 !important;
}

.yellow.accent-4 {
  background-color: #ffd600 !important;
  border-color: #ffd600 !important;
}

.yellow--text.text--accent-4 {
  color: #ffd600 !important;
  caret-color: #ffd600 !important;
}

.amber {
  background-color: #ffc107 !important;
  border-color: #ffc107 !important;
}

.amber--text {
  color: #ffc107 !important;
  caret-color: #ffc107 !important;
}

.amber.lighten-5 {
  background-color: #fff8e1 !important;
  border-color: #fff8e1 !important;
}

.amber--text.text--lighten-5 {
  color: #fff8e1 !important;
  caret-color: #fff8e1 !important;
}

.amber.lighten-4 {
  background-color: #ffecb3 !important;
  border-color: #ffecb3 !important;
}

.amber--text.text--lighten-4 {
  color: #ffecb3 !important;
  caret-color: #ffecb3 !important;
}

.amber.lighten-3 {
  background-color: #ffe082 !important;
  border-color: #ffe082 !important;
}

.amber--text.text--lighten-3 {
  color: #ffe082 !important;
  caret-color: #ffe082 !important;
}

.amber.lighten-2 {
  background-color: #ffd54f !important;
  border-color: #ffd54f !important;
}

.amber--text.text--lighten-2 {
  color: #ffd54f !important;
  caret-color: #ffd54f !important;
}

.amber.lighten-1 {
  background-color: #ffca28 !important;
  border-color: #ffca28 !important;
}

.amber--text.text--lighten-1 {
  color: #ffca28 !important;
  caret-color: #ffca28 !important;
}

.amber.darken-1 {
  background-color: #ffb300 !important;
  border-color: #ffb300 !important;
}

.amber--text.text--darken-1 {
  color: #ffb300 !important;
  caret-color: #ffb300 !important;
}

.amber.darken-2 {
  background-color: #ffa000 !important;
  border-color: #ffa000 !important;
}

.amber--text.text--darken-2 {
  color: #ffa000 !important;
  caret-color: #ffa000 !important;
}

.amber.darken-3 {
  background-color: #ff8f00 !important;
  border-color: #ff8f00 !important;
}

.amber--text.text--darken-3 {
  color: #ff8f00 !important;
  caret-color: #ff8f00 !important;
}

.amber.darken-4 {
  background-color: #ff6f00 !important;
  border-color: #ff6f00 !important;
}

.amber--text.text--darken-4 {
  color: #ff6f00 !important;
  caret-color: #ff6f00 !important;
}

.amber.accent-1 {
  background-color: #ffe57f !important;
  border-color: #ffe57f !important;
}

.amber--text.text--accent-1 {
  color: #ffe57f !important;
  caret-color: #ffe57f !important;
}

.amber.accent-2 {
  background-color: #ffd740 !important;
  border-color: #ffd740 !important;
}

.amber--text.text--accent-2 {
  color: #ffd740 !important;
  caret-color: #ffd740 !important;
}

.amber.accent-3 {
  background-color: #ffc400 !important;
  border-color: #ffc400 !important;
}

.amber--text.text--accent-3 {
  color: #ffc400 !important;
  caret-color: #ffc400 !important;
}

.amber.accent-4 {
  background-color: #ffab00 !important;
  border-color: #ffab00 !important;
}

.amber--text.text--accent-4 {
  color: #ffab00 !important;
  caret-color: #ffab00 !important;
}

.orange {
  background-color: #ff9800 !important;
  border-color: #ff9800 !important;
}

.orange--text {
  color: #ff9800 !important;
  caret-color: #ff9800 !important;
}

.orange.lighten-5 {
  background-color: #fff3e0 !important;
  border-color: #fff3e0 !important;
}

.orange--text.text--lighten-5 {
  color: #fff3e0 !important;
  caret-color: #fff3e0 !important;
}

.orange.lighten-4 {
  background-color: #ffe0b2 !important;
  border-color: #ffe0b2 !important;
}

.orange--text.text--lighten-4 {
  color: #ffe0b2 !important;
  caret-color: #ffe0b2 !important;
}

.orange.lighten-3 {
  background-color: #ffcc80 !important;
  border-color: #ffcc80 !important;
}

.orange--text.text--lighten-3 {
  color: #ffcc80 !important;
  caret-color: #ffcc80 !important;
}

.orange.lighten-2 {
  background-color: #ffb74d !important;
  border-color: #ffb74d !important;
}

.orange--text.text--lighten-2 {
  color: #ffb74d !important;
  caret-color: #ffb74d !important;
}

.orange.lighten-1 {
  background-color: #ffa726 !important;
  border-color: #ffa726 !important;
}

.orange--text.text--lighten-1 {
  color: #ffa726 !important;
  caret-color: #ffa726 !important;
}

.orange.darken-1 {
  background-color: #fb8c00 !important;
  border-color: #fb8c00 !important;
}

.orange--text.text--darken-1 {
  color: #fb8c00 !important;
  caret-color: #fb8c00 !important;
}

.orange.darken-2 {
  background-color: #f57c00 !important;
  border-color: #f57c00 !important;
}

.orange--text.text--darken-2 {
  color: #f57c00 !important;
  caret-color: #f57c00 !important;
}

.orange.darken-3 {
  background-color: #ef6c00 !important;
  border-color: #ef6c00 !important;
}

.orange--text.text--darken-3 {
  color: #ef6c00 !important;
  caret-color: #ef6c00 !important;
}

.orange.darken-4 {
  background-color: #e65100 !important;
  border-color: #e65100 !important;
}

.orange--text.text--darken-4 {
  color: #e65100 !important;
  caret-color: #e65100 !important;
}

.orange.accent-1 {
  background-color: #ffd180 !important;
  border-color: #ffd180 !important;
}

.orange--text.text--accent-1 {
  color: #ffd180 !important;
  caret-color: #ffd180 !important;
}

.orange.accent-2 {
  background-color: #ffab40 !important;
  border-color: #ffab40 !important;
}

.orange--text.text--accent-2 {
  color: #ffab40 !important;
  caret-color: #ffab40 !important;
}

.orange.accent-3 {
  background-color: #ff9100 !important;
  border-color: #ff9100 !important;
}

.orange--text.text--accent-3 {
  color: #ff9100 !important;
  caret-color: #ff9100 !important;
}

.orange.accent-4 {
  background-color: #ff6d00 !important;
  border-color: #ff6d00 !important;
}

.orange--text.text--accent-4 {
  color: #ff6d00 !important;
  caret-color: #ff6d00 !important;
}

.deep-orange {
  background-color: #ff5722 !important;
  border-color: #ff5722 !important;
}

.deep-orange--text {
  color: #ff5722 !important;
  caret-color: #ff5722 !important;
}

.deep-orange.lighten-5 {
  background-color: #fbe9e7 !important;
  border-color: #fbe9e7 !important;
}

.deep-orange--text.text--lighten-5 {
  color: #fbe9e7 !important;
  caret-color: #fbe9e7 !important;
}

.deep-orange.lighten-4 {
  background-color: #ffccbc !important;
  border-color: #ffccbc !important;
}

.deep-orange--text.text--lighten-4 {
  color: #ffccbc !important;
  caret-color: #ffccbc !important;
}

.deep-orange.lighten-3 {
  background-color: #ffab91 !important;
  border-color: #ffab91 !important;
}

.deep-orange--text.text--lighten-3 {
  color: #ffab91 !important;
  caret-color: #ffab91 !important;
}

.deep-orange.lighten-2 {
  background-color: #ff8a65 !important;
  border-color: #ff8a65 !important;
}

.deep-orange--text.text--lighten-2 {
  color: #ff8a65 !important;
  caret-color: #ff8a65 !important;
}

.deep-orange.lighten-1 {
  background-color: #ff7043 !important;
  border-color: #ff7043 !important;
}

.deep-orange--text.text--lighten-1 {
  color: #ff7043 !important;
  caret-color: #ff7043 !important;
}

.deep-orange.darken-1 {
  background-color: #f4511e !important;
  border-color: #f4511e !important;
}

.deep-orange--text.text--darken-1 {
  color: #f4511e !important;
  caret-color: #f4511e !important;
}

.deep-orange.darken-2 {
  background-color: #e64a19 !important;
  border-color: #e64a19 !important;
}

.deep-orange--text.text--darken-2 {
  color: #e64a19 !important;
  caret-color: #e64a19 !important;
}

.deep-orange.darken-3 {
  background-color: #d84315 !important;
  border-color: #d84315 !important;
}

.deep-orange--text.text--darken-3 {
  color: #d84315 !important;
  caret-color: #d84315 !important;
}

.deep-orange.darken-4 {
  background-color: #bf360c !important;
  border-color: #bf360c !important;
}

.deep-orange--text.text--darken-4 {
  color: #bf360c !important;
  caret-color: #bf360c !important;
}

.deep-orange.accent-1 {
  background-color: #ff9e80 !important;
  border-color: #ff9e80 !important;
}

.deep-orange--text.text--accent-1 {
  color: #ff9e80 !important;
  caret-color: #ff9e80 !important;
}

.deep-orange.accent-2 {
  background-color: #ff6e40 !important;
  border-color: #ff6e40 !important;
}

.deep-orange--text.text--accent-2 {
  color: #ff6e40 !important;
  caret-color: #ff6e40 !important;
}

.deep-orange.accent-3 {
  background-color: #ff3d00 !important;
  border-color: #ff3d00 !important;
}

.deep-orange--text.text--accent-3 {
  color: #ff3d00 !important;
  caret-color: #ff3d00 !important;
}

.deep-orange.accent-4 {
  background-color: #dd2c00 !important;
  border-color: #dd2c00 !important;
}

.deep-orange--text.text--accent-4 {
  color: #dd2c00 !important;
  caret-color: #dd2c00 !important;
}

.brown {
  background-color: #795548 !important;
  border-color: #795548 !important;
}

.brown--text {
  color: #795548 !important;
  caret-color: #795548 !important;
}

.brown.lighten-5 {
  background-color: #efebe9 !important;
  border-color: #efebe9 !important;
}

.brown--text.text--lighten-5 {
  color: #efebe9 !important;
  caret-color: #efebe9 !important;
}

.brown.lighten-4 {
  background-color: #d7ccc8 !important;
  border-color: #d7ccc8 !important;
}

.brown--text.text--lighten-4 {
  color: #d7ccc8 !important;
  caret-color: #d7ccc8 !important;
}

.brown.lighten-3 {
  background-color: #bcaaa4 !important;
  border-color: #bcaaa4 !important;
}

.brown--text.text--lighten-3 {
  color: #bcaaa4 !important;
  caret-color: #bcaaa4 !important;
}

.brown.lighten-2 {
  background-color: #a1887f !important;
  border-color: #a1887f !important;
}

.brown--text.text--lighten-2 {
  color: #a1887f !important;
  caret-color: #a1887f !important;
}

.brown.lighten-1 {
  background-color: #8d6e63 !important;
  border-color: #8d6e63 !important;
}

.brown--text.text--lighten-1 {
  color: #8d6e63 !important;
  caret-color: #8d6e63 !important;
}

.brown.darken-1 {
  background-color: #6d4c41 !important;
  border-color: #6d4c41 !important;
}

.brown--text.text--darken-1 {
  color: #6d4c41 !important;
  caret-color: #6d4c41 !important;
}

.brown.darken-2 {
  background-color: #5d4037 !important;
  border-color: #5d4037 !important;
}

.brown--text.text--darken-2 {
  color: #5d4037 !important;
  caret-color: #5d4037 !important;
}

.brown.darken-3 {
  background-color: #4e342e !important;
  border-color: #4e342e !important;
}

.brown--text.text--darken-3 {
  color: #4e342e !important;
  caret-color: #4e342e !important;
}

.brown.darken-4 {
  background-color: #3e2723 !important;
  border-color: #3e2723 !important;
}

.brown--text.text--darken-4 {
  color: #3e2723 !important;
  caret-color: #3e2723 !important;
}

.blue-grey {
  background-color: #607d8b !important;
  border-color: #607d8b !important;
}

.blue-grey--text {
  color: #607d8b !important;
  caret-color: #607d8b !important;
}

.blue-grey.lighten-5 {
  background-color: #eceff1 !important;
  border-color: #eceff1 !important;
}

.blue-grey--text.text--lighten-5 {
  color: #eceff1 !important;
  caret-color: #eceff1 !important;
}

.blue-grey.lighten-4 {
  background-color: #cfd8dc !important;
  border-color: #cfd8dc !important;
}

.blue-grey--text.text--lighten-4 {
  color: #cfd8dc !important;
  caret-color: #cfd8dc !important;
}

.blue-grey.lighten-3 {
  background-color: #b0bec5 !important;
  border-color: #b0bec5 !important;
}

.blue-grey--text.text--lighten-3 {
  color: #b0bec5 !important;
  caret-color: #b0bec5 !important;
}

.blue-grey.lighten-2 {
  background-color: #90a4ae !important;
  border-color: #90a4ae !important;
}

.blue-grey--text.text--lighten-2 {
  color: #90a4ae !important;
  caret-color: #90a4ae !important;
}

.blue-grey.lighten-1 {
  background-color: #78909c !important;
  border-color: #78909c !important;
}

.blue-grey--text.text--lighten-1 {
  color: #78909c !important;
  caret-color: #78909c !important;
}

.blue-grey.darken-1 {
  background-color: #546e7a !important;
  border-color: #546e7a !important;
}

.blue-grey--text.text--darken-1 {
  color: #546e7a !important;
  caret-color: #546e7a !important;
}

.blue-grey.darken-2 {
  background-color: #455a64 !important;
  border-color: #455a64 !important;
}

.blue-grey--text.text--darken-2 {
  color: #455a64 !important;
  caret-color: #455a64 !important;
}

.blue-grey.darken-3 {
  background-color: #37474f !important;
  border-color: #37474f !important;
}

.blue-grey--text.text--darken-3 {
  color: #37474f !important;
  caret-color: #37474f !important;
}

.blue-grey.darken-4 {
  background-color: #263238 !important;
  border-color: #263238 !important;
}

.blue-grey--text.text--darken-4 {
  color: #263238 !important;
  caret-color: #263238 !important;
}

.grey {
  background-color: #9e9e9e !important;
  border-color: #9e9e9e !important;
}

.grey--text {
  color: #9e9e9e !important;
  caret-color: #9e9e9e !important;
}

.grey.lighten-5 {
  background-color: #fafafa !important;
  border-color: #fafafa !important;
}

.grey--text.text--lighten-5 {
  color: #fafafa !important;
  caret-color: #fafafa !important;
}

.grey.lighten-4 {
  background-color: #f5f5f5 !important;
  border-color: #f5f5f5 !important;
}

.grey--text.text--lighten-4 {
  color: #f5f5f5 !important;
  caret-color: #f5f5f5 !important;
}

.grey.lighten-3 {
  background-color: #eeeeee !important;
  border-color: #eeeeee !important;
}

.grey--text.text--lighten-3 {
  color: #eeeeee !important;
  caret-color: #eeeeee !important;
}

.grey.lighten-2 {
  background-color: #e0e0e0 !important;
  border-color: #e0e0e0 !important;
}

.grey--text.text--lighten-2 {
  color: #e0e0e0 !important;
  caret-color: #e0e0e0 !important;
}

.grey.lighten-1 {
  background-color: #bdbdbd !important;
  border-color: #bdbdbd !important;
}

.grey--text.text--lighten-1 {
  color: #bdbdbd !important;
  caret-color: #bdbdbd !important;
}

.grey.darken-1 {
  background-color: #757575 !important;
  border-color: #757575 !important;
}

.grey--text.text--darken-1 {
  color: #757575 !important;
  caret-color: #757575 !important;
}

.grey.darken-2 {
  background-color: #616161 !important;
  border-color: #616161 !important;
}

.grey--text.text--darken-2 {
  color: #616161 !important;
  caret-color: #616161 !important;
}

.grey.darken-3 {
  background-color: #424242 !important;
  border-color: #424242 !important;
}

.grey--text.text--darken-3 {
  color: #424242 !important;
  caret-color: #424242 !important;
}

.grey.darken-4 {
  background-color: #212121 !important;
  border-color: #212121 !important;
}

.grey--text.text--darken-4 {
  color: #212121 !important;
  caret-color: #212121 !important;
}


    `