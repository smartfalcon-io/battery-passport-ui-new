// GeneralContent.tsx
import React from "react";
import "../assets/css/PerformanceContent.css";

const GeneralContent: React.FC = () => {
  return (
    <div className="general">
      <div className="header">
        <h2>Performance</h2>
        <p>Battery performance information</p>
      </div>
      <hr />
      <div
        className="general-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div>
          <h4>Energy Density (Wh/kg)</h4>
          <p>250 Wh/kg</p>
        </div>
        <div>
          <h4>Power Density (W/kg) </h4>
          <p>900 W/kg</p>
        </div>
        <div>
          <h4>State of Health (SoH, %)</h4>
          <p>98%</p>
        </div>
        <div>
          <h4>State of Charge (SoC, %) </h4>
          <p>80%</p>
        </div>
        <div>
          <h4>Cycle Life (cycles) </h4>
          <p>2,500 cycles</p>
        </div>
        <div>
          <h4>Charging Time (0-80%) </h4>
          <p>30 minutes (fast charging)</p>
        </div>
        <div>
          <h4>Charging Time (0-100%) </h4>
          <p>1 hour</p>
        </div>
        <div>
          <h4>Fast Charging Capability </h4>
          <p>Yes, up to 250 kW</p>
        </div>
        <div>
          <h4>Max Discharge Rate (kW) </h4>
          <p>500 kW</p>
        </div>
        <div>
          <h4>Self-Discharge Rate (%/month)</h4>
          <p>~2%</p>
        </div>
        <div>
          <h4>Operating Temperature (°C)</h4>
          <p>-20°C to 60°C</p>
        </div>
        <div>
          <h4>Thermal Runaway Temp (°C) </h4>
          <p>~150°C</p>
        </div>
        <div>
          <h4>Cooling Mechanism </h4>
          <p>Liquid-cooled</p>
        </div>
        <div>
          <h4>BMS Protection Features </h4>
          <p>Overcharge, Short Circuit, Thermal</p>
        </div>
      </div>
    </div>
  );
};

export default GeneralContent;
