import React, { useState } from 'react';
import { MetricCard } from '../components/Cards/cards';

function Dashboard() {
  const [soilMoisture, setSoilMoisture] = useState(30);
  const [temperature, setTemperature] = useState(25);
  
  return (
    <div className="w-full">
      <div className="d-flex flex-row flex-wrap gap-3 item">
      <MetricCard 
        title="Avg Soil Moisture"
        value={soilMoisture}
        unit="%"
        change={4}
        compareText="vs last week"
      />

      <MetricCard 
        title="Temperature"
        value={temperature}
        unit="°C"
        change={-2}
        compareText="vs yesterday"
      />

      <MetricCard 
        title="Humidity"
        value={65}
        unit="%"
        change={8}
        compareText="vs last month"
      />

      <MetricCard 
        title="Avg Water Flow rate"
        value={65}
        unit="%"
        change={8}
        compareText="vs last month"
      />
      
    </div>
    </div>
  );
}
export default Dashboard;