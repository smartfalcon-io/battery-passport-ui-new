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

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import PieChartComponent from "../components/PieChartComponent";
// import SignaturePopup from "./SignaturePopup";
// import PieGrid from "./PieGrid";

// import "../assets/css/Home.css";

// const API_URL =
//   "/fetch-credential-details/db0ac7a0-af94-47df-a85e-3d0337637c6f";

// const BEARER_TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXRfaWQiOiI2ZTgyNGY0ZC03NTIwLTQzOTMtODZjMS1mMTlhMGEzZmM4YTMiLCJpYXQiOjE3NDM2Nzg4MzgsImV4cCI6MTc0Mzc2NTIzOH0.yItLIkDu6Z8mO2vdkSH2M0sp5l6bpqrstjFq4rxHi-o";

// const Home: React.FC = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [batteryData, setBatteryData] = useState<any>({});

//   useEffect(() => {
//     const fetchBatteryData = async () => {
//       try {
//         const response = await axios.get(API_URL, {
//           headers: {
//             Authorization: `Bearer ${BEARER_TOKEN}`,
//             "Content-Type": "application/json",
//           },
//         });
//         setBatteryData(response.data.attributes);
//       } catch (error) {
//         console.error("Error fetching battery data:", error);
//       }
//     };

//     fetchBatteryData();
//   }, []);

//   return (
//     <section className="home">
      // <div className="card">
      //   <div className="content-container">
      //     <section className="battery-passport-section">
      //       <div className="battery-passport">
      //         <div className="passport-header">
      //           <div>
      //             <p className="passport-id">Passport ID:</p>
      //             <p className="passport-id-value">
      //               did:web:acme.battery.pass:0226151e-949c-d067-8ef3-162431e28976
      //             </p>
      //           </div>
      //           <div className="header-right">
      //             <div
      //               className="verified-badge"
      //               onMouseEnter={() => setIsHovered(true)}
      //               onMouseLeave={() => setIsHovered(false)}
      //             >
      //               Verified
      //               {isHovered && <SignaturePopup />}
      //             </div>
      //           </div>
      //         </div>
      //         <hr className="hr-separator" />
      //         <div className="info-grid">
      //           <div className="info-item">
      //             <p>Model Number</p>
      //             <p className="info-value">{batteryData.ModelNumber}</p>
      //           </div>
      //           <div className="info-item">
      //             <p>Serial Number</p>
      //             <p className="info-value">{batteryData.SerialNumber}</p>
      //           </div>
      //           <div className="info-item">
      //             <p>Category</p>
      //             <p className="info-value">{batteryData.Category}</p>
      //           </div>
      //           <div className="info-item">
      //             <p>Weight</p>
      //             <p className="info-value">{batteryData?.["Weight(kg)"]}kg</p>
      //           </div>
      //           <div className="info-item">
      //             <p>Status</p>
      //             <p
      //               className={`status ${
      //                 batteryData.Status === "Damaged" ? "damaged" : "original"
      //               }`}
      //             >
      //               {batteryData.Status === "Damaged"
      //                 ? "🔴 Damaged"
      //                 : "🟢 Original"}
      //             </p>
      //           </div>
      //           <div className="info-item">
      //             <p>Manufactured Date</p>
      //             <p className="info-value">{batteryData.ManufacturedDate}</p>
      //           </div>
      //           <div className="info-item">
      //             <p>Manufactured by</p>
      //             <p className="info-value">
      //               {batteryData.ManufacturedBy}{" "}
      //               <span className="location-icon">📍</span>
      //             </p>
      //           </div>
      //         </div>
      //         <div className="economic-operator-section">
      //           <p>
      //             <strong>Economic operator</strong>
      //           </p>
      //           <div className="economic-operator">
      //             <img src="src/assets/N2AT.png" alt="N2AT Logo" />
      //           </div>
      //         </div>
      //       </div>
      //     </section>
      //     <div className="qr-section">
      //       <img
      //         src="src/assets/battery_qr-removebg-preview.png"
      //         alt="Relevant Image"
      //         className="right-image"
      //       />
      //       <Link to="/passport-details">
      //         <button className="btn">View more about this passport</button>
      //       </Link>
      //     </div>
      //   </div>
      // </div>

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
//                 <PieChartComponent data={batteryData} />
//               </div>
//             </div>
//                 <PieGrid data={batteryData} />
//             </div>
//         </div>
//       </section>
//     </section>
//   );
// };

