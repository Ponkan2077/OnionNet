import React, { useState } from 'react';

// Sample notifications data
export const sampleNotifications = [
  {
    id: 1,
    title: 'System Alert',
    message: 'Soil moisture level is critically low in Field 1',
    type: 'alert',
    icon: '⚠️',
    timestamp: new Date(Date.now() - 5 * 60000),
    read: false
  },
  {
    id: 2,
    title: 'Device Online',
    message: 'Sensor Unit B is now online',
    type: 'success',
    icon: '✅',
    timestamp: new Date(Date.now() - 15 * 60000),
    read: false
  },
  {
    id: 3,
    title: 'Temperature Warning',
    message: 'Temperature exceeded threshold in Greenhouse',
    type: 'warning',
    icon: '🌡️',
    timestamp: new Date(Date.now() - 30 * 60000),
    read: true
  },
  {
    id: 4,
    title: 'Device Offline',
    message: 'Sensor Unit C has gone offline',
    type: 'error',
    icon: '❌',
    timestamp: new Date(Date.now() - 60 * 60000),
    read: true
  }
];

// Custom hook for managing notifications
export const useNotifications = (initialNotifications = []) => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const addNotification = (newNotif) => {
    const notification = {
      id: Math.max(...notifications.map(n => n.id), 0) + 1,
      timestamp: new Date(),
      read: false,
      ...newNotif
    };
    setNotifications([notification, ...notifications]);
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const unreadCount = notifications.filter(notif => !notif.read).length;

  return {
    notifications,
    markAsRead,
    deleteNotification,
    addNotification,
    markAllAsRead,
    unreadCount
  };
};

// Notification Card Component
const NotificationCard = ({ notification, onMarkAsRead, onDelete }) => {
  const formatTime = (date) => {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  return (
    <div className={`notification-card notification-${notification.type} ${notification.read ? 'read' : 'unread'}`}>
      <div className="notification-icon">{notification.icon}</div>
      <div className="notification-content">
        <h3 className="notification-title">{notification.title}</h3>
        <p className="notification-message">{notification.message}</p>
        <span className="notification-time">{formatTime(notification.timestamp)}</span>
      </div>
      <div className="notification-actions">
        {!notification.read && (
          <button 
            className="btn-mark-read"
            onClick={() => onMarkAsRead(notification.id)}
            title="Mark as read"
          >
            ✓
          </button>
        )}
        <button 
          className="btn-delete"
          onClick={() => onDelete(notification.id)}
          title="Delete"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

// Notification Container Component
const NotificationContainer = ({ notifications, onMarkAsRead, onDelete }) => {
  if (notifications.length === 0) {
    return (
      <div className="no-notifications">
        <p>No notifications yet</p>
      </div>
    );
  }

  return (
    <div className="notification-container">
      {notifications.map(notification => (
        <NotificationCard
          key={notification.id}
          notification={notification}
          onMarkAsRead={onMarkAsRead}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default NotificationContainer;
