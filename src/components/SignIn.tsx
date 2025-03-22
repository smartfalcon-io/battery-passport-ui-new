// import React from "react";
// import { FaIdCard, FaUser } from "react-icons/fa";
// import "../components/SignIn.css"; // Import CSS for styling

// const SignIn: React.FC = () => {
//   return (
//     <div className="signin-container">
//       <p className="signin-heading">
//         Authenticate with any of the below options
//       </p>
//       <div className="signin-options">
//         <button className="signin-btn">
//           <FaIdCard className="signin-icon" /> With verifiable credentials
//         </button>
//         <button className="signin-btn">
//           <FaUser className="signin-icon" /> As a registered user
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaIdCard, FaUser } from "react-icons/fa";
import "../components/SignIn.css"; // Import CSS for styling

const SignIn: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="signin-container">
      <p className="signin-heading">
        Authenticate with any of the below options
      </p>
      <div className="signin-options">
        <button className="signin-btn" onClick={() => navigate("/verifiable-credentials")}>
          <FaIdCard className="signin-icon" /> With verifiable credentials
        </button>
        <button className="signin-btn" onClick={() => navigate("/registered-user")}>
          <FaUser className="signin-icon" /> As a registered user
        </button>
      </div>
    </div>
  );
};

export default SignIn;
