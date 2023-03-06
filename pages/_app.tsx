import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"; 
import Layout from '../components/layout/default'
import '../style/app.scss';

import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}