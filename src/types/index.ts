export enum UserRole {
  STUDENT = 'student',
  FACULTY_MENTOR = 'faculty_mentor',
  TPO = 'tpo',
  RECRUITER = 'recruiter',
  ADMIN = 'admin'
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  profilePicture?: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Student extends User {
  rollNumber: string;
  department: string;
  semester: number;
  cgpa: number;
  skills: string[];
  resume?: string;
  coverLetter?: string;
  badges: Badge[];
  applications: Application[];
}

export interface FacultyMentor extends User {
  department: string;
  designation: string;
  studentsAssigned: string[];
}

export interface TPO extends User {
  college: string;
  permissions: string[];
}

export interface Recruiter extends User {
  company: Company;
  designation: string;
  isCompanyVerified: boolean;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  website: string;
  industry: string;
  size: string;
  location: string;
  logo?: string;
  isVerified: boolean;
  createdAt: Date;
}

export interface Opportunity {
  id: string;
  title: string;
  description: string;
  company: Company;
  type: 'internship' | 'placement';
  department: string[];
  requiredSkills: string[];
  eligibilityCriteria: {
    minCGPA: number;
    allowedSemesters: number[];
    allowedDepartments: string[];
  };
  stipend?: number;
  duration?: string;
  location: string;
  applicationDeadline: Date;
  startDate: Date;
  maxApplications: number;
  currentApplications: number;
  status: 'draft' | 'published' | 'closed';
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Application {
  id: string;
  opportunityId: string;
  studentId: string;
  status: 'pending' | 'shortlisted' | 'interview_scheduled' | 'selected' | 'rejected';
  appliedAt: Date;
  mentorApproval: {
    approved: boolean;
    approvedBy?: string;
    approvedAt?: Date;
    comments?: string;
  };
  interviewDetails?: {
    scheduledAt: Date;
    mode: 'online' | 'offline';
    location?: string;
    meetingLink?: string;
    feedback?: string;
  };
  feedback?: {
    rating: number;
    comments: string;
    providedBy: string;
    providedAt: Date;
  };
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt: Date;
  issuedBy: string;
}

export interface Certificate {
  id: string;
  studentId: string;
  opportunityId: string;
  applicationId: string;
  certificateUrl: string;
  issuedAt: Date;
  validUntil?: Date;
}

export interface Dashboard {
  activeStudents: number;
  openPositions: number;
  placementRate: number;
  completedTraining: number;
  trends: {
    studentsThisMonth: number;
    positionsToday: number;
    placementYearGrowth: number;
    trainingThisWeek: number;
  };
}