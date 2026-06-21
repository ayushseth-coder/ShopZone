import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Sync with local storage to persist auth state
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const savedAuth = localStorage.getItem('shopzone_auth');
    return savedAuth === 'true';
  });

  const loginAsGuest = () => {
    setIsAuthenticated(true);
    localStorage.setItem('shopzone_auth', 'true');
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('shopzone_auth');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginAsGuest, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
