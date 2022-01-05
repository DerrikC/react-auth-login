import React, { useRef, emailRef, passwordRef, passwordConfirmRef, useState} from "react"
//taking from bootstrap
import { Form, Button, Card } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        // check if passwords are the same
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
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
        <Form>
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
            <Button type="submit">Sign Up</Button>
        </Form>
        </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
        Already have an account? Log In
        </div>
        </>
    )
}