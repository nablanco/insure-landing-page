import React from "react";
import styled from "styled-components";

const StyledSideBar = styled.div`
  display: none;

  @media screen and (max-width: 425px) {
    display: ${({ showSideBar }) => (showSideBar ? "flex" : "none")};
    position: absolute;
    width: 100%;
    height: calc(100% - 80px);
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    padding-top: 40px;
    background: #2c2830;
    z-index: 99;
  }
`;
const StandardButton = styled.div`
  width: 327px;
  height: 40px;
  margin-bottom: 24px;
  font-family: var(--body-font);
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 1.36364px;
  color: #ffffff;
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const SpecialButton = styled.div`
  width: 327px;
  height: 56px;
  font-family: var(--body-font);
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 1.36364px;
  color: #ffffff;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SideBar = ({ showSideBar }) => {
  return (
    <StyledSideBar showSideBar={showSideBar}>
      <StandardButton>HOW WE WORK</StandardButton>
      <StandardButton>BLOG</StandardButton>
      <StandardButton>ACCOUNT</StandardButton>
      <SpecialButton>VIEW PLANS</SpecialButton>
    </StyledSideBar>
  );
};

export default SideBar;
