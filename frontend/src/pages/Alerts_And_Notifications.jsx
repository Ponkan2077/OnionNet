import React from 'react';
import NotificationContainer, { useNotifications, sampleNotifications } from './notif.jsx';
import './notif.css';

function Alerts_And_Notifications() {
  const {
    notifications,
    markAsRead,
    deleteNotification,
    addNotification,
    markAllAsRead,
    unreadCount
  } = useNotifications(sampleNotifications);

  const handleAddNotification = () => {
    addNotification({
      title: 'New Notification',
      message: 'This is a dynamically added notification.',
      type: 'success',
      icon: '🎉'
    });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px',
        padding: '20px',
        background: '#f8f9fa',
        borderRadius: '12px'
      }}>
        <h1>Notifications ({unreadCount} unread)</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={markAllAsRead}
            style={{
              padding: '10px 20px',
              background: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Mark All as Read
          </button>
        </div>
      </div>
      
      <NotificationContainer
        notifications={notifications}
        onMarkAsRead={markAsRead}
        onDelete={deleteNotification}
      />
    </div>
  );
}

export default Alerts_And_Notifications;