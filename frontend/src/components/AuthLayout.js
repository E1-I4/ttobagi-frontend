import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import styled from "styled-components";

const AuthLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem("user_id")) {
      navigate("/login");
    }
  }, []);

  return (
    <AuthLayoutContainer>
      <Outlet />
    </AuthLayoutContainer>
  );
};

const AuthLayoutContainer = styled.div`
  position: "relative";
`;

export default AuthLayout;
