// import React, { useState } from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import "./PieChartComponent.css";

// interface PieChartProps {
//   title: string;
//   data: { name: string; value: number; color: string }[];
// }

// // Custom label function to keep labels always visible
// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
// }: any) => {
//   const RADIAN = Math.PI / 180;
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor="middle"
//       dominantBaseline="central"
//       fontSize="12px"
//       fontWeight="bold"
//       style={{
//         pointerEvents: "none", // Prevents hover effect on text
//       }}
//     >
//       {`${(percent * 100).toFixed(1)}%`}
//     </text>
//   );
// };

// const PieChartComponent: React.FC<PieChartProps> = ({ title, data }) => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <div className="pie-chart-container">
//       <h3>{title}</h3>
//       <ResponsiveContainer width={300} height={250}>
//         <PieChart>
//           <Pie
//             data={data}
//             dataKey="value"
//             nameKey="name"
//             cx="50%"
//             cy="60%"
//             outerRadius={100}
//             label={renderCustomizedLabel}
//             labelLine={false}
//             isAnimationActive={false} // Prevents default hover animation
//             onMouseEnter={(_, index) => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             {data.map((entry, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={entry.color}
//                 fillOpacity={hoveredIndex === index ? 0.5 : 1} // Dimming effect
//                 style={{
//                   transition: "fill-opacity 0.3s ease-in-out",
//                 }}
//               />
//             ))}
//           </Pie>

//           <Tooltip
//             content={({ active, payload }) => {
//               if (active && payload && payload.length) {
//                 const backgroundColor = payload[0].payload.color; // Get color from data

//                 return (
//                   <div className="custom-tooltip" style={{ backgroundColor }}>
//                     <p className="tooltip-title">{payload[0].name}</p>
//                     <p className="tooltip-value">Value: {payload[0].value}</p>
//                   </div>
//                 );
//               }
//               return null;
//             }}
//           />
//           <Legend
//             verticalAlign="bottom"
//             align="center"
//             wrapperStyle={{
//               marginBottom: "-30px",
//               fontSize: "11px",
//               lineHeight: "1",
//             }}
//           />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default PieChartComponent;

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

interface PieChartProps {
  title: string;
  data: { name: string; value: number; color: string }[];
}

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

const PieChartComponent: React.FC<PieChartProps> = ({ title, data }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <div className="pie-chart-container">
      <h3>{title}</h3>
      <ResponsiveContainer width={300} height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="60%"
            outerRadius={100}
            label={renderCustomizedLabel}
            labelLine={false}
            isAnimationActive={false} // Enables animation
            animationDuration={800} // Sets animation duration
            onMouseEnter={(_, index) => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={(_, index) => handleClick(index)}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                fillOpacity={hoveredIndex === index ? 0.5 : 1}
                style={{
                  transition: "fill-opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
                  transform: selectedIndex === index ? "translate(5px, -5px)" : "translate(0, 0)"
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
            wrapperStyle={{ marginBottom: "-30px", fontSize: "11px", lineHeight: "1" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
