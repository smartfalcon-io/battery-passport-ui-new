// import React, { useState } from "react";
// import { FaUser } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import "../assets/css/Header.css";
// import logo from "../assets/Battery_Passport_Logo.png";

// const Header: React.FC = () => {
//   const [showSignIn, setShowSignIn] = useState(false);

//   const handleLoginClick = () => {
//     setShowSignIn((prev) => !prev);
//   };

//   const handleCloseSignIn = () => {
//     setShowSignIn(false);
//   };

//   return (
//     <header className="custom-header">
//       <div className="logo-container">
//         {/* <h1>BATTERY PASSPORT</h1> */}
//         <img src={logo}  alt="" />
//       </div>

//       <nav className="nav-icons">
//         <button className="icon-button" onClick={handleLoginClick}>
//           <FaUser />
//         </button>

//         {showSignIn && (
//           <Link to="/signin" className="signin-box" onClick={handleCloseSignIn}>
//             <span className="signin-text">Sign in</span>
//           </Link>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/Battery_Passport_Logo.png";

const Header: React.FC = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleLoginClick = () => {
    setShowSignIn((prev) => !prev);
  };

  const handleCloseSignIn = () => {
    setShowSignIn(false);
  };

  return (
    <header className="w-full h-24 bg-white text-green-600 fixed top-0 left-0 flex justify-between items-center p-4 z-50 shadow">
      <div className="flex items-center">
        <img src={logo} alt="Battery Passport Logo" className="w-[150px] md:w-[190px] ml-4 md:ml-8" />
      </div>

      <nav className="flex items-center relative mr-4 md:mr-8">
        <button 
          className="bg-gray-200 border-none p-2 rounded cursor-pointer flex items-center justify-center text-base transition-all duration-300 hover:bg-gray-300"
          onClick={handleLoginClick}
        >
          <FaUser />
        </button>

        {showSignIn && (
          <Link 
            to="/signin" 
            className="absolute top-[45px] right-0 bg-white rounded-lg shadow-md p-2 min-w-[100px] flex items-center justify-center text-green-600 transition-all duration-300 hover:bg-green-600 hover:text-white"
            onClick={handleCloseSignIn}
          >
            <span className="text-lg">Sign in</span>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;