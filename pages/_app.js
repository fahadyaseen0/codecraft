import "../styles/globals.css";
import "../styles/home-hero.css";
import "../styles/products-hero.css";
import "../styles/services.css";
import "../styles/about.css";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
