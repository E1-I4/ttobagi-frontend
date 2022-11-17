import React from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Album = () => {
  return (
    <div className="Album">
      <AppLayout>
        <a href="/">
          <FontAwesomeIcon icon={faChevronLeft} />
        </a>
        <>
          <h2 style={{ marginTop: 30, marginBottom: 30 }}>
            지금까지 수집한
            <br></br>
            동물들이예요
          </h2>
        </>
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

let ImgList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 90vw;
  height: 130vh;
`;

let ImgCard = styled.div`
  background: lightgray;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;
