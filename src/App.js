import { Route, Routes } from "react-router-dom"

import logo from './logo.svg';
import './App.css';

import HomePage from "./pages/HomePage"
import UserPage from "./pages/UserPage"


export default function App() {
  return (
    <div className="app">
      <h1>William Weber</h1>
      <div className="menu">
        <ul>
          <li>About</li>
          <li>Portfolio</li>
          <li>Resume</li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/:id" element={<UserPage/>} />
      </Routes>
    </div>
  )
}

