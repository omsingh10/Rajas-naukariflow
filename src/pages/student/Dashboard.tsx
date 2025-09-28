import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Student } from '../../types';
import { 
  FileText, 
  Award, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  AlertCircle,
  Target
} from 'lucide-react';

const StudentDashboard: React.FC = () => {
  const { user } = useAuth();

  // Mock data for student dashboard
  const studentData: Student = {
    ...(user as Student),
    rollNumber: 'CS21B1001',
    department: 'Computer Science',
    semester: 6,
    cgpa: 8.5,
    skills: ['React', 'Node.js', 'Python', 'Java', 'MySQL'],
    badges: [
      { id: '1', name: 'Quick Learner', description: 'Completed 5 courses', icon: '🎯', earnedAt: new Date(), issuedBy: 'System' },
      { id: '2', name: 'Team Player', description: 'Group project excellence', icon: '🤝', earnedAt: new Date(), issuedBy: 'Faculty' },
    ],
    applications: []
  };

  const recentApplications = [
    { id: '1', company: 'Tech Mahindra', position: 'Software Developer Intern', status: 'pending', appliedDate: '2025-09-20' },
    { id: '2', company: 'Infosys', position: 'Full Stack Developer', status: 'shortlisted', appliedDate: '2025-09-18' },
    { id: '3', company: 'TCS', position: 'Software Engineer', status: 'interview_scheduled', appliedDate: '2025-09-15' },
  ];

  const recommendedOpportunities = [
    { id: '1', company: 'Microsoft', position: 'Software Engineering Intern', match: 95, deadline: '2025-10-15' },
    { id: '2', company: 'Amazon', position: 'Backend Developer Intern', match: 89, deadline: '2025-10-20' },
    { id: '3', company: 'Google', position: 'Frontend Developer', match: 87, deadline: '2025-10-25' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'shortlisted': return 'text-blue-600 bg-blue-100';
      case 'interview_scheduled': return 'text-purple-600 bg-purple-100';
      case 'selected': return 'text-green-600 bg-green-100';
      case 'rejected': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return Clock;
      case 'shortlisted': return Target;
      case 'interview_scheduled': return AlertCircle;
      case 'selected': return CheckCircle;
      default: return Clock;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
            <p className="text-gray-600 mt-1">
              {studentData.department} | Semester {studentData.semester} | CGPA: {studentData.cgpa}
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Roll Number</div>
            <div className="font-medium text-gray-900">{studentData.rollNumber}</div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Applications</p>
              <p className="text-2xl font-semibold text-gray-900">{recentApplications.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Shortlisted</p>
              <p className="text-2xl font-semibold text-gray-900">
                {recentApplications.filter(app => app.status === 'shortlisted').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Award className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Badges</p>
              <p className="text-2xl font-semibold text-gray-900">{studentData.badges.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">CGPA</p>
              <p className="text-2xl font-semibold text-gray-900">{studentData.cgpa}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Applications */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Applications</h2>
            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentApplications.map((app) => {
              const StatusIcon = getStatusIcon(app.status);
              return (
                <div key={app.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-700">
                        {app.company.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{app.company}</p>
                      <p className="text-sm text-gray-600">{app.position}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                      <StatusIcon className="h-3 w-3 mr-1" />
                      {app.status.replace('_', ' ')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recommended Opportunities */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recommended for You</h2>
            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recommendedOpportunities.map((opp) => (
              <div key={opp.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary-700">
                      {opp.company.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{opp.company}</p>
                    <p className="text-sm text-gray-600">{opp.position}</p>
                    <p className="text-xs text-gray-500">Deadline: {opp.deadline}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center">
                    <span className="text-lg font-semibold text-green-600">{opp.match}%</span>
                    <span className="text-sm text-gray-500 ml-1">match</span>
                  </div>
                  <button className="mt-1 text-xs bg-primary-600 text-white px-3 py-1 rounded-full hover:bg-primary-700">
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills and Badges */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skills */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Skills</h2>
            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              Edit
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {studentData.skills.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Achievements</h2>
            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-3">
            {studentData.badges.map((badge) => (
              <div key={badge.id} className="flex items-center space-x-3">
                <div className="text-2xl">{badge.icon}</div>
                <div>
                  <p className="font-medium text-gray-900">{badge.name}</p>
                  <p className="text-sm text-gray-600">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;