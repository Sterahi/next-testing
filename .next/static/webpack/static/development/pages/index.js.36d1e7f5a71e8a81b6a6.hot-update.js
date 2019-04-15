webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _comps_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comps/MyLayout.js */ "./comps/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);




/**
 * Show w/ Async
 */
// const Index = (props) => (
//     <Layout>
//         <h1>Batman Shows</h1>
//         <ul>
//             {props.shows.map(show => (
//                 <li key={show.id}>
//                     <Link as={`/p/${show.id}`} href = {`/post?${show.id}`}>
//                         <a>{show.name}</a>
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     </Layout>
// )
// Index.getInitialProps = async function() {
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//     const data = await res.json()
//
//     console.log(`Show data Fetched. Count: ${data.length}`)
//
//     return {
//         shows: data.map(entry => entry.show)
//     }
// }
// export default Index

/**
 * Basic Blog Functions
 */

function Blog() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_comps_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "My Blog"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostLink, {
    id: "hello-nextjs",
    title: "Hello Next.js"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostLink, {
    id: "learn-nextjs",
    title: "Learn Next.js is awesome"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostLink, {
    id: "deploy-nextjs",
    title: "Deploy apps with Zeit"
  })));
}

var PostLink = function PostLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "post?title=".concat(props.title)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, props.title)));
};
/**
 * Basic Index function
 */
// export default function Index() {
//   return (
//     <Layout>
//       <p>Hello Next.js</p>
//     </Layout>
//   )
// }

/***/ })

})
//# sourceMappingURL=index.js.36d1e7f5a71e8a81b6a6.hot-update.js.map