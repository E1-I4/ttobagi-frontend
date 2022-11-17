// import React, { useState } from "react";
// import styled from "styled-components";
// import AppLayout from "../components/AppLayout";
// import "../styles/theme.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";
// import Draggable from "react-draggable";
// import Dropzone, { useDropzone } from "react-dropzone";
// import { ReactComponent as PetBin } from "../assets/svg/pet_bin.svg";
// import Pet from "../assets/img/pet.png";

// const Recycle = () => {
// const navigate = useNavigate();
// // 드랍을 하면 바로 넘어가는 걸로 하자.
// const navigateToAchieve = () => {
// navigate("/achieve");
// };
//드랍존(태그로) -> 드랍앤드

// const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
// 업데이트 되는 값을 set 해줌
// x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}

// const trackPos = (data) => {
//   setPosition({ x: data.x, y: data.y });
// };

// const { getRootProps, getInputProps, isDragActive } = useDropzone();
// return (
//   <div className="Recycle">
//     <AppLayout>
{
  /* <Dropzone ref={dropzoneRef}> */
}
// <PetBin />
{
  /* </Dropzone> */
}
// <Draggable
// nodeRef={nodeRef}
// onDrag={(e, data) => trackPos(data)}
// target={this.state.ref}
// onStart={this.onStart}
// onEnd={this.onEnd}
// position={this.state.itemLocation}
// inverted={this.props.inverted}
//         >
//           <img src={Pet} alt="pet"></img>
//         </Draggable>

//         <span>투명한 페트병을 버려 볼까요?</span>
//       </AppLayout>
//     </div>
//   );
// };

// export default Recycle;

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
