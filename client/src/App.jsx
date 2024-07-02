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
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
<<<<<<< HEAD
import PostPage from "./pages/PostPage";
import ScrollToTop from "./components/ScrollToTop";
import Search from "./pages/Search";
=======
>>>>>>> 741367dfc230e27f63868e94abd5cab298460d97

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <ScrollToTop />
=======
>>>>>>> 741367dfc230e27f63868e94abd5cab298460d97
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/post/:postSlug" element={<PostPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route>
      </Routes>
      <FooterComp />
    </BrowserRouter>
  );
}

export default App