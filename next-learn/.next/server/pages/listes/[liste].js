(() => {
var exports = {};
exports.id = 641;
exports.ids = [641];
exports.modules = {

/***/ 1828:
/***/ ((module) => {

// Exports
module.exports = {
	"table-body": "Home_table-body__ZJ_RY",
	"table-row": "Home_table-row__q6Sga",
	"table-cell": "Home_table-cell__zGBsV"
};


/***/ }),

/***/ 7227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ liste),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "uuidv4"
var external_uuidv4_ = __webpack_require__(3398);
// EXTERNAL MODULE: ./src/styles/Home.module.css
var Home_module = __webpack_require__(1828);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./src/pages/listes/[liste].js




function liste({ listEnCours  }) {
    const router = (0,router_namespaceObject.useRouter)();
    // si fallback true le server envoie uniquement la structure HTML => donc bug car pas de data. d'ou cette condition
    if (!listEnCours) {
        return /*#__PURE__*/ jsx_runtime_.jsx("h1", {
            children: "Loading..."
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: router.query.liste
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("table", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                    children: listEnCours.map((el)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                            className: (Home_module_default())["table-row"],
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    className: (Home_module_default())["table-cell"],
                                    children: el.en
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    className: (Home_module_default())["table-cell"],
                                    children: el.fr
                                })
                            ]
                        }, (0,external_uuidv4_.uuid)()))
                })
            })
        ]
    });
}
async function getStaticProps(context) {
    const slug = context.params.liste;
    const data = await __webpack_require__.e(/* import() */ 636).then(__webpack_require__.t.bind(__webpack_require__, 636, 19));
    const listEnCours = data.englishList.find((l)=>l.name === slug);
    // si fallback true le server envoie uniquement la structure HTML => donc bug car pas de data. d'ou cette condition
    if (!listEnCours) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            listEnCours: listEnCours.data
        }
    };
}
async function getStaticPaths() {
    const data = await __webpack_require__.e(/* import() */ 636).then(__webpack_require__.t.bind(__webpack_require__, 636, 19));
    const paths = data.englishList.map((path)=>({
            params: {
                liste: path.name
            }
        }));
    return {
        paths,
        // fallback: true,
        fallback: "blocking"
    };
}


/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3398:
/***/ ((module) => {

"use strict";
module.exports = require("uuidv4");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7227));
module.exports = __webpack_exports__;

})();