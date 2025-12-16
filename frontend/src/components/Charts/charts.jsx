// IrrigationAnalytics.jsx
import React, { useState } from "react";
import LineChart from "./linechart";
import "./charts.css";

export default function IrrigationAnalytics() {
  const [activeTab, setActiveTab] = useState("Daily");
  
  // Sample data for different time periods
  const chartData = {
    Daily: [90, 40, 80, 35, 70, 65, 95, 75, 100, 60, 90],
    Weekly: [65, 75, 60, 80, 90, 85, 70, 95, 80, 75, 85],
    Monthly: [40, 50, 60, 70, 80, 75, 85, 90, 85, 80, 75]
  };

  return (
    <div className="analytics-card">
      <h3 className="analytics-title">Irrigation Analytics</h3>
      <p className="analytics-subtitle">Irrigation volume in the past 24 hours</p>

      <div className="tab-buttons">
        {["Daily", "Weekly", "Monthly"].map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Reusable Chart Component */}
      <LineChart 
        data={chartData[activeTab]}
        title={`${activeTab} Irrigation Volume`}
        subtitle="Gallons per hour"
        lineColor="#4285F4"
        fillColor="rgba(66, 133, 244, 0.15)"
        showPoints={true}
      />
    </div>
  );
}