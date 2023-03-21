"use strict";
(() => {
var exports = {};
exports.id = 52;
exports.ids = [52];
exports.modules = {

/***/ 7437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/vocapi.js


function handler(req, res) {
    if (req.method === "GET") {
        const filePath = external_path_default().join(process.cwd(), "src", "data", "listes.json");
        try {
            const fileData = external_fs_default().readFileSync(filePath);
            const data = JSON.parse(fileData);
            res.status(200).json(data);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Internal Server Error"
            });
        }
    } else if (req.method === "POST") {
        const enWord = req.body.en;
        const frWord = req.body.fr;
        const newWord = {
            en: enWord,
            fr: frWord
        };
        const filePath = external_path_default().join(process.cwd(), "src", "data", "listes.json");
        const fileData = external_fs_default().readFileSync(filePath);
        const data = JSON.parse(fileData);
        data.englishList[0].data.push(newWord);
        external_fs_default().writeFileSync(filePath, JSON.stringify(data));
        res.status(201).json({
            message: "Succ\xe8s !"
        });
    } else {
        return res.status(405).json({
            message: "Method not allowed"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7437));
module.exports = __webpack_exports__;

})();