import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import HkMediumWoff from "../fonts/hkgrotesk-mediumlegacy-webfont.woff";
import HkMediumWoff2 from "../fonts/hkgrotesk-mediumlegacy-webfont.woff2";
import HkBoldWoff from "../fonts/hkgrotesk-boldlegacy-webfont.woff";
import HkBoldWoff2 from "../fonts/hkgrotesk-boldlegacy-webfont.woff2";
import Header from "./Header";
import Footer from "./Footer";
import Whatsapp from "../images/whatsapp.inline.svg";

const theme = {
  colors: {
    red: "#DD3F45",
  },
};

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "HK Grotesk";
    src: url(${HkMediumWoff2}) format("woff2"),
      url(${HkMediumWoff}) format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "HK Grotesk";
    src: url(${HkBoldWoff}) format("woff"), url(${HkBoldWoff2}) format("woff2");
    font-weight: bold;
    font-style: bold;
  }
  html, body {
    font-family: "HK Grotesk";
    font-size: 18px;
  }
`;

const WhatsappBtn = styled.a`
  position: fixed;
  bottom: 15px;
  right: 15px;
  width: 50px;
  z-index: 1999;
  background: transparent;
  border: 0;
  display: block;
  @media (min-width: 992px) {
    width: 80px;
  }
  svg {
    width: 100%;
    height: auto;
  }
`;

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
      <WhatsappBtn
        href="https://api.whatsapp.com/send?phone=+528999231748&text=Me+gustar%C3%ADa+recibir+informaci%C3%B3n+de+Sibaja+alimentos"
        target="_blank"
        rel="noreferrer"
      >
        <Whatsapp />
      </WhatsappBtn>
    </ThemeProvider>
  );
};

export default Layout;
