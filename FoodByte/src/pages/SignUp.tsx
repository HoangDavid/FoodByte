import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Form, message } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { auth } from "../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import logo from '../../public/logo.png';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";



interface FirebaseError {
    code: string;
    message: string;
}

const SignUp = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const googleProvider = new GoogleAuthProvider();

    // Perform validation on input
    const validInput = (email: string, password: string) => {
        // Check if all fields are filled.
        // Check if email are valid.
        // Check if password contains at least 8 characters, an uppercase, a lowercase, and a number.
        if (email === "") {
        message.error("Email is required!");
        return false;
        }
        if (!email.includes("@")) {
        message.error("Please input a valid email!");
        return false;
        }
        if (password === "") {
        message.error("Password is required!");
        return false;
        }
        return true;
    };

    const handleSignup = async () => {
        if (validInput(email, password)) {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                console.log("User registered successfully: ", userCredential);
                message.success("Sign up successfully.")
                navigate("/login");
            } catch (error: any) {
                const firebaseError = error as FirebaseError;
                console.log("Error: ", firebaseError);
                message.error(firebaseError.message || "Failed to sign up.");
            }
        } else {
            console.log("Received invalid inputs.")
        }
    }

    const handleGoogleSignUp = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log("Google Sign Up successfully: ", user);
            message.success("Signed up and logged in successfully.");
            navigate('/login'); // Or direct to a different page as needed
        } catch (error: any) {
            const firebaseError = error as FirebaseError;
            console.log("Error during Google Sign Up: ", firebaseError);
            message.error(firebaseError.message || "Failed to sign up with Google.");
        }
    };
    
    return (
        <div
        // Styling the page
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            backgroundColor: "#fff3e0",
        }}
        >   
        <div className="logo-container">
            <img 
                src={logo}
                alt="Logo"
                className="logo" />
        
        </div>
            
            <div
                // Styling the Sign up form
                className="CenteredCard"
                style={{
                textAlign: "center",
                width: "450px",
                padding: "20px",
                borderRadius: "8px",
                backgroundColor: "white"
                }}
            >
                <Form form={form} name="Signup">
                <h1 style={{ color: "#1b4c47" }}>Sign Up</h1>

                <Form.Item
                    name="email"
                    style={{ textAlign: "left" }}
                >
                    {""}
                    <Input
                    placeholder="Email"
                    onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    // comments
                    style={{ textAlign: "left" }}
                >
                    {""}
                    <Input.Password
                    placeholder="Password"
                    onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                    icon={<UserAddOutlined />}
                    size="large"
                    htmlType="submit"
                    // handle submit here
                    style={{
                        backgroundColor: "#65b3a2",
                        border: "none",
                        color: "#fff3e0",
                        fontWeight: 600,
                        fontSize: "15px",
                        width: "250px",
                    }}
                    onClick={handleSignup}
                    >
                    {" "}
                    Sign up
                    </Button>
                </Form.Item>

                <Button
                    icon={<UserAddOutlined />}
                    size="large"
                    htmlType="button"
                    style={{
                        backgroundColor: "white",
                        border: "none",
                        color: "#777",
                        fontWeight: 600,
                        fontSize: "15px",
                        width: "250px",
                        marginTop: "10px"
                    }}
                    onClick={handleGoogleSignUp}
                >
                    Sign up with Google
                </Button>

                <Form.Item>
                    <Button // Button to get back to home
                    type="link"
                    block
                    onClick={() => navigate('/')}
                    style={{
                        color: "#bc8148",
                        fontWeight: 600,

                    }}
                    >
                    Back to Home
                    </Button>
                </Form.Item>

                </Form>
            </div>
        </div>
    );
};

export default SignUp;