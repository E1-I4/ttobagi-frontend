import React, { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

const AuthLayout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("user_id")) {
            console.log("로그인이 필요합니다.");
            navigate("/login");
        }
    }, []);

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default AuthLayout;