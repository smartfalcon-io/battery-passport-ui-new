import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./PieChartComponent.css";

const carbonFootprintData = [
  { name: "Recycling", value: 5.8, color: "#6c757d" },
  { name: "Distribution", value: 7.3, color: "#ffc107" },
  { name: "Main Production", value: 21.9, color: "#dc3545" },
  { name: "Raw Material Extraction", value: 65, color: "#28a745" },
];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize="12px"
      fontWeight="bold"
      style={{ pointerEvents: "none" }}
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

const PieChartComponent: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <div className="pie-chart-container">
      <h3>Carbon Footprint</h3> {/* Hardcoded title */}
      <ResponsiveContainer width={300} height={250}>
        <PieChart>
          <Pie
            data={carbonFootprintData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="60%"
            outerRadius={100}
            label={renderCustomizedLabel}
            labelLine={false}
            isAnimationActive={false}
            // animationDuration={800}
            onMouseEnter={(_, index) => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={(_, index) => handleClick(index)}
          >
            {carbonFootprintData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                style={{
                  // transition: "fill-opacity 0.3s ease-in-out",
                  fillOpacity: hoveredIndex === index ? 0.7 : 1,
                  transition:
                    "fillOpacity 0.3s ease-in-out, transform 0.3s ease-in-out",
                  transform:
                    selectedIndex === index
                      ? "translate(5px, -5px)"
                      : "translate(0, 0)",
                }}
              />
            ))}
          </Pie>

          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const backgroundColor = payload[0].payload.color;
                return (
                  <div className="custom-tooltip" style={{ backgroundColor }}>
                    <p className="tooltip-title">{payload[0].name}</p>
                    <p className="tooltip-value">Value: {payload[0].value}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Legend
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{
              marginBottom: "-30px",
              fontSize: "11px",
              lineHeight: "1",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
