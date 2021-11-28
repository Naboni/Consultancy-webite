import "../styles/globals.css";
import "antd/dist/antd.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type { AppProps } from "next/app";
import Head from "next/head";
//antd
import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

// components
import Navbar from "@/components/common/Navbar/Navbar";
import AppFooter from "@/components/common/Footer/Footer";

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
        <title>Sky Keys Consultancy</title>
        <link rel="shortcut icon" href="logo.ico" type="image/x-icon" />
      </Head>
      <Header style={{ backgroundColor: "transparent", padding: 0 }}>
        <Navbar />
      </Header>
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default MyApp;
