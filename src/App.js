import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import EventDetail from "./components/EventDetail"
import NoMatch from "./components/NoMatch"
import SignUpForm from "./components/SignUpForm"
import PrivateRoute from "./components/PrivateRoute"
import Dashboard from "./components/Dashboard"
import UpdatePassword from "./components/UpdatePassword"
import ForgotPassword from "./components/ForgotPassword"
import { useState } from "react"
import LoginForm from "./components/LoginForm"
import Contact from "./components/Contact"

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
    <Navbar />
    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<SignUpForm />} />
      <Route path="/shows" element={<Hero />} />
      <Route path="/events/:id" element={<EventDetail />} />
      <Route path="*" element={<NoMatch />} />
      <Route
          path="forgot-password"
          element={
              <ForgotPassword />
          }
        /> 
        <Route
          path="resetpassword"
          element={
              <UpdatePassword />
          }
        />
        <Route path="/contact" element={<Contact />} />
{/* 
<Route path="/dashboard" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
          </PrivateRoute>
       
        } /> */}
    </Routes>
    </>
  )
}