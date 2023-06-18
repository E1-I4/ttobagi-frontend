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
              <span style={{ color: "var(--gray)" }}>
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
  margin-bottom: 200px;
  font-weight: 800;
  text-align: center;
  gap: 20px;
`;

let SubTitle = styled.div`
  font-size: 19px;
`;

let Button = styled.button`
  width: 300px;
  height: 70px;
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
