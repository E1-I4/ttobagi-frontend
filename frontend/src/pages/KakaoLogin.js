import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const KakaoLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const KAKAO_CODE = location.search.split("=")[1];

    const BACKEND = "http://localhost:8000";

    console.log(KAKAO_CODE);
    fetch(`${BACKEND}/api/user/kakao/callback/?code=${KAKAO_CODE}`, {
        method: "GET",
    })
        .then((res) => res.json())
        .then((res) => {
            localStorage.setItem("access_token", res.access_token);
            localStorage.setItem("refresh_token", res.refresh_token);
            localStorage.setItem("user_id", res.user.pk);
            navigate("/");
        });

    return <></>;
};

export default KakaoLogin;