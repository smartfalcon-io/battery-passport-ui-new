// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Starter.css";

// const FetchPage: React.FC = () => {
//   const [passportId, setPassportId] = useState<string>("");
//   const navigate = useNavigate();

//   const VALID_DID = "did:web:acme.battery.pass:0226151e-949c-d067-8ef3-162431e28976";

//   const handleFetchData = () => {
//     if (passportId === VALID_DID) {
//       navigate("/home");
//     } else {
//       alert("Invalid Passport ID! Please enter the correct DID.");
//     }
//   };

//   return (
//     <div className="starter-container">
//       <div className="starter-card">
//         <h2>Passport Id</h2>
//         <hr />
//         <input
//           type="text"
//           value={passportId}
//           onChange={(e) => setPassportId(e.target.value)}
//           placeholder="Enter Passport ID"
//           className="input-field"
//         />
//         <button onClick={handleFetchData} className="fetch-button">
//           Fetch Data
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FetchPage;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../assets/css/Starter.css";

// const FetchPage: React.FC = () => {
//   const [passportId, setPassportId] = useState<string>("");
//   const navigate = useNavigate();

//   const VALID_DID =
//     "did:web:acme.battery.pass:fd87d953-4da2-4e6f-80b0-72f756d87a08";

//   const handleFetchData = () => {
//     if (passportId === VALID_DID) {
//       navigate("/home");
//     } else {
//       alert("Invalid Passport ID! Please enter the correct DID.");
//     }
//   };

//   const handleUseSampleDID = (e: React.MouseEvent) => {
//     e.preventDefault(); // Prevents default anchor behavior
//     setPassportId(VALID_DID);
//   };

//   return (
//     <div className="starter-container">
//       <div className="starter-card">
//         <h2>Passport Id</h2>
//         <hr /> 
//         <input
//           type="text"
//           value={passportId}
//           onChange={(e) => setPassportId(e.target.value)}
//           placeholder="Enter Passport ID"
//           className="input-field"
//         />
//         <button onClick={handleFetchData} className="fetch-button">
//           Fetch Data
//         </button>
//       </div>
//       <p className="sample-did">
//         <a href="#" onClick={handleUseSampleDID}>
//           Use sample battery passport ID
//         </a>
//       </p>
//     </div>
//   );
// };

// export default FetchPage;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../assets/css/Starter.css";

// const FetchPage: React.FC = () => {
//   const [passportId, setPassportId] = useState<string>("");
//   const [error, setError] = useState<string>("");
//   const navigate = useNavigate();

//   const handleFetchData = async () => {
//     if (!passportId.trim()) {
//       setError("Please enter a valid Passport ID.");
//       return;
//     }

//     setError(""); // Clear previous errors
//     try {
//       const API_URL = `/fetch-credential-details/${passportId}`;
//       const BEARER_TOKEN = "your_actual_bearer_token_here"; // Replace with actual token

//       const response = await axios.get(API_URL, {
//         headers: {
//           Authorization: `Bearer ${BEARER_TOKEN}`,
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.data && response.data.attributes) {
//         navigate("/home"); // Redirect to home if valid
//       } else {
//         setError("Invalid Passport ID. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error fetching battery data:", error);
//       setError("Failed to fetch data. Please check the Passport ID.");
//     }
//   };

//   const handleUseSampleDID = (e: React.MouseEvent) => {
//     e.preventDefault();
//     setPassportId("db0ac7a0-af94-47df-a85e-3d0337637c6f");
//   };

//   return (
//     <div className="starter-container">
//       <div className="starter-card">
//         <h2>Passport Id</h2>
//         <hr />
//         <input
//           type="text"
//           value={passportId}
//           onChange={(e) => setPassportId(e.target.value)}
//           placeholder="Enter Passport ID"
//           className="input-field"
//         />
//         <button onClick={handleFetchData} className="fetch-button">
//           Fetch Data
//         </button>
//       </div>

//       <p className="sample-did">
//         <a href="#" onClick={handleUseSampleDID}>
//           Use sample battery passport ID
//         </a>
//       </p>

//       {error && <p className="error-message">{error}</p>}
//     </div>
//   );
// };

// export default FetchPage;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FetchPage: React.FC = () => {
  const [passportId, setPassportId] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleFetchData = async () => {
    if (!passportId.trim()) {
      setError("Please enter a valid Passport ID.");
      return;
    }

    setError(""); // Clear previous errors
    try {
      const API_URL = `/fetch-credential-details/${passportId}`;
      const BEARER_TOKEN = "your_actual_bearer_token_here"; // Replace with actual token

      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          "Content-Type": "application/json",
        },
      });

      if (response.data && response.data.attributes) {
        navigate("/home"); // Redirect to home if valid
      } else {
        setError("Invalid Passport ID. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching battery data:", error);
      setError("Failed to fetch data. Please check the Passport ID.");
    }
  };

  const handleUseSampleDID = (e: React.MouseEvent) => {
    e.preventDefault();
    setPassportId("db0ac7a0-af94-47df-a85e-3d0337637c6f");
  };

  return (
    <div className="w-screen flex flex-col items-center justify-center pt-[100px] pb-[80px] mt-[330px]">
      <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-md w-[75%] text-center mt-[-350px]">
        <h2 className="text-xl font-semibold mb-2 text-left">Passport Id</h2>
        <hr className="mb-4" />
        
        <input
          type="text"
          value={passportId}
          onChange={(e) => setPassportId(e.target.value)}
          placeholder="Enter Passport ID"
          className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-300"
        />
        
        <button 
          onClick={handleFetchData} 
          className="w-full max-w-[120px] mt-4 p-3 bg-green-600 text-white rounded-md cursor-pointer transition duration-300 hover:bg-green-700"
        >
          Fetch Data
        </button>
      </div>

      <p className="text-center mt-5">
        <a href="#" onClick={handleUseSampleDID} className="text-green-600 text-sm hover:underline">
          Use sample battery passport ID
        </a>
      </p>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default FetchPage;