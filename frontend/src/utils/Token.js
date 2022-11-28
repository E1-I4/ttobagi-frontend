import { BACKEND_URL } from "./Urls";
import axios from "axios";

export const setAuthorization = (token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const refreshAccessToken = async (refresh_token) => {
    return await axios
        .post(`${BACKEND_URL}/api/user/token/refresh/`, {
            refresh: refresh_token,
        })
        .then((res) => {
            sessionStorage.setItem("access_token", res.data.access);
            setAuthorization(res.data.access);
            return res.data.access;
        })
        .catch((err) => {
            console.log(err);
        });
};

export const checkAccessToken = async (refresh_token) => {
    if (axios.defaults.headers.common["Authorization"] === undefined) {
        await refreshAccessToken(refresh_token);
    }
}