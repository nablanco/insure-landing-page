import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    font-family: 'DM Serif Display', serif;
font-family: 'Karla', sans-serif;
    overflow-x: hidden;
  }
`;

const StyledApp = styled.div``;

const App = () => {
  return (
    <GlobalStyle>
      <StyledApp></StyledApp>
    </GlobalStyle>
  );
};

export default App;
