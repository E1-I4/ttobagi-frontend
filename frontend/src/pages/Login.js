import React from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import "../styles/theme.css";
import { useNavigate } from "react-router-dom";
import { ReactComponent as MainLogo } from "../assets/svg/logo_main.svg";
import { REST_API_KEY, REDIRECT_URI } from "./.env";

const Login = () => {
    const navigate = useNavigate();

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=account_email`;

    const handleLogin = () => {
        if (window.location == 'http://localhost:3000/login') {
            window.location.href = KAKAO_AUTH_URL;
        }
    };

    return (
        <div className="Login">
            <Background>
                <AppLayout>
                    <Title style={{ marginTop: 80 }}>
                        <MainLogo />
                        <span>제주도의 멸종위기동물을 위한 도감</span>
                    </Title>
                    <>
                        <Button onClick={handleLogin}>카카오 로그인</Button>
                    </>
                </AppLayout>
            </Background>
        </div>
    );
};

export default Login;

let Background = styled.div`
  background: #f0f0f0;
`;

let Title = styled.div`
  text-align: center;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

let Button = styled.button`
  font-size: 20px;
  background: #e1e1e1;
  color: var(--darkgray);
  border: none;
  border-radius: 20px;
  margin-top: 10px;
  padding: 10px;
  &:hover {
    cursor: pointer;
    background: #eFF9900;
  }
  width: 70vw;
  height: 60px;
  font-size: 20px;
  font-weight: 700;
`;
