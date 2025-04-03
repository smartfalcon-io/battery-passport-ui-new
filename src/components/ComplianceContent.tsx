// // ComplianceContent.tsx
import React from "react";
import "../assets/css/ComplianceContent.css";

const SupplyChainContent: React.FC = () => {
  return (
    <div className="compliance-content">
      <div className="header">
        <h2>Compliance</h2>
        <p>Regulatory compliance of the battery</p>
      </div>
      <hr />
      <div className="compliance-details">
        <div className="compliance-item">
          <p className="compliance-label">Conformity assessment</p>
          <a href="#" className="compliance-link">
            External link <span className="link-icon">🔗</span>
          </a>
        </div>
        <div className="compliance-item">
          <p className="compliance-label">Declaration of conformity ID</p>
          <a href="#" className="compliance-link">
            External link <span className="link-icon">🔗</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainContent;
