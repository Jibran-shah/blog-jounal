# Blog Journal

A full-stack blogging application built with the MERN stack. Blog Journal allows users to explore and read blog posts, while authenticated members can create, edit, and manage their own blog content.

## Tech Stack

### Frontend
- React
- Vite
- Material UI (MUI)
- React Router
- TanStack Query
- React Hook Form
- Zod

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Zod Validation
- Cloudinary (Image Management)

## Features

- Browse and read blog posts.
- User authentication and authorization.
- Create, update, and delete blog posts.
- Blog category management.
- Rich text blog content.
- Image uploads and management.
- Form validation.
- RESTful API architecture.
- Responsive user interface.

## Project Structure

```text
Blog-Journal/
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Blog-Journal
```

### 2. Install Dependencies

Frontend:

```bash
cd frontend
npm install
```

Backend:

```bash
cd backend
npm install
```

### 3. Environment Variables

Create a `.env` file in both the `frontend` and `backend` directories.

Configure the required environment variables for each application.

### 4. Run the Application

Start the backend:

```bash
cd backend
npm run dev
```

Start the frontend in a separate terminal:

```bash
cd frontend
npm run dev
```

## License

This project is intended for personal and educational use.