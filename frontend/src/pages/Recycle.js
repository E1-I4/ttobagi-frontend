import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import "../styles/theme.css";
import { useNavigate, useLocation } from "react-router-dom";
// import { ReactComponent as PetBin } from "../assets/svg/pet_bin.svg";

const Recycle = () => {
  const location = useLocation();
  const {
    id,
    name,
    sick,
    trash_name,
    image,
    trash,
    target,
    sill,
    trash_description,
    description,
  } = location.state;
  const navigate = useNavigate();

  const dragFunction = (event, type) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(type);
  };

  useEffect(() => {
    document.getElementById("petbtn").addEventListener("drop", function () {
      navigate("/achieve", {
        state: {
          id,
          name,
          sick,
          trash_name,
          image,
          trash,
          target,
          sill,
          trash_description,
          description,
        },
      });
    });
  });

  return (
    <div className="Recycle">
      <AppLayout>
        <Background>
          <FakeTarget
            // src={target}
            // alt={name}
            id="petbtn"
            onDragOver={(event) => {
              return dragFunction(event, "over");
            }}
            onDrop={(event) => dragFunction(event, "drop")}
            onDragEnter={(event) => dragFunction(event, "enter")}
            onDragLeave={(event) => dragFunction(event, "leave")}
            className="dragAndDrop"
          >
            <Target src={target} alt={name}></Target>
          </FakeTarget>
          <Trash src={trash} alt={name} draggable></Trash>
          <Guide>{trash_description}</Guide>
        </Background>
      </AppLayout>
    </div>
  );
};

export default Recycle;

// 이름 맞게 수정했습니다 그냥 <FakeTarget> 안에 <Target>으로 이미지 넣어준게 답니다..
// 조금씩 이미지들이 위치가 다른데 디자이너에게 빌고빌어 target과 trash 위치 통일하는걸로 조정하시면 어떠한지..
// 확인하시고 요기 다섯개 주석들은 삭제해주세용

// StyledPetBin -> FakeTarget
// PetImg -> Trash

let Background = styled.div`
  width: 350px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  font-weight: 800;
`;

let FakeTarget = styled.div`
  margin-top: 150px;
  width: 250px;
  height: 40vh;
`;

let Target = styled.img`
  width: 100%;
`;

let Trash = styled.img`
  width: 160px;
  margin-left: 150px;
  margin-bottom: 70px;
`;

let Guide = styled.span`
  font-size: 22px;
  font-weight: 700;
`;
