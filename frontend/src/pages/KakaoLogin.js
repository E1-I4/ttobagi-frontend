import { useLocation, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../utils/Urls";
import { checkAccessToken } from "../utils/Token";
import { useEffect } from "react";
import { setAuthorization } from "../utils/Token";

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
                setTimeout(checkAccessToken, JWT_EXPIRE_TIME - 60000, res.refresh_token); // 1 minute before expiration
                navigate("/");
            });
    }, []);
    return <></>;
};

export default KakaoLogin;