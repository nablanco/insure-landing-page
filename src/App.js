import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import Navbar from "./components/navbar/navbar";
import SideBar from "./components/navbar/sidebar";
import ContentContainer from "./components/content/contentcontainer";

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
  const [showSideBar, setShowSideBar] = useState(false);

  const handleSidebar = () => {
    setShowSideBar(showSideBar ? false : true);
  };

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Navbar showSideBar={showSideBar} handleSidebar={handleSidebar} />
        <SideBar showSideBar={showSideBar} />
        <ContentContainer showSideBar={showSideBar} />
      </StyledApp>
    </>
  );
};

export default App;
