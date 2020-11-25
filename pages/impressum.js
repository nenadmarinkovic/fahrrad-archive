import React from "react";

import GlobalStyle from "../styles/globalStyles";
import HeaderImpressum from "../components/Header";
import ImpressumText from "../components/ImpressumText";
import Footer from "../components/Footer";

export default function Impressum() {
  return (
    <>
   
      <GlobalStyle />
      <HeaderImpressum />
      <ImpressumText />
      <Footer />
    </>
  );
}
