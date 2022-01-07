import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function PrivateRoute({ element }) {
  const { currentUser } = useAuth()

  //needed to remove render also changed redirect to navigate for v6 update
    return currentUser ? element  : <Navigate to="/login" />

}

