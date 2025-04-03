// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./MaterialCompositionContent.css";

// const MaterialCompositionContent: React.FC = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="material">
//       <div className="header">
//         <h2>Materials composition</h2>
//         <p>Material composition of the battery</p>
//       </div>
//       <hr />
//       {/* <div style={{ textAlign: "center", marginTop: "50px" }}>
//         <span
//           role="img"
//           aria-label="lock"
//           style={{ fontSize: "3em", color: "red" }}
//         >
//           🔒
//         </span>
//         <p style={{ marginTop: "20px" }}>
//           Information in this section requires a privileged access. Please
//           authenticate to view.
//         </p>
//         <button
//           onClick={() => navigate("/signin")}
//           style={{
//             marginTop: "20px",
//             padding: "10px 20px",
//             backgroundColor: "#4CAF50",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         >
//           Authenticate →
//         </button>
//       </div> */}

//     </div>
//   );
// };

// export default MaterialCompositionContent;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./MaterialCompositionContent.css";

// const MaterialCompositionContent: React.FC = () => {
//   const navigate = useNavigate();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleAuthentication = () => {
//     // Simulate successful authentication
//     setIsAuthenticated(true);
//   };

//   return (
//     <div className="material">
//       <div className="header">
//         <h2>Materials Composition</h2>
//         <p>Material composition of the battery</p>
//       </div>
//       <hr />

//       {isAuthenticated ? (
//         // Show the EV Battery Composition Table after authentication
//         <div className="table-container">
//           <table className="composition-table">
//             <thead>
//               <tr>
//                 <th>Component</th>
//                 <th>Material</th>
//                 <th>Key Elements</th>
//                 <th>Weight (kg) per 100 kWh</th>
//                 <th>Percentage (%)</th>
//                 <th>Hazardous Substances</th>
//                 <th>Critical Raw Materials</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Battery Chemistry</td>
//                 <td>NMC (Lithium Nickel Manganese Cobalt Oxide)</td>
//                 <td>Nickel (Ni), Manganese (Mn), Cobalt (Co), Lithium (Li)</td>
//                 <td>—</td>
//                 <td>—</td>
//                 <td>NMC contains cobalt, which has toxicity risks</td>
//                 <td>Nickel, Cobalt, Lithium</td>
//               </tr>
//               <tr>
//                 <td>Cathode</td>
//                 <td>NMC or LFP</td>
//                 <td>Nickel (Ni), Cobalt (Co), Manganese (Mn), Lithium (Li), Iron (Fe), Phosphate (PO₄³⁻)</td>
//                 <td>35–40 kg</td>
//                 <td>35–40%</td>
//                 <td>—</td>
//                 <td>Nickel, Cobalt, Lithium</td>
//               </tr>
//               <tr>
//                 <td>Anode</td>
//                 <td>Graphite (Natural/Synthetic) + Lithium</td>
//                 <td>Carbon (C), Lithium (Li), Silicon (Si)</td>
//                 <td>15–20 kg</td>
//                 <td>15–20%</td>
//                 <td>Acute Toxicity Risk: Substance ID 37-70-2</td>
//                 <td>Lithium (ID: 7439-93-2)</td>
//               </tr>
//               <tr>
//                 <td>Electrolyte</td>
//                 <td>Lithium Hexafluorophosphate (LiPF₆) + Solvents</td>
//                 <td>Lithium (Li), Fluorine (F), Organic Compounds</td>
//                 <td>10–15 kg</td>
//                 <td>10–15%</td>
//                 <td>Highly Flammable and Toxic</td>
//                 <td>Lithium</td>
//               </tr>
// <tr>
//   <td>Separator</td>
//   <td>Polyethylene (PE) / Polypropylene (PP)</td>
//   <td>Polymer-based materials</td>
//   <td>2–5 kg</td>
//   <td>2–5%</td>
//   <td>—</td>
//   <td>—</td>
// </tr>
// <tr>
//   <td>Current Collectors</td>
//   <td>Copper (Anode) / Aluminum (Cathode)</td>
//   <td>Copper (Cu), Aluminum (Al)</td>
//   <td>10–15 kg</td>
//   <td>10–15%</td>
//   <td>—</td>
//   <td>Copper, Aluminum</td>
// </tr>
// <tr>
//   <td>Battery Casing</td>
//   <td>Aluminum or Steel</td>
//   <td>Aluminum (Al), Steel (Fe)</td>
//   <td>15–20 kg</td>
//   <td>15–20%</td>
//   <td>—</td>
//   <td>Aluminum, Steel</td>
// </tr>
// <tr>
//   <td>BMS & Wiring</td>
//   <td>Circuit boards, Sensors, Coolants</td>
//   <td>Silicon (Si), Copper (Cu), Plastic (Polymers)</td>
//   <td>5–8 kg</td>
//   <td>5–8%</td>
//   <td>—</td>
//   <td>Copper, Silicon</td>
// </tr>
// <tr>
//   <td>Cooling System</td>
//   <td>Liquid/Gas Coolants, Heat Pipes</td>
//   <td>Glycol, Water, Phase Change Materials (PCMs)</td>
//   <td>5–10 kg</td>
//   <td>5–10%</td>
//   <td>—</td>
//   <td>—</td>
// </tr>
// <tr>
//   <td>Busbars & Connectors</td>
//   <td>Copper/Aluminum Strips</td>
//   <td>Copper (Cu), Aluminum (Al)</td>
//   <td>3–5 kg</td>
//   <td>3–5%</td>
//   <td>—</td>
//   <td>Copper, Aluminum</td>
// </tr>
// <tr>
//   <td>Insulation Materials</td>
//   <td>Thermal Barriers, Fireproof Layers</td>
//   <td>Ceramic, Mica, Silica-based compounds</td>
//   <td>1–3 kg</td>
//   <td>1–3%</td>
//   <td>—</td>
//   <td>—</td>
// </tr>
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         // Show authentication message before login
// <div className="auth-container">
//   <span role="img" aria-label="lock" className="lock-icon">🔒</span>
//   <p className="auth-message">
//     Information in this section requires privileged access. Please authenticate to view.
//   </p>
//   <button onClick={handleAuthentication} className="auth-button">
//     Authenticate →
//   </button>
// </div>
//       )}
//     </div>
//   );
// };

