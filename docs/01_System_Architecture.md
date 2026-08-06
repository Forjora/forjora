# System Architecture

This document describes the overall architecture of **Forjora**, the interaction between different modules, data flow, external services, and the design principles followed during development.

---

# Architecture Overview

Forjora follows a **three-tier architecture** consisting of:

```
Presentation Layer (Frontend)
            │
            ▼
Application Layer (Backend APIs & Business Logic)
            │
            ▼
Data Layer (Database & External Services)
```

This architecture ensures modularity, maintainability, and scalability while keeping frontend and backend responsibilities separate.

---

# High-Level Architecture

```
                    +-----------------------+
                    |      User Browser     |
                    +-----------+-----------+
                                |
                                |
                    HTTP / HTTPS Requests
                                |
                                ▼
+--------------------------------------------------------+
|                    Frontend (Next.js)                  |
|--------------------------------------------------------|
| Authentication                                         |
| Dashboard                                              |
| Projects                                               |
| Research                                                |
| Hackathons                                             |
| Event Calendar                                         |
| Chat UI                                                |
| AI Assistant                                           |
| GitHub Integration UI                                  |
+-------------------------+------------------------------+
                          |
                    REST API Calls
                          |
                          ▼
+--------------------------------------------------------+
|               Backend (Node.js + Express)             |
|--------------------------------------------------------|
| Authentication                                         |
| User Management                                        |
| Project Management                                     |
| Research Collaboration                                 |
| Hackathon Workspace                                    |
| GitHub Integration                                     |
| AI Services                                            |
| Notification System                                    |
| Project Health                                         |
+-------------------------+------------------------------+
                          |
            -------------------------------
            |             |               |
            ▼             ▼               ▼
      MongoDB Atlas   Cloudinary     External APIs
                                        |
                                        |
                      --------------------------
                      |                        |
                      ▼                        ▼
                GitHub API              Gemini API
```

---

# Architecture Layers

## 1. Presentation Layer

The Presentation Layer is responsible for user interaction.

### Responsibilities

- User Interface
- Form Validation
- API Communication
- State Management
- Responsive Design
- Client-side Navigation

### Technologies

- Next.js
- React.js
- TypeScript
- Tailwind CSS
- Shadcn UI

---

## 2. Application Layer

The Application Layer contains all business logic.

### Responsibilities

- Authentication
- Authorization
- API Processing
- Project Management
- Team Management
- AI Requests
- GitHub Integration
- Event Management
- Research Collaboration

### Technologies

- Node.js
- Express.js

---

## 3. Data Layer

Responsible for persistent storage and third-party integrations.

### Responsibilities

- User Data
- Project Data
- Research Data
- Chat Messages
- Events
- Files
- Images

### Technologies

- MongoDB Atlas
- Cloudinary

---

# Core Modules

## User Management

Responsible for:

- Registration
- Login
- Authentication
- User Profiles
- Skills
- Availability
- Portfolio

---

## Project Collaboration

Responsible for:

- Create Project
- Join Team
- Team Invitations
- Task Management
- Progress Tracking

---

## GitHub Integration

Responsible for:

- Connecting GitHub accounts
- Fetching repositories
- Displaying contribution history
- Linking project repositories

---

## Project Health

Responsible for calculating project health based on:

- GitHub commits
- Task completion
- Team activity
- Deadline progress

---

## AI Project Assistant

Responsible for:

- Project roadmap generation
- Technology recommendations
- Architecture guidance
- API suggestions
- Weekly summaries

---

## Research Collaboration

Responsible for:

- Finding research partners
- Published paper showcase
- Research journey tracking
- Shared workspace
- Team chat

---

## AI Research Guide

Responsible for:

- Publication guidance
- Journal recommendations
- Research roadmap
- Literature review guidance
- Resource recommendations

---

## Hackathon Workspace

Responsible for:

- Team dashboard
- Team chat
- Countdown timer
- Submission checklist
- Event reminders

---

## Event Calendar

Responsible for displaying:

- Hackathons
- Coding Competitions
- Workshops
- Meetings
- Deadlines
- Research Milestones

---

# External Integrations

## GitHub REST API

Used for:

- Repository Integration
- Contribution Statistics
- Repository Links

---

## Gemini API

Used for:

- AI Project Assistant
- AI Research Guide
- Weekly Summary Generation

---

## Cloudinary

Used for:

- Profile Pictures
- Project Screenshots
- Research Documents
- Images

---

# Authentication Flow

```
User

↓

Login / Register

↓

Express Authentication API

↓

JWT Generated

↓

JWT Stored

↓

Authenticated Requests

↓

Protected Routes
```

---

# Project Workflow

```
Create Project

↓

Invite Members

↓

Accept Invitation

↓

Assign Tasks

↓

GitHub Repository Linked

↓

Project Health Tracking

↓

Project Showcase
```

---

# Research Workflow

```
Search Research Domain

↓

Find Collaborators

↓

Create Research Workspace

↓

Research Journey

↓

Paper Submission

↓

Published Paper Showcase
```

---

# Hackathon Workflow

```
Join Event

↓

Create Team

↓

Hackathon Workspace

↓

Countdown Timer

↓

Submission Checklist

↓

Project Submission
```

---

# AI Request Flow

```
User Question

↓

Frontend

↓

Backend API

↓

Gemini API

↓

Response Generated

↓

Displayed to User
```

---

# GitHub Integration Flow

```
Connect GitHub Account

↓

Backend Verification

↓

GitHub REST API

↓

Fetch Repository Data

↓

Display on Dashboard

↓

Update Project Health
```

---

# Real-Time Communication Flow

```
User A

↓

Socket.io Server

↓

User B

↓

Instant Message Delivery
```

---

# Notification Flow

```
Event Created

↓

Backend

↓

Notification Service

↓

Socket.io

↓

User Receives Notification
```

---

# Design Principles

The architecture follows the following principles:

- Separation of Concerns
- Modular Design
- Reusable Components
- RESTful API Design
- Secure Authentication
- Scalable Backend
- Maintainable Codebase
- Mobile-Responsive Frontend

---

# Scalability

The architecture has been designed to support future enhancements such as:

- Mentor System
- Team Reputation
- AI Interview Assistant
- Mobile Application
- GitHub Webhooks
- Email Notifications
- Video Calling
- Multi-University Support
- Analytics Dashboard

---

# Architecture Summary

Forjora follows a modular three-tier architecture where the frontend, backend, database, and external services remain independent but communicate through well-defined REST APIs. This design simplifies maintenance, encourages scalability, and allows multiple team members to work on different modules simultaneously with minimal conflicts.
