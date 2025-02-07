import { SessionProvider } from 'next-auth/react';
import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="min-h-screen bg-gray-50">
      <p>DashBoard</p>
      <SessionProvider>
        <div className="container mx-auto px-4 py-8">{children}</div>
      </SessionProvider>
    </main>
  );
};

export default DashboardLayout;
