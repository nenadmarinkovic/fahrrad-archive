import Head from "next/head";
import GlobalStyle from "../styles/globalStyles";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Content from "../components/Content";
import MapComponent from "../components/MapComponent";
import OpenHours from "../components/OpenHours";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Flickschuh Wien</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Header />
      <Banner />
      <Content />
      <MapComponent />
      <OpenHours />
      <Footer />
    </>
  );
}
