
// import React from "react";
// import { useLocation } from "react-router-dom";
// import "../assets/css/CircularityContent.css";
// import PieChartComponent2 from "../components/PieChartComponent2";

// const CircularityContent: React.FC = () => {
//   const location = useLocation();
//   const { materialCompositionData } = location.state || {};

//   // fallback if data isn't available
//   const nickelData = materialCompositionData?.nickel || [];
//   const cobaltData = materialCompositionData?.cobalt || [];
//   const lithiumData = materialCompositionData?.lithium || [];
//   const leadData = materialCompositionData?.lead || [];

//   return (
//     <div className="supply-content">
//       <div className="header">
//         <h2>Circularity</h2>
//         <p>Circularity of the battery</p>
//       </div>
//       <hr />
//       <div className="circularity-details">
//         <div className="circularity-item">
//           <h4 className="circularity-label">Separate collection</h4>
//           <p>Ensure that the waste battery is disposed of according to material composition</p>
//         </div>
//         <div className="circularity-item">
//           <h4 className="circularity-label">End of life information: Waste prevention</h4>
//           <p>Don't dispose battery at normal waste</p>
//         </div>
//       </div>
//       <h3 className="recycle">
//         Recycled Content Share{" "}
//         <span className="unverified-badge">Unverified</span>
//       </h3>
//       <div className="pie-grid">
//         <div className="pie-item">
//           <PieChartComponent2 title="NICKEL" data={nickelData} />
//         </div>
//         <div className="pie-item">
//           <PieChartComponent2 title="COBALT" data={cobaltData} />
//         </div>
//         <div className="pie-item">
//           <PieChartComponent2 title="LITHIUM" data={lithiumData} />
//         </div>
//         <div className="pie-item">
//           <PieChartComponent2 title="LEAD" data={leadData} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CircularityContent;

import React from "react";
import { useLocation } from "react-router-dom";
import PieChartComponent2 from "../components/PieChartComponent2";

const CircularityContent: React.FC = () => {
  const location = useLocation();
  const { materialCompositionData } = location.state || {};

  const nickelData = materialCompositionData?.nickel || [];
  const cobaltData = materialCompositionData?.cobalt || [];
  const lithiumData = materialCompositionData?.lithium || [];
  const leadData = materialCompositionData?.lead || [];

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Circularity</h2>
        <p className="text-gray-700">Circularity of the battery</p>
      </div>
      <hr className="mb-6" />

      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(150px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(120px,1fr))]">
        <div className="p-2 mb-4">
          <h4 className="text-[15px] font-bold text-gray-500">Separate collection</h4>
          <p className="text-black font-bold text-[16px]">
            Ensure that the waste battery is disposed of according to material composition
          </p>
        </div>
        <div className="p-2 mb-4">
          <h4 className="text-[15px] font-bold text-gray-500">End of life information: Waste prevention</h4>
          <p className="text-black font-bold text-[16px]">
            Don't dispose of battery in normal waste
          </p>
        </div>
      </div>

      <h3 className="mt-12 text-xl font-semibold">
        Recycled Content Share{" "}
        <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-yellow-500 rounded">
          Unverified
        </span>
      </h3>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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