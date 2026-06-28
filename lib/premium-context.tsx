"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface PremiumContextType {
  isUnlocked: boolean;
  unlock: () => void;
  lock: () => void;
}

const PremiumContext = createContext<PremiumContextType | undefined>(undefined);

export function PremiumProvider({ children }: { children: ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    // Persist across refreshes for the demo
    const saved = localStorage.getItem('infrahub_premium_unlocked');
    if (saved === 'true') {
      setIsUnlocked(true);
    }
  }, []);

  const unlock = () => {
    setIsUnlocked(true);
    localStorage.setItem('infrahub_premium_unlocked', 'true');
  };

  const lock = () => {
    setIsUnlocked(false);
    localStorage.removeItem('infrahub_premium_unlocked');
  };

  return (
    <PremiumContext.Provider value={{ isUnlocked, unlock, lock }}>
      {children}
    </PremiumContext.Provider>
  );
}

export function usePremium() {
  const context = useContext(PremiumContext);
  if (context === undefined) {
    throw new Error('usePremium must be used within a PremiumProvider');
  }
  return context;
}
