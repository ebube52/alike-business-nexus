
// Security configuration and utilities

// Content Security Policy
export const CSP_POLICY = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
  'style-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
  'font-src': ["'self'", "https://fonts.gstatic.com"],
  'img-src': ["'self'", "data:", "https:"],
  'connect-src': ["'self'", "https://api.*"],
  'frame-ancestors': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"]
};

// Security headers for development
export const SECURITY_HEADERS = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
};

// Session management
export const SESSION_CONFIG = {
  MAX_AGE: 24 * 60 * 60 * 1000, // 24 hours
  REFRESH_THRESHOLD: 5 * 60 * 1000, // 5 minutes before expiry
  IDLE_TIMEOUT: 30 * 60 * 1000 // 30 minutes of inactivity
};

// Security audit logging
export const logSecurityEvent = (event: string, details?: any) => {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    event,
    details,
    userAgent: navigator.userAgent,
    url: window.location.href
  };
  
  console.warn('[SECURITY]', logEntry);
  
  // In production, send to security monitoring service
  // sendToSecurityService(logEntry);
};

// Secure local storage wrapper
export const secureStorage = {
  set: (key: string, value: any) => {
    try {
      const encrypted = btoa(JSON.stringify(value));
      localStorage.setItem(key, encrypted);
    } catch (error) {
      logSecurityEvent('Storage encryption failed', { key, error });
    }
  },
  
  get: (key: string) => {
    try {
      const encrypted = localStorage.getItem(key);
      if (!encrypted) return null;
      return JSON.parse(atob(encrypted));
    } catch (error) {
      logSecurityEvent('Storage decryption failed', { key, error });
      localStorage.removeItem(key);
      return null;
    }
  },
  
  remove: (key: string) => {
    localStorage.removeItem(key);
  }
};

// CSRF token management
export const csrfToken = {
  generate: () => {
    return btoa(Math.random().toString(36) + Date.now().toString(36));
  },
  
  validate: (token: string) => {
    // Basic validation - implement proper CSRF validation with backend
    return token && token.length > 10;
  }
};
