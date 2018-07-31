exports.ids = ["me"];
exports.modules = {

/***/ "./src/app/me.js":
/*!***********************!*\
  !*** ./src/app/me.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jss */ "./src/jss.js");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg */ "./src/app/svg/index.js");
/* harmony import */ var _me_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./me.scss */ "./src/app/me.scss");
/* harmony import */ var _me_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_me_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mini_me_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mini_me.jpeg */ "./src/app/mini_me.jpeg");
/* harmony import */ var _mini_me_jpeg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mini_me_jpeg__WEBPACK_IMPORTED_MODULE_3__);
//






const gravatarPic = '//1.gravatar.com/avatar/1e7cd3d5b060997af752aee10d724da1'

const sheet = _jss__WEBPACK_IMPORTED_MODULE_0__["default"].createStyleSheet(_me_scss__WEBPACK_IMPORTED_MODULE_2___default.a)
sheet.addRules({
  '@global main': {
    backgroundImage: `url(${gravatarPic + '?s=680'}), url(${_mini_me_jpeg__WEBPACK_IMPORTED_MODULE_3___default.a})`
  }
})
const { classes } = sheet

const _ = {}
/* harmony default export */ __webpack_exports__["default"] = (({ hyper: { wire } }, state, emit) => {
  return wire(_, ':me')`
    <ul class=${classes.ul}>
      <li class=${classes.li}>
        <h1 class=${classes.h1}>
          Douglas Duteil
        </h1>
      </li>
      <li class=${classes.li}>
        <i class=${classes.i}>${Object(_svg__WEBPACK_IMPORTED_MODULE_1__["locationIcon"])(wire)}</i>
        <div>Paris, France</div>
      </li>
      <li class=${classes.li}>
        <i class=${classes.i}>${Object(_svg__WEBPACK_IMPORTED_MODULE_1__["githubIcon"])(wire)}</i>
        <div>OneDoes Member</div>
      </li>
      <li class=${classes.li}>
        <i class=${classes.i}>${Object(_svg__WEBPACK_IMPORTED_MODULE_1__["suitcaseIcon"])(wire)}</i>
        <div>Front End Developer at SFEIR Paris</div>
      </li>
    </ul>

    <style>${{ html: sheet.toString() }}</style>
  `
});


/***/ }),

/***/ "./src/app/me.scss":
/*!*************************!*\
  !*** ./src/app/me.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"@global":{"main":{"display":"flex","flexDirection":"column","backgroundPosition":"center center","backgroundSize":"cover","@media (max-width: 767px)":{"justifyContent":"flex-end"}}},"ul":{"display":"flex","flexDirection":"column","margin":"0","listStyleType":"none","@media (max-width: 767px)":{"height":"35vh","marginBottom":"50px","padding":"20vh 5vw 20px","background":"linear-gradient(\n      to bottom,\n      transparent 0%,\n      rgba(0, 0, 0, 0.6) 50%,\n      rgba(0, 0, 0, 0.6) 100%\n    )"},"@media (max-width: 767px) and (max-height: 431.4375px)":{"paddingTop":"0px"},"@media (min-width: 768px)":{"flex":"1","height":"30vh","padding":"25vh 0 36vh 30vw","background":"rgba(0, 0, 0, 0.6)"}},"li":{"display":"flex","alignItems":"center","fontWeight":"600","fontSize":"1.15em","&:not(:first-child)":{"flex":"1"}},"h1":{"fontSize":"3rem","fontWeight":"normal"},"i":{"textAlign":"center","marginRight":"20px"}};

/***/ }),

/***/ "./src/app/mini_me.jpeg":
/*!******************************!*\
  !*** ./src/app/mini_me.jpeg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAFAAUAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A+7viMk2o6jax21q0hhXLNJIxiGPVc4/OvPfhx41tdW8S6p/b1tA2n+SwtWgjwQytjK49eevp9a828L/tGX9z4bSz1HVDJI6/PLGIyxLjodpOcZIz7H8Od8JSXWn6zF4me9httLuIJLVPPG0NgJgrk/N2B9/xrkw2EVSnVlPdHmYrFyoVqcIq6k7PyPV9e19LrU5GiudVMK/LH5ki7to9eKK8x1H4prBdMgk0mQDoZIzn/wBBNFcywq7Hpc8z4l8J+L9R0Xxho/lOs0d0zxyRXALp86smcZ6ruLD0bmvRrnX7i60/Q7SdY54/s8lwGcHerM7DAYHIA9B+OaKK+lwSX1ap6fozzq8VLEUU11/zPONYv7hL1h5rtx1ZiaKKK8dH16pwt8KP/9k="

/***/ })

};;