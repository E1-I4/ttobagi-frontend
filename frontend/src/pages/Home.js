import React from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateToAlbumPage = () => {
    navigate("/album");
  };
  const navigateToMapPage = () => {
    navigate("/map");
  };

  return (
    <div className="Home">
      <AppLayout>
        <Title style={{ marginTop: 100 }}>
          <h1>또바기도감</h1>
          <span>제주도의 멸종위기동물을 위한 도감</span>
        </Title>
        <Button onClick={navigateToMapPage}>서식지도</Button>
        <Button onClick={navigateToAlbumPage}>도감</Button>
      </AppLayout>
    </div>
  );
};

export default Home;

let Title = styled.div`
  text-align: center;
  margin-bottom: 100px;
`;

let Button = styled.button`
  font-size: 20px;
  background: transparent;
  border: 1px solid gray;
  margin-top: 10px;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
  width: 60vw;
`;