// export default MaterialCompositionContent;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  getFilteredRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table.tsx";
import { Input } from "../components/ui/input";
import "../assets/css/MaterialCompositionContent.css";

// Define table data structure
interface BatteryComponent {
  component: string;
  material: string;
  keyElements: string;
  weight: string;
  percentage: string;
  hazardousSubstances: string;
  criticalRawMaterials: string;
}

// Table Data
const batteryData: BatteryComponent[] = [
  {
    component: "Cathode",
    material: "LFP",
    keyElements: "Lithium (Li), Iron (Fe), Phosphate (PO₄³⁻)",
    weight: "35–40 kg",
    percentage: "35–40%",
    hazardousSubstances: "—",
    criticalRawMaterials: "Nickel, Cobalt, Lithium",
  },
  {
    component: "Anode",
    material: "Graphite (Natural/Synthetic) + Lithium",
    keyElements: "Carbon (C), Lithium (Li), Silicon (Si)",
    weight: "15–20 kg",
    percentage: "15–20%",
    hazardousSubstances: "Acute Toxicity Risk: Substance ID 37-70-2",
    criticalRawMaterials: "Lithium (ID: 7439-93-2)",
  },
  {
    component: "Electrolyte",
    material: "Lithium Hexafluorophosphate (LiPF₆) + Solvents",
    keyElements: "Lithium (Li), Fluorine (F), Organic Compounds",
    weight: "10–15 kg",
    percentage: "10–15%",
    hazardousSubstances: "Highly Flammable and Toxic",
    criticalRawMaterials: "Lithium",
  },
  {
    component: "Separator",
    material: "Polyethylene (PE) / Polypropylene (PP)",
    keyElements: "Polymer-based materials",
    weight: "2–5 kg",
    percentage: "2–5%",
    hazardousSubstances: "—",
    criticalRawMaterials: "—",
  },
  {
    component: "Current Collectors",
    material: "Copper (Anode) / Aluminum (Cathode)",
    keyElements: "Copper (Cu), Aluminum (Al)",
    weight: "10–15 kg",
    percentage: "10–15%",
    hazardousSubstances: "—",
    criticalRawMaterials: "Copper, Aluminum",
  },
  {
    component: "Battery Casing",
    material: "Aluminum or Steel",
    keyElements: "Aluminum (Al), Steel (Fe)",
    weight: "15–20 kg",
    percentage: "15–20%",
    hazardousSubstances: "—",
    criticalRawMaterials: "Aluminum, Steel",
  },
  {
    component: "BMS & Wiring",
    material: "Circuit boards, Sensors, Coolants",
    keyElements: "Silicon (Si), Copper (Cu), Plastic (Polymers)",
    weight: "5–8 kg",
    percentage: "5–8%",
    hazardousSubstances: "—",
    criticalRawMaterials: "Copper, Silicon",
  },
  {
    component: "Cooling System",
    material: "Liquid/Gas Coolants, Heat Pipes",
    keyElements: "Glycol, Water, Phase Change Materials (PCMs)",
    weight: "5–10 kg",
    percentage: "5–10%",
    hazardousSubstances: "—",
    criticalRawMaterials: "—",
  },
  {
    component: "Busbars & Connectors",
    material: "Copper/Aluminum Strips",
    keyElements: "Copper (Cu), Aluminum (Al)",
    weight: "3–5 kg",
    percentage: "3–5%",
    hazardousSubstances: "—",
    criticalRawMaterials: "Copper, Aluminum",
  },
  {
    component: "Insulation Materials",
    material: "Thermal Barriers, Fireproof Layers",
    keyElements: "Ceramic, Mica, Silica-based compounds",
    weight: "1–3 kg",
    percentage: "1–3%",
    hazardousSubstances: "—",
    criticalRawMaterials: "—",
  },
];

