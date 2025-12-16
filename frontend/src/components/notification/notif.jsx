// notif.jsx
import React, { useState } from 'react';
import './notif.css';

const NotificationCard = ({ 
  notification, 
  onMarkAsRead, 
  onDelete 
}) => {
  const { 
    id, 
    title, 
    message, 
    type = 'info', 
    time = 'Just now', 
    read = false, 
    icon = '🔔' 
  } = notification;

  const handleMarkAsRead = () => {
    if (onMarkAsRead) onMarkAsRead(id);
  };

  const handleDelete = () => {
    if (onDelete) onDelete(id);
  };

  return (
    <div className={`notification-card ${type} ${read ? 'read' : 'unread'}`}>
      <div className="notification-icon">{icon}</div>
      
      <div className="notification-content">
        <div className="notification-header">
          <h3 className="notification-title">{title}</h3>
          <span className="notification-time">{time}</span>
        </div>
        
        <p className="notification-message">{message}</p>
        
        <div className="notification-footer">
          <span className={`notification-type ${type}`}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
          
          <div className="notification-actions">
            {!read && (
              <button 
                className="btn-mark-read" 
                onClick={handleMarkAsRead}
                title="Mark as read"
              >
                Mark as Read
              </button>
            )}
            <button 
              className="btn-delete" 
              onClick={handleDelete}
              title="Delete notification"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      
      {!read && <div className="unread-indicator"></div>}
    </div>
  );
};

// Main Notification Container Component
const NotificationContainer = ({ 
  notifications = [], 
  onMarkAsRead, 
  onDelete 
}) => {
  if (!notifications || notifications.length === 0) {
    return (
      <div className="notification-container empty-state">
        <div className="empty-icon">🔔</div>
        <h3>No notifications</h3>
        <p>You're all caught up! Check back later for new notifications.</p>
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

// Hook for managing notifications state
export const useNotifications = (initialNotifications = []) => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications(prev =>
      prev.filter(notification => notification.id !== id)
    );
  };

  const addNotification = (notification) => {
    const newNotification = {
      id: Date.now(),
      read: false,
      time: 'Just now',
      icon: '🔔',
      type: 'info',
      ...notification
    };
    setNotifications(prev => [newNotification, ...prev]);
    return newNotification.id;
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const getUnreadCount = () => {
    return notifications.filter(n => !n.read).length;
  };

  return {
    notifications,
    setNotifications,
    markAsRead,
    deleteNotification,
    addNotification,
    markAllAsRead,
    unreadCount: getUnreadCount()
  };
};

// Example notifications data
export const sampleNotifications = [
  {
    id: 1,
    title: 'New Message',
    message: 'You have received a new message from John.',
    type: 'info',
    time: '10 minutes ago',
    read: false,
    icon: '✉️'
  },
  {
    id: 2,
    title: 'Payment Received',
    message: 'Your payment of $49.99 has been processed successfully.',
    type: 'success',
    time: '1 hour ago',
    read: true,
    icon: '💰'
  },
  {
    id: 3,
    title: 'System Alert',
    message: 'Server maintenance scheduled for tonight at 2 AM.',
    type: 'warning',
    time: '3 hours ago',
    read: false,
    icon: '⚠️'
  },
  {
    id: 4,
    title: 'Error Detected',
    message: 'Failed to sync data with the cloud. Please check your connection.',
    type: 'error',
    time: 'Yesterday',
    read: true,
    icon: '❌'
  },
  {
    id: 5,
    title: 'Meeting Reminder',
    message: 'Team meeting starts in 30 minutes. Don\'t forget to prepare your presentation.',
    type: 'info',
    time: '5 hours ago',
    read: false,
    icon: '📅'
  }
];

export default NotificationContainer;