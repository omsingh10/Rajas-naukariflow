import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { 
  Users, 
  CheckCircle, 
  Clock, 
  FileText,
  AlertCircle,
  MessageSquare,
  TrendingUp
} from 'lucide-react';

const FacultyDashboard: React.FC = () => {
  const { user } = useAuth();

  const pendingApprovals = [
    { id: '1', studentName: 'John Doe', company: 'Microsoft', position: 'Software Developer Intern', appliedDate: '2025-09-28' },
    { id: '2', studentName: 'Jane Smith', company: 'Amazon', position: 'Backend Developer', appliedDate: '2025-09-27' },
    { id: '3', studentName: 'Mike Johnson', company: 'Google', position: 'Frontend Developer', appliedDate: '2025-09-26' },
  ];

  const studentsAssigned = [
    { id: '1', name: 'John Doe', rollNo: 'CS21B1001', applications: 3, status: 'Active' },
    { id: '2', name: 'Jane Smith', rollNo: 'CS21B1002', applications: 5, status: 'Placed' },
    { id: '3', name: 'Mike Johnson', rollNo: 'CS21B1003', applications: 2, status: 'Active' },
    { id: '4', name: 'Sarah Wilson', rollNo: 'CS21B1004', applications: 4, status: 'Interview' },
  ];

  const recentFeedback = [
    { id: '1', student: 'John Doe', company: 'TCS', rating: 4, comment: 'Good technical skills, needs improvement in communication' },
    { id: '2', student: 'Jane Smith', company: 'Infosys', rating: 5, comment: 'Excellent performance during internship' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Faculty Mentor Dashboard</h1>
            <p className="text-gray-600 mt-1">
              Welcome back, {user?.name} | Computer Science Department
            </p>
          </div>
          <div className="flex space-x-3">
            <button className="btn-primary flex items-center">
              <MessageSquare className="h-4 w-4 mr-2" />
              Send Notification
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Students Assigned</p>
              <p className="text-2xl font-semibold text-gray-900">{studentsAssigned.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending Approvals</p>
              <p className="text-2xl font-semibold text-gray-900">{pendingApprovals.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Students Placed</p>
              <p className="text-2xl font-semibold text-gray-900">
                {studentsAssigned.filter(s => s.status === 'Placed').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <FileText className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Feedback Given</p>
              <p className="text-2xl font-semibold text-gray-900">{recentFeedback.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending Approvals */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Pending Approvals</h2>
            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {pendingApprovals.map((approval) => (
              <div key={approval.id} className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{approval.studentName}</p>
                    <p className="text-sm text-gray-600">{approval.company}</p>
                    <p className="text-xs text-gray-500">{approval.position}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-700">
                    Approve
                  </button>
                  <button className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Assigned Students */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Assigned Students</h2>
            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {studentsAssigned.map((student) => (
              <div key={student.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-blue-700">
                      {student.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{student.name}</p>
                    <p className="text-sm text-gray-600">{student.rollNo}</p>
                    <p className="text-xs text-gray-500">{student.applications} applications</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    student.status === 'Placed' ? 'bg-green-100 text-green-800' :
                    student.status === 'Interview' ? 'bg-purple-100 text-purple-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {student.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Feedback */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Recent Feedback</h2>
          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            Add Feedback
          </button>
        </div>
        <div className="space-y-4">
          {recentFeedback.map((feedback) => (
            <div key={feedback.id} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-900">{feedback.student}</span>
                  <span className="text-sm text-gray-500">@</span>
                  <span className="text-sm text-gray-600">{feedback.company}</span>
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <TrendingUp
                      key={i}
                      className={`h-4 w-4 ${
                        i < feedback.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-700">{feedback.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;