"use strict";
(() => {
var exports = {};
exports.id = 244;
exports.ids = [244,636];
exports.modules = {

/***/ 1554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Listes),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3398);
/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuidv4__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_listes_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(636);




function Listes({ array  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "VOCABULARY"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                children: array.map((el)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: `/listes/${el.name}`,
                            children: el.name
                        })
                    }, (0,uuidv4__WEBPACK_IMPORTED_MODULE_1__.uuid)()))
            })
        ]
    });
}
async function getStaticProps() {
    return {
        props: {
            array: _data_listes_json__WEBPACK_IMPORTED_MODULE_3__.englishList
        }
    };
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3398:
/***/ ((module) => {

module.exports = require("uuidv4");

/***/ }),

/***/ 636:
/***/ ((module) => {

module.exports = JSON.parse('{"englishList":[{"name":"words","data":[{"en":"house","fr":"maison"},{"en":"rocket","fr":"fusée"},{"en":"pen","fr":"stylo"},{"en":"trouser","fr":"pantalon"},{"en":"car","fr":"voiture"},{"en":"pool","fr":"piscine"},{"en":"city","fr":"ville"},{"en":"Cniht","fr":"Chevalier"},{"en":"World","fr":"Monde"}]},{"name":"adjectives","data":[{"en":"tall","fr":"grand"},{"en":"narrow","fr":"étroit"},{"en":"soft","fr":"doux"},{"en":"hard","fr":"dur/difficile"},{"en":"lovely","fr":"adorable"},{"en":"fancy","fr":"extraordinaire"},{"en":"discret","fr":"discret"},{"en":"enormous","fr":"énorme"},{"en":"smart","fr":"intelligent"}]},{"name":"verbs","data":[{"en":"to be","fr":"être"},{"en":"to have","fr":"avoir"},{"en":"to breath","fr":"respirer"},{"en":"to know","fr":"savoir"},{"en":"to love","fr":"aimer"},{"en":"to drive","fr":"conduire"},{"en":"to laugh","fr":"rigoler"}]}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(1554)));
module.exports = __webpack_exports__;

})();