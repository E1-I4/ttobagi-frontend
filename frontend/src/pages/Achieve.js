import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import achBg from "../assets/img/achbg.png";
import homeIcon from "../assets/img/homeIcon.png";
import { useLocation } from "react-router-dom";
import axios from "axios";
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
      .catch(function (error) {});
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
          console.log(error);
        })
        .finally(function (data) {
          console.log(data);
        });
      console.log(res);
    } catch (error) {
      console.log(error);
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
            <HomeIcon href="/" style={{ marginTop: 50 }}>
              <img src={homeIcon} alt="home-icon" />
            </HomeIcon>
            <Title>
              <span
                style={{
                  margin: 0,
                  fontSize: 26,
                  fontWeight: 800,
                  color: "var(--darkgray)",
                }}
              >
                <span style={{ color: "var(--orange)" }}>{name}</span>
                {id === 3 || id === 4 ? <span>을</span> : <span>를</span>}{" "}
                수집했어요!
              </span>
            </Title>
          </Content>
          <CenterBox>
            <ChaImg src={image} alt={name}></ChaImg>
            <span style={{ marginTop: 30 }}>
              <img src={animal_name_color} alt={name} style={{ height: 35 }} />
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
  color: black;
`;

let Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 30px 0;
  letter-spacing: -0.03em;
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
`;
