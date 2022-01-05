import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
const [currentUser, setCurrentUser] = useState()

function signup(email, password){
    return auth.createUSerWithEmailAndPassword (email, password)
}

useEffect(() => {
//when this method is called it will return unsubscribe
   const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
    })

    return unsubscribe
}, [])

//pass as context
const value = {
    currentUser,
    signup
}

return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
)
}



