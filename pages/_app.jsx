import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Food Hunter</title>
        <meta
          name='description'
          content='안녕하세요. 맛집 소개 사이트 푸드헌터입니다.'
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
