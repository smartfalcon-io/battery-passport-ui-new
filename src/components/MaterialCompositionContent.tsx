
import React from "react";
import "./MaterialCompositionContent.css"

const MaterialCompositionContent: React.FC = () => {
  return (
    <div className="material">
      <div className="header">
      <h2>Materials composition</h2>
      <p>Material composition of the battery</p>
      </div>
      <hr />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <span
          role="img"
          aria-label="lock"
          style={{ fontSize: "3em", color: "red" }}
        >
          🔒
        </span>
        <p style={{ marginTop: "20px" }}>
          Information in this section requires a privileged access. Please
          authenticate to view.
        </p>
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Authenticate →
        </button>
      </div>
    </div>
  );
};

export default MaterialCompositionContent;
