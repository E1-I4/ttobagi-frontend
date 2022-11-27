import React from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import "../styles/theme.css";
import bgImg from "../assets/img/mainbg.png";
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
        <Background>
          <Title style={{ marginTop: 175 }}>
            <MainLogo />
            <SubTitle>
              <span>
                제주도의
                <span style={{ color: "var(--orange)" }}> 멸종위기 동물</span>을
                위한 도감
              </span>
            </SubTitle>
          </Title>
          <>
            <Button onClick={navigateToMapPage} style={{ marginTop: 15 }}>
              서식지도
            </Button>
            <Button onClick={navigateToAlbumPage}>도감</Button>
          </>
        </Background>
      </AppLayout>
    </div>
  );
};

export default Home;

let Background = styled.div`
  width: 350px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

let Title = styled.div`
  text-align: center;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

let SubTitle = styled.div`
  font-size: 19px;
`;

let Button = styled.button`
  font-size: 20px;
  border-radius: 24px;
  width: 300px;
  height: 70px;
  border: none;
  border-radius: 20px;
  margin-bottom: 15px;
  background: white;
  color: var(--darkgray);
  &:hover {
    cursor: pointer;
    background: var(--orange);
  }
`;
