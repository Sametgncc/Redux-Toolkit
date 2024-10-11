import React from "react";
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const RootLayout = () => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <div className={`vh-100 flex-column d-flex ${mode} `}>
      <Header />
      <Container className="flex-grow-1 my-2">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default RootLayout;
