import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Discover = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state;

  const [animals, setAnimals] = useState({});
  const URL = "https://www.ttobagi.site/api/animal/" + id;
  const fetchData = async () => {
    const { data } = await axios.get(URL).catch(function (error) {
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
        sill: animals.sill,
        trash_description: animals.trash_description,
        description: animals.description,
      },
    });
  };

  return (
    <div className="Discover">
      <AppLayout>
        <Title>
          <h2>
            {animals.trash_name} 때문에 아파하는
            <br></br>
            {animals.name}를 발견했어요
          </h2>
        </Title>
        <ChaImg src={animals.sick} alt={animals.name}></ChaImg>
        <Button onClick={navigateToRecyclePage} id={id}>
          {animals.trash_name} 치워주기
        </Button>
      </AppLayout>
    </div>
  );
};

export default Discover;

let Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 85vw;
  text-align: left;
  margin: 50px 0 30px 0;
`;

let ChaImg = styled.img`
  border-radius: 20px;
  width: 85vw;
  height: 55vh;
  margin-bottom: 20px;
`;

let Button = styled.button`
  font-size: 20px;
  background: #eFF9900;
  border: none;
  border-radius: 20px;
  margin-top: 10px;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
  width: 85vw;
  height: 60px;
  font-size: 20px;
  font-weight: 700;
  color: var(--darkgray);
`;
