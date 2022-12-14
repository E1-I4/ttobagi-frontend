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
            <a href="/album" style={{ marginTop: 50, marginBottom: 30 }}>
              <img src={arrowLeft} />
            </a>
          </Content>
          <CenterBox>
            <ChaImg src={image} alt={name}></ChaImg>
            <span style={{ marginTop: 40, marginBottom: 10 }}>
              <img src={animal_name} style={{ height: 35 }} />
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
  width: 180px;
  height: 220px;
  margin: 0 20px;
`;

let InfoBox = styled.div`
  font-size: 17px;
  font-weight: 800;
  color: var(--darkgray);
  background: transparent;
  background: var(--melange);
  border-radius: 25px;
  padding: 10px;
  margin: 20px;
  line-height: 27px;
  letter-spacing: -0.03em;
`;

let Li = styled.ol`
  margin-left: -25px;
`;
