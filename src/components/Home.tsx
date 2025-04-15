

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



// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import PieChartComponent from "../components/PieChartComponent";
// import PieGrid from "./PieGrid";
// import SignaturePopup from "./SignaturePopup";

// import "../assets/css/Home.css";

// const API_URL =
//   "/fetch-credential-details/db0ac7a0-af94-47df-a85e-3d0337637c6f";
// const BEARER_TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXRfaWQiOiI2ZTgyNGY0ZC03NTIwLTQzOTMtODZjMS1mMTlhMGEzZmM4YTMiLCJpYXQiOjE3NDM2Nzg4MzgsImV4cCI6MTc0Mzc2NTIzOH0.yItLIkDu6Z8mO2vdkSH2M0sp5l6bpqrstjFq4rxHi-o";

// const Home: React.FC = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [batteryData, setBatteryData] = useState<any>({});
//   const [carbonFootprintData, setCarbonFootprintData] = useState([]);
//   const [materialCompositionData, setMaterialCompositionData] = useState({});

//   useEffect(() => {
//     const fetchBatteryData = async () => {
//       try {
//         const response = await axios.get(API_URL, {
//           headers: {
//             Authorization: `Bearer ${BEARER_TOKEN}`,
//             "Content-Type": "application/json",
//           },
//         });

//         const attributes = response.data.attributes;
//         setBatteryData(attributes);

//         // Extract Carbon Footprint data
//         const carbonData = [
//           {
//             name: "Recycling",
//             value: parseFloat(attributes["CarbonFootprint: Recycling"]),
//             color: "#6c757d",
//           },
//           {
//             name: "Distribution",
//             value: parseFloat(attributes["CarbonFootprint: Distribution"]),
//             color: "#ffc107",
//           },
//           {
//             name: "Main Production",
//             value: parseFloat(attributes["CarbonFootprint: Main Production"]),
//             color: "#dc3545",
//           },
//           {
//             name: "Raw Material Extraction",
//             value: parseFloat(attributes["CarbonFootprint: Raw Material Extraction"]),
//             color: "#28a745",
//           },
//         ];
//         setCarbonFootprintData(carbonData);

//         // Extract Material Composition data
//         const materialData = {
//           nickel: [
//             {
//               name: "Post Consumer Share",
//               value: parseFloat(attributes["Nickel: Post Consumer Share"] || "0"),
//               color: "#28a745",
//             },
//             {
//               name: "Pre Consumer Share",
//               value: parseFloat(attributes["Nickel: Pre Consumer Share"] || "0"),
//               color: "#2C3E50",
//             },
//             {
//               name: "Primary Material",
//               value: parseFloat(attributes["Nickel: Primary Material"] || "0"),
//               color: "#BDC3C7",
//             },
//           ],
//           cobalt: [
//             {
//               name: "Post Consumer Share",
//               value: parseFloat(attributes["Cobalt: Post Consumer Share"] || "0"),
//               color: "#28a745",
//             },
//             {
//               name: "Pre Consumer Share",
//               value: parseFloat(attributes["Cobalt: Pre Consumer Share"] || "0"),
//               color: "#2C3E50",
//             },
//             {
//               name: "Primary Material",
//               value: parseFloat(attributes["Cobalt: Primary Material"] || "0"),
//               color: " #BDBDBD",
//             },
//           ],
//           lithium: [
//             {
//               name: "Post Consumer Share",
//               value: parseFloat(attributes["Lithium: Post Consumer Share"] || "0"),
//               color: "#28a745",
//             },
//             {
//               name: "Pre Consumer Share",
//               value: parseFloat(attributes["Lithium: Pre Consumer Share"] || "0"),
//               color: "#2C3E50",
//             },
//             {
//               name: "Primary Material",
//               value: parseFloat(attributes["Lithium: Primary Material"] || "0"),
//               color: "#BDC3C7",
//             },
//           ],
//           lead: [
//             {
//               name: "Post Consumer Share",
//               value: parseFloat(attributes["Lead: Post Consumer Share"] || "0"),
//               color: "#28a745",
//             },
//             {
//               name: "Pre Consumer Share",
//               value: parseFloat(attributes["Lead: Pre Consumer Share"] || "0"),
//               color: "#2C3E50",
//             },
//             {
//               name: "Primary Material",
//               value: parseFloat(attributes["Lead: Primary Material"] || "0"),
//               color: "#BDC3C7",
//             },
//           ],
//         };
//         setMaterialCompositionData(materialData);
//       } catch (error) {
//         console.error("Error fetching battery data:", error);
//       }
//     };

