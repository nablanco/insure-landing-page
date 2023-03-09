import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Navbar from "./components/navbar/navbar";
import Header from "./components/body/header";
import Body from "./components/body/body";
import Footer from "./components/body/footer";

const GlobalStyle = createGlobalStyle`
  body {
    display: block;
    margin: 0px;
    padding: 0px;
    font-family: 'DM Serif Display', serif;
    font-family: 'Karla', sans-serif;
    --header-font: 'DM Serif Display', serif;
    --body-font: 'Karla', sans-serif;
  }
`;

const StyledApp = styled.div``;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Navbar />
        <Header />
        <Body />
        <Footer />
      </StyledApp>
    </>
  );
};

export default App;
