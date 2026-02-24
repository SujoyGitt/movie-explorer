# 🎬 Movie Explorer

A React movie browsing application built to practice and strengthen my understanding of:

- ⚛️ React Hooks
- 🌍 Context API
- 🔁 useReducer
- 🧭 React Router
- 🗂 Clean project structure

This project focuses on scalable state management and component architecture rather than just UI.

---

## 🚀 Features

- 🔎 Browse movies
- 📄 View movie details
- 🌍 Global state management using Context API
- 🔁 State logic handled with useReducer
- 🧭 Routing with React Router
- 🧱 Reusable components

---

## 🛠 Tech Stack

- React (Vite)
- React Router DOM
- Context API
- useReducer
- JavaScript (ES6+)
- CSS

---

## 📂 Project Structure


src/
│
├── assets/
├── component/
│ ├── movieCard.jsx
│ ├── movieList.jsx
│ └── Navbar.jsx
│
├── context/
│ ├── MovieContext.jsx
│ └── MovieReducer.jsx
│
├── page/
│ ├── Home.jsx
│ └── MovieDetails.jsx
│
├── App.jsx
├── main.jsx
└── App.css


---

## 🧠 What I Practiced

### 🔹 Context API
Created a global store using `MovieContext` to avoid prop drilling and manage shared state across components.

### 🔹 useReducer
Implemented reducer logic inside `MovieReducer.jsx` to handle:
- Fetching movies
- Updating state
- Managing loading and errors

### 🔹 Routing
Used `HashRouter`, `Routes`, and `Route` to create:
- `/` → Home Page
- `/moviedetails/:id` → Movie Details Page

---

## 💡 Why I Built This

Instead of only following tutorials, I wanted to:

- Practice real-world state architecture
- Improve folder structure organization
- Understand reducer-based state flow
- Prepare for larger scale applications

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/movie-explorer.git

Install dependencies:

npm install

Run the project:

npm run dev
📈 Future Improvements

Add search functionality

Add favorites feature

Implement pagination

Add API error handling improvements

Improve UI/UX design

Convert to TypeScript

👨‍💻 Author

Sujoy Ghosal
Frontend Developer
LinkedIn Profile
