// // import React from "react";
// // import { FaIdCard, FaUser } from "react-icons/fa";
// // import "../components/SignIn.css"; // Import CSS for styling

// // const SignIn: React.FC = () => {
// //   return (
// //     <div className="signin-container">
// //       <p className="signin-heading">
// //         Authenticate with any of the below options
// //       </p>
// //       <div className="signin-options">
// //         <button className="signin-btn">
// //           <FaIdCard className="signin-icon" /> With verifiable credentials
// //         </button>
// //         <button className="signin-btn">
// //           <FaUser className="signin-icon" /> As a registered user
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SignIn;

// // import React from "react";
// // import { useNavigate } from "react-router-dom"; // Import useNavigate
// // import { FaIdCard, FaUser } from "react-icons/fa";
// // import "../assets/css/SignIn.css"; // Import CSS for styling

// // const SignIn: React.FC = () => {
// //   const navigate = useNavigate(); // Initialize navigation

// //   return (
// //     <div className="signin-container">
// //       <p className="signin-heading">
// //         Authenticate with any of the below options
// //       </p>
// //       <div className="signin-options">
// //         <button className="signin-btn" onClick={() => navigate("/verifiable-credentials")}>
// //           <FaIdCard className="signin-icon" /> With verifiable credentials
// //         </button>
// //         <button className="signin-btn" onClick={() => navigate("/registered-user")}>
// //           <FaUser className="signin-icon" /> As a registered user
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SignIn;


// import React from "react";
// import { useNavigate } from "react-router-dom"; 
// import { FaIdCard, FaUser } from "react-icons/fa";

// const SignIn: React.FC = () => {
//   const navigate = useNavigate(); 

//   return (
//     <div className="flex flex-col items-center w-screen py-16 px-8">
//       <p className="text-gray-800 text-lg mb-5">
//         Authenticate with any of the below options
//       </p>
//       <div className="flex gap-5 p-5">
//         <button 
//           className="flex items-center justify-center gap-2 border border-gray-300 bg-white w-[300px] h-[100px] rounded-lg text-lg cursor-pointer transition duration-300 hover:bg-gray-200 hover:border-black"
//           onClick={() => navigate("/verifiable-credentials")}
//         >
//           <FaIdCard className="text-base" /> With verifiable credentials
//         </button>
//         <button 
//           className="flex items-center justify-center gap-2 border border-gray-300 bg-white w-[300px] h-[100px] rounded-lg text-lg cursor-pointer transition duration-300 hover:bg-gray-200 hover:border-black"
//           onClick={() => navigate("/registered-user")}
//         >
//           <FaUser className="text-base" /> As a registered user
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SignIn;



import React from "react";
import { useNavigate } from "react-router-dom";
import { FaIdCard, FaUser } from "react-icons/fa";

const SignIn: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-screen py-16 px-4 md:px-8">
      <p className="text-gray-800 text-lg mb-5 text-center">
        Authenticate with any of the below options
      </p>
      <div className="flex flex-col md:flex-row gap-5 p-5 items-center justify-center">
        <button
          className="flex items-center justify-center gap-2 border border-gray-300 bg-white w-[300px]  h-[100px] rounded-lg text-lg cursor-pointer transition duration-300 hover:bg-gray-200 hover:border-black"
          onClick={() => navigate("/verifiable-credentials")}
        >
          <FaIdCard className="text-base" /> With verifiable credentials
        </button>
        <button
          className="flex items-center justify-center gap-2 border border-gray-300 bg-white w-[300px]  h-[100px] rounded-lg text-lg cursor-pointer transition duration-300 hover:bg-gray-200 hover:border-black"
          onClick={() => navigate("/registered-user")}
        >
          <FaUser className="text-base" /> As a registered user
        </button>
      </div>
    </div>
  );
};

export default SignIn;
