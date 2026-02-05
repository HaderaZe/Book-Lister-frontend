# 📚 Book Lister Application

A modern, full-stack book management application built with React, TypeScript, Node.js, GraphQL, and MongoDB.

## ✨ Features

- 📖 Browse and manage book collection
- 🔍 Search and filter books
- ⭐ Rate books (1-5 stars)
- ➕ Add, edit, and delete books
- 📊 Dashboard with statistics
- 🎨 Modern UI with TailwindCSS
- 📱 Fully responsive design

## 🛠️ Tech Stack

### Backend
- Node.js + Express
- Apollo Server (GraphQL)
- MongoDB + Mongoose
- TypeScript

### Frontend
- React 18
- TypeScript
- Apollo Client
- TailwindCSS
- React Router
- React Icons

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
```bash
git clone <your-repo>
cd book-lister
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

4. Set up environment variables

Backend `.env`:
```
PORT=4000
MONGODB_URI=mongodb://localhost:27017/book-lister
NODE_ENV=development
```

Frontend `.env`:
```
VITE_GRAPHQL_URI=http://localhost:4000/graphql
```

5. Start MongoDB
```bash
mongod
```

6. Run backend
```bash
cd backend
npm run dev
```

7. Run frontend
```bash
cd frontend
npm run dev
```

Visit `http://localhost:5173`

## 📦 Project Structure
```
book-lister/
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── resolvers/
│   │   ├── schema/
│   │   └── server.ts
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── graphql/
│   │   └── App.tsx
│   └── package.json
└── README.md
```

## 🌐 Deployment

Deployed on:
- **Backend**: Render / Railway
- **Frontend**: Vercel / Netlify
- **Database**: MongoDB Atlas

Live Demo: [your-demo-url]

## 📄 License

MIT License

## 👨‍💻 Author

Hadera