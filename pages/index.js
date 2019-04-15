import Layout from '../comps/MyLayout.js'
import Link from 'next/link'
// import fetch from 'isomorphic-unfetch'

/**
 * Now with style.
 */
function getPosts() {
    return [
        { id: 'hello-nextjs', title: 'Hello Next.js' },
        { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
        { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
    ]
}

export default function Blog() {
    return(
        <Layout>
            <h1> NEXT.js Blog</h1>
            <ul>
                {getPosts().map(post => (
                    <li key = {post.id}>
                        <Link as = {`p/${post.id}`} href = {`/post?title=${post.title}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            <style jsx>{`
                h1,
                a {
                    font-family:sans-serif;
                }
                ul {
                    padding: 0;
                }
                li {
                    list-style: none;
                    margin: 5px 0;
                }
                a {
                    text-decoration: none;
                    color: blue;
                }
                a:hover {
                    opacity: 0.6;
                }
            `}</style>
        </Layout>
    )
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
