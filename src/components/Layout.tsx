import React, { ReactNode } from 'react';
import { useAuth } from '../hooks/useAuth';
import { UserRole } from '../types';
import { 
  Users, 
  Building2, 
  GraduationCap, 
  Settings, 
  LogOut, 
  Bell,
  Search,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getNavigationItems = () => {
    if (!user) return [];

    const baseItems = [
      { name: 'Dashboard', href: '#', icon: Building2, current: true },
    ];

    switch (user.role) {
      case UserRole.STUDENT:
        return [
          ...baseItems,
          { name: 'Opportunities', href: '#', icon: Search, current: false },
          { name: 'My Applications', href: '#', icon: Users, current: false },
          { name: 'Profile', href: '#', icon: GraduationCap, current: false },
          { name: 'Certificates', href: '#', icon: Settings, current: false },
        ];
      case UserRole.FACULTY_MENTOR:
        return [
          ...baseItems,
          { name: 'Student Approvals', href: '#', icon: Users, current: false },
          { name: 'Monitoring', href: '#', icon: Search, current: false },
          { name: 'Feedback', href: '#', icon: GraduationCap, current: false },
        ];
      case UserRole.TPO:
        return [
          ...baseItems,
          { name: 'Post Opportunities', href: '#', icon: Users, current: false },
          { name: 'Applications', href: '#', icon: Search, current: false },
          { name: 'Analytics', href: '#', icon: GraduationCap, current: false },
          { name: 'Interviews', href: '#', icon: Settings, current: false },
        ];
      case UserRole.RECRUITER:
        return [
          ...baseItems,
          { name: 'Post Jobs', href: '#', icon: Users, current: false },
          { name: 'Candidates', href: '#', icon: Search, current: false },
          { name: 'Company Profile', href: '#', icon: Building2, current: false },
        ];
      case UserRole.ADMIN:
        return [
          ...baseItems,
          { name: 'User Management', href: '#', icon: Users, current: false },
          { name: 'Company Verification', href: '#', icon: Building2, current: false },
          { name: 'System Settings', href: '#', icon: Settings, current: false },
        ];
      default:
        return baseItems;
    }
  };

  const navigationItems = getNavigationItems();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? '' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
            <div className="flex flex-shrink-0 items-center px-4">
              <div className="flex items-center">
                <div className="h-10 w-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <span className="ml-3 text-2xl font-bold text-orange-600">Rajas</span>
              </div>
            </div>
            <nav className="mt-5 space-y-1 px-2">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                    item.current
                      ? 'bg-orange-100 text-orange-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon className="mr-4 h-6 w-6 flex-shrink-0" />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex min-h-0 flex-1 flex-col bg-white border-r border-gray-200 shadow-sm">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div className="flex flex-shrink-0 items-center px-4">
              <div className="flex items-center">
                <div className="h-10 w-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <span className="ml-3 text-2xl font-bold text-orange-600">Rajas</span>
              </div>
            </div>
            <nav className="mt-5 flex-1 space-y-1 px-2">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    item.current
                      ? 'bg-orange-100 text-orange-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon className="mr-3 h-6 w-6 flex-shrink-0" />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col lg:pl-64">
        {/* Top navigation */}
        <div className="sticky top-0 z-10 bg-white shadow-sm border-b border-gray-200">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex flex-1">
                <div className="flex flex-shrink-0 items-center lg:hidden">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                    onClick={() => setSidebarOpen(true)}
                  >
                    <Menu className="h-6 w-6" />
                  </button>
                </div>
                
                {/* Search bar */}
                <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-start">
                  <div className="w-full max-w-lg">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Search className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        placeholder="Search internships, companies..."
                        type="search"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                {/* Notifications */}
                <button
                  type="button"
                  className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  <Bell className="h-6 w-6" />
                </button>

                {/* Profile dropdown */}
                <div className="relative ml-3">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                      <span className="text-sm font-medium text-white">
                        {user?.name?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="ml-3 hidden md:block">
                      <div className="text-base font-medium text-gray-800">{user?.name}</div>
                      <div className="text-sm font-medium text-gray-500 capitalize">
                        {user?.role.replace('_', ' ')}
                      </div>
                    </div>
                    <button
                      onClick={logout}
                      className="ml-3 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                      <LogOut className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1">
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;