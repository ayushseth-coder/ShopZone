import React, { createContext, useState, useEffect } from 'react';

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState(() => {
    return localStorage.getItem('shopzone_currency') || 'USD';
  });
  const [inrRate, setInrRate] = useState(83.0); // Default fallback

  useEffect(() => {
    // Fetch live USD to INR rate
    const fetchRate = async () => {
      try {
        const response = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json');
        const data = await response.json();
        if (data && data.usd && data.usd.inr) {
          setInrRate(data.usd.inr);
        }
      } catch (error) {
        console.error('Failed to fetch currency rate:', error);
      }
    };
    fetchRate();
  }, []);

  useEffect(() => {
    localStorage.setItem('shopzone_currency', currency);
  }, [currency]);

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === 'USD' ? 'INR' : 'USD'));
  };

  const formatPrice = (priceInUSD) => {
    if (currency === 'INR') {
      const converted = priceInUSD * inrRate;
      return `₹${converted.toFixed(2)}`;
    }
    return `$${priceInUSD.toFixed(2)}`;
  };

  const calculateTotal = (totalInUSD) => {
    if (currency === 'INR') {
      return `₹${(totalInUSD * inrRate).toFixed(2)}`;
    }
    return `$${totalInUSD.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, toggleCurrency, formatPrice, calculateTotal }}>
      {children}
    </CurrencyContext.Provider>
  );
};
