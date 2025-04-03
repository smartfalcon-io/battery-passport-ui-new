// import React from "react";
// import "../components/VerifiableCredentials.css"

// const VerifiableCredentials: React.FC = () => {
//   return (
//     <div className="verifiable-credentials-container">
//       <h2>Verifiable Credentials Login</h2>
//       <p>Use your digital credentials to authenticate securely.</p>
//     </div>
//   );
// };

// export default VerifiableCredentials;

import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/VerifiableCredentials.css";

const VerifiableCredentials: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="vc">
      <div className="verifiable-credentials-container">
        <p>Please present a valid Verifiable Credential for authentication</p>
        <div className="qr-code-container">
          <img
            src="src/assets/battery_qr-removebg-preview.png"
            alt="QR Code"
            className="qr-code-image"
          />
        </div>
        <p>
          Scan, or tap on, the above code to verify your credential with MS
          Authenticator or any compliant wallet.
        </p>
        <button className="cancel-button" onClick={() => navigate("/signin")}>
          ✖ Cancel
        </button>
      </div>
    </div>
  );
};

export default VerifiableCredentials;
