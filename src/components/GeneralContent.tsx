// // GeneralContent.tsx
// import React from "react";
// import "../assets/css/GeneralContent.css";

// const GeneralContent: React.FC = () => {
//   return (
//     <div className="general">
//       <div className="header">
//         <h2>General</h2>
//         <p>Generic information about the battery</p>
//       </div>
//       <hr />
//       <div
//         className="general-grid"
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "20px",
//           marginTop: "20px",
//         }}
//       >
//         <div>
//           <h4>Name</h4>
//           <p>EV-BAT095</p>
//         </div>
//         <div>
//           <h4>Manufactured date</h4>
//           <p>2023-09-05</p>
//         </div>
//         <div>
//           <h4>Facility ID</h4>
//           <p>
//             Berlin{" "}
//             <span role="img" aria-label="location">
//               📍
//             </span>
//           </p>
//         </div>
//         <div>
//           <h4>Manufactured by</h4>
//           <p>Exide Batteries Auditor</p>
//         </div>
//         <div>
//           <h4>Category</h4>
//           <p>EV</p>
//         </div>
//         <div>
//           <h4>Status</h4>
//           <p>
//             <span
//               style={{
//                 display: "inline-block",
//                 width: "10px",
//                 height: "10px",
//                 borderRadius: "50%",
//                 backgroundColor: "green",
//                 marginRight: "5px",
//               }}
//             ></span>{" "}
//             Original
//           </p>
//         </div>
//         <div>
//           <h4>Weight</h4>
//           <p>499.00kg</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GeneralContent;




import React from "react";
import "../assets/css/GeneralContent.css";
import { useLocation } from "react-router-dom";


const GeneralContent: React.FC= () => {

  const location = useLocation();
  const {batteryData} = location.state || {};

  

  return (
    <div className="general">
      <div className="header">
        <h2>General</h2>
        <p>Generic information about the battery</p>
      </div>
      <hr />
      <div
        className="general-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div>
          <h4>Name</h4>
          <p>{batteryData?.Name}</p>
        </div>
        <div>
          <h4>Manufactured date</h4>
          <p>{batteryData?.ManufacturedDate}</p>
        </div>
        <div>
          <h4>Facility ID</h4>
          <p>
            {batteryData?.facilityId}{" "}
            <span role="img" aria-label="location">
              📍
            </span>
          </p>
        </div>
        <div>
          <h4>Manufactured by</h4>
          <p>{batteryData?.ManufacturedBy}</p>
        </div>
        <div>
          <h4>Category</h4>
          <p>{batteryData?.Category}</p>
        </div>
        <div>
          <h4>Status</h4>
          <p>
            <span
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: batteryData?.Status === "Damaged" ? "red" : "green",
                marginRight: "5px",
              }}
            ></span>{" "}
            {batteryData?.Status}
          </p>
        </div>
        <div>
          <h4>Weight</h4>
          <p>{batteryData?.weight}kg</p>
        </div>
      </div>
    </div>
  );
};

export default GeneralContent;
