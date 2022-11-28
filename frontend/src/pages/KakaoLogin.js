import { useLocation, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../utils/Urls";
import { checkAccessToken } from "../utils/Token";
import { useEffect } from "react";
import { setAuthorization } from "../utils/Token";
import styled from "styled-components";
import splashImg from "../assets/img/splash.png";

const JWT_EXPIRE_TIME = 2 * 3600 * 1000; // expiration time(2 hours in milliseconds)

const KakaoLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/user/kakao/callback/?code=${KAKAO_CODE}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        sessionStorage.setItem("access_token", res.access_token);
        sessionStorage.setItem("refresh_token", res.refresh_token);
        sessionStorage.setItem("user_id", res.user.pk);
        setAuthorization(res.access_token);
        setTimeout(
          checkAccessToken,
          JWT_EXPIRE_TIME - 60000,
          res.refresh_token
        ); // 1 minute before expiration
        setTimeout(function () {
          document.getElementById("splash").style.display = "block";
        }, 2000);
        navigate("/");
      });
  }, []);
  return (
    <>
      <SplashBox style={{ position: "relative" }}>
        <Splash id="splash"></Splash>
      </SplashBox>
    </>
  );
  //이쪽에 스플래시를 넣어봅시다
};

let SplashBox = styled.div`
  text-align: center;
`;

let Splash = styled.div`
  width: 350px;
  height: 100vh;
  background-image: url(${splashImg});
  background-size: cover;
  background-repeat: none;
  position: absolute;
  display: none;
`;

export default KakaoLogin;
