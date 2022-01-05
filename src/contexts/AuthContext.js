import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
const [currentUser, setCurrentUser] = useState()
const [loading, setLoading] = useState(true)

function signup(email, password){
//need this to call to firebase
    return auth.createUserWithEmailAndPassword (email, password)
}

useEffect(() => {
//when this method is called it will return unsubscribe
   const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
        setLoading(false)
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
        {!loading && children}
    </AuthContext.Provider>
)
}



