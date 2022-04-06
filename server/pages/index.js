"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,955];
exports.modules = {

/***/ 790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Seo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


function Seo({ title  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
            children: title
        })
    });
};


/***/ }),

/***/ 222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./pages/Seo.js
var Seo = __webpack_require__(790);
;// CONCATENATED MODULE: ./config.js
const prefix =  true ? "https://jaeseong90.github.io/nextjsintro" : 0;

;// CONCATENATED MODULE: ./pages/index.js








function Home({ movies  }) {
    const router = (0,router_.useRouter)();
    const onClick = (id, title)=>{
        router.push(`/movies/${title}/${id}`);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-1171378c2e934ab4" + " " + "container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Seo["default"], {
                title: "Home"
            }),
            movies === null || movies === void 0 ? void 0 : movies.map((movie)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    onClick: ()=>onClick(movie.id, movie.original_title)
                    ,
                    className: "jsx-1171378c2e934ab4" + " " + "movie",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                            className: "jsx-1171378c2e934ab4"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            className: "jsx-1171378c2e934ab4",
                            /*#__PURE__*/ children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: `/movies/${movie.original_title}/${movie.id}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "jsx-1171378c2e934ab4",
                                    children: movie.original_title
                                })
                            })
                        })
                    ]
                }, movie.id)
            ),
            jsx_runtime_.jsx((style_default()), {
                id: "1171378c2e934ab4",
                children: ".container.jsx-1171378c2e934ab4{display:grid;grid-template-columns:1fr 1fr;padding:20px;gap:20px}.movie.jsx-1171378c2e934ab4{cursor:pointer}.movie.jsx-1171378c2e934ab4 img.jsx-1171378c2e934ab4{max-width:100%;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;-webkit-transition:-webkit-transform.2s ease-in-out;-moz-transition:-moz-transform.2s ease-in-out;-o-transition:-o-transform.2s ease-in-out;transition:-webkit-transform.2s ease-in-out;transition:-moz-transform.2s ease-in-out;transition:-o-transform.2s ease-in-out;transition:transform.2s ease-in-out;-webkit-box-shadow:rgba(0,0,0,.1)0px 4px 12px;-moz-box-shadow:rgba(0,0,0,.1)0px 4px 12px;box-shadow:rgba(0,0,0,.1)0px 4px 12px}.movie.jsx-1171378c2e934ab4:hover img.jsx-1171378c2e934ab4{-webkit-transform:scale(1.05)translateY(-10px);-moz-transform:scale(1.05)translateY(-10px);-ms-transform:scale(1.05)translateY(-10px);-o-transform:scale(1.05)translateY(-10px);transform:scale(1.05)translateY(-10px)}.movie.jsx-1171378c2e934ab4 h4.jsx-1171378c2e934ab4{font-size:18px;text-align:center}"
            })
        ]
    });
};
async function getServerSideProps() {
    const { results  } = await (await fetch(`${prefix}/api/movies`)).json();
    return {
        props: {
            movies: results
        }
    };
}


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664], () => (__webpack_exec__(222)));
module.exports = __webpack_exports__;

})();