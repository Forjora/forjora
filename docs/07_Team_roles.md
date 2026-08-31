# Team Roles & Responsibilities

## 1. Team Overview

Forjora is developed by a five-member team, with each member responsible for a major functional area of the platform. The responsibilities are divided according to technical specialization while maintaining collaboration between modules to ensure smooth system integration.

| Member   | Name    | Role                                       | Difficulty |
| -------- | ------- | ------------------------------------------ | ---------: |
| Member 1 | Nikhil  | Frontend Manager                           |       8/10 |
| Member 2 | Vaisakh | Authentication & Backend                   |     7.5/10 |
| Member 3 | Sugam   | Project Collaboration & GitHub Integration |   9.5/10 ⭐ |
| Member 4 | Kuldeep | Communication & Hackathon Workspace        |     8.5/10 |
| Member 5 | Harsh   | AI & Research Collaboration                |       9/10 |

---

# 2. Member 1 — Nikhil

## Role

**Frontend Manager**

## Difficulty

**8/10**

## Responsibilities

Nikhil is responsible for the overall frontend architecture, user interface, user experience, and integration of the frontend with backend services.

### Primary Responsibilities

* Design the overall UI/UX of Forjora.
* Develop reusable and scalable frontend components.
* Implement responsive layouts for different screen sizes.
* Build major frontend pages and dashboards.
* Maintain frontend design consistency across all modules.
* Integrate backend APIs with the frontend.
* Handle frontend state management where required.
* Implement loading, error, and empty states.
* Coordinate frontend requirements with all other team members.
* Ensure smooth integration of authentication, projects, chat, hackathons, research, and AI features.
* Review frontend contributions from other team members.
* Maintain frontend coding standards and component structure.

### Key Modules

* Main Dashboard
* User Profile
* Team Discovery Interface
* Project Interface
* Hackathon Interface
* Research Interface
* AI Assistant Interface
* Calendar Interface
* Navigation and Shared Components

### Collaboration Requirements

Nikhil must coordinate closely with:

* **Vaisakh** for authentication and backend APIs.
* **Sugam** for project and GitHub-related interfaces.
* **Kuldeep** for chat, notifications, hackathon, and calendar interfaces.
* **Harsh** for AI and research interfaces.

---

# 3. Member 2 — Vaisakh

## Role

**Authentication & Backend Developer**

## Difficulty

**7.5/10**

## Responsibilities

Vaisakh is responsible for the backend foundation of Forjora, including authentication, user management, database integration, security, and core APIs.

### Primary Responsibilities

* Design and implement the backend architecture.
* Implement user registration and login.
* Develop authentication and authorization systems.
* Implement JWT-based authentication.
* Manage user profiles and account information.
* Design and maintain database schemas.
* Implement secure password handling.
* Develop core REST APIs.
* Implement validation and error handling.
* Configure environment variables and backend security.
* Manage database connectivity.
* Implement role and permission handling where required.
* Provide APIs required by other modules.
* Maintain backend coding standards.

### Key Modules

* Authentication
* User Management
* Profile Management
* Database Integration
* Core APIs
* Authorization
* Security

### Collaboration Requirements

Vaisakh must coordinate with:

* **Nikhil** for frontend API integration.
* **Sugam** for project and GitHub-related APIs.
* **Kuldeep** for chat, notifications, and hackathon APIs.
* **Harsh** for AI and research-related APIs.

---

# 4. Member 3 — Sugam

## Role

**Project Collaboration & GitHub Integration Developer**

## Difficulty

**9.5/10 ⭐**

## Responsibilities

Sugam is responsible for the most interconnected functional area of Forjora: project collaboration, team management, task management, Project Health, and GitHub integration.

### Primary Responsibilities

