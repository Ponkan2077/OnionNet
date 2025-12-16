import React, { useState } from 'react';
import './cards.css';

// Reusable Metric Card Component
export const MetricCard = ({ 
  title = "cards", 
  value = 0, 
  unit = "", 
  change = 0, 
  compareText = "vs last week" 
}) => {
  const isPositive = change >= 0;
  
  return (
    <div className="metric-card">
      <div className="metric-card-container">
        <div>
          <h2 className="metric-card-title">{title}</h2>
          <p className="metric-card-value">
            {value}{unit}
          </p>
        </div>
        
        <div className="metric-card-change-container">
          <span className={`metric-card-change ${isPositive ? 'positive' : 'negative'}`}>
            {isPositive ? '+' : ''}{change}%
          </span>
          <span className="metric-card-compare">{compareText}</span>
        </div>
      </div>
    </div>
  );
};
