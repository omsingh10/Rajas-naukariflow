import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Dashboard } from '../../types';
import { 
  Users, 
  Briefcase, 
  TrendingUp, 
  Award,
  Plus,
  Eye,
  Filter,
  Calendar,
  Building2,
  GraduationCap
} from 'lucide-react';

// Import hero image directly
import heroImageSrc from '../../assets/tpo-hero.jpg';

const TPODashboard: React.FC = () => {
  const { user } = useAuth();

  // Mock dashboard data matching the image
  const dashboardData: Dashboard = {
    activeStudents: 1247,
    openPositions: 89,
    placementRate: 94,
    completedTraining: 342,
    trends: {
      studentsThisMonth: 12,
      positionsToday: 5,
      placementYearGrowth: 2,
      trainingThisWeek: 23,
    },
  };

  const recentOpportunities = [
    {
      id: '1',
      title: 'Software Development Intern',
      company: 'Tech Mahindra',
      type: 'Internship',
      applications: 45,
      deadline: '2025-10-15',
      status: 'Active'
    },
    {
      id: '2',
      title: 'Full Stack Developer',
      company: 'Infosys',
      type: 'Placement',
      applications: 78,
      deadline: '2025-10-20',
      status: 'Active'
    },
    {
      id: '3',
      title: 'Data Analyst',
      company: 'TCS',
      type: 'Internship',
      applications: 32,
      deadline: '2025-10-25',
      status: 'Draft'
    },
  ];

  const upcomingInterviews = [
    { id: '1', company: 'Microsoft', date: '2025-09-30', candidates: 12, time: '10:00 AM' },
    { id: '2', company: 'Amazon', date: '2025-10-01', candidates: 8, time: '2:00 PM' },
    { id: '3', company: 'Google', date: '2025-10-02', candidates: 15, time: '11:00 AM' },
  ];

  const departmentStats = [
    { name: 'Computer Science', placed: 85, total: 120, percentage: 71 },
    { name: 'Electronics', placed: 45, total: 80, percentage: 56 },
    { name: 'Mechanical', placed: 38, total: 75, percentage: 51 },
    { name: 'Civil', placed: 25, total: 60, percentage: 42 },
  ];

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative rounded-lg shadow-lg overflow-hidden min-h-[400px] mb-8">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(249, 115, 22, 0.4) 0%, rgba(59, 130, 246, 0.3) 100%), url('${heroImageSrc}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Light fallback gradient (only shows if image doesn't load) */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-orange-500/30 to-blue-500/20"></div>
        </div>
        
        <div className="relative z-10 px-8 py-16 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Welcome to Rajas
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 font-medium">
              Your gateway from learning to earning
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-10 rounded-lg text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Explore Opportunities
            </button>
          </div>
        </div>
        
        {/* Bottom fade effect */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent"></div>
      </div>

      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">TPO Dashboard</h2>
            <p className="text-gray-600 mt-1">
              Welcome back, {user?.name} | Training & Placement Office
            </p>
          </div>
          <div className="flex space-x-3">
            <button className="btn-primary flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              Post Opportunity
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center">
              <Eye className="h-4 w-4 mr-2" />
              View
            </button>
          </div>
        </div>
      </div>

      {/* Main Stats Cards - Matching the image */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Students</p>
              <p className="text-3xl font-bold text-gray-900">{dashboardData.activeStudents.toLocaleString()}</p>
              <p className="text-sm text-green-600 mt-1">
                +{dashboardData.trends.studentsThisMonth}% this month
              </p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <Users className="h-8 w-8 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Open Positions</p>
              <p className="text-3xl font-bold text-gray-900">{dashboardData.openPositions}</p>
              <p className="text-sm text-green-600 mt-1">
                +{dashboardData.trends.positionsToday} new today
              </p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <Briefcase className="h-8 w-8 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Placement Rate</p>
              <p className="text-3xl font-bold text-gray-900">{dashboardData.placementRate}%</p>
              <p className="text-sm text-green-600 mt-1">
                +{dashboardData.trends.placementYearGrowth}% from last year
              </p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed Training</p>
              <p className="text-3xl font-bold text-gray-900">{dashboardData.completedTraining}</p>
              <p className="text-sm text-green-600 mt-1">
                {dashboardData.trends.trainingThisWeek} this week
              </p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <Award className="h-8 w-8 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Opportunities */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Opportunities</h2>
            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentOpportunities.map((opp) => (
              <div key={opp.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{opp.title}</p>
                    <p className="text-sm text-gray-600">{opp.company}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-xs text-gray-500">{opp.type}</span>
                      <span className="text-xs text-gray-500">{opp.applications} applications</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    opp.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {opp.status}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">Due: {opp.deadline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Interviews */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Upcoming Interviews</h2>
            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              View Calendar
            </button>
          </div>
          <div className="space-y-4">
            {upcomingInterviews.map((interview) => (
              <div key={interview.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{interview.company}</p>
                    <p className="text-sm text-gray-600">{interview.date} at {interview.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {interview.candidates} candidates
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Department-wise Placement Stats */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Department-wise Placement Statistics</h2>
          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            Export Report
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {departmentStats.map((dept, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <GraduationCap className="h-5 w-5 text-gray-600" />
                <span className="text-lg font-semibold text-gray-900">{dept.percentage}%</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-1">{dept.name}</h3>
              <p className="text-sm text-gray-600">{dept.placed} / {dept.total} placed</p>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-primary-500 h-2 rounded-full" 
                  style={{ width: `${dept.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TPODashboard;