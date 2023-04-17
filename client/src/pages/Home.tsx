import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <Outlet />
    </div>
  );
};

export default Home;
