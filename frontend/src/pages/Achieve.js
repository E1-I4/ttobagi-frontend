import React from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const Achieve = () => {
  const location = useLocation();
  const { id, name, image, description } = location.state;

  return (
    <div className="Achieve">
      <AppLayout>
        <Content>
          <HomeIcon href="/" style={{ marginTop: 40, marginBottom: 10 }}>
            <FontAwesomeIcon icon={faHouse} />
          </HomeIcon>
          <Title>
            <h2 style={{ margin: 0 }}>{name}를 수집했어요!</h2>
          </Title>
        </Content>

        <ChaImg src={image} alt={name}></ChaImg>
        <h2 style={{ marginTop: 20, marginBottom: 20 }}>{name}</h2>
        <InfoBox>
          {description.split("\\").map((item) => (
            <Li>{item}</Li>
          ))}
        </InfoBox>
      </AppLayout>
    </div>
  );
};

export default Achieve;

let Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 85vw;
`;

let HomeIcon = styled.a`
  color: black;
  display: flex;
  justify-content: flex-end;
`;

let Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 30px 0;
`;

let ChaImg = styled.img`
  border-radius: 20px;
  width: 85vw;
  height: 45vh;
  margin-bottom: 20px;
`;

let InfoBox = styled.div`
  font-size: 20px;
  background: transparent;
  background: lightgray;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
  width: 80vw;
  height: 20vh;
`;

let Li = styled.ol`
  margin-left: -25px;
`;
