import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem("user_id")) {
      navigate("/login");
    }
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
