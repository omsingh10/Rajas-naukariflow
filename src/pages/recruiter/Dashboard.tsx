import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { 
  Users, 
  Briefcase, 
  Eye, 
  UserCheck,
  Plus,
  Building2,
  Calendar,
  Star
} from 'lucide-react';

const RecruiterDashboard: React.FC = () => {
  const { user } = useAuth();

  const jobPostings = [
    { id: '1', title: 'Software Engineer Intern', applications: 45, status: 'Active', postedDate: '2025-09-20' },
    { id: '2', title: 'Full Stack Developer', applications: 78, status: 'Active', postedDate: '2025-09-18' },
    { id: '3', title: 'Data Analyst', applications: 32, status: 'Draft', postedDate: '2025-09-15' },
  ];

  const shortlistedCandidates = [
    { id: '1', name: 'John Doe', rollNo: 'CS21B1001', position: 'Software Engineer Intern', cgpa: 8.5, status: 'Shortlisted' },
    { id: '2', name: 'Jane Smith', rollNo: 'CS21B1002', position: 'Full Stack Developer', cgpa: 9.2, status: 'Interview Scheduled' },
    { id: '3', name: 'Mike Johnson', rollNo: 'CS21B1003', position: 'Software Engineer Intern', cgpa: 8.1, status: 'Shortlisted' },
  ];

  const upcomingInterviews = [
    { id: '1', candidate: 'Jane Smith', position: 'Full Stack Developer', date: '2025-09-30', time: '10:00 AM' },
    { id: '2', candidate: 'Alex Brown', position: 'Data Analyst', date: '2025-10-01', time: '2:00 PM' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Recruiter Dashboard</h1>
            <p className="text-gray-600 mt-1">
              Welcome back, {user?.name} | Tech Solutions Inc.
            </p>
          </div>
          <div className="flex space-x-3">
            <button className="btn-primary flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              Post New Job
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center">
              <Building2 className="h-4 w-4 mr-2" />
              Company Profile
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Briefcase className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Jobs</p>
              <p className="text-2xl font-semibold text-gray-900">
                {jobPostings.filter(job => job.status === 'Active').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Applications</p>
              <p className="text-2xl font-semibold text-gray-900">
                {jobPostings.reduce((sum, job) => sum + job.applications, 0)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <UserCheck className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Shortlisted</p>
              <p className="text-2xl font-semibold text-gray-900">{shortlistedCandidates.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Calendar className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Interviews</p>
              <p className="text-2xl font-semibold text-gray-900">{upcomingInterviews.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Job Postings */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">My Job Postings</h2>
            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {jobPostings.map((job) => (
              <div key={job.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{job.title}</p>
                    <p className="text-sm text-gray-600">{job.applications} applications</p>
                    <p className="text-xs text-gray-500">Posted: {job.postedDate}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    job.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {job.status}
                  </span>
                  <div className="mt-2 flex space-x-1">
                    <button className="text-blue-600 hover:text-blue-700">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shortlisted Candidates */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Shortlisted Candidates</h2>
            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {shortlistedCandidates.map((candidate) => (
              <div key={candidate.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-green-700">
                      {candidate.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{candidate.name}</p>
                    <p className="text-sm text-gray-600">{candidate.rollNo}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Star className="h-3 w-3 text-yellow-400" />
                      <span className="text-xs text-gray-500">CGPA: {candidate.cgpa}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    candidate.status === 'Interview Scheduled' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {candidate.status}
                  </span>
                  <div className="mt-2">
                    <button className="text-xs bg-primary-600 text-white px-3 py-1 rounded-full hover:bg-primary-700">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Interviews */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Upcoming Interviews</h2>
          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            Schedule New
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {upcomingInterviews.map((interview) => (
            <div key={interview.id} className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-gray-900">{interview.candidate}</span>
                </div>
                <span className="text-sm text-blue-600 font-medium">{interview.time}</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{interview.position}</p>
              <p className="text-xs text-gray-500">{interview.date}</p>
              <div className="mt-3 flex space-x-2">
                <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700">
                  Join Meeting
                </button>
                <button className="text-xs border border-blue-600 text-blue-600 px-3 py-1 rounded-md hover:bg-blue-50">
                  Reschedule
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;