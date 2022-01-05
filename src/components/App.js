import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"

function App() {
  //render app
  return (
  //wrap everything to have access to Auth context
  <AuthProvider>
    <Container className="d-flex align-items-center justtify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style= {{ maxWidth: "400px" }} >
    <Signup />
    </div>
    </Container>
  </AuthProvider>
  )
}

export default App

