import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import AppLayout from "../styles/AppLayout";
import "../styles/theme.css";
import { DndContext } from "@dnd-kit/core";
import { TargetContainer } from "./TargetContainer";
import { TrashContainer } from "./TrashContainer";

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
    animal_name_color,
    sil,
    trash_description,
    description,
  } = location.state;
  const navigate = useNavigate();

  return (
    <div className="Recycle">
      <AppLayout>
        <Background>
          <DndContext onDragEnd={handleDragEnd}>
            <TargetContainer>
              <Target src={target} alt={name}></Target>
            </TargetContainer>
            <TrashContainer>
              <Trash src={trash} alt={name}></Trash>
            </TrashContainer>
          </DndContext>
          <Guide>{trash_description}</Guide>
        </Background>
      </AppLayout>
    </div>
  );
  function handleDragEnd(event) {
    if (event.over && event.over.id === "target-container") {
      navigate("/achieve", {
        state: {
          id,
          name,
          sick,
          trash_name,
          image,
          trash,
          target,
          sil,
          animal_name_color,
          trash_description,
          description,
        },
      });
    }
  }
};

export default Recycle;

let Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 370px;
  height: 100vh;
  background: white;
  font-weight: 800;
`;

let Target = styled.img`
  width: 100%;
`;

let Trash = styled.img`
  width: 160px;
  max-height: 200px;
  margin-left: 150px;
  touch-action: none;
`;

let Guide = styled.span`
  position: absolute;
  bottom: 80px;
  color: var(--gray);
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.03em;
`;