// Column Definitions
const columns: ColumnDef<BatteryComponent>[] = [
  { accessorKey: "component", header: "Component" },
  { accessorKey: "material", header: "Material" },
  { accessorKey: "keyElements", header: "Key Elements" },
  { accessorKey: "weight", header: "Weight (kg)" },
  { accessorKey: "percentage", header: "Percentage (%)" },
  { accessorKey: "hazardousSubstances", header: "Hazardous Substances" },
  { accessorKey: "criticalRawMaterials", header: "Critical Raw Materials" },
];

const MaterialCompositionContent: React.FC = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [globalFilter, setGlobalFilter] = useState("");

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  const table = useReactTable({
    data: batteryData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <div className="material">
      <div className="header">
        <h2>Materials Composition</h2>
        <p>Material composition of the battery</p>
      </div>
      <hr />
      {isAuthenticated && (
        <Input
          placeholder="🔍 Search components..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="search"
        />
      )}
      {isAuthenticated ? (
        <div className="overflow-x-auto">
          <Table className="border border-gray-300 rounded-lg">
            <TableHeader className="sticky top-0 bg-gray-100">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="bg-gray-200">
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id} className="px-4 py-2 font-bold">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length > 0 ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} className="hover:bg-gray-100">
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="px-4 py-2">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="text-center py-4"
                  >
                    No results found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      ) : (
        // <div className="flex flex-col items-center mt-8">
        //   <span role="img" aria-label="lock" className="text-5xl text-red-500">
        //     🔒
        //   </span>
        //   <p className="mt-4 text-gray-600 text-lg">
        //     Information in this section requires privileged access. Please
        //     authenticate to view.
        //   </p>
        //   <Button
        //     onClick={handleAuthentication}
        //     className="mt-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
        //   >
        //     Authenticate →
        //   </Button>
        // </div>
        <div className="auth-container">
          <span role="img" aria-label="lock" className="lock-icon">
            🔒
          </span>
          <p className="auth-message">
            Information in this section requires privileged access. Please
            authenticate to view.
          </p>
          <button onClick={handleAuthentication} className="auth-button">
            Authenticate →
          </button>
        </div>
      )}
    </div>
  );
};

export default MaterialCompositionContent;