* Implement project creation and management.
* Develop project discovery functionality.
* Implement team creation and team management.
* Implement project invitations and joining mechanisms.
* Develop task creation and assignment.
* Implement task progress tracking.
* Develop project activity tracking.
* Implement Project Health calculation and logic.
* Integrate GitHub APIs.
* Connect GitHub repositories with Forjora projects.
* Retrieve relevant GitHub activity.
* Track repository activity such as commits and contributions.
* Integrate GitHub activity with Project Health.
* Develop project showcase functionality.
* Support project screenshots, technology stacks, repositories, and live demos.
* Implement project-related backend APIs.

### Key Modules

* Project Management
* Team Management
* Task Management
* Project Showcase
* GitHub Integration
* Project Health
* Project Activity

### Project Health

The Project Health system may consider:

* Recent GitHub commits
* Task completion
* Team activity
* Pending tasks
* Project deadlines
* Development activity

The system generates an overall project health indicator to help teams understand the current state of their project.

### Collaboration Requirements

Sugam must coordinate closely with:

* **Nikhil** for project UI and GitHub interface.
* **Vaisakh** for project-related backend infrastructure and database APIs.
* **Kuldeep** for project communication and activity notifications.
* **Harsh** for AI-powered project guidance and weekly reports.

---

# 5. Member 4 — Kuldeep

## Role

**Communication & Hackathon Workspace Developer**

## Difficulty

**8.5/10**

## Responsibilities

Kuldeep is responsible for real-time communication, notifications, hackathon collaboration, reminders, and calendar-related functionality.

### Primary Responsibilities

* Implement real-time team communication using Socket.io.
* Develop team and project chat.
* Implement real-time messaging.
* Develop notification functionality.
* Implement unread message and notification indicators.
* Develop the Hackathon Workspace.
* Implement hackathon team dashboards.
* Develop hackathon countdown timers.
* Implement hackathon-specific checklists.
* Develop reminders and deadline notifications.
* Integrate hackathon events with the calendar.
* Implement team meeting and project deadline events.
* Support real-time updates where required.

### Hackathon Checklist

The hackathon workspace should support a dedicated submission checklist such as:

* ☐ Form Team
* ☐ Finalize Problem Statement
* ☐ Create GitHub Repository
* ☐ Assign Tasks
* ☐ Prepare PPT
* ☐ Deploy Project
* ☐ Upload Demo Video
* ☐ Submit Before Deadline

### Key Modules

* Real-Time Chat
* Notifications
* Hackathon Workspace
* Hackathon Dashboard
* Countdown Timer
* Reminders
* Calendar Integration

### Collaboration Requirements

Kuldeep must coordinate with:

* **Nikhil** for chat, notification, hackathon, and calendar UI.
* **Vaisakh** for communication and notification APIs.
* **Sugam** for project/team communication integration.
* **Harsh** where AI-generated reminders or reports interact with communication features.

---

# 6. Member 5 — Harsh

## Role

**AI & Research Collaboration Developer**

## Difficulty

**9/10**

## Responsibilities

Harsh is responsible for integrating AI-powered functionality and developing the research collaboration ecosystem within Forjora.

### Primary Responsibilities

* Integrate the Gemini API.
* Develop AI-powered assistants.
* Implement prompt engineering and AI workflows.
* Develop the AI Project Assistant.
* Implement AI-generated project roadmaps.
* Implement technology and architecture recommendations.
* Develop weekly AI-generated work reports.
* Develop the Research Collaboration module.
* Implement research profiles and research interests.
* Develop research collaboration workflows.
* Implement research milestone tracking.
* Develop the AI Research Guide.
* Provide research process guidance.
* Recommend research directions and resources.
* Provide guidance regarding journals and conferences.
* Ensure AI guidance does not simply generate complete research papers.

### Research Workflow

The research collaboration module should support the following journey:

```text
Research Idea
      ↓
Find Collaborators
      ↓
Literature Review
      ↓
Identify Research Gap
      ↓
Define Objectives
      ↓
Methodology
      ↓
Data Collection / Experiment
      ↓
Data Analysis
      ↓
Write Paper
      ↓
Review & Revisions
      ↓
Select Journal / Conference
      ↓
Submission
      ↓
Published (Optional)
```

