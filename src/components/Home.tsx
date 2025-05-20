

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import PieChartComponent from "../components/PieChartComponent";
// import PieGrid from "./PieGrid";
// import SignaturePopup from "./SignaturePopup";

// const API_URL = "/fetch-credential-details/db0ac7a0-af94-47df-a85e-3d0337637c6f";
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

//         const materialData = {
//           nickel: [
//             {
//               name: "Post Consumer Share",
//               value: parseFloat(attributes["Nickel: Post Consumer Share"] || "0"),
//               color: "#ffc107",
//             },
//             {
//               name: "Pre Consumer Share",
//               value: parseFloat(attributes["Nickel: Pre Consumer Share"] || "0"),
//               color: "#2C3E50",
//             },
//             {
//               name: "Primary Material",
//               value: parseFloat(attributes["Nickel: Primary Material"] || "0"),
//               color: "#6c757d",
//             },
//           ],
//           cobalt: [
//             {
//               name: "Post Consumer Share",
//               value: parseFloat(attributes["Cobalt: Post Consumer Share"] || "0"),
//               color: "#ffc107",
//             },
//             {
//               name: "Pre Consumer Share",
//               value: parseFloat(attributes["Cobalt: Pre Consumer Share"] || "0"),
//               color: "#2C3E50",
//             },
//             {
//               name: "Primary Material",
//               value: parseFloat(attributes["Cobalt: Primary Material"] || "0"),
//               color: "#6c757d",
//             },
//           ],
//           lithium: [
//             {
//               name: "Post Consumer Share",
//               value: parseFloat(attributes["Lithium: Post Consumer Share"] || "0"),
//               color: "#ffc107",
//             },
//             {
//               name: "Pre Consumer Share",
//               value: parseFloat(attributes["Lithium: Pre Consumer Share"] || "0"),
//               color: "#2C3E50",
//             },
//             {
//               name: "Primary Material",
//               value: parseFloat(attributes["Lithium: Primary Material"] || "0"),
//               color: "#6c757d",
//             },
//           ],
//           lead: [
//             {
//               name: "Post Consumer Share",
//               value: parseFloat(attributes["Lead: Post Consumer Share"] || "0"),
//               color: "#ffc107",
//             },
//             {
//               name: "Pre Consumer Share",
//               value: parseFloat(attributes["Lead: Pre Consumer Share"] || "0"),
//               color: "#2C3E50",
//             },
//             {
//               name: "Primary Material",
//               value: parseFloat(attributes["Lead: Primary Material"] || "0"),
//               color: "#6c757d",
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
//     <section className="mt-32 ">
//       <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto items-start md:items-center mt-1 md:mt-12">
//         {/* Battery Passport Section */}
//         <div className="flex-1 flex justify-center flex-wrap w-full md:max-w-6xl md:ml-0 mb-6 md:mb-0 ">
//           <div className="bg-white p-5 rounded-lg border border-gray-300 flex flex-col w-full md:w-9/10">
//             <div className="flex items-center mb-4 justify-between">
//               <div>
//                 <p className="text-sm text-gray-500 font-bold">Passport ID:</p>
//                 <p className="text-lg font-bold">did:web:acme.battery.pass:0226151e-949c-d067-8ef3-162431e28976</p>
//               </div>
//               <div className="flex items-center">
//                 <div
//                   className="bg-green-500 text-white py-1 px-3 rounded-full text-sm font-bold relative cursor-pointer"
//                   onMouseEnter={() => setIsHovered(true)}
//                   onMouseLeave={() => setIsHovered(false)}
//                 >
//                   Verified
//                   {isHovered && <SignaturePopup />}
//                 </div>
//               </div>
//             </div>
//             <hr className="border-b border-gray-300" />
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <div>
//                 <p className="font-bold">Model Number</p>
//                 <p className="font-bold">{batteryData.ModelNumber}</p>
//               </div>
//               <div>
//                 <p className="font-bold">Serial Number</p>
//                 <p className="font-bold">{batteryData.SerialNumber}</p>
//               </div>
//               <div>
//                 <p className="font-bold">Category</p>
//                 <p className="font-bold">{batteryData.Category}</p>
//               </div>
//               <div>
//                 <p className="font-bold">Weight</p>
//                 <p className="font-bold">{batteryData?.["Weight(kg)"]} kg</p>
//               </div>
//               <div>
//                 <p className="font-bold">Status</p>
//                 <p className={`flex items-center gap-1 ${batteryData.Status === "Damaged" ? "text-red-600" : "text-green-600"}`}>
//                   {batteryData.Status === "Damaged" ? "🔴 Damaged" : "🟢 Original"}
//                 </p>
//               </div>
//               <div>
//                 <p className="font-bold">Manufactured Date</p>
//                 <p className="font-bold">{batteryData.ManufacturedDate}</p>
//               </div>
//               <div>
//                 <p className="font-bold">Manufactured by</p>
//                 <p className="font-bold">{batteryData.ManufacturedBy} <span className="text-xs">📍</span></p>
//               </div>
//             </div>
//             <div className="flex flex-col items-end">
//               <p className="font-bold"><strong>Economic operator</strong></p>
//               <div className="flex items-center">
//                 <img src="src/assets/N2AT.png" alt="N2AT Logo" className="w-36 h-auto rounded-lg border-2 border-gray-300" />
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Image Section */}
//         <div className="flex flex-col items-center justify-center gap-2 mt-4 md:mt-0 w-full md:w-5/12">
//           <img
//             src="src/assets/battery_qr-removebg-preview.png"
//             alt="Relevant Image"
//             className="max-w-full h-auto"
//           />
//           <Link to="/passport-details" state={{ batteryData, carbonFootprintData, materialCompositionData }}>
//             <button className="mt-6 bg-green-500 text-white border-2 border-green-500 rounded-md text-sm transition-all duration-300 hover:bg-white hover:text-green-500 py-2 px-3 w-full">
//               View more about this passport
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Pie Chart Section */}
//       <section className="w-full p-5 md:p-10 space-y-8"> {/* Added space-y-8 for spacing between items */}
//         <div className="border border-gray-300 rounded-2xl">
//           <div className="text-left line-height-1.8 mb-5 ml-5 text-xs text-gray-500">
//             <h2>SUMMARY REPORT</h2>
//           </div>
//           <hr className="border-b-2 bg-gradient-to-r from-red-500 to-yellow-500 h-0.5" />
//           <h4 className="text-lg mt-4">Original Power</h4>
//           <br />
//           <div className="carbonfootprint -mt-10">
//             <PieChartComponent data={carbonFootprintData} />
//           </div>
//         </div>
//         <PieGrid data={materialCompositionData} />
//       </section>
//     </section>
//   );
// };

