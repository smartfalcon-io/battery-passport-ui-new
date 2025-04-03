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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Starter.css";

const FetchPage: React.FC = () => {
  const [passportId, setPassportId] = useState<string>("");
  const navigate = useNavigate();

  const VALID_DID =
    "did:web:acme.battery.pass:fd87d953-4da2-4e6f-80b0-72f756d87a08";

  const handleFetchData = () => {
    if (passportId === VALID_DID) {
      navigate("/home");
    } else {
      alert("Invalid Passport ID! Please enter the correct DID.");
    }
  };

  const handleUseSampleDID = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevents default anchor behavior
    setPassportId(VALID_DID);
  };

  return (
    <div className="starter-container">
      <div className="starter-card">
        <h2>Passport Id</h2>
        <hr /> 
        <input
          type="text"
          value={passportId}
          onChange={(e) => setPassportId(e.target.value)}
          placeholder="Enter Passport ID"
          className="input-field"
        />
        <button onClick={handleFetchData} className="fetch-button">
          Fetch Data
        </button>
      </div>
      <p className="sample-did">
        <a href="#" onClick={handleUseSampleDID}>
          Use sample battery passport ID
        </a>
      </p>
    </div>
  );
};

export default FetchPage;