### Key Modules

* AI Project Assistant
* AI Research Guide
* Gemini API Integration
* Weekly Work Report Generator
* Research Profiles
* Research Collaboration
* Research Journey Tracking
* Research Milestones

### Collaboration Requirements

Harsh must coordinate with:

* **Nikhil** for AI and research interfaces.
* **Vaisakh** for AI and research APIs and database integration.
* **Sugam** for AI features related to project activity and Project Health.
* **Kuldeep** for reports, reminders, notifications, and collaboration features.

---

# 7. Cross-Team Responsibilities

Although each member owns a specific module, Forjora requires continuous collaboration between all members.

### Frontend ↔ Backend

**Nikhil ↔ Vaisakh**

Responsible for:

* API integration
* Authentication flow
* Data handling
* Error handling
* API contracts

### Frontend ↔ Project/GitHub

**Nikhil ↔ Sugam**

Responsible for:

* Project dashboards
* Project creation interfaces
* Team management UI
* GitHub integration UI
* Project Health visualization

### Frontend ↔ Communication/Hackathons

**Nikhil ↔ Kuldeep**

Responsible for:

* Chat interface
* Notifications
* Hackathon workspace
* Calendar
* Countdown and checklist UI

### Frontend ↔ AI/Research

**Nikhil ↔ Harsh**

Responsible for:

* AI assistant interface
* Research workspace
* Research journey UI
* AI-generated reports
* Research milestone interfaces

### Backend ↔ All Modules

**Vaisakh ↔ Sugam/Kuldeep/Harsh**

Responsible for:

* API contracts
* Database integration
* Authentication
* Data validation
* Security
* Module-to-module communication

---

# 8. Module Ownership Summary

| Module                 | Primary Owner | Supporting Member |
| ---------------------- | ------------- | ----------------- |
| Frontend Architecture  | Nikhil        | All               |
| UI/UX                  | Nikhil        | All               |
| Authentication         | Vaisakh       | Nikhil            |
| User Management        | Vaisakh       | Nikhil            |
| Core Backend           | Vaisakh       | All               |
| Project Management     | Sugam         | Nikhil, Vaisakh   |
| Team Management        | Sugam         | Nikhil, Vaisakh   |
| Task Management        | Sugam         | Nikhil            |
| GitHub Integration     | Sugam         | Nikhil, Vaisakh   |
| Project Health         | Sugam         | Harsh, Nikhil     |
| Real-Time Chat         | Kuldeep       | Nikhil, Vaisakh   |
| Notifications          | Kuldeep       | Nikhil, Vaisakh   |
| Hackathon Workspace    | Kuldeep       | Nikhil, Vaisakh   |
| Calendar               | Kuldeep       | Nikhil, Vaisakh   |
| AI Assistant           | Harsh         | Nikhil, Vaisakh   |
| Weekly AI Reports      | Harsh         | Sugam, Kuldeep    |
| Research Collaboration | Harsh         | Nikhil, Vaisakh   |
| Research Journey       | Harsh         | Nikhil            |
| AI Research Guide      | Harsh         | Nikhil            |

---

# 9. Team Development Principles

All team members should follow these principles during development:

* Maintain clear ownership of assigned modules.
* Communicate API and schema changes before implementation.
* Follow the project's coding standards.
* Use Git branches for feature development.
* Create meaningful commit messages.
* Review code before merging major changes.
* Test features before integration.
* Avoid breaking existing functionality.
* Keep documentation updated when major changes are introduced.
* Coordinate with the frontend manager before making major UI or API changes.
* Ensure all modules integrate consistently with the overall Forjora architecture.

---

# 10. Responsibility Philosophy

Forjora follows a **module ownership with team collaboration** approach.

Each member is primarily responsible for developing and maintaining their assigned module, while major features are developed through coordination between the relevant members.

The goal is not only to divide the workload but to ensure that every major component of Forjora has a clear owner while maintaining a unified and integrated platform.

> **One team. Clear ownership. Shared responsibility.**

