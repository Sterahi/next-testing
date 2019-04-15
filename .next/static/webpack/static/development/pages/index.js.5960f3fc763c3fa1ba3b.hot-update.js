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


 // import fetch from 'isomorphic-unfetch'

/**
 * Now with style.
 */

function getPosts() {
  return [{
    id: 'hello-nextjs',
    title: 'Hello Next.js'
  }, {
    id: 'learn-nextjs',
    title: 'Learn Next.js is awesome'
  }, {
    id: 'deploy-nextjs',
    title: 'Deploy apps with ZEIT'
  }];
}

function Blog() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_comps_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__["default"], null);
}
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
// export default function Blog() {
//     return(
//         <Layout>
//             <h1>My Blog</h1>
//             <ul>
//                 <PostLink id="hello-nextjs" title="Hello Next.js" />
//                 <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
//                 <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
//             </ul>
//         </Layout>
//     )
// }
// const PostLink = props => (
//     <li>
//     <Link href = {`post?title=${props.title}`}>
//     <a>{props.title}</a>
//     </Link>
//     </li>
// )

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
//# sourceMappingURL=index.js.5960f3fc763c3fa1ba3b.hot-update.js.map