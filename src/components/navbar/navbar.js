import React from "react";
import styled from "styled-components";
import logoImage from "../../assets/logo.svg";

const StyledNavbar = styled.div`
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
`;
const RightContainer = styled.div`
  margin-left: 168px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.img``;
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SmallButtonContainer = styled.div`
  width: 268px;
  margin-right: 33px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;
const LargeButton = styled.div`
  width: 146px;
  height: 40px;
  margin-right: 168px;
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
`;
const Navbar = () => {
  return (
    <StyledNavbar>
      <RightContainer>
        <Logo src={logoImage} />
      </RightContainer>
      <LeftContainer>
        <SmallButtonContainer>
          <SmallButton>HOW WE WORK</SmallButton>
          <SmallButton>BLOG</SmallButton>
          <SmallButton>ACCOUNT</SmallButton>
        </SmallButtonContainer>
        <LargeButton>VIEW PLANS</LargeButton>
      </LeftContainer>
    </StyledNavbar>
  );
};

export default Navbar;
