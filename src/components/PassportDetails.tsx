
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import GeneralContent from "./GeneralContent";
// import MaterialCompositionContent from "./MaterialCompositionContent";
// import ComplianceContent from "./ComplianceContent";
// import PerformanceContent from "./PerformanceContent";
// import SupplyChainContent from "./SupplyChainContent";
// import CircularityContent from "./CircularityContent";
// import CarbonFootprintContent from "./CarbonFootprintContent";
// import SignaturePopup from "./SignaturePopup";
// import "../assets/css/PassportDetails.css";

// interface Tab {
//   id: string;
//   label: string;
// }

// const API_URL = "/fetch-credential-details/db0ac7a0-af94-47df-a85e-3d0337637c6f";
// const BEARER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."; // Use full token here

// const PassportDetails: React.FC = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [activeTab, setActiveTab] = useState<string>("general");
//   const [batteryData, setBatteryData] = useState<any>({});
//   const [loading, setLoading] = useState<boolean>(true);

//   const tabs: Tab[] = [
//     { id: "general", label: "General" },
//     { id: "material-composition", label: "Material Composition" },
//     { id: "performance", label: "Performance" },
//     { id: "compliance", label: "Compliance" },
//     { id: "supply-chain", label: "Supply Chain" },
//     { id: "circularity", label: "Circularity" },
//     { id: "carbon-footprint", label: "Carbon Footprint" },
//   ];

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
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching battery data:", error);
//         setLoading(false);
//       }
//     };
//     fetchBatteryData();
//   }, []);

//   const renderContent = (tabId: string) => {
//     switch (tabId) {
//       case "general":
//         return <GeneralContent data={batteryData} />;
//       case "material-composition":
//         return <MaterialCompositionContent data={batteryData} />;
//       case "performance":
//         return <PerformanceContent data={batteryData} />;
//       case "compliance":
//         return <ComplianceContent data={batteryData} />;
//       case "supply-chain":
//         return <SupplyChainContent data={batteryData} />;
//       case "circularity":
//         return <CircularityContent data={batteryData} />;
//       case "carbon-footprint":
//         return <CarbonFootprintContent data={batteryData} />;
//       default:
//         return null;
//     }
//   };



//   return (
//     <div className="passport-sections">
//       <div className="first-section">
//         <div className="passport-card">
//           <span
//             className="verified-badge"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             Verified{isHovered && <SignaturePopup />}
//           </span>
//           <div className="passport-grid">
//             <div className="passport-item">
//               <p>Passport ID</p>
//               <h4 className="passport-value">{batteryData?.["Passport ID"]}</h4>
//             </div>
//             <div className="passport-item">
//               <p>Model Number</p>
//               <h4 className="passport-value">{batteryData?.ModelNumber}</h4>
//             </div>
//             <div className="passport-item">
//               <p>Serial Number</p>
//               <h4 className="passport-value">{batteryData?.SerialNumber}</h4>
//             </div>
//           </div>
//         </div>
//         <div className="images">
//           <img src="/src/assets/ev_battery.png" alt="EV Battery" />
//           <div className="economic-operator-section2">
//             <p><strong>Economic operator</strong></p>
//             <div className="economic-operator">
//               <img src="/src/assets/N2AT.png" alt="N2AT Logo" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="second-section">
//         <Link to="/home" className="back">
//           <span>&#8592;</span> Back to summary
//         </Link>
//         <div className="tabs-container">
//           <div className="passport-tabs">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>
//         <div className="passport-content">{renderContent(activeTab)}</div>
//       </div>
//     </div>
//   );
// };

// export default PassportDetails;



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContent from "./GeneralContent";
import MaterialCompositionContent from "./MaterialCompositionContent";
import ComplianceContent from "./ComplianceContent";
import PerformanceContent from "./PerformanceContent";
import SupplyChainContent from "./SupplyChainContent";
import CircularityContent from "./CircularityContent";
import CarbonFootprintContent from "./CarbonFootprintContent";
import SignaturePopup from "./SignaturePopup";

const API_URL = "/fetch-credential-details/db0ac7a0-af94-47df-a85e-3d0337637c6f";
const BEARER_TOKEN = "YOUR_BEARE_TOKEN"; // Use full token here

const PassportDetails: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("general");
  const [batteryData, setBatteryData] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);

  const tabs = [
    { id: "general", label: "General" },
    { id: "material-composition", label: "Material Composition" },
    { id: "performance", label: "Performance" },
    { id: "compliance", label: "Compliance" },
    { id: "supply-chain", label: "Supply Chain" },
    { id: "circularity", label: "Circularity" },
    { id: "carbon-footprint", label: "Carbon Footprint" },
  ];

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
        setLoading(false);
      } catch (error) {
        console.error("Error fetching battery data:", error);
        setLoading(false);
      }
    };
    fetchBatteryData();
  }, []);

  const renderContent = (tabId: string) => {
    switch (tabId) {
      case "general":
        return <GeneralContent data={batteryData} />;
      case "material-composition":
        return <MaterialCompositionContent data={batteryData} />;
      case "performance":
        return <PerformanceContent data={batteryData} />;
      case "compliance":
        return <ComplianceContent data={batteryData} />;
      case "supply-chain":
        return <SupplyChainContent data={batteryData} />;
      case "circularity":
        return <CircularityContent data={batteryData} />;
      case "carbon-footprint":
        return <CarbonFootprintContent data={batteryData} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col w-[98vw] p-5 mt-24">
      <div className="flex flex-wrap w-full mt-20">
        <div className="border border-gray-300 mb-12 p-4 rounded-lg w-[29%] ml-[5%] relative">
          <span
            className="absolute top-4 right-4 cursor-pointer w-20 text-center bg-green-500 rounded-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Verified{isHovered && <SignaturePopup />}
          </span>
          <div className="grid gap-2 mt-4">
            <div>
              <p>Passport ID</p>
              <h4 className="text-lg">{batteryData?.["Passport ID"]}</h4>
            </div>
            <div>
              <p>Model Number</p>
              <h4 className="text-lg">{batteryData?.ModelNumber}</h4>
            </div>
            <div>
              <p>Serial Number</p>
              <h4 className="text-lg">{batteryData?.SerialNumber}</h4>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-8 ml-[5%]">
          <img src="/src/assets/ev_battery.png" alt="EV Battery" className="max-w-full h-auto" />
          <div className="flex flex-col items-center">
            <p><strong>Economic operator</strong></p>
            <img src="/src/assets/N2AT.png" alt="N2AT Logo" className="max-w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="w-full px-5 py-24">
        <Link to="/home" className="text-gray-600 text-lg hover:text-green-600">
          <span>←</span> Back to summary
        </Link>

        <div className="mt-2 border border-gray-300 rounded-lg">
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 text-green-700 py-2 px-4 transition-all duration-300 ${activeTab === tab.id ? "bg-green-500 text-white" : "bg-transparent"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="border border-gray-300 rounded-lg p-4 mt-4">
          {renderContent(activeTab)}
        </div>
      </div>
    </div>
  );
};

export default PassportDetails;