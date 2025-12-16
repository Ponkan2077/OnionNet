import React, { useState } from 'react';
import SensorCRUD from '../components/Sensor/SensorCrud';
import '../components/Cards/device-cards.css';

const DeviceCard = ({ name, location, status, onActionsClick }) => {
  return (
    <div className="device-card">
      <div className="device-footer">
        <div>
          <h3 className="device-name">{name}</h3>
          <p className="device-location">Location: {location}</p>
          <div className="device-status-container">
            <span className="status-label">Status:</span>
            <span className={`status-indicator ${status === 'Online' ? 'online' : 'offline'}`}></span>
            <span className={`status-text ${status === 'Online' ? 'online' : 'offline'}`}>
              {status}
            </span>
          </div>
        </div>
        <button
          onClick={onActionsClick}
          className="actions-button"
        >
          <svg className="actions-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.5 7a1 1 0 11-2 0 1 1 0 012 0zM12 7a1 1 0 11-2 0 1 1 0 012 0zm6 0a1 1 0 11-2 0 1 1 0 012 0zM5.5 13a1 1 0 11-2 0 1 1 0 012 0zm6 0a1 1 0 11-2 0 1 1 0 012 0zm6 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
          <span className="actions-text">Actions</span>
        </button>
      </div>
    </div>
  );
};

const Device_Management = () => {
  const [refresh, setRefresh] = useState(false);

  const reload = () => setRefresh(!refresh); // For refresh after adding a sensor

  // Sample device data
  const devices = [
    { id: 1, name: 'Sensor Unit A', location: 'Field 1', status: 'Online' },
    { id: 2, name: 'Sensor Unit B', location: 'Field 2', status: 'Online' },
    { id: 3, name: 'Sensor Unit C', location: 'Greenhouse', status: 'Offline' },
  ];

  const handleCardAction = (deviceId) => {
    console.log('Action clicked for device:', deviceId);
  };

  return (
    <div>
      <h1 className="mb-6 font-bold text-2xl">Device Management</h1>
      
      <div className="bg-white shadow-sm mb-8 p-6">
        <h2 className="mb-4 font-semibold text-xl">Add New Sensor</h2>
        <SensorCRUD key={refresh} reload={reload} />
      </div>

      <div className="device-cards-container">
        {devices.map((device) => (
          <DeviceCard
            key={device.id}
            name={device.name}
            location={device.location}
            status={device.status}
            onActionsClick={() => handleCardAction(device.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Device_Management;