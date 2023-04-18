import React from "react";
import styled from "styled-components";

import imageDesktop from "../../assets/image-intro-desktop.jpg";
import imageMobile from "../../assets/image-intro-mobile.jpg";

const StyledHeader = styled.div`
  width: 100%;
  height: 600px;
  color: #ffffff;
  background-color: #2d2641;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    flex-flow: column-reverse nowrap;
    height: 951px;
    justify-content: flex-end;
    align-items: center;
  }
`;
const TextContainer = styled.div`
  width: 540px;
  margin-top: 105px;
  margin-right: 30px;
  display: flex;
  flex-flow: column nowrap;
`;
const DividerLine = styled.div`
  width: 150px;
  height: 0px;
  margin-bottom: 63px;
  border: 1px solid #ffffff;
`;
const Title = styled.div`
  width: 520px;
  margin-bottom: 16px;
  font-family: "DM Serif Display";
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  line-height: 64px;
  letter-spacing: -1px;
`;
const Body = styled.div`
  margin-bottom: 24px;
  font-family: "Karla";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
`;
const PlanButton = styled.div`
  width: 146px;
  height: 40px;
  font-family: "Karla";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 1.5px;
  color: #2c2830;
  background-color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImageContainer = styled.div`
  margin-top: 105px;
  @media screen and (max-width: 1200px) {
    margin-top: 0px;
  }
`;
const DesktopImage = styled.img`
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
const MobileImage = styled.img`
  display: none;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <TextContainer>
        <DividerLine />
        <Title>Humanizing your insurance</Title>
        <Body>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </Body>
        <PlanButton>VIEW PLANS</PlanButton>
      </TextContainer>
      <ImageContainer>
        <DesktopImage src={imageDesktop} />
        <MobileImage src={imageMobile} />
      </ImageContainer>
    </StyledHeader>
  );
};

export default Header;
