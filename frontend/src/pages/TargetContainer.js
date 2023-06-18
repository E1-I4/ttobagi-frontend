import React from "react";
import { useDroppable } from "@dnd-kit/core";
import styled from "styled-components";

export function TargetContainer(props) {
  const { setNodeRef } = useDroppable({
    id: "target-container",
  });

  return <Container ref={setNodeRef}>{props.children}</Container>;
}

let Container = styled.div`
  width: 250px;
  height: 40vh;
  margin-top: 150px;
`;
