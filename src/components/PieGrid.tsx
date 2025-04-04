// // PieGrid.tsx
// import React from "react";
// import PieChartComponent2 from "../components/PieChartComponent2";
// import "../assets/css/PieGrid.css";

// const nickelData = [
//   { name: "Post Consumer Share", value: 7, color: "#28a745" },
//   { name: "Pre Consumer Share", value: 17, color: "#2C3E50" },
//   { name: "Primary Material", value: 76, color: "#BDC3C7" },
// ];

// const cobaltData = [
//   { name: "Post Consumer Share", value: 9, color: "#28a745" },
//   { name: "Pre Consumer Share", value: 10, color: "#2C3E50" },
//   { name: "Primary Material", value: 81, color: "#BDC3C7" },
// ];

// const lithiumData = [
//   { name: "Post Consumer Share", value: 10, color: "#28a745" },
//   { name: "Pre Consumer Share", value: 14, color: "#2C3E50" },
//   { name: "Primary Material", value: 76, color: "#BDC3C7" },
// ];

// const leadData = [
//   { name: "Post Consumer Share", value: 6, color: "#28a745" },
//   { name: "Pre Consumer Share", value: 11, color: "#2C3E50" },
//   { name: "Primary Material", value: 83, color: "#BDC3C7" },
// ];

// const PieGrid: React.FC = () => {
//   return (
//     <div>
//       <h3 className="recycle">
//         Recycled Content Share{" "}
//         <span className="unverified-badge">Unverified</span>
//       </h3>
//       <div className="pie-grid">
//         <div className="pie-item">
//           <PieChartComponent2 title="NICKEL" data={nickelData} />
//         </div>
//         <div className="pie-item">
//           <PieChartComponent2 title="COBALT" data={cobaltData} />
//         </div>
//         <div className="pie-item">
//           <PieChartComponent2 title="LITHIUM" data={lithiumData} />
//         </div>
//         <div className="pie-item">
//           <PieChartComponent2 title="LEAD" data={leadData} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PieGrid;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import PieChartComponent2 from "../components/PieChartComponent2";
// import "../assets/css/PieGrid.css";

// const API_URL =
//   "/fetch-credential-details/db0ac7a0-af94-47df-a85e-3d0337637c6f";
// const BEARER_TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXRfaWQiOiI2ZTgyNGY0ZC03NTIwLTQzOTMtODZjMS1mMTlhMGEzZmM4YTMiLCJpYXQiOjE3NDM2Nzg4MzgsImV4cCI6MTc0Mzc2NTIzOH0.yItLIkDu6Z8mO2vdkSH2M0sp5l6bpqrstjFq4rxHi-o";

// const PieGrid: React.FC = () => {
//   const [pieData, setPieData] = useState<any>(null);

//   useEffect(() => {
//     const fetchMaterialData = async () => {
//       try {
//         const response = await axios.get(API_URL, {
//           headers: {
//             Authorization: `Bearer ${BEARER_TOKEN}`,
//             "Content-Type": "application/json",
//           },
//         });
    
//         console.log("API Response:", response.data); // ✅ Debugging log
    
//         const attributes = response.data.attributes;
    
//         if (!attributes) {
//           console.error("No 'attributes' field in response!");
//           return;
//         }
    
//         const formattedData = {
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
//               color: "#BDC3C7",
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
    
//         console.log("Formatted Data:", formattedData); // ✅ Debugging log
    
//         setPieData(formattedData);
//       } catch (error) {
//         console.error("Error fetching material data:", error);
//       }
//     };
    
//     fetchMaterialData();
//   }, []);

//   return (
//     <div>
//       <h3 className="recycle">
//         Recycled Content Share{" "}
//         <span className="unverified-badge">Unverified</span>
//       </h3>

//       <div className="pie-grid">
//         {pieData ? (
//           <>
//             <div className="pie-item">
//               <PieChartComponent2 title="NICKEL" data={pieData.nickel} />
//             </div>
//             <div className="pie-item">
//               <PieChartComponent2 title="COBALT" data={pieData.cobalt} />
//             </div>
//             <div className="pie-item">
//               <PieChartComponent2 title="LITHIUM" data={pieData.lithium} />
//             </div>
//             <div className="pie-item">
//               <PieChartComponent2 title="LEAD" data={pieData.lead} />
//             </div>
//           </>
//         ) : (
//           <p>Loading data...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PieGrid;

import React from "react";
import PieChartComponent2 from "./PieChartComponent2";
import "../assets/css/PieGrid.css";

interface PieGridProps {
  data: {
    nickel: { name: string; value: number; color: string }[];
    cobalt: { name: string; value: number; color: string }[];
    lithium: { name: string; value: number; color: string }[];
    lead: { name: string; value: number; color: string }[];

  };
}

const PieGrid: React.FC<PieGridProps> = ({ data }) => {
  return (
    <div className="pie-grid-row">
      <div className="pie-chart-container">
        <PieChartComponent2 title="Nickel" data={data?.nickel || []} />
      </div>
      <div className="pie-chart-container">
        <PieChartComponent2 title="Cobalt" data={data?.cobalt || []} />
      </div>
      <div className="pie-chart-container">
        <PieChartComponent2 title="Lithium" data={data?.lithium || []} />
      </div>
      <div className="pie-chart-container">
        <PieChartComponent2 title="Lead" data={data?.lead || []} />
      </div>
    </div>
  );
};

export default PieGrid;
