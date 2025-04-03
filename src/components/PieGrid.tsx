// PieGrid.tsx
import React from "react";
import PieChartComponent2 from "../components/PieChartComponent2";
import "../assets/css/PieGrid.css";

const nickelData = [
  { name: "Post Consumer Share", value: 7, color: "#28a745" },
  { name: "Pre Consumer Share", value: 17, color: "#2C3E50" },
  { name: "Primary Material", value: 76, color: "#BDC3C7" },
];

const cobaltData = [
  { name: "Post Consumer Share", value: 9, color: "#28a745" },
  { name: "Pre Consumer Share", value: 10, color: "#2C3E50" },
  { name: "Primary Material", value: 81, color: "#BDC3C7" },
];

const lithiumData = [
  { name: "Post Consumer Share", value: 10, color: "#28a745" },
  { name: "Pre Consumer Share", value: 14, color: "#2C3E50" },
  { name: "Primary Material", value: 76, color: "#BDC3C7" },
];

const leadData = [
  { name: "Post Consumer Share", value: 6, color: "#28a745" },
  { name: "Pre Consumer Share", value: 11, color: "#2C3E50" },
  { name: "Primary Material", value: 83, color: "#BDC3C7" },
];

const PieGrid: React.FC = () => {
  return (
    <div>
      <h3 className="recycle">
        Recycled Content Share{" "}
        <span className="unverified-badge">Unverified</span>
      </h3>
      <div className="pie-grid">
        <div className="pie-item">
          <PieChartComponent2 title="NICKEL" data={nickelData} />
        </div>
        <div className="pie-item">
          <PieChartComponent2 title="COBALT" data={cobaltData} />
        </div>
        <div className="pie-item">
          <PieChartComponent2 title="LITHIUM" data={lithiumData} />
        </div>
        <div className="pie-item">
          <PieChartComponent2 title="LEAD" data={leadData} />
        </div>
      </div>
    </div>
  );
};

export default PieGrid;
