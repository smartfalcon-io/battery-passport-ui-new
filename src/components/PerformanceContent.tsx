// // GeneralContent.tsx
// import React from "react";
// import "../assets/css/PerformanceContent.css";

// const GeneralContent: React.FC = () => {
//   return (
//     <div className="general">
//       <div className="header">
//         <h2>Performance</h2>
//         <p>Battery performance information</p>
//       </div>
//       <hr />
//       <div
//         className="general-grid"
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(5, 1fr)",
//           gap: "20px",
//           marginTop: "20px",
//         }}
//       >
//         <div>
//           <h3>Energy Density (Wh/kg)</h3>
//           <p>250 Wh/kg</p>
//         </div>
//         <div>
//           <h4>Power Density (W/kg) </h4>
//           <p>900 W/kg</p>
//         </div>
//         <div>
//           <h4>State of Health (SoH, %)</h4>
//           <p>98%</p>
//         </div>
//         <div>
//           <h4>State of Charge (SoC, %) </h4>
//           <p>80%</p>
//         </div>
//         <div>
//           <h4>Cycle Life (cycles) </h4>
//           <p>2,500 cycles</p>
//         </div>
//         <div>
//           <h4>Charging Time (0-80%) </h4>
//           <p>30 minutes (fast charging)</p>
//         </div>
//         <div>
//           <h4>Charging Time (0-100%) </h4>
//           <p>1 hour</p>
//         </div>
//         <div>
//           <h4>Fast Charging Capability </h4>
//           <p>Yes, up to 250 kW</p>
//         </div>
//         <div>
//           <h4>Max Discharge Rate (kW) </h4>
//           <p>500 kW</p>
//         </div>
//         <div>
//           <h4>Self-Discharge Rate (%/month)</h4>
//           <p>~2%</p>
//         </div>
//         <div>
//           <h4>Operating Temperature (°C)</h4>
//           <p>-20°C to 60°C</p>
//         </div>
//         <div>
//           <h4>Thermal Runaway Temp (°C) </h4>
//           <p>~150°C</p>
//         </div>
//         <div>
//           <h4>Cooling Mechanism </h4>
//           <p>Liquid-cooled</p>
//         </div>
//         <div>
//           <h4>BMS Protection Features </h4>
//           <p>Overcharge, Short Circuit, Thermal</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GeneralContent;


import React from "react";

const GeneralContent: React.FC = () => {
  return (
    <div className="performance p-4">
      <div className="header mb-2">
        <h2 className="text-black text-base">Performance</h2>
        <p className="text-base">Battery performance information</p>
      </div>
      <hr className="my-2" />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-5">
        <div>
          <h3 className="font-bold">Energy Density (Wh/kg)</h3>
          <p>250 Wh/kg</p>
        </div>
        <div>
          <h3 className="font-bold">Power Density (W/kg)</h3>
          <p>900 W/kg</p>
        </div>
        <div>
          <h3 className="font-bold">State of Health (SoH, %)</h3>
          <p>98%</p>
        </div>
        <div>
          <h3 className="font-bold">State of Charge (SoC, %)</h3>
          <p>80%</p>
        </div>
        <div>
          <h3 className="font-bold">Cycle Life (cycles)</h3>
          <p>2,500 cycles</p>
        </div>
        <div>
          <h3 className="font-bold">Charging Time (0-80%)</h3>
          <p>30 minutes (fast charging)</p>
        </div>
        <div>
          <h3 className="font-bold">Charging Time (0-100%)</h3>
          <p>1 hour</p>
        </div>
        <div>
          <h3 className="font-bold">Fast Charging Capability</h3>
          <p>Yes, up to 250 kW</p>
        </div>
        <div>
          <h3 className="font-bold">Max Discharge Rate (kW)</h3>
          <p>500 kW</p>
        </div>
        <div>
          <h3 className="font-bold">Self-Discharge Rate (%/month)</h3>
          <p>~2%</p>
        </div>
        <div>
          <h3 className="font-bold">Operating Temperature (°C)</h3>
          <p>-20°C to 60°C</p>
        </div>
        <div>
          <h3 className="font-bold">Thermal Runaway Temp (°C)</h3>
          <p>~150°C</p>
        </div>
        <div>
          <h3 className="font-bold">Cooling Mechanism</h3>
          <p>Liquid-cooled</p>
        </div>
        <div>
          <h3 className="font-bold">BMS Protection Features</h3>
          <p>Overcharge, Short Circuit, Thermal</p>
        </div>
      </div>
    </div>
  );
};

export default GeneralContent;