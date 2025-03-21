// import React, { useState } from "react";
// import GeneralContent from "./GeneralContent";
// import MaterialCompositionContent from "./MaterialCompositionContent"; // Import MaterialCompositionContent

// // Interfaces
// interface Tab {
//   id: string;
//   label: string;
// }

// // Components
// const PerformanceContent: React.FC = () => <div>Performance Content</div>;
// const ComplianceContent: React.FC = () => <div>Compliance Content</div>;
// const CircularityContent: React.FC = () => <div>Circularity Content</div>;
// const SupplyChainContent: React.FC = () => <div>Supply Chain Content</div>;
// const CarbonFootprintContent: React.FC = () => (
//   <div>Carbon Footprint Content</div>
// );

// const PassportDetails: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<string>("general");

//   const tabs: Tab[] = [
//     { id: "general", label: "General" },
//     { id: "material-composition", label: "Material Composition" },
//     { id: "performance", label: "Performance" },
//     { id: "compliance", label: "Compliance" },
//     { id: "supply-chain", label: "Supply Chain" },
//     { id: "circularity", label: "Circularity" },
//     { id: "carbon-footprint", label: "Carbon Footprint" },
//   ];

//   const renderContent = (tabId: string) => {
//     switch (tabId) {
//       case "general":
//         return <GeneralContent />;
//       case "material-composition":
//         return <MaterialCompositionContent />;
//       case "performance":
//         return <PerformanceContent />;
//       case "compliance":
//         return <ComplianceContent />;
//       case "supply-chain":
//         return <SupplyChainContent />;
//       case "circularity":
//         return <CircularityContent />;
//       case "carbon-footprint":
//         return <CarbonFootprintContent />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="passport-sections">
//       <div style={{ display: "flex", borderBottom: "1px solid #ccc" }}>
//         {tabs.map((tab) => (
//           <button
//             className="btn"
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             style={{
//               // padding: "10px 20px",
//               // border: "none",
//               background: activeTab === tab.id ? "#008080" : "transparent",
//               color: activeTab === tab.id ? "white" : "black",
//               cursor: "pointer",
//             }}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>
//       <div style={{ padding: "20px" }}>{renderContent(activeTab)}</div>
//     </div>
//   );
// };

// export default PassportDetails;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import GeneralContent from "./GeneralContent";
import MaterialCompositionContent from "./MaterialCompositionContent";
import ComplianceContent from "./ComplianceContent";
import PerformanceContent from "./PerformanceContent";
import SupplyChainContent from "./SupplyChainContent";
import CircularityContent from "./CircularityContent";
import CarbonFootprintContent from "./CarbonFootprintContent";
import "./PassportDetails.css";

// Interfaces
interface Tab {
  id: string;
  label: string;
}

// Components
// const PerformanceContent: React.FC = () => <div>Performance Content</div>;
// const CircularityContent: React.FC = () => <div>Circularity Content</div>;
// const SupplyChainContent: React.FC = () => <div>Supply Chain Content</div>;
// const CarbonFootprintContent: React.FC = () => (
//   <div>Carbon Footprint Content</div>
// );

const PassportDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("general");

  const tabs: Tab[] = [
    { id: "general", label: "General" },
    { id: "material-composition", label: "Material Composition" },
    { id: "performance", label: "Performance" },
    { id: "compliance", label: "Compliance" },
    { id: "supply-chain", label: "Supply Chain" },
    { id: "circularity", label: "Circularity" },
    { id: "carbon-footprint", label: "Carbon Footprint" },
  ];

  const renderContent = (tabId: string) => {
    switch (tabId) {
      case "general":
        return <GeneralContent />;
      case "material-composition":
        return <MaterialCompositionContent />;
      case "performance":
        return <PerformanceContent />;
      case "compliance":
        return <ComplianceContent />;
      case "supply-chain":
        return <SupplyChainContent />;
      case "circularity":
        return <CircularityContent />;
      case "carbon-footprint":
        return <CarbonFootprintContent />;
      default:
        return null;
    }
  };

  return (
    <div className="passport-sections">
      <div className="first-section">
        <div className="passport-card">
          <span className="verified-badge">Verified</span>
          <div className="passport-grid">
            <div className="passport-item">
              <p>Passport ID</p>
              <h4 className="passport-value">
                did:web:acme.battery.pass:0226151e-949c-d067-8ef3-162431e28976
              </h4>
            </div>
            <div className="passport-item">
              <p>Model Number</p>
              <h4 className="passport-value">M-41698615</h4>
            </div>
            <div className="passport-item">
              <p>Serial Number</p>
              <h4 className="passport-value">992356610548948</h4>
            </div>
          </div>
        </div>
        <div className="images">
          <img src="src/assets/ev_battery.png" alt="EV Battery" />
          <div className="economic-operator-section2">
            <p>
              <strong>Economic operator</strong>
            </p>
            <div className="economic-operator">
              <img src="src/assets/N2AT.png" alt="N2AT Logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="second-section">
        <Link to="/" className="back">
          {" "}
          <span>&#8592;</span> Back to summary
        </Link>
        <div className="tabs-container">
          <div className="passport-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="passport-content">{renderContent(activeTab)}</div>
      </div>
    </div>
  );
};

export default PassportDetails;
