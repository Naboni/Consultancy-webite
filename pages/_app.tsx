import '../styles/globals.css'
import 'antd/dist/antd.css';

import type { AppProps } from 'next/app'
import Head from "next/head";
//antd
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

// components
import Navbar from '@/components/common/Navbar/Navbar';
import AppFooter from '@/components/common/Footer/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout className="mainLayout">
      <Head>
        <link
          rel="preload"
          href="/fonts/Poppins/Poppins-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <title>Line Addis</title>
      </Head>
      <Header>
        <Navbar />
      </Header>
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  )
  // <Component {...pageProps} />
}

export default MyApp
