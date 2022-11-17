import React from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Achieve = () => {
  return (
    <div className="Achieve">
      <AppLayout>
        <a href="/">
          <FontAwesomeIcon icon={faHouse} />
        </a>
        <Title>
          <h2 style={{ margin: 0 }}>붉은박쥐를 수집했어요!</h2>
        </Title>
        <ChaImg src="#"></ChaImg>
        <InfoBox>캐릭터 설명</InfoBox>
      </AppLayout>
    </div>
  );
};

export default Achieve;

let Title = styled.div`
  text-align: center;
  margin: 50px 0 30px 0;
`;

let ChaImg = styled.img`
  border-radius: 20px;
  width: 80vw;
  height: 45vh;
  margin-bottom: 20px;
`;

let InfoBox = styled.div`
  font-size: 20px;
  background: transparent;
  background: lightgray;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
  width: 80vw;
  height: 25vh;
`;

let Button = styled.button`
  font-size: 20px;
  background: transparent;
  border: 1px solid gray;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
  width: 80vw;
  height: 10vh;
`;
