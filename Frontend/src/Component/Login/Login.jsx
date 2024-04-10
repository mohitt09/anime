import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { registerUser } from "../../Api/auth";

const Login = () => {
    const navigate = useNavigate();

    // Define state variables for form data and password visibility
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);

    

    // Define handleChange function to update form data
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


   
    const handleSubmit = async (event) => {

        event.preventDefault();
        if (!formData.name || !formData.email || !formData.number || !formData.password) {
            return;
        }
        try {
            const response = await registerUser({ ...formData });
            if (response) {
                navigate("/");
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };



    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Create an account</h1>
            <h2 className={styles.h2}>Your personal anime streaming platform awaits!</h2>
            <input
                className={styles.input}
                name="name"
                value={formData.name}
                onChange={handleChange}
                type={"text"}
                placeholder="Name"
                autoFocus
            />
            <input
                className={styles.input}
                name="email"
                value={formData.email}
                onChange={handleChange}
                type={"email"}
                placeholder="Email"
            />
            <input
                className={styles.input}
                name="number"
                value={formData.number}
                onChange={handleChange}
                type={"tel"}
                placeholder="number"
            />
            <div className={styles.passwordInputContainer}>
                <input
                    className={styles.passwordInput}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                />
                <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className={styles.eyeIcon}
                    onClick={togglePasswordVisibility}
                />
            </div>
            <button onClick={handleSubmit} className={styles.button}>
                Create Account
            </button>
            <p className={styles.footer}>
                Already have an account?
                <span className={styles.underline} onClick={() => navigate("/")}>
                    Sign in
                </span>
            </p>
        </div>
    );
};

export default Login;
