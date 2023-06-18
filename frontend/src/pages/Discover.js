import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../utils/Urls";
import { setAuthorization } from "../utils/Token";

const Discover = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state;

  const [animals, setAnimals] = useState({});

  const fetchData = async () => {
    if (axios.defaults.headers.common["Authorization"] === undefined) {
      setAuthorization(sessionStorage.getItem("access_token"));
    }
    const { data } = await axios
      .get(`${BACKEND_URL}/api/animals/${id}/`)
      .catch(function (error) {
        // error 확인 함수
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
    setAnimals(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const navigateToRecyclePage = () => {
    navigate("/recycle", {
      state: {
        id,
        name: animals.name,
        sick: animals.sick,
        trash_name: animals.trash_name,
        image: animals.image,
        trash: animals.trash,
        target: animals.target,
        sil: animals.sil,
        animal_name_color: animals.animal_name_color,
        trash_description: animals.trash_description,
        description: animals.description,
      },
    });
  };

  return (
    <div className="Discover">
      <AppLayout>
        <Background>
          <Title>
            <span>
              {animals.trash_name} 때문에 아파하는
              <br></br>
              {animals.name}
              {id === 3 || id === 4 ? <span>을</span> : <span>를</span>}{" "}
              발견했어요
            </span>
          </Title>
          <ChaImg src={animals.sick} alt={animals.name}></ChaImg>
          <Button onClick={navigateToRecyclePage} id={id}>
            {animals.trash_name} 치워주기
          </Button>
        </Background>
      </AppLayout>
    </div>
  );
};

export default Discover;

let Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 370px;
  height: 100vh;
  background: white;
  font-weight: 800;
`;

let Title = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0 30px 0;
  margin: 80px 20px 40px 20px;
  color: var(--darkgray);
  font-size: 26px;
  font-weight: 800;
  text-align: left;
  line-height: 140%;
`;

let ChaImg = styled.img`
  height: 300px;
  margin: 0 20px 120px 20px;
  border-radius: 20px;
`;

let Button = styled.button`
  height: 70px;
  margin: 0 20px;
  padding: 10px;
  background: var(--orange);
  color: var(--darkgray);
  font-size: 20px;
  font-weight: 800;
  border: none;
  border-radius: 24px;

  &:hover {
    cursor: pointer;
  }
`;
