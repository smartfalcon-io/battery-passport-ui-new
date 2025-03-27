import React from "react";
import { useNavigate } from "react-router-dom";
// import { FaIdCard, FaUser } from "react-icons/fa";
import "../components/Main.css";

const Main: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <p className="main-heading">
        {/* Authenticate with any of the below options */}
      </p>
      <div className="main-options">
        <button
          className="main-btn"
          onClick={() => navigate("/signin")}
        >
          {/* <FaIdCard className="main-icon" /> */}
          ISSUER
        </button>
        <button
          className="main-btn"
          onClick={() => navigate("/starter")}
        >
          {/* <FaUser className="main-icon" />  */}
          HOLDER
        </button>
        <button
          className="main-btn"
          onClick={() => navigate("/starter")}
        >
          {/* <FaUser className="main-icon" />  */}
          REPURPOSERS
        </button>
      </div>
    </div>
  );
};

export default Main;
