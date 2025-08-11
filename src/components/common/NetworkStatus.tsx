import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NetworkStatusProps } from '../../types';
import { useNetworkStatus } from '../../hooks';
import './NetworkStatus.css';

const NetworkStatus: React.FC<NetworkStatusProps> = ({
  onlineMessage,
  offlineMessage,
  showIcon = true
}) => {
  const { t } = useTranslation();
  const isOnline = useNetworkStatus();
  const [showStatus, setShowStatus] = useState(false);
  const [wasOffline, setWasOffline] = useState(false);

  useEffect(() => {
    if (!isOnline) {
      setShowStatus(true);
      setWasOffline(true);
    } else if (wasOffline) {
      setShowStatus(true);
      setTimeout(() => setShowStatus(false), 3000);
      setWasOffline(false);
    }
  }, [isOnline, wasOffline]);

  // Show status initially if offline
  useEffect(() => {
    if (!navigator.onLine) {
      setShowStatus(true);
    }
  }, []);

  if (!showStatus) return null;

  const statusMessage = isOnline 
    ? (onlineMessage || t('network.online', 'Back Online'))
    : (offlineMessage || t('network.offline', "You're Offline"));

  return (
    <div className={`network-status ${isOnline ? 'online' : 'offline'}`}>
      <div className="network-status-content">
        <div className="status-indicator">
          {showIcon && <div className="status-dot"></div>}
          <span>{statusMessage}</span>
        </div>
        {!isOnline && (
          <button 
            className="offline-btn"
            onClick={() => window.location.href = '/offline'}
          >
            {t('network.viewOfflinePage', 'View Offline Page')}
          </button>
        )}
      </div>
    </div>
  );
};

export default NetworkStatus;
