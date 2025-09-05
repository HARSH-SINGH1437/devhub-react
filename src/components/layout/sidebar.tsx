// src/components/layout/Sidebar.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  BarChart3, 
  Settings, 
  Users, 
  FileText, 
  Calendar,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/' },
    { icon: BarChart3, label: 'Analytics', href: '/analytics' },
    { icon: Users, label: 'Users', href: '/users' },
    { icon: FileText, label: 'Documents', href: '/documents' },
    { icon: Calendar, label: 'Calendar', href: '/calendar' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden" 
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-0 left-0 z-50 h-screen w-64 bg-background border-r transition-transform duration-300 ease-in-out',
          'md:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 bg-primary rounded-md" />
              <span className="font-bold">MyApp</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2 p-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="mr-3 h-4 w-4" />
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t">
            <div className="rounded-lg bg-muted p-3">
              <p className="text-xs font-medium">Upgrade to Pro</p>
              <p className="text-xs text-muted-foreground mt-1">
                Get access to all features
              </p>
              <Button className="w-full mt-2" size="sm">
                Upgrade
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;