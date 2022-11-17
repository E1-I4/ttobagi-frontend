import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import "../styles/theme.css";
import { useNavigate } from "react-router-dom";
import { ReactComponent as PetBin } from "../assets/svg/pet_bin.svg";
import Pet from "../assets/img/pet.png";

const Recycle = () => {
  const navigate = useNavigate();

  const dragFunction = (event, type) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(type);
  };

  // if (dragFunction === true) {
  //   const navigateToAchieve = () => {
  //     navigate("/");
  //   };
  // }
  useEffect(() => {
    document.getElementById("petbtn").addEventListener("drop", function () {
      navigate(`/achieve`);
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
        <img src={Pet} alt="pet" draggable></img>
        {/* <span>투명한 페트병을 버려 볼까요?</span> */}
      </AppLayout>
    </div>
  );
};

export default Recycle;

let StyledPetBin = styled(PetBin)`
  border: 1px solid gray;
`;

// let mover = styled.div`
//   width: 100px;
//   height: 125px;
//   background: #febf00;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 1.3rem;
//   font-weight: bold;

//   position: absolute;
//   left: 50px;
//   top: 50px;

//   user-select: none;

//   /*  drag cursor   */
//   &:onClick
//   cursor: grab;

//   &:active
//   cursor: grabbing;
// `;
