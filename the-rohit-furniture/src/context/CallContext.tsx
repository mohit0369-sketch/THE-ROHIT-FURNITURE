import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface CallContextType {
  isCallOpen: boolean;
  openCallChooser: () => void;
  closeCallChooser: () => void;
}

const CallContext = createContext<CallContextType | undefined>(undefined);

export const CallProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openCallChooser = () => setIsOpen(true);
  const closeCallChooser = () => setIsOpen(false);

  return (
    <CallContext.Provider value={{ isCallOpen: isOpen, openCallChooser, closeCallChooser }}>
      {children}
    </CallContext.Provider>
  );
};

export const useCall = (): CallContextType => {
  const ctx = useContext(CallContext);
  if (!ctx) {
    throw new Error('useCall must be used within a CallProvider');
  }
  return ctx;
};
