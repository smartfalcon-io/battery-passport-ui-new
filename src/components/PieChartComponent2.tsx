// import React from "react";
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

// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
// }: //   index,
// //   name,
// any) => {
//   const RADIAN = Math.PI / 180;
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5; // Position inside the pie
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor="middle"
//       dominantBaseline="central"
//       fontSize="11px"
//       fontWeight="bold"
//       filter="url(#shadow)"
//     >
//       {`${(percent * 100).toFixed(1)}%`} {/* Display percentage */}
//     </text>
//   );
// };

// const PieChartComponent: React.FC<PieChartProps> = ({ title, data }) => {
//   return (
//     <div className="pie-chart-container">
//       <h3>{title}</h3>
//       <ResponsiveContainer width={300} height={250}>
//         <PieChart>
//           <defs>
//             <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
//               <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="black" />
//             </filter>
//           </defs>
        //   <Pie
        //     data={data}
        //     dataKey="value"
        //     nameKey="name"
        //     cx="50%"
        //     cy="60%"
        //     outerRadius={100}
        //     innerRadius={68}
        //     label={renderCustomizedLabel} /* Custom label function */
        //     labelLine={false} /* Removes default label lines */
        //   >
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={entry.color} />
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
import "../assets/css/PieChartComponent.css";

interface PieChartProps {
  title: string;
  data: { name: string; value: number; color: string }[];
}

// Custom label function to keep labels always visible
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.55;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize="11px"
      fontWeight="bold"
      style={{
        pointerEvents: "none", 
      }}
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

const PieChartComponent: React.FC<PieChartProps> = ({ title, data }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
            innerRadius={66}
            label={renderCustomizedLabel}
            labelLine={false}
            isAnimationActive={false} // Prevents default hover animation
            onMouseEnter={(_, index) => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                fillOpacity={hoveredIndex === index ? 0.5 : 1} // Dimming effect
                style={{
                  transition: "fill-opacity 0.3s ease-in-out",
                }}
              />
            ))}
          </Pie>

          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const backgroundColor = payload[0].payload.color; // Get color from data

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
