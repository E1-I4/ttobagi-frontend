import React from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import "../styles/theme.css";
import { useNavigate } from "react-router-dom";

import { ReactComponent as MainLogo } from "../assets/svg/logo_main.svg";

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
          <MainLogo />
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
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

let Button = styled.button`
  font-size: 20px;
  background: var(--green);
  border: none;
  border-radius: 20px;
  margin-top: 10px;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
  width: 85vw;
  height: 60px;
  font-size: 20px;
  font-weight: 700;
`;
