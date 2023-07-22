import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import AppLayout from "../styles/AppLayout";
import achBg from "../assets/img/achbg.png";
import homeIcon from "../assets/img/homeIcon.png";
import { BACKEND_URL } from "../utils/Urls";
import { setAuthorization } from "../utils/Token";

const Achieve = () => {
  const location = useLocation();
  const { id, name, image, animal_name_color, description } = location.state;
  const [animals, setAnimals] = useState({});

  const user_id = sessionStorage.getItem("user_id");

  const fetchData = async () => {
    if (axios.defaults.headers.common["Authorization"] === undefined) {
      setAuthorization(sessionStorage.getItem("access_token"));
    }

    const { data } = await axios
      .get(`${BACKEND_URL}/api/animals/${id}`)
      .catch(function (error) {
        console.error(error);
      });
    setAnimals(data);
  };

  const sendData = async () => {
    if (axios.defaults.headers.common["Authorization"] === undefined) {
      setAuthorization(sessionStorage.getItem("access_token"));
    }
    try {
      const res = await axios
        .post(`${BACKEND_URL}/api/user/${user_id}/animals/add/`, {
          id: id,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.error(error);
        })
        .finally(function (data) {
          console.log(data);
        });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    sendData();
  }, []);

  return (
    <div className="Achieve">
      <AppLayout>
        <Background>
          <Content>
            <HomeIcon href="/">
              <img src={homeIcon} alt="home-icon" />
            </HomeIcon>
            <Title>
              <TitleText>
                <TitleTextName>{name}</TitleTextName>
                {id === 3 || id === 4 ? "을" : "를"} 수집했어요!
              </TitleText>
            </Title>
          </Content>
          <CenterBox>
            <CharacterImg src={image} alt={name}></CharacterImg>
            <CharacterText>
              <img src={animal_name_color} alt={name} />
            </CharacterText>
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
  display: flex;
  flex-direction: column;
  width: 370px;
  height: 100vh;
  background: white;
  background-image: url(${achBg});
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: 800;
`;

let Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

let HomeIcon = styled.a`
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
  color: black;
`;

let Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 30px 0;
  letter-spacing: -0.03em;
`;

let TitleText = styled.span`
  margin: 0;
  color: var(--darkgray);
  font-size: 26;
  font-weight: 800;
`;

let TitleTextName = styled.span`
  color: var(--orange);
`;

let CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

let CharacterImg = styled.img`
  width: 180px;
  height: 220px;
  margin: 0 20px;
  border-radius: 25px;
`;

let CharacterText = styled.div`
  margin-top: 30;

  img {
    height: 35;
  }
`;

let InfoBox = styled.div`
  margin: 20px;
  padding: 10px;
  background: transparent;
  background: white;
  color: var(--darkgray);
  font-size: 17px;
  font-weight: 800;
  border-radius: 25px;
  line-height: 27px;
  letter-spacing: -0.03em;
`;

let Li = styled.ol`
  margin-left: -25px;
  word-break: keep-all;
`;
