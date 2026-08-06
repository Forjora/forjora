# Project Structure

This document defines the standard project structure for **Forjora**. The objective of this structure is to maintain consistency throughout development and ensure that every team member understands where different parts of the project belong.

The folder hierarchy described below represents the planned architecture of the project. As development progresses, folders and files will be created only when required.

---

# Root Structure

```
Forjora/
│
├── frontend/
├── backend/
├── docs/
├── .github/
├── README.md
├── LICENSE
└── .gitignore
```

---

# Root Directory Description

| Folder / File | Description |
|---------------|-------------|
| frontend | Contains the complete Next.js frontend application. |
| backend | Contains the Express.js backend server and REST APIs. |
| docs | Contains all project documentation. |
| .github | GitHub workflows, issue templates and pull request templates. |
| README.md | Introduction and setup instructions. |
| LICENSE | Project license. |
| .gitignore | Files and folders ignored by Git. |

---

# Frontend Structure

The frontend is developed using **Next.js**, **React.js**, and **TypeScript**.

```
frontend/
│
├── public/
│
├── src/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── context/
│   ├── services/
│   ├── lib/
│   ├── utils/
│   ├── constants/
│   ├── types/
│   ├── styles/
│   └── assets/
│
├── package.json
├── tsconfig.json
├── next.config.js
└── .env.local
```

---

## public/

Contains static assets that are directly accessible by the browser.

Examples include:

- Images
- Logos
- Icons
- Favicon

---

## src/

Contains the complete frontend source code.

---

## src/app/

Contains all application pages and routes using the Next.js App Router.

Examples include:

- Authentication
- Dashboard
- Projects
- Research
- Hackathons
- Event Calendar
- User Profile
- Settings

---

## src/components/

Contains reusable UI components.

Examples include:

- Navigation Bar
- Sidebar
- Project Cards
- Chat Components
- AI Components
- Calendar Components
- Dashboard Widgets

---

## src/hooks/

Contains reusable React Hooks.

Examples include:

- Authentication Hook
- Project Hook
- Chat Hook
- GitHub Hook

---

## src/context/

Contains React Context Providers for managing global application state.

Examples include:

- Authentication Context
- Theme Context
- Chat Context

---

## src/services/

Contains functions responsible for communicating with backend APIs.

Examples include:

- Authentication Service
- Project Service
- AI Service
- GitHub Service
- Research Service
- Calendar Service

---

## src/lib/

Contains configurations for third-party libraries.

Examples include:

- Axios
- Socket.io Client

---

## src/utils/

Contains reusable helper functions.

Examples include:

- Date Formatting
- Progress Calculation
- Validation Helpers

---

## src/constants/

Stores application-wide constant values.

Examples include:

- API Endpoints
- User Roles
- Routes

---

## src/types/

Contains TypeScript interfaces and custom types.

Examples include:

- User
- Project
- Task
- Event

---

## src/styles/

Contains additional styling files if required.

---

## src/assets/

Contains local assets used throughout the application.

Examples include:

- SVG Files
- Illustrations
- Local Images

---

# Backend Structure

The backend is developed using **Node.js** and **Express.js**.

```
backend/
│
├── src/
│
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── sockets/
│   ├── validators/
│   ├── utils/
│   ├── uploads/
│   ├── app.js
│   └── server.js
│
├── package.json
├── .env
└── nodemon.json
```

---

## config/

Contains application configuration files.

Examples include:

- Database Configuration
- Cloudinary Configuration
- GitHub API Configuration
- Gemini API Configuration
- Socket.io Configuration

---

## controllers/

Contains business logic for each API endpoint.

Controllers receive requests from routes, process them, and return responses.

---

## middleware/

Contains Express middleware.

Examples include:

- Authentication Middleware
- Error Handling Middleware
- Upload Middleware
- Authorization Middleware

---

## models/

Contains MongoDB schemas and models.

Examples include:

- User
- Project
- Team
- Task
- Research
- Event
- Notification
- Message

---

## routes/

Defines all REST API endpoints.

Examples include:

- Authentication Routes
- User Routes
- Project Routes
- Research Routes
- AI Routes
- GitHub Routes
- Event Routes

---

## services/

Contains reusable business logic and integrations with external services.

Examples include:

- GitHub Integration
- Gemini AI
- Project Health Calculation
- Notification Service

---

## sockets/

Contains Socket.io logic used for real-time communication.

Examples include:

- Team Chat
- Notifications

---

## validators/

Contains request validation logic before requests reach the controllers.

Examples include:

- Login Validation
- Registration Validation
- Project Validation

---

## utils/

Contains helper functions used across the backend.

Examples include:

- JWT Token Generation
- Logger
- Image Upload Helpers
- Date Utilities

---

## uploads/

Temporarily stores uploaded files before they are processed and uploaded to Cloudinary.

---

## app.js

Initializes the Express application by configuring middleware, routes, and application settings.

---

## server.js

Starts the backend server and initializes Socket.io.

---

# Documentation Structure

```
docs/
│
├── 00_Project_Overview.md
├── 01_System_Architecture.md
├── 02_Technology_Stack.md
├── 03_Project_Structure.md
├── 04_Database_Design.md
├── 05_API_Documentation.md
├── 06_Features.md
├── 07_Team_Roles.md
├── 08_Development_Roadmap.md
├── 10_Coding_Standards.md
├── 11_Deployment.md
└── 12_Future_Enhancements.md
```

---

# Project Organization Principles

The project structure follows the following principles:

- Separation of frontend and backend code.
- Modular and reusable component design.
- Feature-based organization wherever possible.
- Clear separation of business logic from routing.
- Independent documentation for every major project aspect.
- Scalable architecture to support future enhancements.

---

# Note

The folders described in this document represent the planned architecture of the project. During development, folders and files will be created incrementally as features are implemented. Team members should follow this structure to maintain consistency across the codebase.

---

# Summary

The Forjora project structure has been designed to provide a clean, modular, and scalable foundation. This organization enables multiple developers to work simultaneously with minimal conflicts while keeping the codebase easy to understand, maintain, and extend as new features are added.
