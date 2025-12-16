import React from 'react';
import './device-cards.css';

const DeviceCard = ({ name, location, status, onActionsClick }) => {
  return (
    <div className="device-card">
      <h3 className="device-name">{name}</h3>
      <p className="device-location">Location: {location}</p>
      <div className="device-footer">
        <div className="device-status-container">
          <span className="status-label">Status:</span>
          <span className={`status-indicator ${status.toLowerCase()}`}></span>
          <span className={`status-text ${status.toLowerCase()}`}>
            {status}
          </span>
        </div>
        
        <button
          onClick={() => onActionsClick?.(name)}
          className="actions-button"
        >
          <svg className="actions-icon" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="2"/>
            <circle cx="12" cy="5" r="2"/>
            <circle cx="12" cy="19" r="2"/>
          </svg>
          <span className="actions-text">Actions</span>
        </button>
      </div>
    </div>
  );
};

export default DeviceCard;