import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import AlbumItem from "./AlbumItem";
import { BACKEND_URL } from "../utils/Urls";
import { setAuthorization } from "../utils/Token";

const Album = () => {
  const [animals, setAnimals] = useState(null);

  const user_id = sessionStorage.getItem("user_id");

  const fetchData = async () => {
    if (axios.defaults.headers.common["Authorization"] === undefined) {
      setAuthorization(sessionStorage.getItem("access_token"));
    }
    const { data } = await axios.get(`${BACKEND_URL}/api/animal/`);
    setAnimals(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Album">
      <AppLayout>
        <Background>
          <Content>
            <a href="/" style={{ marginTop: 40, marginBottom: 10 }}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </a>
            <h2 style={{ marginBottom: 30 }}>
              지금까지 수집한
              <br></br>
              동물들이에요
            </h2>
          </Content>
          <ImgListBlock>
            {animals?.length &&
              animals.map((animal) => (
                <AlbumItem key={animal.name} animal={animal} />
              ))}
          </ImgListBlock>
        </Background>
      </AppLayout>
    </div>
  );
};

export default Album;

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

let ImgListBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin: 0 20px;
  height: 130vh;
`;