// export default Home;

//==========================================================================================



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PieChartComponent from "../components/PieChartComponent";
import PieGrid from "./PieGrid";
import SignaturePopup from "./SignaturePopup";
import background from '../assets/Premium Vector _ Square background patterns-Photoroom.png'

const API_URL = "/fetch-credential-details/db0ac7a0-af94-47df-a85e-3d0337637c6f";
const BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXRfaWQiOiI2ZTgyNGY0ZC03NTIwLTQzOTMtODZjMS1mMTlhMGEzZmM4YTMiLCJpYXQiOjE3NDM2Nzg4MzgsImV4cCI6MTc0Mzc2NTIzOH0.yItLIkDu6Z8mO2vdkSH2M0sp5l6bpqrstjFq4rxHi-o";

const Home: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [batteryData, setBatteryData] = useState<any>({});
  const [carbonFootprintData, setCarbonFootprintData] = useState([]);
  const [materialCompositionData, setMaterialCompositionData] = useState({});
  const [carbonExpanded, setCarbonExpanded] = useState(false);
  const [materialsExpanded, setMaterialsExpanded] = useState(false);

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
          { name: "Recycling", value: parseFloat(attributes["CarbonFootprint: Recycling"]), color: "#6c757d" },
          { name: "Distribution", value: parseFloat(attributes["CarbonFootprint: Distribution"]), color: "#ffc107" },
          { name: "Main Production", value: parseFloat(attributes["CarbonFootprint: Main Production"]), color: "#dc3545" },
          { name: "Raw Material Extraction", value: parseFloat(attributes["CarbonFootprint: Raw Material Extraction"]), color: "#28a745" },
        ];
        setCarbonFootprintData(carbonData);

        const materialData = {
          nickel: [
            { name: "Post Consumer Share", value: parseFloat(attributes["Nickel: Post Consumer Share"] || "0"), color: "#ffc107" },
            { name: "Pre Consumer Share", value: parseFloat(attributes["Nickel: Pre Consumer Share"] || "0"), color: "#2C3E50" },
            { name: "Primary Material", value: parseFloat(attributes["Nickel: Primary Material"] || "0"), color: "#6c757d" },
          ],
          cobalt: [
            { name: "Post Consumer Share", value: parseFloat(attributes["Cobalt: Post Consumer Share"] || "0"), color: "#ffc107" },
            { name: "Pre Consumer Share", value: parseFloat(attributes["Cobalt: Pre Consumer Share"] || "0"), color: "#2C3E50" },
            { name: "Primary Material", value: parseFloat(attributes["Cobalt: Primary Material"] || "0"), color: "#6c757d" },
          ],
          lithium: [
            { name: "Post Consumer Share", value: parseFloat(attributes["Lithium: Post Consumer Share"] || "0"), color: "#ffc107" },
            { name: "Pre Consumer Share", value: parseFloat(attributes["Lithium: Pre Consumer Share"] || "0"), color: "#2C3E50" },
            { name: "Primary Material", value: parseFloat(attributes["Lithium: Primary Material"] || "0"), color: "#6c757d" },
          ],
          lead: [
            { name: "Post Consumer Share", value: parseFloat(attributes["Lead: Post Consumer Share"] || "0"), color: "#ffc107" },
            { name: "Pre Consumer Share", value: parseFloat(attributes["Lead: Pre Consumer Share"] || "0"), color: "#2C3E50" },
            { name: "Primary Material", value: parseFloat(attributes["Lead: Primary Material"] || "0"), color: "#6c757d" },
          ],
        };
        setMaterialCompositionData(materialData);
      } catch (error) {
        console.error("Error fetching battery data:", error);
      }
    };

    fetchBatteryData();
  }, []);

  const getRecycledPercentage = () => {
    let totalRecycled = 0;
    let totalMaterial = 0;
    for (const material in materialCompositionData) {
      const data = materialCompositionData[material];
      data.forEach(item => {
        if (item.name.includes("Consumer Share")) {
          totalRecycled += item.value;
        }
        totalMaterial += item.value;
      });
    }
    return totalMaterial > 0 ? ((totalRecycled / totalMaterial) * 100).toFixed(1) : "N/A";
  };

  return (
<section style={{ backgroundImage: `url(${background})` }} className="mt-24 md:mt-12 sm:mt-[50px] px-4 md:px-16 bg-gray-100 py-10 rounded-lg shadow-md w-full md:w-max mx-auto">      {/* Dashboard Header */}
      <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            Battery Passport
          </h2>
          <p className="text-sm text-gray-600">
            ID: <span className="font-bold text-blue-700 break-words">
              0226151e-949c-d067-8ef3-162431e28976
            </span>
          </p>
        </div>
        <div className="relative">
          <div
            className={`flex items-center bg-${batteryData.Status === "Damaged" ? "red" : "green"}-500 text-white py-2 px-4 rounded-full text-sm font-bold cursor-pointer shadow-sm hover:bg-${batteryData.Status === "Damaged" ? "red" : "green"}-600 transition-colors duration-200`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {batteryData.Status === "Damaged" ? "Damaged" : "Verified"}
            {isHovered && <SignaturePopup />}
          </div>
        </div>
      </div>

      {/* Key Metrics, stacked on mobile, side-by-side on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 w-full">
        {/* Status */}
        <div className="bg-white rounded-lg shadow-sm p-4 text-center">
          <p className="text-sm text-gray-600 mb-1">Status</p>
          <p className={`font-semibold text-lg ${batteryData.Status === "Damaged" ? "text-red-500" : "text-green-500"}`}>
            {batteryData.Status}
          </p>
        </div>
        {/* Model */}
        <div className="bg-white rounded-lg shadow-sm p-4 text-center">
          <p className="text-sm text-gray-600 mb-1">Model</p>
          <p className="font-semibold text-lg text-indigo-500">{batteryData.ModelNumber}</p>
        </div>
        {/* Recycled Content */}
        <div className="bg-white rounded-lg shadow-sm p-4 text-center">
          <p className="text-sm text-gray-600 mb-1">Recycled Content</p>
          <p className="font-semibold text-lg text-teal-500">{getRecycledPercentage()}%</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 text-center">
          <p className="text-sm text-gray-600 mb-1">Category</p>
          <p className="font-semibold text-lg text-teal-500">{batteryData.Category}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 text-center">
          <p className="text-sm text-gray-600 mb-1">Weight</p>
          <p className="font-semibold text-lg text-teal-500">{batteryData?.["Weight(kg)"]}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 text-center">
          <p className="text-sm text-gray-600 mb-1">Manufactured Date</p>
          <p className="font-semibold text-lg text-teal-500">{batteryData.ManufacturedDate}</p>
        </div>
      </div>

      {/* Expandable sections */}
      <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-4 w-full">
        {/* Carbon Footprint */}
        <div className="flex justify-between items-center cursor-pointer" onClick={() => setCarbonExpanded(!carbonExpanded)}>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Carbon Footprint</h3>
          <svg className={`w-5 h-5 transition-transform duration-200 ${carbonExpanded ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
        {carbonExpanded && (
          <div className="mt-4">
            <PieChartComponent data={carbonFootprintData} />
          </div>
        )}
      </div>

      {/* Material Composition */}
      <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-4 w-full max-w-8xl">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => setMaterialsExpanded(!materialsExpanded)}>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Material Composition</h3>
          <svg className={`w-5 h-5 transition-transform duration-200 ${materialsExpanded ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
        {materialsExpanded && (
          <div className="mt-4">
            <PieGrid data={materialCompositionData} />
          </div>
        )}
      </div>

      {/* Operator & QR Code, stacked on mobile */}
      <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 gap-10 flex flex-col md:flex-row items-center justify-center mb-4 w-full space-y-4 md:space-y-0 md:space-x-4">
        {/* Operator */}
        <div className="flex flex-col items-center text-center ">
          <p className="font-semibold text-gray-700 mb-2">Economic Operator</p>
          <img
            src="src/assets/N2AT.png"
            alt="N2AT Logo"
            className="w-40 h-auto rounded-md border border-gray-300 shadow-sm"
          />
        </div>
        {/* QR code */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-md font-semibold text-gray-700 mb-2">Scan for More Info</h3>
          <img
            src="src/assets/battery_qr-removebg-preview.png"
            alt="Battery QR Code"
            className="max-w-40 h-auto rounded-md shadow-sm"
          />
        </div>
      </div>

      {/* Full Details Button */}
      <div className="mt-4 w-full px-4 md:px-0">
        <Link
          to="/passport-details"
          state={{ batteryData, carbonFootprintData, materialCompositionData }}
        >
          <button className="w-full bg-blue-500 text-white border border-blue-500 rounded-md text-sm font-semibold transition-all duration-300 hover:bg-white hover:text-blue-500 py-3 px-6 shadow-sm ">
            View Full Passport Details
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;

