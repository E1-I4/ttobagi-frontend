import React from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Info = () => {
  return (
    <div className="Info">
      <AppLayout>
        <a href="/">
          <FontAwesomeIcon icon={faChevronLeft} />
        </a>
        <ChaImg src="#"></ChaImg>
        <h2 style={{ marginTop: 10, marginBottom: 10 }}>붉은박쥐</h2>
        <InfoBox>캐릭터 설명</InfoBox>
      </AppLayout>
    </div>
  );
};

export default Info;

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
