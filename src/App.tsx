import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { useAuth } from './hooks/useAuth';
import Layout from './components/Layout';
import Login from './pages/auth/Login';
import StudentDashboard from './pages/student/Dashboard';
import FacultyDashboard from './pages/faculty/Dashboard';
import TPODashboard from './pages/tpo/Dashboard';
import RecruiterDashboard from './pages/recruiter/Dashboard';
import AdminDashboard from './pages/admin/Dashboard';
import { UserRole } from './types';

// Protected Route Component
const ProtectedRoute: React.FC<{ 
  children: React.ReactNode; 
  allowedRoles: UserRole[];
}> = ({ children, allowedRoles }) => {
  const { user, isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  if (!allowedRoles.includes(user!.role)) {
    return <Navigate to="/unauthorized" replace />;
  }
  
  return <>{children}</>;
};

// Role-based Dashboard Redirect
const DashboardRedirect: React.FC = () => {
  const { user } = useAuth();
  
  if (!user) return <Navigate to="/login" replace />;
  
  switch (user.role) {
    case UserRole.STUDENT:
      return <Navigate to="/student/dashboard" replace />;
    case UserRole.FACULTY_MENTOR:
      return <Navigate to="/faculty/dashboard" replace />;
    case UserRole.TPO:
      return <Navigate to="/tpo/dashboard" replace />;
    case UserRole.RECRUITER:
      return <Navigate to="/recruiter/dashboard" replace />;
    case UserRole.ADMIN:
      return <Navigate to="/admin/dashboard" replace />;
    default:
      return <Navigate to="/login" replace />;
  }
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            
            {/* Dashboard Redirect */}
            <Route path="/" element={<DashboardRedirect />} />
            <Route path="/dashboard" element={<DashboardRedirect />} />
            
            {/* Student Routes */}
            <Route path="/student/*" element={
              <ProtectedRoute allowedRoles={[UserRole.STUDENT]}>
                <Layout>
                  <Routes>
                    <Route path="dashboard" element={<StudentDashboard />} />
                    <Route path="*" element={<Navigate to="/student/dashboard" replace />} />
                  </Routes>
                </Layout>
              </ProtectedRoute>
            } />
            
            {/* Faculty Routes */}
            <Route path="/faculty/*" element={
              <ProtectedRoute allowedRoles={[UserRole.FACULTY_MENTOR]}>
                <Layout>
                  <Routes>
                    <Route path="dashboard" element={<FacultyDashboard />} />
                    <Route path="*" element={<Navigate to="/faculty/dashboard" replace />} />
                  </Routes>
                </Layout>
              </ProtectedRoute>
            } />
            
            {/* TPO Routes */}
            <Route path="/tpo/*" element={
              <ProtectedRoute allowedRoles={[UserRole.TPO]}>
                <Layout>
                  <Routes>
                    <Route path="dashboard" element={<TPODashboard />} />
                    <Route path="*" element={<Navigate to="/tpo/dashboard" replace />} />
                  </Routes>
                </Layout>
              </ProtectedRoute>
            } />
            
            {/* Recruiter Routes */}
            <Route path="/recruiter/*" element={
              <ProtectedRoute allowedRoles={[UserRole.RECRUITER]}>
                <Layout>
                  <Routes>
                    <Route path="dashboard" element={<RecruiterDashboard />} />
                    <Route path="*" element={<Navigate to="/recruiter/dashboard" replace />} />
                  </Routes>
                </Layout>
              </ProtectedRoute>
            } />
            
            {/* Admin Routes */}
            <Route path="/admin/*" element={
              <ProtectedRoute allowedRoles={[UserRole.ADMIN]}>
                <Layout>
                  <Routes>
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
                  </Routes>
                </Layout>
              </ProtectedRoute>
            } />
            
            {/* Fallback Routes */}
            <Route path="/unauthorized" element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">Unauthorized</h1>
                  <p className="text-gray-600">You don't have permission to access this page.</p>
                </div>
              </div>
            } />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;