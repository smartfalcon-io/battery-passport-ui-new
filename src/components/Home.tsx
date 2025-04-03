// import React from "react";
// import { Link } from "react-router-dom";
// import PieChartComponent from "../components/PieChartComponent";
// import PieGrid from "./PieGrid";

// import "./Home.css";

// const Home: React.FC = () => {

//   return (
//     <section className="home">
//       {/* Battery Passport Section */}
//       <div className="card">
//         <div className="content-container">
//           <section className="battery-passport-section">
//             <div className="battery-passport">
//               <div className="passport-header">
//                 <div>
//                   <p className="passport-id">Passport ID:</p>
//                   <p className="passport-id-value">
//                     did:web:acme.battery.pass:0226151e-949c-d067-8ef3-162431e28976
//                   </p>
//                 </div>
//                 <div className="header-right">
//                   <div className="verified-badge" >Verified</div>
//                 </div>
//               </div>
//               <hr className="hr-separator" />
//               <div className="info-grid">
//                 <div className="info-item">
//                   <p>Model Number</p>
//                   <p className="info-value">M-41698615</p>
//                 </div>
//                 <div className="info-item">
//                   <p>Serial Number</p>
//                   <p className="info-value">992356610548948</p>
//                 </div>
//                 <div className="info-item">
//                   <p>Category</p>
//                   <p className="info-value">EV</p>
//                 </div>
//                 <div className="info-item">
//                   <p>Weight</p>
//                   <p className="info-value">499.00kg</p>
//                 </div>
//                 <div className="info-item">
//                   <p>Status</p>
//                   <p className="status original">🟢 Original</p>
//                 </div>
//                 <div className="info-item">
//                   <p>Manufactured date</p>
//                   <p className="info-value">2023-09-05</p>
//                 </div>
//                 <div className="info-item">
//                   <p>Manufactured by</p>
//                   <p className="info-value">
//                     Exide Batteries Auditor{" "}
//                     <span className="location-icon">📍</span>
//                   </p>
//                 </div>
//               </div>
//               <div className="economic-operator-section">
//                 <p>
//                   <strong>Economic operator</strong>
//                 </p>
//                 <div className="economic-operator">
//                   <img src="src/assets/N2AT.png" alt="N2AT Logo" />
//                 </div>
//               </div>
//             </div>
//           </section>
//           <div className="qr-section">
//             <img
//               src="src/assets/battery_qr-removebg-preview.png"
//               alt="Relevant Image"
//               className="right-image"
//             />
//             <Link to="/passport-details">
//               <button className="btn">View more about this passport</button>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <section className="piechart">
//         <div className="piechart-div">
//           <div className="piechart-card">
//             <div className="summary-report">
//               <div className="summary-header">
//                 <h2>SUMMARY REPORT</h2>
//               </div>
//               <hr className="hr" />
//               <h4>Original Power</h4>
//               <br />
//               <div className="carbonfootprint">
//                 <PieChartComponent />
//               </div>
//               {/* <h3 className="recycle">
//                 Recycled Content Share{" "}
//                 <span className="unverified-badge">Unverified</span>
//               </h3> */}
//             </div>
//             <PieGrid />
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// };

// export default Home;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import PieChartComponent from "../components/PieChartComponent";
// import SignaturePopup from "./SignaturePopup";
// import PieGrid from "./PieGrid";

// import "../assets/css/Home.css";

// const Home: React.FC = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <section className="home">
//       <div className="card">
//         <div className="content-container">
//           <section className="battery-passport-section">
//             <div className="battery-passport">
//               <div className="passport-header">
//                 <div>
//                   <p className="passport-id">Passport ID:</p>
//                   <p className="passport-id-value">
//                     did:web:acme.battery.pass:0226151e-949c-d067-8ef3-162431e28976
//                   </p>
//                 </div>
//                 <div className="header-right">
//                   <div
//                     className="verified-badge"
//                     onMouseEnter={() => setIsHovered(true)}
//                     onMouseLeave={() => setIsHovered(false)}
//                   >
//                     Verified
//                     {isHovered && <SignaturePopup />}
//                   </div>
//                 </div>
//               </div>
//               <hr className="hr-separator" />
//               <div className="info-grid">
//                 <div className="info-item">
//                   <p>Model Number</p>
//                   <p className="info-value">M-41698615</p>
//                 </div>
//                 <div className="info-item">
//                   <p>Serial Number</p>
//                   <p className="info-value">992356610548948</p>
//                 </div>
//                 <div className="info-item">
//                   <p>Category</p>
//                   <p className="info-value">EV</p>
//                 </div>
//                 <div className="info-item">
//                   <p>Weight</p>
//                   <p className="info-value">499.00kg</p>
//                 </div>
//                 <div className="info-item">
//                   <p>Status</p>
//                   <p className="status original">🟢 Original</p>
//                 </div>
//                 <div className="info-item">
//                   <p>Manufactured date</p>
//                   <p className="info-value">2023-09-05</p>
//                 </div>
//                 <div className="info-item">
//                   <p>Manufactured by</p>
//                   <p className="info-value">
//                     Exide Batteries Auditor{" "}
//                     <span className="location-icon">📍</span>
//                   </p>
//                 </div>
//               </div>
//               <div className="economic-operator-section">
//                 <p>
//                   <strong>Economic operator</strong>
//                 </p>
//                 <div className="economic-operator">
//                   <img src="src/assets/N2AT.png" alt="N2AT Logo" />
//                 </div>
//               </div>
//             </div>
//           </section>
//           <div className="qr-section">
//             <img
//               src="src/assets/battery_qr-removebg-preview.png"
//               alt="Relevant Image"
//               className="right-image"
//             />
//             <Link to="/passport-details">
//               <button className="btn">View more about this passport</button>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <section className="piechart">
//         <div className="piechart-div">
//           <div className="piechart-card">
//             <div className="summary-report">
//               <div className="summary-header">
//                 <h2>SUMMARY REPORT</h2>
//               </div>
//               <hr className="hr" />
//               <h4>Original Power</h4>
//               <br />
//               <div className="carbonfootprint">
//                 <PieChartComponent />
//               </div>
//             </div>
//             <PieGrid />
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PieChartComponent from "../components/PieChartComponent";
import SignaturePopup from "./SignaturePopup";
import PieGrid from "./PieGrid";

