import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-auto flex">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
