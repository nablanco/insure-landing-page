import React from "react";
import styled from "styled-components";

import Header from "./header";
import Body from "./body";
import Footer from "./footer";

const StyledContent = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`;

const ContentContainer = () => {
  return (
    <StyledContent>
      <Header />
      <Body />
      <Footer />
    </StyledContent>
  );
};

export default ContentContainer;
