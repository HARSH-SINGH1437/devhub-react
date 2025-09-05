// src/components/layout/MainLayout.tsx
import { cn } from '@/lib/utils';
import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import { useAuth } from '@/hooks/useAuth';
import { LoadingSpinner } from '../ui/loading';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, className }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
 const {user, loading} = useAuth()

 loading && <LoadingSpinner size="lg" className="text-primary" />

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main
          className={cn(
            "flex-1 p-6 lg:ml-64", // Adjust based on sidebar width
            "transition-all duration-300",
            className
          )}
        >
          <div className="container mx-auto max-w-7xl">

            {children}
           {/** Main content here */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;