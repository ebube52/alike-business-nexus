
import { useEffect, useCallback } from 'react';
import { useAuth } from '@/contexts/SecurityContext';
import { logSecurityEvent, SESSION_CONFIG } from '@/utils/security';

export const useSecurity = () => {
  const { user, logout } = useAuth();

  // Monitor for suspicious activity
  const detectSuspiciousActivity = useCallback(() => {
    // Monitor for rapid requests
    let requestCount = 0;
    const resetCount = () => { requestCount = 0; };
    
    return () => {
      requestCount++;
      if (requestCount > 100) { // More than 100 requests per minute
        logSecurityEvent('Suspicious activity detected', { requestCount });
        // Could implement rate limiting or user warnings here
      }
      setTimeout(resetCount, 60000); // Reset every minute
    };
  }, []);

  // Session timeout management
  useEffect(() => {
    if (!user) return;

    let idleTimer: NodeJS.Timeout;
    let lastActivity = Date.now();

    const resetIdleTimer = () => {
      lastActivity = Date.now();
      clearTimeout(idleTimer);
      
      idleTimer = setTimeout(() => {
        logSecurityEvent('Session timeout due to inactivity');
        logout();
      }, SESSION_CONFIG.IDLE_TIMEOUT);
    };

    const handleActivity = () => {
      resetIdleTimer();
    };

    // Track user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    resetIdleTimer();

    return () => {
      clearTimeout(idleTimer);
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [user, logout]);

  // Monitor for tab visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        logSecurityEvent('Tab became hidden');
      } else {
        logSecurityEvent('Tab became visible');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return {
    detectSuspiciousActivity: detectSuspiciousActivity(),
    logSecurityEvent
  };
};