// export default Home;


// Home.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PieChartComponent from "../components/PieChartComponent";
import PieGrid from "./PieGrid";
import SignaturePopup from "./SignaturePopup";

import "../assets/css/Home.css";

const API_URL =
  "/fetch-credential-details/db0ac7a0-af94-47df-a85e-3d0337637c6f";
const BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXRfaWQiOiI2ZTgyNGY0ZC03NTIwLTQzOTMtODZjMS1mMTlhMGEzZmM4YTMiLCJpYXQiOjE3NDM2Nzg4MzgsImV4cCI6MTc0Mzc2NTIzOH0.yItLIkDu6Z8mO2vdkSH2M0sp5l6bpqrstjFq4rxHi-o";

const Home: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [batteryData, setBatteryData] = useState<any>({});
  const [carbonFootprintData, setCarbonFootprintData] = useState([]);
  const [materialCompositionData, setMaterialCompositionData] = useState({});

  useEffect(() => {
    const fetchBatteryData = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            "Content-Type": "application/json",
          },
        });

        const attributes = response.data.attributes;
        setBatteryData(attributes);

        // Extract Carbon Footprint data
        const carbonData = [
          {
            name: "Recycling",
            value: parseFloat(attributes["CarbonFootprint: Recycling"]),
            color: "#6c757d",
          },
          {
            name: "Distribution",
            value: parseFloat(attributes["CarbonFootprint: Distribution"]),
            color: "#ffc107",
          },
          {
            name: "Main Production",
            value: parseFloat(attributes["CarbonFootprint: Main Production"]),
            color: "#dc3545",
          },
          {
            name: "Raw Material Extraction",
            value: parseFloat(attributes["CarbonFootprint: Raw Material Extraction"]),
            color: "#28a745",
          },
        ];
        setCarbonFootprintData(carbonData);

        // Extract Material Composition data
        const materialData = {
          nickel: [
            {
              name: "Post Consumer Share",
              value: parseFloat(attributes["Nickel: Post Consumer Share"] || "0"),
              color: "#28a745",
            },
            {
              name: "Pre Consumer Share",
              value: parseFloat(attributes["Nickel: Pre Consumer Share"] || "0"),
              color: "#2C3E50",
            },
            {
              name: "Primary Material",
              value: parseFloat(attributes["Nickel: Primary Material"] || "0"),
              color: "#BDC3C7",
            },
          ],
          cobalt: [
            {
              name: "Post Consumer Share",
              value: parseFloat(attributes["Cobalt: Post Consumer Share"] || "0"),
              color: "#28a745",
            },
            {
              name: "Pre Consumer Share",
              value: parseFloat(attributes["Cobalt: Pre Consumer Share"] || "0"),
              color: "#2C3E50",
            },
            {
              name: "Primary Material",
              value: parseFloat(attributes["Cobalt: Primary Material"] || "0"),
              color: "#BDC3C7",
            },
          ],
          lithium: [
            {
              name: "Post Consumer Share",
              value: parseFloat(attributes["Lithium: Post Consumer Share"] || "0"),
              color: "#28a745",
            },
            {
              name: "Pre Consumer Share",
              value: parseFloat(attributes["Lithium: Pre Consumer Share"] || "0"),
              color: "#2C3E50",
            },
            {
              name: "Primary Material",
              value: parseFloat(attributes["Lithium: Primary Material"] || "0"),
              color: "#BDC3C7",
            },
          ],
          lead: [
            {
              name: "Post Consumer Share",
              value: parseFloat(attributes["Lead: Post Consumer Share"] || "0"),
              color: "#28a745",
            },
            {
              name: "Pre Consumer Share",
              value: parseFloat(attributes["Lead: Pre Consumer Share"] || "0"),
              color: "#2C3E50",
            },
            {
              name: "Primary Material",
              value: parseFloat(attributes["Lead: Primary Material"] || "0"),
              color: "#BDC3C7",
            },
          ],
        };
        setMaterialCompositionData(materialData);
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
                <PieChartComponent data={carbonFootprintData} />
              </div>
            </div>
            <PieGrid data={materialCompositionData} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
