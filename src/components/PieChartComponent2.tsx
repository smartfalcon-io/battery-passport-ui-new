
// import React, { useState } from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import "../assets/css/PieChartComponent.css";

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
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.55;
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
//       style={{
//         pointerEvents: "none", 
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
//             innerRadius={60}
//             label={renderCustomizedLabel}
//             labelLine={false}
//             isAnimationActive={true} // Prevents default hover animation
//             key={JSON.stringify(data)} // Force re-render on data change

//             onMouseEnter={(_, index) => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             className="piechart"
          
//           >
//             {data.map((entry, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={entry.color}
//                 fillOpacity={hoveredIndex === index ? 0.5 : 1} // Dimming effect
//                 style={{
//                   transition: "fill-opacity 0.4s ease-in-out",
//                   filter: "drop-shadow(3px 3px 8px rgba(0, 0, 0, 0.5))", // Shadow for 3D effect
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
      style={{ pointerEvents: "none" }}
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

const PieChartComponent2: React.FC<PieChartProps> = ({ title, data }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[600px] mx-auto bg-transparent border-none">
      <h3 className="mb-[-30px] text-[15px] text-center text-gray-500">{title}</h3>
      <ResponsiveContainer width={300} height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="60%"
            outerRadius={100}
            innerRadius={60}
            label={renderCustomizedLabel}
            labelLine={false}
            isAnimationActive={true}
            key={JSON.stringify(data)}
            onMouseEnter={(_, index) => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="hover:cursor-pointer"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                fillOpacity={hoveredIndex === index ? 0.5 : 1}
                style={{
                  transition: "fill-opacity 0.4s ease-in-out",
                  filter: "drop-shadow(3px 3px 8px rgba(0, 0, 0, 0.5))",
                }}
              />
            ))}
          </Pie>

          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const backgroundColor = payload[0].payload.color;

                return (
                  <div
                    className="text-white text-center font-bold text-[12px] p-2 rounded"
                    style={{ backgroundColor }}
                  >
                    <p>{payload[0].name}</p>
                    <p>Value: {payload[0].value}</p>
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

export default PieChartComponent2;
