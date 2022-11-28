import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../utils/Urls";

const Discover = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state;

  const [animals, setAnimals] = useState({});

  const fetchData = async () => {
    const { data } = await axios
      .get(`${BACKEND_URL}/api/animals/${id}`)
      .catch(function (error) {
        // error 확인 함수
        // if (error.response) {
        //   console.log(error.response.data);
        //   console.log(error.response.status);
        //   console.log(error.response.headers);
        // } else if (error.request) {
        //   console.log(error.request);
        // } else {
        //   console.log("Error", error.message);
        // }
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
  width: 350px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: white;
  font-weight: 800;
`;

let Title = styled.div`
  font-size: 26px;
  font-weight: 800;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 50px 0 30px 0;
  margin: 80px 20px 40px 20px;
`;

let ChaImg = styled.img`
  border-radius: 20px;
  height: 300px;
  margin-bottom: 20px;
  margin: 0 20px 120px 20px;
`;

let Button = styled.button`
  font-size: 22px;
  font-weight: 800;
  background: var(--orange);
  border: none;
  border-radius: 24px;
  margin-top: 10px;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
  height: 70px;
  font-size: 20px;
  color: var(--darkgray);
  margin: 0 20px;
`;
