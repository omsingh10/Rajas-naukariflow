# 🎓 Rajas - Campus Placement Portal

A comprehensive web-based placement management system designed for technical educational institutions to streamline the internship and job placement process for students, faculty, recruiters, and administrators.

## 📋 Project Overview

**Rajas** is a modern, role-based campus placement portal that facilitates seamless interaction between students, faculty mentors, Training & Placement Officers (TPO), recruiters, and administrators. The platform addresses the critical need for technical education students to complete internship or industrial training modules before graduation while providing a centralized system for placement management.

## ✨ Key Features

### 🔐 Multi-Role Authentication System
- **5 User Roles**: Student, Faculty Mentor, TPO, Recruiter, Administrator
- JWT-style authentication with persistent sessions
- Role-based access control and protected routes
- Demo credentials for easy testing

### 👨‍🎓 Student Dashboard
- **Personal Profile Management**: Complete profile setup with academic details
- **Opportunity Discovery**: Browse and search internship/job listings
- **Application Tracking**: Monitor application status in real-time
- **Skill Assessment**: Track competency development and certifications
- **Placement Statistics**: View personal placement metrics and progress

### 👨‍🏫 Faculty Mentor Interface
- **Student Supervision**: Monitor assigned students' progress
- **Application Review**: Approve/reject internship applications
- **Feedback System**: Provide guidance and mentorship feedback
- **Training Coordination**: Manage skill development sessions
- **Performance Analytics**: Track mentee success rates

### 📊 TPO (Training & Placement Officer) Dashboard
- **Comprehensive Analytics**: 
  - Total Students: 1,247
  - Available Positions: 89
  - Placement Rate: 94%
  - Training Sessions: 342
- **Company Management**: Onboard and verify recruiting companies
- **Opportunity Posting**: Create and manage internship/job listings
- **Interview Scheduling**: Coordinate placement drives and interviews
- **Report Generation**: Generate placement reports and statistics

### 🏢 Recruiter Portal
- **Company Profile**: Comprehensive company information management
- **Job Posting Interface**: Create detailed job/internship listings
- **Candidate Management**: Review applications with privacy controls
- **Interview Process**: Schedule and manage interview rounds
- **Offer Management**: Send and track job offers

### ⚙️ Administrator Panel
- **User Role Management**: Assign and modify user permissions
- **Company Verification**: Approve and verify recruiting companies
- **System Configuration**: Platform settings and customization
- **Data Privacy Controls**: Manage data access and privacy settings
- **Audit Trail**: Monitor system activities and generate reports

## 🛠 Technical Architecture

### Frontend Stack
- **React 18+**: Latest React with hooks and functional components
- **TypeScript**: Full type safety and enhanced development experience
- **Vite**: Lightning-fast build tool and development server
- **Tailwind CSS 3.4**: Utility-first CSS framework with custom orange theme
- **React Router**: Client-side routing with protected routes
- **Lucide React**: Modern icon library for consistent UI

### Development Tools
- **PostCSS**: CSS processing with autoprefixer
- **ESLint & TypeScript**: Code quality and type checking
- **Hot Module Replacement**: Instant development feedback

### Project Structure
```
src/
├── components/           # Reusable UI components
│   └── Layout.tsx       # Main application layout
├── contexts/            # React context providers
│   └── AuthContext.tsx  # Authentication state management
├── hooks/               # Custom React hooks
│   └── useAuth.ts       # Authentication hook
├── pages/               # Route components
│   ├── auth/           # Authentication pages
│   │   └── Login.tsx   # Login interface
│   ├── student/        # Student dashboard
│   ├── faculty/        # Faculty mentor dashboard
│   ├── tpo/            # TPO dashboard
│   ├── recruiter/      # Recruiter dashboard
│   └── admin/          # Administrator dashboard
├── types/              # TypeScript type definitions
│   └── index.ts        # Global interfaces and enums
└── index.css           # Global styles and Tailwind configuration
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rajas
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests (to be implemented)

## 🎯 Demo Credentials

The application includes demo accounts for testing all user roles:

### Student Account
- **Email**: student@college.edu
- **Password**: student123
- **Features**: View opportunities, apply for positions, track applications

### Faculty Mentor Account
- **Email**: faculty@college.edu
- **Password**: faculty123
- **Features**: Monitor students, approve applications, provide feedback

### TPO Account
- **Email**: tpo@college.edu
- **Password**: tpo123
- **Features**: Full placement management, analytics, company relations

### Recruiter Account
- **Email**: recruiter@company.com
- **Password**: recruiter123
- **Features**: Post jobs, review candidates, manage hiring process

### Administrator Account
- **Email**: admin@college.edu
- **Password**: admin123
- **Features**: System management, user roles, platform configuration

## 🎨 Design System

### Color Palette
- **Primary Orange**: `#f97316` (Main brand color)
- **Secondary Green**: `#22c55e` (Success and progress indicators)
- **Neutral Grays**: Professional UI elements
- **Gradient Themes**: Orange to green gradients for hero sections

### UI Components
- **Responsive Design**: Mobile-first approach
- **Card-based Layout**: Clean, organized information display
- **Modern Typography**: Inter font family
- **Consistent Spacing**: Tailwind's spacing system
- **Accessible Colors**: WCAG compliant color contrasts

## 📈 Current Status

### ✅ Completed Features
- [x] Multi-role authentication system
- [x] All five user dashboards with role-specific functionality
- [x] Responsive UI design with orange theme
- [x] Protected routing and navigation
- [x] TypeScript implementation with full type safety
- [x] Mock data integration for all features
- [x] Build optimization and production readiness

### 🔄 In Progress
- [ ] Backend API integration
- [ ] Database connectivity
- [ ] File upload functionality
- [ ] Real-time notifications
- [ ] Email integration

### 🚀 Future Enhancements
- [ ] Mobile application
- [ ] Advanced analytics dashboard
- [ ] AI-powered job matching
- [ ] Video interview integration
- [ ] Document verification system
- [ ] Multi-language support

## 🔧 Configuration Files

### Package Dependencies
```json
{
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router-dom": "^7.9.3",
    "tailwindcss": "^3.4.17",
    "lucide-react": "^0.544.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^5.0.4",
    "typescript": "^5.9.2",
    "postcss": "^8.5.6",
    "autoprefixer": "^10.4.21"
  }
}
```

### Tailwind Configuration
Custom color scheme with primary orange and secondary green themes, configured for optimal performance with purging enabled for production builds.

## 🐛 Issues Fixed

### Development Issues Resolved
1. **Tailwind CSS v4 Compatibility**: Downgraded to stable v3.4 for better compatibility
2. **PostCSS Configuration**: Fixed ES module configuration issues
3. **TypeScript Errors**: Resolved unused import warnings
4. **Build Process**: Optimized for production deployment
5. **Configuration Conflicts**: Removed duplicate config files

### Performance Optimizations
- Lazy loading for dashboard components
- Optimized bundle size with tree shaking
- CSS purging for production builds
- Image optimization ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and queries, please contact:
- **Project Lead**: [Your Name]
- **Email**: [Your Email]
- **Documentation**: [Project Wiki/Docs URL]

---

**Built with ❤️ for educational institutions to streamline their placement processes.**