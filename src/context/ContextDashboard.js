"use client";
import { createContext, useContext } from "react";
import { SessionProvider } from "next-auth/react";

export const ContextDashboard = createContext();

export function useDashboard() {
  return useContext(ContextDashboard);
}

export function DashboardProvider({ children }) {
  return (
    <ContextDashboard.Provider>
      <SessionProvider>{children}</SessionProvider>
    </ContextDashboard.Provider>
  );
}
