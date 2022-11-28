import React from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import achBg from "../assets/img/achbg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const Achieve = () => {
  const location = useLocation();
  const { id, name, image, description } = location.state;

  return (
    <div className="Achieve">
      <AppLayout>
        <Background>
          <Content>
            <HomeIcon href="/" style={{ marginTop: 40, marginBottom: 10 }}>
              <FontAwesomeIcon icon={faHouse} />
            </HomeIcon>
            <Title>
              <span style={{ margin: 0, fontSize: 26, fontWeight: 800 }}>
                <span style={{ color: "var(--orange)" }}>{name}</span>
                <span>을(를) 수집했어요!</span>
              </span>
            </Title>
          </Content>
          <CenterBox>
            <ChaImg src={image} alt={name}></ChaImg>
            <h2 style={{ marginTop: 20, marginBottom: 20 }}>{name}</h2>
            <InfoBox>
              {description.split("\\").map((item) => (
                <Li>{item}</Li>
              ))}
            </InfoBox>
          </CenterBox>
        </Background>
      </AppLayout>
    </div>
  );
};

export default Achieve;

let Background = styled.div`
  width: 350px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: white;
  font-weight: 800;
  background-image: url(${achBg});
  background-repeat: no-repeat;
  background-size: cover;
`;

let Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
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
  background: transparent;
  background: white;
  border-radius: 25px;
  padding: 10px;
  height: 200px;
  margin: 20px 20px 0 20px;
`;

let Li = styled.ol`
  margin-left: -25px;
`;
