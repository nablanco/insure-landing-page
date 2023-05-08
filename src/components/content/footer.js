import React from "react";
import styled from "styled-components";
import logoImage from "../../assets/logo.svg";
import iconFacebook from "../../assets/icon-facebook.svg";
import iconTwitter from "../../assets/icon-twitter.svg";
import iconPinterest from "../../assets/icon-pinterest.svg";
import iconInstagram from "../../assets/icon-instagram.svg";

import footerOptions from "./footeroptions";

const StyledFooter = styled.div`
  width: 100%;
  margin-top: 150px;
  background-color: #fafafa;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media screen and (max-width: 1200px) {
    margin-top: 140px;
  }
`;
const Top = styled.div`
  width: 1110px;
  margin-top: 64px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1200px) {
    width: 375px;
    margin-top: 88px;
    flex-flow: column nowrap;
  }
`;
const Logo = styled.img``;
const SocialMediaContainer = styled.div`
  width: 144px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    margin-top: 32px;
  }
`;
const FacebookButton = styled.img`
  :hover {
    filter: invert(12%) sepia(10%) saturate(1023%) hue-rotate(227deg)
      brightness(89%) contrast(86%);
    cursor: pointer;
  }
`;
const TwitterButton = styled.img`
  :hover {
    filter: invert(12%) sepia(10%) saturate(1023%) hue-rotate(227deg)
      brightness(89%) contrast(86%);
    cursor: pointer;
  }
`;
const PinterestButton = styled.img`
  :hover {
    filter: invert(12%) sepia(10%) saturate(1023%) hue-rotate(227deg)
      brightness(89%) contrast(86%);
    cursor: pointer;
  }
`;
const InstagramButton = styled.img`
  :hover {
    filter: invert(12%) sepia(10%) saturate(1023%) hue-rotate(227deg)
      brightness(89%) contrast(86%);
    cursor: pointer;
  }
`;
const DividerLine = styled.div`
  width: 1110px;
  margin-top: 36px;
  border: 1px solid #dadada;

  @media screen and (max-width: 1200px) {
    width: 327px;
    margin-top: 40px;
  }
`;
const Bottom = styled.div`
  width: 1110px;
  margin-top: 48px;
  margin-bottom: 64px;
  display: flex;
  flex-flow: row nowrap;

  @media screen and (max-width: 1200px) {
    width: 327px;
    margin-top: 0px;
    text-align: center;
    flex-flow: column nowrap;
    align-items: center;
  }
`;
const OptionGroup = styled.div`
  width: 255px;
  margin-right: 30px;
  display: flex;
  flex-flow: column nowrap;

  @media screen and (max-width: 1200px) {
    width: 327px;
    margin-top: 40px;
    margin-right: 0px;
  }
`;
const OptionTitle = styled.div`
  color: #837d88;
  font-family: "Karla";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 1.5px;
`;
const OptionList = styled.div`
  margin-top: 20px;
`;
const Option = styled.div`
  margin-top: 16px;
  color: #2d2641;
  font-family: "Karla";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 1.5px;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Top>
        <Logo src={logoImage} />
        <SocialMediaContainer>
          <FacebookButton src={iconFacebook} />
          <TwitterButton src={iconTwitter} />
          <PinterestButton src={iconPinterest} />
          <InstagramButton src={iconInstagram} />
        </SocialMediaContainer>
      </Top>
      <DividerLine />
      <Bottom>
        {footerOptions.map((optionGroup) => {
          return (
            <OptionGroup key={optionGroup.key}>
              <OptionTitle>{optionGroup.title}</OptionTitle>
              <OptionList>
                {optionGroup.options.map((option) => {
                  return <Option key={option}>{option}</Option>;
                })}
              </OptionList>
            </OptionGroup>
          );
        })}
      </Bottom>
    </StyledFooter>
  );
};

export default Footer;
