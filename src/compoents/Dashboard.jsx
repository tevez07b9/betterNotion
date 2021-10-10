import React from "react";
import Sidebar from "./Sidebar";
import Board from "./Board";

const Dashboard = () => {
  return (
    <div className="h-screen bg-white w-screen flex">
      <Sidebar />
      <div className="w-full h-full bg-darkGrey flex items-center justify-center text-textWhite">
        <Board />
      </div>
    </div>
  );
};

export default Dashboard;
