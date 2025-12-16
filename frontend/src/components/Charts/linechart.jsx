// LineChart.jsx
import React from "react";
import "./charts.css";

const LineChart = ({ 
  data = [], 
  width = "100%", 
  height = 150, 
  viewBox = "0 0 320 150",
  lineColor = "#4285F4",
  fillColor = "rgba(66, 133, 244, 0.15)",
  strokeWidth = 2,
  gridLines = 4,
  title = "",
  subtitle = "",
  showGrid = true,
  showPoints = false,
  className = "",
  animate = false
}) => {
  // Normalize data to fit within chart area
  const normalizeData = (dataPoints) => {
    if (dataPoints.length === 0) return [];
    
    const maxValue = Math.max(...dataPoints);
    const minValue = Math.min(...dataPoints);
    const range = maxValue - minValue || 1;
    
    const chartHeight = 100; // SVG height minus padding
    const chartTopPadding = 30;
    
    return dataPoints.map((value, index) => {
      const x = (index / (dataPoints.length - 1)) * 300 + 10;
      const y = chartTopPadding + chartHeight - ((value - minValue) / range) * chartHeight;
      return { x, y, value };
    });
  };

  // Generate points string for polyline
  const generatePointsString = (normalizedData) => {
    return normalizedData.map(point => `${point.x},${point.y}`).join(" ");
  };

  // Generate grid lines with your dotted style
  const generateGridLines = () => {
    const lines = [];
    const chartHeight = 100;
    const topPadding = 30;
    
    for (let i = 0; i < gridLines; i++) {
      const y = topPadding + (chartHeight / (gridLines - 1)) * i;
      lines.push(
        <line 
          key={`grid-${i}`}
          x1="0" 
          y1={y} 
          x2="320" 
          y2={y} 
          className="grid-line" 
        />
      );
    }
    return lines;
  };

  // Generate data points (circles) if showPoints is true
  const generateDataPoints = (normalizedData) => {
    return normalizedData.map((point, index) => (
      <circle
        key={`point-${index}`}
        cx={point.x}
        cy={point.y}
        r="3"
        fill={lineColor}
        stroke="#fff"
        strokeWidth="1.5"
        className="data-point"
      />
    ));
  };

  // Generate y-axis labels
  const generateYAxisLabels = (dataPoints) => {
    if (dataPoints.length === 0) return [];
    
    const maxValue = Math.max(...dataPoints);
    const minValue = Math.min(...dataPoints);
    const labels = [];
    const chartHeight = 100;
    const topPadding = 30;
    
    for (let i = 0; i < gridLines; i++) {
      const y = topPadding + (chartHeight / (gridLines - 1)) * i;
      const value = maxValue - ((maxValue - minValue) / (gridLines - 1)) * i;
      labels.push(
        <text
          key={`label-${i}`}
          x="5"
          y={y - 5}
          textAnchor="start"
          fontSize="10"
          fill="#888"
          fontFamily="sans-serif"
        >
          {Math.round(value)}
        </text>
      );
    }
    return labels;
  };

  const normalizedData = normalizeData(data);
  const pointsString = generatePointsString(normalizedData);

  return (
    <div className={`chart-container ${className}`}>
      {title && <h4 className="chart-title">{title}</h4>}
      {subtitle && <p className="chart-subtitle">{subtitle}</p>}
      
      <svg 
        width={width} 
        height={height} 
        viewBox={viewBox}
        className="chart-svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Grid Lines */}
        {showGrid && generateGridLines()}
        
        {/* Y-axis labels */}
        {showGrid && data.length > 0 && generateYAxisLabels(data)}
        
        {/* Area under the line */}
        {normalizedData.length > 0 && (
          <polygon
            fill={fillColor}
            points={`${pointsString} 310,150 10,150`}
            className="chart-area"
          />
        )}
        
        {/* Line Chart */}
        {normalizedData.length > 0 && (
          <polyline
            fill="none"
            stroke={lineColor}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeLinecap="round"
            points={pointsString}
            className={`chart-line ${animate ? 'animated' : ''}`}
          />
        )}
        
        {/* Data Points */}
        {showPoints && normalizedData.length > 0 && generateDataPoints(normalizedData)}
        
        {/* No data message */}
        {normalizedData.length === 0 && (
          <text x="160" y="75" textAnchor="middle" className="no-data-text">
            No data available
          </text>
        )}
      </svg>
    </div>
  );
};

export default LineChart;