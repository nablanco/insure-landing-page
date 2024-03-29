import React from "react";
import styled from "styled-components";
import bodyAssets from "./bodyassets";

const StyledBody = styled.div`
  width: 1110px;
  margin-top: 305px;
  align-self: center;
  display: flex;
  flex-flow: column nowrap;

  @media screen and (max-width: 1200px) {
    width: 327px;
    margin-top: 140px;
  }
`;
const DividerLine = styled.div`
  width: 150px;
  height: 0px;
  margin-bottom: 63px;
  border: 1px solid #96a9c6;
`;
const Title = styled.div`
  margin-bottom: 96px;
  font-family: "DM Serif Display";
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  line-height: 64px;
  letter-spacing: -1px;

  @media screen and (max-width: 1200px) {
    align-self: center;
    margin-bottom: 80px;
    font-family: "DM Serif Display";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 48px;
    text-align: center;
    letter-spacing: -0.666667px;
  }
`;
const ContentListContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;

  @media screen and (max-width: 1200px) {
    flex-flow: column nowrap;
  }
`;
const ContentItem = styled.div`
  width: 350px;
  margin-right: 30px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;

  @media screen and (max-width: 1200px) {
    flex-flow: column nowrap;
    align-items: center;
  }
`;
const ItemIcon = styled.img`
  margin-bottom: 32px;
`;
const ItemTitle = styled.div`
  margin-bottom: 16px;
  font-family: "DM Serif Display";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.388889px;
`;
const ItemText = styled.div`
  font-family: "Karla";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
`;
const LowerContentContainer = styled.div`
  height: 250px;
  margin-top: 158px;
  background-color: #2d2641;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1200px) {
    height: 344px;
    flex-flow: column nowrap;
    justify-content: flex-start;
  }
`;
const LowerContentText = styled.div`
  width: 475px;
  height: 112px;
  color: #ffffff;
  margin-left: 81px;
  font-family: "DM Serif Display";
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 56px;
  letter-spacing: -0.777778px;

  @media screen and (max-width: 1200px) {
    margin-left: 0px;
    margin-top: 72px;
    width: 279px;
    height: 120px;
    font-size: 40px;
    line-height: 40px;
    text-align: center;
    letter-spacing: -0.555556px;
  }
`;
const LowerContentButton = styled.div`
  width: 160px;
  height: 40px;
  margin-right: 80px;
  color: #ffffff;
  background-color: none;
  border: 1px solid #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Karla";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 1.5px;

  :hover {
    color: #2c2830;
    background-color: #ffffff;
  }

  @media screen and (max-width: 1200px) {
    margin-right: 0px;
    margin-top: 40px;
  }
`;
const Body = () => {
  return (
    <StyledBody>
      <DividerLine />
      <Title>{"We're different"}</Title>
      <ContentListContainer>
        {bodyAssets.map((asset) => {
          return (
            <ContentItem key={asset.id}>
              <ItemIcon src={asset.icon} />
              <ItemTitle>{asset.title}</ItemTitle>
              <ItemText>{asset.text}</ItemText>
            </ContentItem>
          );
        })}
      </ContentListContainer>
      <LowerContentContainer>
        <LowerContentText>Find out more about how we work</LowerContentText>
        <LowerContentButton>HOW WE WORK</LowerContentButton>
      </LowerContentContainer>
    </StyledBody>
  );
};

export default Body;
