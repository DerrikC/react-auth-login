import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"

function App() {
  //render app
  return (
  //wrap everything to have access to Auth context
  <AuthProvider>
    <Container className="d-flex align-items-center justtify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style= {{ maxWidth: "400px" }}>
    <Router>
        <Routes>
          {/* so you can not go to dashboard if not logged in */}
          <Route
           path="/" 
           element={
           <PrivateRoute>
           <Dashboard/>
           </PrivateRoute>
           } 
           />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
    </Router>
    </div>
    </Container>
  </AuthProvider>
  )
}

export default App
