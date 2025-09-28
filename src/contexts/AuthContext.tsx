import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock users for demo purposes
  const mockUsers: User[] = [
    {
      id: '1',
      email: 'student@college.edu',
      name: 'John Doe',
      role: UserRole.STUDENT,
      isVerified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '2',
      email: 'mentor@college.edu',
      name: 'Dr. Jane Smith',
      role: UserRole.FACULTY_MENTOR,
      isVerified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '3',
      email: 'tpo@college.edu',
      name: 'Mr. Robert Johnson',
      role: UserRole.TPO,
      isVerified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '4',
      email: 'recruiter@company.com',
      name: 'Ms. Sarah Wilson',
      role: UserRole.RECRUITER,
      isVerified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '5',
      email: 'admin@college.edu',
      name: 'Admin User',
      role: UserRole.ADMIN,
      isVerified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  useEffect(() => {
    // Check for stored authentication
    const storedUser = localStorage.getItem('rajas-user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('rajas-user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string, role: UserRole): Promise<boolean> => {
    setLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock authentication - find user by email and role
    const foundUser = mockUsers.find(u => u.email === email && u.role === role);
    
    if (foundUser && password === 'password') { // Mock password check
      setUser(foundUser);
      localStorage.setItem('rajas-user', JSON.stringify(foundUser));
      setLoading(false);
      return true;
    }
    
    setLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('rajas-user');
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};