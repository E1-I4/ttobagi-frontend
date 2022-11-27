import React from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import "../styles/theme.css";

// import kLoginBtn from "../assets/img/klogin.png";
import { ReactComponent as MainLogo } from "../assets/svg/logo_main.svg";
import { REST_API_KEY } from "../.env";
import { REDIRECT_URI } from "../utils/Urls";

const Login = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=account_email`;

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <div className="Login">
      <AppLayout>
        <Background>
          <Title style={{ marginTop: 240 }}>
            <MainLogo />
            <SubTitle>
              <span>
                제주도의
                <span style={{ color: "var(--orange)" }}> 멸종위기 동물</span>을
                위한 도감
              </span>
            </SubTitle>
          </Title>
          <>
            {/* <kLoginBtn /> */}
            <Button onClick={handleLogin}>카카오 로그인</Button>
          </>
        </Background>
      </AppLayout>
    </div>
  );
};

export default Login;

let Background = styled.div`
  width: 350px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
`;

let Title = styled.div`
  text-align: center;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

let SubTitle = styled.div`
  font-size: 19px;
  font-weight: 800;
`;

let Button = styled.button`
  font-size: 16px;
  background: #fee500;
  color: var(--darkgray);
  border: none;
  border-radius: 10px;
  padding: 10px;
  &:hover {
    cursor: pointer;
    background: #eFF9900;
  }
  width: 300px;
  height: 50px;
  font-weight: 700;
`;
