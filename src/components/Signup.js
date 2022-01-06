import React, { useRef, useState} from "react"
//taking from bootstrap
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        // check if passwords are the same
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            // can use await because it is an async function
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }

    return (
        //need the blank tag for jsx formatting
        <>
        <Card>
        <Card.Body>
        <h2 className="text-center mb-4"> Sign Up</h2>
    
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} require />
            </Form.Group>
            <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} require />
            </Form.Group>
            <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" ref={passwordConfirmRef} require />
            </Form.Group>
            <Button disabled={loading} type="submit">Sign Up</Button>
        </Form>
        </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Login</Link>
        </div>
        </>
    )
}