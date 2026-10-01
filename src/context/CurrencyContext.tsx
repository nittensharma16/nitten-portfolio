"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Currency = "USD" | "AED" | "INR";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (amountUsd: number, suffix?: string) => string;
  getSymbol: () => string;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: "USD",
  setCurrency: () => {},
  formatPrice: (a) => `$${a}`,
  getSymbol: () => "$",
});

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<Currency>("USD");

  useEffect(() => {
    // Attempt to guess currency from user locale timezone without IP tracking
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      if (tz.includes("Dubai") || tz.includes("Muscat") || tz.includes("Asia/Dubai")) {
        setCurrencyState("AED");
      } else if (tz.includes("Calcutta") || tz.includes("Kolkata") || tz.includes("Asia/Kolkata")) {
        // Can default to USD canonical or INR; let's respect canonical USD while enabling quick toggle
      }
    } catch {
      // fallback to USD
    }
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
  };

  const getSymbol = () => {
    switch (currency) {
      case "AED":
        return "AED ";
      case "INR":
        return "₹";
      case "USD":
      default:
        return "$";
    }
  };

  const formatPrice = (amountUsd: number, suffix: string = "") => {
    switch (currency) {
      case "AED": {
        const val = Math.round((amountUsd * 3.6725) / 50) * 50;
        return `AED ${val.toLocaleString()}${suffix}`;
      }
      case "INR": {
        const val = Math.round((amountUsd * 83.5) / 500) * 500;
        return `₹${val.toLocaleString()}${suffix}`;
      }
      case "USD":
      default:
        return `$${amountUsd.toLocaleString()}${suffix}`;
    }
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, getSymbol }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
