import React from "react";
import styled from "styled-components";
import AppLayout from "../styles/AppLayout";
import arrowLeft from "../assets/img/arrowLeft.png";
import { useLocation } from "react-router-dom";

const Info = () => {
  const location = useLocation();

  const { name, image, animal_name, description } = location.state;

  return (
    <div className="Info">
      <AppLayout>
        <Background>
          <Content>
            <a href="/album" style={{ marginTop: 50, marginBottom: 30 }}>
              <img src={arrowLeft} alt="arrow-left" />
            </a>
          </Content>
          <CenterBox>
            <ChaImg src={image} alt={name}></ChaImg>
            <span style={{ marginTop: 40, marginBottom: 10 }}>
              <img src={animal_name} style={{ height: 35 }} alt="animal-name" />
            </span>
            <InfoBox>
              {description.split("\\").map((item) => (
                <Li style={{ wordBreak: "keep-all" }}>{item}</Li>
              ))}
            </InfoBox>
          </CenterBox>
        </Background>
      </AppLayout>
    </div>
  );
};

export default Info;

let Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100vh;
  background: white;
  font-weight: 800;
`;

let Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 20px;
`;

let CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

let ChaImg = styled.img`
  width: 180px;
  height: 220px;
  margin: 0 20px;
  border-radius: 25px;
`;

let InfoBox = styled.div`
  margin: 20px;
  padding: 10px;
  font-size: 17px;
  font-weight: 800;
  color: var(--darkgray);
  background: transparent;
  background: var(--melange);
  border-radius: 25px;
  line-height: 27px;
  letter-spacing: -0.03em;
`;

let Li = styled.ol`
  margin-left: -25px;
`;
