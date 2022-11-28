import React from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
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
            <a href="/album" style={{ marginTop: 40, marginBottom: 20 }}>
              <img src={arrowLeft} />
            </a>
          </Content>
          <CenterBox>
            <ChaImg src={image} alt={name}></ChaImg>
            <h2>
              <img src={animal_name} />
            </h2>
            <InfoBox>
              {description.split("\\").map((item) => (
                <Li>• {item}</Li>
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
  width: 350px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: white;
  font-weight: 800;
`;

let Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: left;
  margin: 0 20px;
`;

let CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

let ChaImg = styled.img`
  border-radius: 25px;
  width: 200px;
  height: 250px;
  margin: 0 20px;
`;

let InfoBox = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: var(--darkgray);
  background: transparent;
  background: var(--melange);
  border-radius: 25px;
  padding: 10px;
  margin: 20px;
  line-height: 27px;
`;

let Li = styled.ol`
  margin-left: -25px;
`;
