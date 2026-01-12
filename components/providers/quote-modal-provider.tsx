"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { trackQuoteModalOpen } from "@/lib/analytics";

interface QuoteModalContextType {
  isOpen: boolean;
  openModal: (trigger?: string, service?: string) => void;
  closeModal: () => void;
}

const QuoteModalContext = createContext < QuoteModalContextType | undefined > (undefined);

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (trigger?: string, service?: string) => {
    setIsOpen(true);
    // Track modal opening with context
    trackQuoteModalOpen({ trigger, service });
  };

  const closeModal = () => setIsOpen(false);

  return (
    <QuoteModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within QuoteModalProvider");
  }
  return context;
}

