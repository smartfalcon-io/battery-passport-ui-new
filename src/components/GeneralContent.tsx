// GeneralContent.tsx
import React from "react";

const GeneralContent: React.FC = () => {
  return (
    <div>
      <h2>General</h2>
      <p>Generic information about the battery</p>
      <hr />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div>
          <strong>Name</strong>
          <p>EV-BAT095</p>
        </div>
        <div>
          <strong>Manufactured date</strong>
          <p>2023-09-05</p>
        </div>
        <div>
          <strong>Facility ID</strong>
          <p>
            Berlin{" "}
            <span role="img" aria-label="location">
              📍
            </span>
          </p>
        </div>
        <div>
          <strong>Manufactured by</strong>
          <p>Exide Batteries Auditor</p>
        </div>
        <div>
          <strong>Category</strong>
          <p>EV</p>
        </div>
        <div>
          <strong>Status</strong>
          <p>
            <span
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "green",
                marginRight: "5px",
              }}
            ></span>{" "}
            Original
          </p>
        </div>
        <div>
          <strong>Weight</strong>
          <p>499.00kg</p>
        </div>
      </div>
    </div>
  );
};

export default GeneralContent;
