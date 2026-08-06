# Team Roles

This document defines the responsibilities, ownership, and expectations of every team member involved in the development of **Forjora**. Clear role distribution helps improve collaboration, reduce development conflicts, and ensure accountability throughout the project lifecycle.

---

# Team Overview

| Member | Role | Primary Responsibility | Difficulty |
|---------|------|------------------------|------------|
| Nikhil Kumar | Project Lead & Frontend Manager | Project Management, Frontend Architecture, UI Development, Code Review | ⭐⭐⭐⭐⭐ |
| Member 2 | Frontend Developer | UI Components, Dashboard, Responsive Design, Frontend Integration | ⭐⭐⭐⭐☆ |
| Member 3 | Backend Developer | APIs, Authentication, Business Logic, Chat System | ⭐⭐⭐⭐⭐ |
| Member 4 | AI & Integrations Developer | GitHub Integration, AI Assistant, Project Health, External APIs | ⭐⭐⭐⭐⭐ |
| Member 5 | Database & DevOps Engineer | Database Design, Deployment, Testing, Cloud Services | ⭐⭐⭐⭐☆ |

---

# Member Responsibilities

## Nikhil Kumar
### Role
**Project Lead & Frontend Manager**

### Responsibilities

- Lead the overall development of the project.
- Plan project milestones and development phases.
- Design the frontend architecture.
- Review UI consistency across all modules.
- Assign tasks to team members.
- Review pull requests before merging.
- Resolve merge conflicts.
- Maintain project documentation.
- Coordinate frontend-backend integration.
- Ensure deadlines are met.

### Technologies

- React.js
- Next.js
- TypeScript
- Tailwind CSS
- Shadcn UI
- Git & GitHub

---

## Member 2
### Role
**Frontend Developer**

### Responsibilities

- Develop reusable UI components.
- Build dashboard pages.
- Develop Profile module.
- Develop Project Showcase pages.
- Develop Research module interface.
- Develop Hackathon pages.
- Connect frontend with backend APIs.
- Improve responsiveness.
- Fix frontend bugs.

### Technologies

- React.js
- Next.js
- TypeScript
- Tailwind CSS

---

## Member 3
### Role
**Backend Developer**

### Responsibilities

- Develop REST APIs.
- Implement Authentication.
- Implement Authorization.
- Build Project APIs.
- Build Team APIs.
- Build Research APIs.
- Implement Socket.io chat.
- Develop Notification System.
- Handle server-side validation.

### Technologies

- Node.js
- Express.js
- JWT
- bcrypt
- Socket.io

---

## Member 4
### Role
**AI & Integrations Developer**

### Responsibilities

- Integrate GitHub API.
- Build GitHub Profile Integration.
- Develop Project Health Monitor.
- Integrate Gemini AI.
- Build AI Project Assistant.
- Build AI Research Guide.
- Generate Weekly Project Summaries.
- Integrate external APIs.

### Technologies

- GitHub REST API
- Gemini API
- Node.js
- Express.js

---

## Member 5
### Role
**Database & DevOps Engineer**

### Responsibilities

- Design MongoDB collections.
- Create database schemas.
- Develop Mongoose models.
- Configure Cloudinary.
- Optimize database queries.
- Perform testing.
- Handle deployment.
- Configure production environment.
- Monitor application performance.

### Technologies

- MongoDB Atlas
- Mongoose
- Cloudinary
- Render
- Vercel

---

# Shared Responsibilities

Every team member is expected to:

- Attend weekly meetings.
- Update assigned tasks regularly.
- Follow coding standards.
- Write clean and maintainable code.
- Test features before submission.
- Create meaningful Git commits.
- Participate in code reviews.
- Report blockers immediately.
- Maintain proper documentation for their modules.

---

# Module Ownership

| Module | Owner |
|----------|--------|
| Documentation | Nikhil Kumar |
| Frontend Architecture | Nikhil Kumar |
| UI Components | Member 2 |
| Authentication | Member 3 |
| Project Collaboration | Member 3 |
| Team Discovery | Member 3 |
| Real-Time Chat | Member 3 |
| GitHub Integration | Member 4 |
| AI Project Assistant | Member 4 |
| AI Research Guide | Member 4 |
| Project Health Monitor | Member 4 |
| Event Calendar | Member 2 |
| Research Collaboration | Member 3 & Member 4 |
| Database Design | Member 5 |
| Deployment | Member 5 |
| Testing | Member 5 (Supported by all members) |

---

# Git Workflow

Development will follow a feature-branch workflow.

```
main
│
└── develop
      │
      ├── feature/frontend
      ├── feature/backend
      ├── feature/github
      ├── feature/ai
      ├── feature/database
      ├── feature/chat
      └── feature/research
```

Direct commits to the **main** branch are not allowed.

---

# Development Workflow

1. Select an assigned task.
2. Create a feature branch.
3. Develop the feature.
4. Test the implementation locally.
5. Commit changes with meaningful commit messages.
6. Create a Pull Request.
7. Code Review by Project Lead.
8. Merge into the **develop** branch.
9. Merge into **main** after successful testing.

---

# Communication Guidelines

The team should communicate regularly regarding:

- Feature implementation
- Progress updates
- Bug reports
- Pull requests
- Integration issues
- Sprint planning

Weekly meetings should be conducted to review completed work, discuss blockers, and plan upcoming development.

---

# Responsibility Principles

- Every member owns their assigned modules.
- Team members should assist each other whenever integration between modules is required.
- Code quality is the responsibility of every contributor.
- Documentation should be updated whenever significant changes are made.
- Collaboration and communication are essential for successful project completion.

---

# Project Motto

> **Build Together. Learn Together. Grow Together.**
