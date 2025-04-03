import React from "react";
import "../assets/css/SupplyChainContent.css";

const SupplyChainContent: React.FC = () => {
  return (
    <div className="supply-content">
      <div className="header">
        <h2>SupplyChainContent</h2>
      <p>Regulatory supply of the battery</p>
      </div>
      <hr />
      <div className="supply-details">
        <div className="supply-item">
          <p className="supply-label">Susutainability report</p>
          <a href="#" className="supply-link">
            External link <span className="link-icon">🔗</span>
          </a>
        </div>
        <div className="supply-item">
          <p className="supply-label">Due diligence report</p>
          <a href="#" className="supply-link">
            External link <span className="link-icon">🔗</span>
          </a>
        </div>
        <div className="supply-item">
          <p className="supply-label">Third party audit</p>
          <a href="#" className="supply-link">
            External link <span className="link-icon">🔗</span>
          </a>
        </div>
        <div className="supply-item">
          <p className="supply-label">Taxonomy report</p>
          <a href="#" className="supply-link">
            External link <span className="link-icon">🔗</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainContent;
