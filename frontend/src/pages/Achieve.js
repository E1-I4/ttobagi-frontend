import React from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Achieve = () => {
  return (
    <div className="Achieve">
      <AppLayout>
        <Content>
          <HomeIcon href="/" style={{ marginTop: 40, marginBottom: 10 }}>
            <FontAwesomeIcon icon={faHouse} />
          </HomeIcon>
          <Title>
            <h2 style={{ margin: 0 }}>붉은박쥐를 수집했어요!</h2>
          </Title>
        </Content>

        <ChaImg src="#"></ChaImg>
        <InfoBox>캐릭터 설명</InfoBox>
      </AppLayout>
    </div>
  );
};

export default Achieve;

let Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 85vw;
`;

let HomeIcon = styled.a`
  color: black;
  display: flex;
  justify-content: flex-end;
`;

let Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 30px 0;
`;

let ChaImg = styled.img`
  border-radius: 20px;
  width: 85vw;
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
  height: 20vh;
`;
