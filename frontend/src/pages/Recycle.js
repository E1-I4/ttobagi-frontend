import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import "../styles/theme.css";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as PetBin } from "../assets/svg/pet_bin.svg";

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
        <StyledPetBin
          id="petbtn"
          onDragOver={(event) => {
            return dragFunction(event, "over");
          }}
          onDrop={(event) => dragFunction(event, "drop")}
          onDragEnter={(event) => dragFunction(event, "enter")}
          onDragLeave={(event) => dragFunction(event, "leave")}
          className="dragAndDrop"
        >
          {" "}
        </StyledPetBin>
        <PetImg src={trash} alt={name} draggable></PetImg>
        <Guide>{trash_description}투명한 페트병을 버려볼까요?</Guide>
      </AppLayout>
    </div>
  );
};

export default Recycle;

let StyledPetBin = styled(PetBin)`
  margin: 80px 0 10px 0;
`;

let PetImg = styled.img`
  width: 40vw;
  margin-left: 40vw;
  margin-bottom: 70px;
`;

let Guide = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
