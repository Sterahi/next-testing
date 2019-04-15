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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _comps_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comps/MyLayout.js */ "./comps/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);



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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_comps_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3392635431"
  }, " NEXT.js Blog"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3392635431"
  }, getPosts().map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: post.id,
      className: "jsx-3392635431"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      as: "p/".concat(post.id),
      href: "/post?title=".concat(post.title)
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-3392635431"
    }, post.title)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3392635431"
  }, "h1.jsx-3392635431,a.jsx-3392635431{font-family:sans-serif;}ul.jsx-3392635431{padding:0;}li.jsx-3392635431{list-style:none;margin:5px 0;}a.jsx-3392635431{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-3392635431:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N0ZXJhaGkvRG9jdW1lbnRzL25leHQtdGVzdGluZy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QndCLEFBSTJDLEFBR1osQUFHTSxBQUlLLEFBSVQsVUFWaEIsRUFXQSxJQVJpQixPQU5qQixNQU9BLHFCQUdlLFdBQ2YiLCJmaWxlIjoiL2hvbWUvc3RlcmFoaS9Eb2N1bWVudHMvbmV4dC10ZXN0aW5nL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wcy9NeUxheW91dC5qcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbi8vIGltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbi8qKlxuICogTm93IHdpdGggc3R5bGUuXG4gKi9cbmZ1bmN0aW9uIGdldFBvc3RzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAgIHsgaWQ6ICdoZWxsby1uZXh0anMnLCB0aXRsZTogJ0hlbGxvIE5leHQuanMnIH0sXG4gICAgICAgIHsgaWQ6ICdsZWFybi1uZXh0anMnLCB0aXRsZTogJ0xlYXJuIE5leHQuanMgaXMgYXdlc29tZScgfSxcbiAgICAgICAgeyBpZDogJ2RlcGxveS1uZXh0anMnLCB0aXRsZTogJ0RlcGxveSBhcHBzIHdpdGggWkVJVCcgfVxuICAgIF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8aDE+IE5FWFQuanMgQmxvZzwvaDE+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2dldFBvc3RzKCkubWFwKHBvc3QgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5ID0ge3Bvc3QuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXMgPSB7YHAvJHtwb3N0LmlkfWB9IGhyZWYgPSB7YC9wb3N0P3RpdGxlPSR7cG9zdC50aXRsZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57cG9zdC50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGgxLFxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG5cbi8qKlxuICogU2hvdyB3LyBBc3luY1xuICovXG4vLyBjb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxuLy8gICAgIDxMYXlvdXQ+XG4vLyAgICAgICAgIDxoMT5CYXRtYW4gU2hvd3M8L2gxPlxuLy8gICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgICB7cHJvcHMuc2hvd3MubWFwKHNob3cgPT4gKFxuLy8gICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Nob3cuaWR9PlxuLy8gICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9wLyR7c2hvdy5pZH1gfSBocmVmID0ge2AvcG9zdD8ke3Nob3cuaWR9YH0+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8YT57c2hvdy5uYW1lfTwvYT5cbi8vICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuLy8gICAgICAgICAgICAgICAgIDwvbGk+XG4vLyAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgPC91bD5cbi8vICAgICA8L0xheW91dD5cbi8vIClcbi8vIEluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpXG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbi8vXG4vLyAgICAgY29uc29sZS5sb2coYFNob3cgZGF0YSBGZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKVxuLy9cbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBzaG93czogZGF0YS5tYXAoZW50cnkgPT4gZW50cnkuc2hvdylcbi8vICAgICB9XG4vLyB9XG4vLyBleHBvcnQgZGVmYXVsdCBJbmRleFxuLyoqXG4gKiBCYXNpYyBCbG9nIEZ1bmN0aW9uc1xuICovXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuLy8gICAgIHJldHVybihcbi8vICAgICAgICAgPExheW91dD5cbi8vICAgICAgICAgICAgIDxoMT5NeSBCbG9nPC9oMT5cbi8vICAgICAgICAgICAgIDx1bD5cbi8vICAgICAgICAgICAgICAgICA8UG9zdExpbmsgaWQ9XCJoZWxsby1uZXh0anNcIiB0aXRsZT1cIkhlbGxvIE5leHQuanNcIiAvPlxuLy8gICAgICAgICAgICAgICAgIDxQb3N0TGluayBpZD1cImxlYXJuLW5leHRqc1wiIHRpdGxlPVwiTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lXCIgLz5cbi8vICAgICAgICAgICAgICAgICA8UG9zdExpbmsgaWQ9XCJkZXBsb3ktbmV4dGpzXCIgdGl0bGU9XCJEZXBsb3kgYXBwcyB3aXRoIFplaXRcIiAvPlxuLy8gICAgICAgICAgICAgPC91bD5cbi8vICAgICAgICAgPC9MYXlvdXQ+XG4vLyAgICAgKVxuLy8gfVxuLy8gY29uc3QgUG9zdExpbmsgPSBwcm9wcyA9PiAoXG4vLyAgICAgPGxpPlxuLy8gICAgIDxMaW5rIGhyZWYgPSB7YHBvc3Q/dGl0bGU9JHtwcm9wcy50aXRsZX1gfT5cbi8vICAgICA8YT57cHJvcHMudGl0bGV9PC9hPlxuLy8gICAgIDwvTGluaz5cbi8vICAgICA8L2xpPlxuLy8gKVxuXG4vKipcbiAqIEJhc2ljIEluZGV4IGZ1bmN0aW9uXG4gKi9cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxMYXlvdXQ+XG4vLyAgICAgICA8cD5IZWxsbyBOZXh0LmpzPC9wPlxuLy8gICAgIDwvTGF5b3V0PlxuLy8gICApXG4vLyB9XG4iXX0= */\n/*@ sourceURL=/home/sterahi/Documents/next-testing/pages/index.js */"));
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
//# sourceMappingURL=index.js.813ad94e20b90c68ea79.hot-update.js.map