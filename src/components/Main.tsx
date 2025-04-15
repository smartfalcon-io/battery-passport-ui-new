// import React from "react";
// import { useNavigate } from "react-router-dom";
// // import { FaIdCard, FaUser } from "react-icons/fa";
// import "../assets/css/Main.css";

// const Main: React.FC = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="main-container">
//       <p className="main-heading">
//         {/* Authenticate with any of the below options */}
//       </p>
//       <div className="main-options">
//         <button 
//           className="main-btn"
//           onClick={() => navigate("/signin")}
//         >
//           {/* <FaIdCard className="main-icon" /> */}
//           ISSUER
//         </button>
//         <button
//           className="main-btn"
//           onClick={() => navigate("/starter")}
//         >
//           {/* <FaUser className="main-icon" />  */}
//           HOLDER
//         </button>
//         <button
//           className="main-btn"
//           onClick={() => navigate("/starter")}
//         >
//           {/* <FaUser className="main-icon" />  */}
//           REPURPOSERS
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Main;



import React from "react";
import { useNavigate } from "react-router-dom";

const Main: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-screen py-16 px-8 mt-[-300px]">
      <p className="text-center text-gray-800 text-lg mb-5">
        {/* Authenticate with any of the below options */}
      </p>
      <div className="flex flex-wrap justify-center gap-5 p-5">
        <button 
          className="flex items-center justify-center gap-2 border border-gray-300 bg-white w-[300px] h-[100px] rounded-lg text-lg cursor-pointer transition duration-300 hover:bg-gray-200 hover:border-black"
          onClick={() => navigate("/signin")}
        >
          {/* <FaIdCard className="text-base" /> */}
          ISSUER
        </button>
        <button
          className="flex items-center justify-center gap-2 border border-gray-300 bg-white w-[300px] h-[100px] rounded-lg text-lg cursor-pointer transition duration-300 hover:bg-gray-200 hover:border-black"
          onClick={() => navigate("/starter")}
        >
          {/* <FaUser className="text-base" /> */}
          HOLDER
        </button>
        <button
          className="flex items-center justify-center gap-2 border border-gray-300 bg-white w-[300px] h-[100px] rounded-lg text-lg cursor-pointer transition duration-300 hover:bg-gray-200 hover:border-black"
          onClick={() => navigate("/starter")}
        >
          {/* <FaUser className="text-base" /> */}
          REPURPOSERS
        </button>
      </div>
    </div>
  );
};

export default Main;