//     fetchBatteryData();
//   }, []);

//   return (
//     <section className="home">
//             <div className="card">
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
//                   <p className="info-value">{batteryData.ModelNumber}</p>
//                 </div>
//                 <div className="info-item">
//                   <p>Serial Number</p>
//                   <p className="info-value">{batteryData.SerialNumber}</p>
//                 </div>
//                 <div className="info-item">
//                   <p>Category</p>
//                   <p className="info-value">{batteryData.Category}</p>
//                 </div>
//                 <div className="info-item">
//                   <p>Weight</p>
//                   <p className="info-value">{batteryData?.["Weight(kg)"]}kg</p>
//                 </div>
//                 <div className="info-item">
//                   <p>Status</p>
//                   <p
//                     className={`status ${
//                       batteryData.Status === "Damaged" ? "damaged" : "original"
//                     }`}
//                   >
//                     {batteryData.Status === "Damaged"
//                       ? "🔴 Damaged"
//                       : "🟢 Original"}
//                   </p>
//                 </div>
//                 <div className="info-item">
//                   <p>Manufactured Date</p>
//                   <p className="info-value">{batteryData.ManufacturedDate}</p>
//                 </div>
//                 <div className="info-item">
//                   <p>Manufactured by</p>
//                   <p className="info-value">
//                     {batteryData.ManufacturedBy}{" "}
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
//             <Link to="/passport-details"
//                   state={{ batteryData, carbonFootprintData, materialCompositionData }}
//             >
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
//                 <PieChartComponent data={carbonFootprintData} />
//               </div>
//             </div>
//             <PieGrid data={materialCompositionData} />
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
// import PieGrid from "./PieGrid";
// import SignaturePopup from "./SignaturePopup";

// const API_URL =
//   "/fetch-credential-details/db0ac7a0-af94-47df-a85e-3d0337637c6f";
// const BEARER_TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXRfaWQiOiI2ZTgyNGY0ZC03NTIwLTQzOTMtODZjMS1mMTlhMGEzZmM4YTMiLCJpYXQiOjE3NDM2Nzg4MzgsImV4cCI6MTc0Mzc2NTIzOH0.yItLIkDu6Z8mO2vdkSH2M0sp5l6bpqrstjFq4rxHi-o";

// const Home: React.FC = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [batteryData, setBatteryData] = useState<any>({});
//   const [carbonFootprintData, setCarbonFootprintData] = useState([]);
//   const [materialCompositionData, setMaterialCompositionData] = useState({});

//   useEffect(() => {
//     const fetchBatteryData = async () => {
//       try {
//         const response = await axios.get(API_URL, {
//           headers: {
//             Authorization: `Bearer ${BEARER_TOKEN}`,
//             "Content-Type": "application/json",
//           },
//         });

//         const attributes = response.data.attributes;
//         setBatteryData(attributes);

//         // Extract Carbon Footprint data
//         const carbonData = [
//           {
//             name: "Recycling",
//             value: parseFloat(attributes["CarbonFootprint: Recycling"]),
//             color: "#6c757d",
//           },
//           {
//             name: "Distribution",
//             value: parseFloat(attributes["CarbonFootprint: Distribution"]),
//             color: "#ffc107",
//           },
//           {
//             name: "Main Production",
//             value: parseFloat(attributes["CarbonFootprint: Main Production"]),
//             color: "#dc3545",
//           },
//           {
//             name: "Raw Material Extraction",
//             value: parseFloat(attributes["CarbonFootprint: Raw Material Extraction"]),
//             color: "#28a745",
//           },
//         ];
//         setCarbonFootprintData(carbonData);

