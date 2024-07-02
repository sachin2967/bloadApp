import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import Header from './components/Header'
import './App.css'
import FooterComp from './components/FooterComp'
import PrivateRoute from './components/PrivateRoute'


function App() {
  return (
    <BrowserRouter>
          <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <FooterComp/>
    </BrowserRouter>
  );
}

export default App