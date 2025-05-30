import React from "react";
import PieChartComponent from "./PieChartComponent";
import "./CarbonFootprintContent.css";

const CarbonFootprintContent: React.FC = () => {
  return (
    <div className="carbon-footprint">
      <div className="header">
        <h2>Carbon footprint</h2>
        <p>CO2 footprint generated by the battery</p>
      </div>
      <hr />
      <div className="carbon-details">
        <div className="carbon-item">
          <p className="carbon-label">
            Amount<span className="verified-badge2">Verified</span>
          </p>
          <p>137.00gCO₂e/kWh</p>
        </div>
        <div className="carbon-item">
          <PieChartComponent />
        </div>
        <div className="carbon-item">
          <p className="carbon-label">Performance class</p>
          <p>B</p>
        </div>
        <div className="carbon-item">
          <p className="carbon-label">CO2 study reference</p>
          <a href="#" className="carbon-link">
            External link <span className="link-icon">🔗</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarbonFootprintContent;
