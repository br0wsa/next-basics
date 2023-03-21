(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 276:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "Navbar_navbar__jV2vG",
	"navbar-link": "Navbar_navbar-link__vWSMt",
	"active": "Navbar_active__b5O3V"
};


/***/ }),

/***/ 1465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Navbar.module.css
var Navbar_module = __webpack_require__(276);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
;// CONCATENATED MODULE: ./src/components/Navbar.jsx




const Navbar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: (Navbar_module_default()).navbar,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                className: (Navbar_module_default())["navbar-link"],
                href: "/",
                children: "Accueil"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                className: (Navbar_module_default())["navbar-link"],
                href: "/listes",
                children: "Listes"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                className: (Navbar_module_default())["navbar-link"],
                href: "/isr",
                children: "ISR"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                className: (Navbar_module_default())["navbar-link"],
                href: "/btc",
                children: "BTC"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                className: (Navbar_module_default())["navbar-link"],
                href: "/add",
                children: "Add (POST API)"
            })
        ]
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./src/components/container/Container.js



function Container(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
            props.children
        ]
    });
}
/* harmony default export */ const container_Container = (Container);

// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
;// CONCATENATED MODULE: ./src/pages/_app.js



function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(container_Container, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(1465)));
module.exports = __webpack_exports__;

})();