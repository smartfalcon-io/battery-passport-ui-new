import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "../assets/css/SummaryReport.css";

const data = [
  { name: "Raw Material Extraction", value: 65, color: "#4CAF50" },
  { name: "Main Production", value: 21.9, color: "#FF9800" },
  { name: "Distribution", value: 7.3, color: "#F44336" },
  { name: "Recycling", value: 5.8, color: "#03A9F4" },
];

const SummaryReport: React.FC = () => {
  return (
    <div className="summary-report">
      <h3>Summary Report</h3>
      <ResponsiveContainer width="50%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SummaryReport;