//         // Extract Material Composition data
//         const materialData = {
//           nickel: [
//             {
//               name: "Post Consumer Share",
//               value: parseFloat(attributes["Nickel: Post Consumer Share"] || "0"),
//               color: "#28a745",
//             },
//             {
//               name: "Pre Consumer Share",
//               value: parseFloat(attributes["Nickel: Pre Consumer Share"] || "0"),
//               color: "#2C3E50",
//             },
//             {
//               name: "Primary Material",
//               value: parseFloat(attributes["Nickel: Primary Material"] || "0"),
//               color: "#BDC3C7",
//             },
//           ],
//           cobalt: [
//             {
//               name: "Post Consumer Share",
//               value: parseFloat(attributes["Cobalt: Post Consumer Share"] || "0"),
//               color: "#28a745",
//             },
//             {
//               name: "Pre Consumer Share",
//               value: parseFloat(attributes["Cobalt: Pre Consumer Share"] || "0"),
//               color: "#2C3E50",
//             },
//             {
//               name: "Primary Material",
//               value: parseFloat(attributes["Cobalt: Primary Material"] || "0"),
//               color: " #BDBDBD",
//             },
//           ],
//           lithium: [
//             {
//               name: "Post Consumer Share",
//               value: parseFloat(attributes["Lithium: Post Consumer Share"] || "0"),
//               color: "#28a745",
//             },
//             {
//               name: "Pre Consumer Share",
//               value: parseFloat(attributes["Lithium: Pre Consumer Share"] || "0"),
//               color: "#2C3E50",
//             },
//             {
//               name: "Primary Material",
//               value: parseFloat(attributes["Lithium: Primary Material"] || "0"),
//               color: "#BDC3C7",
//             },
//           ],
//           lead: [
//             {
//               name: "Post Consumer Share",
//               value: parseFloat(attributes["Lead: Post Consumer Share"] || "0"),
//               color: "#28a745",
//             },
//             {
//               name: "Pre Consumer Share",
//               value: parseFloat(attributes["Lead: Pre Consumer Share"] || "0"),
//               color: "#2C3E50",
//             },
//             {
//               name: "Primary Material",
//               value: parseFloat(attributes["Lead: Primary Material"] || "0"),
//               color: "#BDC3C7",
//             },
//           ],
//         };
//         setMaterialCompositionData(materialData);
//       } catch (error) {
//         console.error("Error fetching battery data:", error);
//       }
//     };

//     fetchBatteryData();
//   }, []);

//   return (
//     <section className="mt-10 px-4">
//       <div className="card shadow-md rounded-xl bg-white p-6">
//         <div className="content-container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           <section className="battery-passport-section">
//             <div className="battery-passport">
//               <div className="passport-header flex justify-between items-center">
//                 <div>
//                   <p className="text-sm text-gray-500">Passport ID:</p>
//                   <p className="font-semibold text-lg">
//                     did:web:acme.battery.pass:0226151e-949c-d067-8ef3-162431e28976
//                   </p>
//                 </div>
//                 <div className="relative">
//                   <div
//                     className="verified-badge cursor-pointer text-sm font-semibold px-3 py-2 rounded-full bg-green-600 text-white"
//                     onMouseEnter={() => setIsHovered(true)}
//                     onMouseLeave={() => setIsHovered(false)}
//                   >
//                     Verified
//                     {isHovered && (
//                       <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs text-white bg-black rounded shadow-lg p-2">
//                         Verified by Economic Operator
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <hr className="my-4 border-t border-gray-300" />
              
//               <div className="info-grid grid grid-cols-2 gap-6">
//                 <div>
//                   <p className="text-sm text-gray-500">Model Number</p>
//                   <p className="font-semibold">{batteryData.ModelNumber}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Serial Number</p>
//                   <p className="font-semibold">{batteryData.SerialNumber}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Category</p>
//                   <p className="font-semibold">{batteryData.Category}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Weight</p>
//                   <p className="font-semibold">{batteryData?.["Weight(kg)"]} kg</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Status</p>
//                   <p
//                     className={`font-semibold ${
//                       batteryData.Status === "Damaged" ? "text-red-600" : "text-green-600"
//                     }`}
//                   >
//                     {batteryData.Status === "Damaged" ? "🔴 Damaged" : "🟢 Original"}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Manufactured Date</p>
//                   <p className="font-semibold">{batteryData.ManufacturedDate}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Manufactured by</p>
//                   <p className="font-semibold flex items-center">
//                     {batteryData.ManufacturedBy}{" "}
//                     <span className="text-xl ml-1">📍</span>
//                   </p>
//                 </div>
//               </div>

//               <div className="economic-operator-section mt-6">
//                 <p className="font-semibold">Economic operator</p>
//                 <div className="economic-operator mt-2">
//                   <img src="src/assets/N2AT.png" alt="N2AT Logo" className="w-24" />
//                 </div>
//               </div>
//             </div>
//           </section>
//           <div className="qr-section flex justify-center items-center mt-8">
//             <img
//               src="src/assets/battery_qr-removebg-preview.png"
//               alt="QR Code"
//               className="w-48 h-auto"
//             />
//             <Link
//               to="/passport-details"
//               state={{ batteryData, carbonFootprintData, materialCompositionData }}
//             >
//               <button className="btn mt-4 bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition">
//                 View more about this passport
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <section className="piechart mt-12">
//         <div className="piechart-div flex flex-col items-center">
//           <div className="piechart-card bg-white shadow-md rounded-xl p-6 w-full">
//             <div className="summary-report">
//               <div className="summary-header mb-4">
//                 <h2 className="text-xl font-semibold">SUMMARY REPORT</h2>
//               </div>
//               <hr className="my-4 border-t border-gray-300" />
//               <h4 className="font-semibold">Original Power</h4>
//               <br />
//               <div className="carbonfootprint">
//                 <PieChartComponent data={carbonFootprintData} />
//               </div>
//             </div>
//             <PieGrid data={materialCompositionData} />
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
import PieGrid from "./PieGrid";
import SignaturePopup from "./SignaturePopup";

