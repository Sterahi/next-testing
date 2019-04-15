import { withRouter } from 'next/router'
import Layout from '../comps/MyLayout'

const Content = withRouter(props =>
    <Layout>
        <h1>{props.router.query.title}</h1>
        <p>this is blog content</p>
    </Layout>
)
const Page = props => (
    <Layout>
        <Content />
    </Layout>
)
export default Page
