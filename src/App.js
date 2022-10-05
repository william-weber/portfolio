import { Route, Routes, NavLink } from "react-router-dom"

import logo from './logo.svg';
import './App.css';

import HomePage from "./pages/HomePage"
import Portfolio from "./pages/Portfolio"


export default function App() {
  return (
    <div className="app">
      <h1>William Weber</h1>
      <div className="separator">&nbsp;</div>
      <div className="mainbox">
        <div className="menu">
          <ul>
            <NavLink to="/">
              <li><div>About</div><div className="underline">About</div></li>
            </NavLink>
            <NavLink to="/portfolio">
              <li><div>Portfolio</div><div className="underline">Portfolio</div></li>
            </NavLink>
            <NavLink to="/resume">
              <li><div>Resume</div><div className="underline">Resume</div></li>
            </NavLink>
          </ul>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

