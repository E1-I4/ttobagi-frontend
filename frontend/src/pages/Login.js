import React from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import "../styles/theme.css";
import kLogin from "../assets/img/klogin.png";
import { ReactComponent as MainLogo } from "../assets/svg/logo_main.svg";
// import { REST_API_KEY } from "../.env";
import { REDIRECT_URI } from "../utils/Urls";

const Login = () => {
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=account_email`;

  const handleLogin = () => {
    // window.location.href = KAKAO_AUTH_URL;
    window.location.href = "";
  };

  return (
    <div className="Login">
      <AppLayout>
        <Background>
          <Title style={{ marginTop: 240 }}>
            <MainLogo />
            <SubTitle>
              <span style={{ color: "var(--gray)" }}>
                제주도의
                <span style={{ color: "var(--orange)" }}> 멸종위기 동물</span>을
                위한 도감
              </span>
            </SubTitle>
          </Title>
          <KakaoLoginBtn>
            <img src={kLogin} onClick={handleLogin} alt="kakao-login-btn" />
          </KakaoLoginBtn>
        </Background>
      </AppLayout>
    </div>
  );
};

export default Login;

let Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 370px;
  height: 100vh;
  padding: 0 10px;
  background-color: #f3f9fd;
`;

let Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  text-align: center;
  gap: 20px;
`;

let SubTitle = styled.div`
  font-size: 19px;
  font-weight: 800;
`;

let KakaoLoginBtn = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
