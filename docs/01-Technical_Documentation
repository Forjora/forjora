# 🚀 Forgora - Technical Documentation

> This document contains all the technical decisions, technologies, architecture, and implementation details of the Forgora platform.

---

# 📚 Table of Contents

1. Tech Stack
2. Project Architecture
3. Folder Structure
4. Development Workflow
5. Database Collections
6. API Endpoints
7. Authentication Flow
8. External APIs
9. Environment Variables
10. NPM Packages
11. Coding Standards
12. Git Workflow
13. Deployment
14. Future Enhancements

---

# 1️⃣ Tech Stack

## 🎨 Frontend

- React.js
- Tailwind CSS
- React Router DOM
- Axios

### Responsibilities

- User Interface
- Routing
- State Management
- API Requests

---

## ⚙️ Backend

- Node.js
- Express.js

### Responsibilities

- REST API Development
- Authentication
- Business Logic
- Database Communication

---

## 🗄️ Database

- MongoDB Atlas
- Mongoose

### Responsibilities

- Store User Data
- Store Projects
- Store Teams
- Store Applications

---

## 🔐 Authentication

- JSON Web Token (JWT)
- bcrypt

### Responsibilities

- User Login
- User Registration
- Password Encryption
- Secure API Access

---

## 🌐 Version Control

- Git
- GitHub

---

## ☁️ Deployment

Frontend → Vercel

Backend → Render

Database → MongoDB Atlas

---

# 2️⃣ Project Architecture

```
                    User

                      │

                React Frontend

                      │

              Axios API Requests

                      │

             Express.js Backend

                      │

                Mongoose ODM

                      │

               MongoDB Atlas
```

---

# 3️⃣ Folder Structure

```text
forgora/

│

├── client/
│   ├── public/
│   ├── src/
│   │
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── context/
│   ├── services/
│   ├── utils/
│   └── App.jsx
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
└── docs/
```

---

# 4️⃣ Development Workflow

```
Requirement

↓

UI Design

↓

Frontend Development

↓

Backend Development

↓

Database Integration

↓

Testing

↓

Deployment
```

---

# 5️⃣ Database Collections

## 👤 Users

| Field | Type |
|---------|------|
| _id | ObjectId |
| name | String |
| email | String |
| password | String |
| college | String |
| branch | String |
| skills | Array |
| interests | Array |
| github | String |
| linkedin | String |
| availability | String |

---

## 📂 Projects

| Field | Type |
|---------|------|
| _id | ObjectId |
| title | String |
| description | String |
| requiredSkills | Array |
| owner | ObjectId |
| deadline | Date |
| status | String |

---

## 👥 Teams

| Field | Type |
|---------|------|
| _id | ObjectId |
| teamName | String |
| leader | ObjectId |
| members | Array |
| project | ObjectId |

---

## 📨 Applications

| Field | Type |
|---------|------|
| _id | ObjectId |
| projectId | ObjectId |
| applicant | ObjectId |
| status | String |

---

# 6️⃣ Planned API Endpoints

| Endpoint | Method | Purpose |
|------------|--------|----------------|
| /signup | POST | Register User |
| /login | POST | Login User |
| /users | GET | Get Users |
| /profile | GET | Get User Profile |
| /profile | PUT | Update Profile |
| /projects | POST | Create Project |
| /projects | GET | View Projects |
| /projects/:id | GET | Project Details |
| /teams | POST | Create Team |
| /teams | GET | View Teams |
| /applications | POST | Apply to Project |

---

# 7️⃣ Authentication Flow

```
User Signup

↓

Password Encrypted (bcrypt)

↓

Saved to MongoDB

↓

User Login

↓

JWT Generated

↓

JWT Stored

↓

Protected Routes Access
```

---

# 8️⃣ External APIs

| API | Purpose |
|------|----------|
| GitHub API | Fetch repositories and profile information |
| Gemini API *(Future)* | AI teammate recommendation |
| Email Service *(Future)* | Verification emails |

---

# 9️⃣ Environment Variables

```env
PORT=

MONGO_URI=

JWT_SECRET=

GITHUB_CLIENT_ID=

GITHUB_CLIENT_SECRET=
```

---

# 🔟 Required NPM Packages

## Frontend

- react-router-dom
- axios
- tailwindcss

---

## Backend

- express
- mongoose
- dotenv
- cors
- bcryptjs
- jsonwebtoken
- nodemon

---

# 1️⃣1️⃣ Coding Standards

## Naming Convention

Variables

```javascript
userName
projectTitle
teamMembers
```

Components

```javascript
Navbar.jsx

Dashboard.jsx

ProfileCard.jsx
```

Functions

```javascript
createProject()

loginUser()

getProjects()
```

---

## Best Practices

- Use async/await
- Keep components reusable
- Keep APIs RESTful
- Write meaningful variable names
- Avoid duplicate code
- Comment only when necessary

---

# 1️⃣2️⃣ Git Workflow

Main Branch

```
main
```

Development Branch

```
develop
```

Feature Branch Example

```
feature/login

feature/dashboard

feature/project-module
```

Commit Message Format

```
feat: Added Login Page

fix: Resolved Authentication Bug

docs: Updated Technical Documentation

style: Improved Navbar UI
```

---

# 1️⃣3️⃣ Deployment Plan

| Service | Platform |
|----------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |
| Version Control | GitHub |

---

# 1️⃣4️⃣ Future Enhancements

- AI Team Recommendation
- Real-Time Chat
- Team Calendar
- Notifications
- GitHub Skill Verification
- Resume Upload
- Project Recommendation
- Research Paper Collaboration
- Hackathon Matching
- Startup Team Formation

---

# ✅ Current Progress

- [x] Project Idea Finalized
- [x] Documentation Started
- [ ] UI Design
- [ ] Database Design
- [ ] Authentication Module
- [ ] Dashboard
- [ ] Project Module
- [ ] Team Matching
- [ ] Testing
- [ ] Deployment

---

## 📝 Notes

- This document should be updated whenever a new technology, API, or architecture decision is introduced.
- All team members should refer to this document before implementing new features.

---

**Last Updated:** 27 July 2026
