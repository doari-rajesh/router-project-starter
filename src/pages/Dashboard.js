import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ setIsLoggedIn, isLoggedIn }) => {
  // const navigate = useNavigate();
  // isLoggedIn ? navigate("/dashboard") : navigate("/login");

  return (
    <div className="flex justify-center items-center text-white text-3xl  h-screen">
      Welcome to StudyNotion!
    </div>
  );
};

export default Dashboard;
