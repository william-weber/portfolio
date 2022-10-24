import { Route, Routes, NavLink } from "react-router-dom"

import logo from './logo.svg';
import './App.css';

import HomePage from "./pages/HomePage"
import Portfolio from "./pages/Portfolio"


export default function App() {
  return (
    <div className="container mx-auto h-screen place-content-center bg-slate-800 text-slate-50 w-2/3 my-12 ring-1 ring-white/10 ring-inset">
      <div className="font-mono text-xl subpixel-antialiased border-4 border-b-slate-400 p-2 border-t-yellow-50 border-l-yellow-50 border-r-slate-400 bg-blue-900">William Weber</div>
      <div className="flex flex-row">
        <div className="w-1/4">
          <ul>
            <NavLink to="/">
              <li className="bg-indigo-800 hover:bg-amber-500 h-10"><div>About</div></li>
            </NavLink>
            <NavLink to="/portfolio">
              <li className="bg-indigo-800 h-10"><div>Portfolio</div></li>
            </NavLink>
            <NavLink to="/resume">
              <li className="bg-indigo-800 h-10"><div>Resume</div></li>
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

