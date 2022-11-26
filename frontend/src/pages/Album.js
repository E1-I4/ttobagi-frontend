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
        <Content>
          <a href="/" style={{ marginTop: 40, marginBottom: 10 }}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </a>
          <h2 style={{ marginBottom: 30 }}>
            지금까지 수집한
            <br></br>
            동물들이예요
          </h2>
        </Content>

        <ImgListBlock>
          {animals?.length &&
            animals.map((animal) => (
              <AlbumItem key={animal.name} animal={animal} />
            ))}
        </ImgListBlock>
      </AppLayout>
    </div>
  );
};

export default Album;

let Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: left;
  width: 85vw;
`;

let ImgListBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  width: 85vw;
  height: 130vh;
`;
