import React from "react";
// import "./CircularityContent.css";
import PieChartComponent2 from "../components/PieChartComponent2";

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

const CircularityContent: React.FC = () => {
  return (
    <div className="supply-content">
      <div className="header">
        <h2>Circularity</h2>
        <p>Circularity of the battery</p>
      </div>
      <hr />
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

export default CircularityContent;