const API_URL = "/fetch-credential-details/db0ac7a0-af94-47df-a85e-3d0337637c6f";
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
              color: "#BDBDBD",
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
    <section className="mt-52">
      <div className="w-full max-w-6xl flex items-center mt-2 flex-wrap">
        {/* Battery Passport Section */}
        <div className="flex-1 flex justify-center flex-wrap w-full max-w-6xl ml-40">
          <div className="w-9/10 bg-white p-5 rounded-lg border border-gray-300  flex flex-col">
            <div className="flex items-center mb-4 justify-between">
              <div>
                <p className="text-sm text-gray-500 font-bold">Passport ID:</p>
                <p className="text-lg font-bold">did:web:acme.battery.pass:0226151e-949c-d067-8ef3-162431e28976</p>
              </div>
              <div className="flex items-center ml-16">
                <div
                  className="bg-green-500 text-white py-1 px-3 rounded-full text-sm font-bold relative cursor-pointer"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Verified
                  {isHovered && <SignaturePopup />}
                </div>
              </div>
            </div>
            <hr className="border-b border-gray-300" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <p>Model Number</p>
                <p className="font-bold">{batteryData.ModelNumber}</p>
              </div>
              <div>
                <p>Serial Number</p>
                <p className="font-bold">{batteryData.SerialNumber}</p>
              </div>
              <div>
                <p>Category</p>
                <p className="font-bold">{batteryData.Category}</p>
              </div>
              <div>
                <p>Weight</p>
                <p className="font-bold">{batteryData?.["Weight(kg)"]} kg</p>
              </div>
              <div>
                <p>Status</p>
                <p className={`flex items-center gap-1 ${batteryData.Status === "Damaged" ? "text-red-600" : "text-green-600"}`}>
                  {batteryData.Status === "Damaged" ? "🔴 Damaged" : "🟢 Original"}
                </p>
              </div>
              <div>
                <p>Manufactured Date</p>
                <p className="font-bold">{batteryData.ManufacturedDate}</p>
              </div>
              <div>
                <p>Manufactured by</p>
                <p className="font-bold">{batteryData.ManufacturedBy} <span className="text-xs">📍</span></p>
              </div>
            </div>
            <div className="flex flex-col items-end mr-24">
              <p><strong>Economic operator</strong></p>
              <div className="flex items-center">
                <img src="src/assets/N2AT.png" alt="N2AT Logo" className="w-36 h-auto rounded-lg border-2 border-gray-300" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="flex flex-col items-center justify-center gap-2 mt-10 w-full md:w-5/12 ml-50">
          <img
            src="src/assets/battery_qr-removebg-preview.png"
            alt="Relevant Image"
            className="max-w-full h-auto"
          />
          <Link to="/passport-details" state={{ batteryData, carbonFootprintData, materialCompositionData }}>
            <button className="mt-10 bg-green-500 text-white border-2 border-green-500 rounded-md text-sm transition-all duration-300 hover:bg-white hover:text-green-500 py-2 px-3 w-full">
              View more about this passport
            </button>
          </Link>
        </div>
      </div>

      {/* Pie Chart Section */}
      <section className="w-full p-5 md:p-40 space-y-8"> {/* Added space-y-8 for spacing between items */}
        <div className="border border-gray-300 rounded-2xl">
          <div className="text-left line-height-1.8 mb-5 ml-5 text-xs text-gray-500">
            <h2>SUMMARY REPORT</h2>
          </div>
          <hr className="border-b-2 bg-gradient-to-r from-red-500 to-yellow-500 h-0.5" />
          <h4 className="text-lg mt-4">Original Power</h4>
          <br />
          <div className="carbonfootprint">
            <PieChartComponent data={carbonFootprintData} />
          </div>
        </div>
        <PieGrid data={materialCompositionData} />
      </section>
    </section>
  );
};

export default Home;