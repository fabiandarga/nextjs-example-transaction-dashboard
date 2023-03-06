import "../utils/icons/fontawesome";
import Layout from '../components/layout/default'
import '../style/app.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}