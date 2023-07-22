import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import AppLayout from "../styles/AppLayout";
import arrowLeft from "../assets/img/arrowLeft.png";
import AlbumItem from "./AlbumItem";
import { BACKEND_URL } from "../utils/Urls";
import { setAuthorization } from "../utils/Token";

const Album = () => {
  const [animals, setAnimals] = useState([]);
  const [userAnimals, setUserAnimals] = useState([]);

  const user_id = sessionStorage.getItem("user_id");

  const fetchData = async () => {
    if (axios.defaults.headers.common["Authorization"] === undefined) {
      setAuthorization(sessionStorage.getItem("access_token"));
    }
    const { data } = await axios.get(`${BACKEND_URL}/api/animals/`);
    setAnimals(data);

    const { data: userData } = await axios.get(
      `${BACKEND_URL}/api/user/${user_id}/animals/`
    );
    setUserAnimals(userData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Album">
      <AppLayout>
        <Background>
          <Content>
            <Link href="/" style={{}}>
              <img src={arrowLeft} alt="arrow-left" />
            </Link>
            <ContentTitle>
              지금까지 수집한
              <br></br>
              동물들이에요
            </ContentTitle>
          </Content>
          <ImgListBlock>
            {animals?.length &&
              animals.map((animal) => (
                <AlbumItem
                  key={animal.name}
                  animal={animal}
                  userAnimals={userAnimals}
                />
              ))}
          </ImgListBlock>
        </Background>
      </AppLayout>
    </div>
  );
};

export default Album;

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

let ContentTitle = styled.span`
  margin: 25px 0 30px 0;
  color: var(--darkgray);
  font-size: 26px;
  font-weight: 800;
`;

let ImgListBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 350px;
  margin: 0 20px;
  gap: 15px;
`;
