import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AppLayout from "../styles/AppLayout";
import "../styles/theme.css";
import { ReactComponent as MainLogo } from "../assets/svg/logo_main.svg";
import bgImg from "../assets/img/mainbg.png";

const Home = () => {
  const navigate = useNavigate();

  const navigateToAlbumPage = () => navigate("/album");
  const navigateToMapPage = () => navigate("/map");

  return (
    <HomeContainer>
      <AppLayout>
        <Background>
          <Title>
            <MainLogo />
            <SubTitle>
              <SubTitleGray>
                제주도의
                <span style={{ color: "var(--orange)" }}> 멸종위기 동물</span>을
                위한 도감
              </SubTitleGray>
            </SubTitle>
          </Title>
          <>
            <Button onClick={navigateToMapPage}>서식지도</Button>
            <Button onClick={navigateToAlbumPage}>도감</Button>
          </>
        </Background>
      </AppLayout>
    </HomeContainer>
  );
};

export default Home;

let HomeContainer = styled.div``;

let Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 370px;
  height: 100vh;
  background-image: url(${bgImg});
  background-size: cover;
  letter-spacing: -0.03em;
  box-shadow: none;
`;

let Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 175px;
  margin-bottom: 200px;
  font-weight: 800;
  text-align: center;
  gap: 20px;
`;

let SubTitle = styled.div`
  font-size: 19px;
`;

let SubTitleGray = styled.span`
  color: var(--gray);
`;

let Button = styled.button`
  width: 300px;
  height: 70px;
  margin-top: 15px;
  margin-bottom: 15px;
  background: white;
  color: var(--darkgray);
  font-size: 20px;
  font-weight: 800;
  border: none;
  border-radius: 20px;

  &:hover {
    background: var(--orange);
    cursor: pointer;
  }
`;
