import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
// import styled from "styled-components";
// import splashImg from "../assets/img/splash.png";

const AuthLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem("user_id")) {
      //   setTimeout(function () {
      //     document.getElementById("splash").style.display = "block";
      //   }, 2000);
      navigate("/login");
    }
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {/* <Splash id="splash"></Splash> */}
      <Outlet />
    </div>
  );
};

export default AuthLayout;

// let Splash = styled.div`
//   width: 350px;
//   height: 100vh;
//   background-image: url(${splashImg});
//   background-size: cover;
//   background-repeat: none;
//   position: absolute;
//   display: none;
// `;
