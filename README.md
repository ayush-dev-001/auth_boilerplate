# 🔐 Full-Stack Authentication Boilerplate

A production-ready authentication boilerplate built with a modern full-stack architecture: **React**, **Vite**, **Tailwind CSS**, **Node.js**, **Express**, **TypeScript**, **Prisma ORM (Prisma 8)**, **PostgreSQL**, and **Docker**.

This project provides a robust foundation for building full-stack applications with secure authentication, token management, and modern UI.

---

## 🚀 Tech Stack

### Frontend
- **React 19**
- **Vite**
- **Tailwind CSS v4**
- **React Router DOM v7** (Nested layouts & wildcard 404 handling)
- **TypeScript**

### Backend
- **Node.js & Express.js**
- **TypeScript**
- **Prisma ORM 8** with `@prisma/orm-postgres`
- **PostgreSQL** running via **Docker Compose**
- **JWT (JSON Web Tokens)** & **Refresh Tokens**
- **bcrypt** (Password hashing)
- **Zod** (Schema validation)
- **cookie-parser** (Secure HTTP-only cookies)

---

## 📁 Features & Implementation

### 🛡️ Authentication & Security
- **Signup Flow**: User registration with input validation via Zod (email, password complexity, username, name, age).
- **Signin Flow**: Authentication by email or username, password verification with bcrypt.
- **JWT Access & Refresh Tokens**:
  - Short-lived Access Token (15m) returned for authorization.
  - Long-lived Refresh Token (7d) saved inside secure `httpOnly` cookies to mitigate XSS attacks.
  - Refresh endpoint (`POST /api/refresh`) to rotate and renew access tokens seamlessly.
- **Token Verification Middleware**: Middleware to protect authenticated API routes (`authenticateToken`).

### 🎨 Modern Frontend
- Responsive dual-column authentication layout with custom SVG illustration banner.
- Dedicated routes for **Login** (`/auth/login`), **Signup** (`/auth/signup`), and landing selection (`/auth`).
- Full-screen **404 Not Found** page for invalid routes.
- Tailwind CSS with smooth hover/focus transitions.

---

## 📂 Project Structure

```
auth-boilerplate/
├── backend/
│   ├── src/
│   │   ├── middleware/
│   │   │   └── auth.ts                 # Access token validation middleware
│   │   ├── prisma/
│   │   │   ├── contract.prisma         # Prisma schema (User & Address models)
│   │   │   └── db.ts                   # Prisma client connection
│   │   ├── routes/
│   │   │   ├── signin.ts               # Login route (issues access & refresh tokens)
│   │   │   ├── signup.ts               # Registration route
│   │   │   └── refresh.ts              # Refresh token rotation route
│   │   ├── schema/
│   │   │   ├── user.ts                 # Zod validation schema for signup
│   │   │   └── userLoginSchema.ts      # Zod validation schema for signin
│   │   ├── utils/
│   │   │   └── token.ts                # JWT sign & verify utility helpers
│   │   └── index.ts                    # Express entrypoint
│   ├── docker-compose.yml              # PostgreSQL container configuration
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── assets/                     # SVG banners and illustrations
│   │   ├── components/
│   │   │   ├── banner.tsx              # Auth illustration side banner
│   │   │   ├── login.tsx               # Login form component
│   │   │   ├── signup.tsx              # Signup form component
│   │   │   └── NotFound.tsx            # 404 page
│   │   ├── pages/
│   │   │   ├── Auth.tsx                # Auth layout wrapper & selection page
│   │   │   └── Home.tsx                # Home page
│   │   ├── App.tsx                     # Route definitions
│   │   ├── main.tsx                    # React root with BrowserRouter
│   │   └── index.css                   # Tailwind imports & global styles
│   ├── package.json
│   └── vite.config.ts
│
└── README.md
```

---

## 🛠️ Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [Docker & Docker Compose](https://www.docker.com/)

### 2. Database Setup (Docker)
In the `backend` directory, start the PostgreSQL container:
```bash
cd backend
docker compose up -d
```

### 3. Backend Setup
```bash
cd backend
npm install
npm run dev
```
The server will start at `http://localhost:3001`.

### 4. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The client will start at `http://localhost:5173`.

---

## 📌 Roadmap

- [x] Docker PostgreSQL setup
- [x] Prisma 8 schema & migrations
- [x] Express TypeScript backend architecture
- [x] User registration with Zod validation (`/api/signup`)
- [x] Password hashing with bcrypt
- [x] Signin with email / username (`/api/signin`)
- [x] JWT Access Tokens
- [x] Refresh Tokens in HTTP-only cookies
- [x] Token refresh endpoint (`/api/refresh`)
- [x] Authentication middleware (`authenticateToken`)
- [x] React + Vite + Tailwind CSS frontend
- [x] Responsive Auth pages (Login, Signup, Selection)
- [x] 404 Not Found handling
- [ ] Connect Frontend forms to Backend API (Fetch / Axios)
- [ ] Password Reset / Forgot Password flow
- [ ] Google OAuth 2.0 integration
- [ ] Role-Based Access Control (RBAC)
- [ ] Automated end-to-end testing
