import React from "react";
import { Link } from "react-router-dom";
import PieChartComponent from "../components/PieChartComponent";
import PieGrid from "./PieGrid";

import "./Home.css";

const Home: React.FC = () => {
  const carbonFootprintData = [
    { name: "Recycling", value: 5.8, color: "#6c757d" },
    { name: "Distribution", value: 7.3, color: "#ffc107" },
    { name: "Main Production", value: 21.9, color: "#dc3545" },
    { name: "Raw Material Extraction", value: 65, color: "#28a745" },
  ];

  return (
    <section className="home">
      {/* Battery Passport Section */}
      <div className="card">
        <div className="content-container">
          <section className="battery-passport-section">
            <div className="battery-passport">
              <div className="passport-header">
                <div>
                  <p className="passport-id">Passport ID:</p>
                  <p className="passport-id-value">
                    did:web:acme.battery.pass:0226151e-949c-d067-8ef3-162431e28976
                  </p>
                </div>
                <div className="header-right">
                  <div className="verified-badge">Verified</div>
                </div>
              </div>
              <hr className="hr-separator" />
              <div className="info-grid">
                <div className="info-item">
                  <p>Model Number</p>
                  <p className="info-value">M-41698615</p>
                </div>
                <div className="info-item">
                  <p>Serial Number</p>
                  <p className="info-value">992356610548948</p>
                </div>
                <div className="info-item">
                  <p>Category</p>
                  <p className="info-value">EV</p>
                </div>
                <div className="info-item">
                  <p>Weight</p>
                  <p className="info-value">499.00kg</p>
                </div>
                <div className="info-item">
                  <p>Status</p>
                  <p className="status original">🟢 Original</p>
                </div>
                <div className="info-item">
                  <p>Manufactured date</p>
                  <p className="info-value">2023-09-05</p>
                </div>
                <div className="info-item">
                  <p>Manufactured by</p>
                  <p className="info-value">
                    Exide Batteries Auditor{" "}
                    <span className="location-icon">📍</span>
                  </p>
                </div>
              </div>
              <div className="economic-operator-section">
                <p>
                  <strong>Economic operator</strong>
                </p>
                <div className="economic-operator">
                  <img src="src/assets/N2AT.png" alt="N2AT Logo" />
                </div>
              </div>
            </div>
          </section>
          <div className="qr-section">
            <img
              src="src/assets/battery_qr-removebg-preview.png"
              alt="Relevant Image"
              className="right-image"
            />
            <Link to="/passport-details">
              <button className="btn">View more about this passport</button>
            </Link>
          </div>
        </div>
      </div>

      <section className="piechart">
        <div className="piechart-div">
          <div className="piechart-card">
            <div className="summary-report">
              <div className="summary-header">
                <h2>SUMMARY REPORT</h2>
              </div>
              <hr className="hr" />
              <h4>Original Power</h4>
              <br />
              <div className="carbonfootprint">
                <PieChartComponent />
              </div>
              {/* <h3 className="recycle">
                Recycled Content Share{" "}
                <span className="unverified-badge">Unverified</span>
              </h3> */}
            </div>
            <PieGrid />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
