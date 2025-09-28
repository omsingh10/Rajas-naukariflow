import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { UserRole } from '../../types';
import { GraduationCap, Building2, Users, Shield, UserCheck } from 'lucide-react';

const Login: React.FC = () => {
  const { login, isAuthenticated, loading } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: UserRole.STUDENT,
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const roleOptions = [
    { value: UserRole.STUDENT, label: 'Student', icon: GraduationCap, color: 'bg-blue-500' },
    { value: UserRole.FACULTY_MENTOR, label: 'Faculty Mentor', icon: UserCheck, color: 'bg-green-500' },
    { value: UserRole.TPO, label: 'TPO', icon: Building2, color: 'bg-purple-500' },
    { value: UserRole.RECRUITER, label: 'Recruiter', icon: Users, color: 'bg-orange-500' },
    { value: UserRole.ADMIN, label: 'Admin', icon: Shield, color: 'bg-red-500' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await login(formData.email, formData.password, formData.role);
      if (!success) {
        setError('Invalid credentials. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const demoCredentials = [
    { role: UserRole.STUDENT, email: 'student@college.edu' },
    { role: UserRole.FACULTY_MENTOR, email: 'mentor@college.edu' },
    { role: UserRole.TPO, email: 'tpo@college.edu' },
    { role: UserRole.RECRUITER, email: 'recruiter@company.com' },
    { role: UserRole.ADMIN, email: 'admin@college.edu' },
  ];

  const fillDemoCredentials = (role: UserRole, email: string) => {
    setFormData({ email, password: 'password', role });
    setError('');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-green-500 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="h-20 w-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-3xl">R</span>
          </div>
        </div>
        <h2 className="mt-6 text-center text-4xl font-extrabold text-white drop-shadow-lg">
          Welcome to Rajas
        </h2>
        <p className="mt-3 text-center text-lg text-white text-opacity-90 drop-shadow">
          Your gateway from learning to earning
        </p>
        <p className="mt-1 text-center text-sm text-white text-opacity-80">
          Campus Placement Portal
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white bg-opacity-95 backdrop-blur-sm py-8 px-4 shadow-2xl rounded-2xl sm:px-10 border border-white border-opacity-20">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Role
              </label>
              <div className="grid grid-cols-2 gap-3">
                {roleOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, role: option.value })}
                      className={`relative flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-200 ${
                        formData.role === option.value
                          ? 'border-orange-500 bg-orange-50 shadow-md transform scale-105'
                          : 'border-gray-200 hover:border-orange-300 hover:shadow-sm'
                      }`}
                    >
                      <div className={`p-2 rounded-full ${option.color} mb-2 shadow-sm`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-gray-800 text-center">
                        {option.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-field"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="input-field"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-base font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transform transition-all duration-200 hover:scale-105"
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>

          {/* Demo Credentials */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Demo Credentials</span>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              {demoCredentials.map((cred) => (
                <button
                  key={cred.role}
                  type="button"
                  onClick={() => fillDemoCredentials(cred.role, cred.email)}
                  className="w-full text-left px-3 py-2 text-xs bg-gray-50 hover:bg-gray-100 rounded border border-gray-200 transition-colors"
                >
                  <span className="font-medium capitalize">{cred.role.replace('_', ' ')}</span>
                  <span className="text-gray-500 ml-2">{cred.email}</span>
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-gray-500 text-center">
              Password for all demo accounts: <code>password</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;