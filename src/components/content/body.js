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
    </StyledBody>
  );
};

export default Body;
