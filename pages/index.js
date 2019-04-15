import Layout from '../comps/MyLayout.js'
import Link from 'next/link'

const PostLink = props => (
    <li>
        <Link href = {`post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)
export default function Blog() {
    return(
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink title = "test" />
            </ul>
        </Layout>
    )
}
// export default function Index() {
//   return (
//     <Layout>
//       <p>Hello Next.js</p>
//     </Layout>
//   )
// }
