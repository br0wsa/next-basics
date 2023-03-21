(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
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

/***/ 5881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./src/styles/Home.module.css
var Home_module = __webpack_require__(1828);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: external "uuidv4"
var external_uuidv4_ = __webpack_require__(3398);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/pages/index.js





function Home(props) {
    const [state, setState] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        newWord();
    }, []);
    const newWord = ()=>{
        fetch("/api/vocapi").then((resp)=>resp.json()).then((data)=>setState(data));
    };
    let randomWord;
    if (state) {
        const array = state.englishList[0].data;
        randomWord = array[Math.floor(Math.random() * array.length)].en;
        console.log(randomWord);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Roller de folie \xe0 Paris - Balades nocturnes en roller"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "D\xe9couvrez les meilleurs itin\xe9raires en roller \xe0 Paris la nuit et rejoignez notre communaut\xe9 de passionn\xe9s de roller de folie !"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "roller, roller de folie, roller quad, balade roller, Paris, roller \xe0 Paris, roller nocturne, passionn\xe9s de roller"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: "Votre nom ou celui de votre blog"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        "http-equiv": "X-UA-Compatible",
                        content: "IE=edge"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "Mot au hasard via API next"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: newWord,
                        children: "Get random word"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: randomWord
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "\uD83D\uDEFC ROLLER DE FOLIE \uD83D\uDEFC"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("table", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                            className: (Home_module_default())["table-body"],
                            children: props.data.map((el)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
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
            })
        ]
    });
}
async function getStaticProps() {
    const res = await __webpack_require__.e(/* import() */ 782).then(__webpack_require__.t.bind(__webpack_require__, 2782, 19));
    const data = await res.vocabulary;
    if (data.length === 0) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            data
        }
    };
}


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

/***/ }),

/***/ 3398:
/***/ ((module) => {

"use strict";
module.exports = require("uuidv4");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5881));
module.exports = __webpack_exports__;

})();