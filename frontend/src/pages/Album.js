import React from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Album = () => {
  return (
    <div className="Album">
      <AppLayout>
        <Content>
          <a href="/" style={{ marginTop: 40, marginBottom: 10 }}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </a>
          <h2 style={{ marginBottom: 30 }}>
            지금까지 수집한
            <br></br>
            동물들이예요
          </h2>
        </Content>
        <ImgList>
          <ImgCard>
            <img src="#" href="/info"></img>
          </ImgCard>
          <ImgCard>
            <img src="#" href="/info"></img>
          </ImgCard>
          <ImgCard>
            <img src="#" href="/info"></img>
          </ImgCard>
          <ImgCard>
            <img src="#" href="/info"></img>
          </ImgCard>
          <ImgCard>
            <img src="#" href="/info"></img>
          </ImgCard>
          <ImgCard>
            <img src="#" href="/info"></img>
          </ImgCard>
          <ImgCard>
            <img src="#" href="/info"></img>
          </ImgCard>
          <ImgCard>
            <img src="#" href="/info"></img>
          </ImgCard>
        </ImgList>
      </AppLayout>
    </div>
  );
};

export default Album;

let Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: left;
  width: 85vw;
`;

let ImgList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 15px;
  width: 85vw;
`;

let ImgCard = styled.div`
  background: lightgray;
  border-radius: 25px;
  &:hover {
    cursor: pointer;
  }
  height: 30vh;
`;