import "../assets/css/Home.css";

const API_URL =
  "/fetch-credential-details/fd87d953-4da2-4e6f-80b0-72f756d87a08";

const BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXRfaWQiOiI2ZTgyNGY0ZC03NTIwLTQzOTMtODZjMS1mMTlhMGEzZmM4YTMiLCJpYXQiOjE3NDM2Nzg4MzgsImV4cCI6MTc0Mzc2NTIzOH0.yItLIkDu6Z8mO2vdkSH2M0sp5l6bpqrstjFq4rxHi-o";

const Home: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [batteryData, setBatteryData] = useState<any>({});

  useEffect(() => {
    const fetchBatteryData = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            "Content-Type": "application/json",
          },
        });
        setBatteryData(response.data.attributes);
      } catch (error) {
        console.error("Error fetching battery data:", error);
      }
    };

    fetchBatteryData();
  }, []);

  return (
    <section className="home">
      <div className="card">
        <div className="content-container">
          <section className="battery-passport-section">
            <div className="battery-passport">
              <div className="passport-header">
                <div>
                  <p className="passport-id">Passport ID:</p>
                  <p className="passport-id-value">
                    did:web:acme.battery.pass:0226151e-949c-d067-8ef3-162431e28976
                  </p>
                </div>
                <div className="header-right">
                  <div
                    className="verified-badge"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    Verified
                    {isHovered && <SignaturePopup />}
                  </div>
                </div>
              </div>
              <hr className="hr-separator" />
              <div className="info-grid">
                <div className="info-item">
                  <p>Model Number</p>
                  <p className="info-value">{batteryData.ModelNumber}</p>
                </div>
                <div className="info-item">
                  <p>Serial Number</p>
                  <p className="info-value">{batteryData.SerialNumber}</p>
                </div>
                <div className="info-item">
                  <p>Category</p>
                  <p className="info-value">{batteryData.Category}</p>
                </div>
                <div className="info-item">
                  <p>Weight</p>
                  <p className="info-value">{batteryData?.["Weight(kg)"]}kg</p>
                </div>
                <div className="info-item">
                  <p>Status</p>
                  <p
                    className={`status ${
                      batteryData.Status === "Damaged" ? "damaged" : "original"
                    }`}
                  >
                    {batteryData.Status === "Damaged"
                      ? "🔴 Damaged"
                      : "🟢 Original"}
                  </p>
                </div>
                <div className="info-item">
                  <p>Manufactured Date</p>
                  <p className="info-value">{batteryData.ManufacturedDate}</p>
                </div>
                <div className="info-item">
                  <p>Manufactured by</p>
                  <p className="info-value">
                    {batteryData.ManufacturedBy}{" "}
                    <span className="location-icon">📍</span>
                  </p>
                </div>
              </div>
              <div className="economic-operator-section">
                <p>
                  <strong>Economic operator</strong>
                </p>
                <div className="economic-operator">
                  <img src="src/assets/N2AT.png" alt="N2AT Logo" />
                </div>
              </div>
            </div>
          </section>
          <div className="qr-section">
            <img
              src="src/assets/battery_qr-removebg-preview.png"
              alt="Relevant Image"
              className="right-image"
            />
            <Link to="/passport-details">
              <button className="btn">View more about this passport</button>
            </Link>
          </div>
        </div>
      </div>

      <section className="piechart">
        <div className="piechart-div">
          <div className="piechart-card">
            <div className="summary-report">
              <div className="summary-header">
                <h2>SUMMARY REPORT</h2>
              </div>
              <hr className="hr" />
              <h4>Original Power</h4>
              <br />
              <div className="carbonfootprint">
                <PieChartComponent />
              </div>
            </div>
            <PieGrid />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
