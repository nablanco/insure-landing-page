import React from "react";
import styled from "styled-components";
import logoImage from "../../assets/logo.svg";
import openMenuImage from "../../assets/icon-hamburger.svg";
import closeMenuImage from "../../assets/icon-close.svg";

const StyledNavbar = styled.div`
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
`;
const LeftContainer = styled.div`
  margin-left: 168px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 750px) {
    margin-left: 24px;
  }
`;
const Logo = styled.img``;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 168px;

  @media screen and (max-width: 750px) {
    margin-right: 24px;
  }
`;
const SmallButtonContainer = styled.div`
  width: 268px;
  margin-right: 33px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
const SmallButton = styled.div`
  color: #837d88;
  font-family: var(--body-font);
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 1.5px;
  cursor: pointer;

  :hover {
    color: #2c2830;
  }
`;
const LargeButton = styled.div`
  width: 146px;
  height: 40px;
  color: #2c2830;
  border: 1.5px solid #2c2830;
  font-family: "Karla";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 1.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    color: #ffffff;
    background-color: #2c2830;
  }

  @media screen and (max-width: 425px) {
    display: none;
  }
`;
const SideBarButton = styled.div`
  display: none;

  @media screen and (max-width: 425px) {
    display: flex;
    cursor: pointer;
  }
`;
const SideBarButtonImage = styled.img``;

const Navbar = ({ showSideBar, handleSidebar }) => {
  return (
    <StyledNavbar>
      <LeftContainer>
        <Logo src={logoImage} />
      </LeftContainer>
      <RightContainer>
        <SmallButtonContainer>
          <SmallButton>HOW WE WORK</SmallButton>
          <SmallButton>BLOG</SmallButton>
          <SmallButton>ACCOUNT</SmallButton>
        </SmallButtonContainer>
        <LargeButton>VIEW PLANS</LargeButton>
        <SideBarButton onClick={handleSidebar}>
          <SideBarButtonImage
            src={showSideBar ? closeMenuImage : openMenuImage}
          />
        </SideBarButton>
      </RightContainer>
    </StyledNavbar>
  );
};

export default Navbar;
