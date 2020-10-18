import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";

import {faEnvelope, faLock} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import LOGIN_IMAGE from "../assets/images/login-image.jpg";

import "./SignInPage.scss";

const Login = () => {
    const [signInEmail, setSignInEmail] = useState('');
    const [signInPwd, setSignInPwd] = useState('');

    const handleEmail = (event) => {
        setSignInEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setSignInPwd(event.target.value);
    }

    const handleSubmit = (event) => {
        //====Accessing email and password====
        console.log(signInEmail);
        console.log(signInPwd);
    }

    return (
        <div className="login-container d-flex flex-row justify-content-center text-center p-5">
            <div className="inner-card card">
                <div className="login-form form d-flex flex-column justify-content-around">
                    <div className="login-header">LOGIN</div>
                    <div className="logo-container align-items-center">
                        <img
                            id="LOGIN"
                            src={LOGIN_IMAGE}
                            className="login-icon"
                            alt="Login Icon"
                        />
                    </div>
                    <Form.Group controlId="login-email">
                        <div className="login-label">Email Address :
                            <FontAwesomeIcon className="ml-2 " icon={faEnvelope}/>
                        </div>

                        <Form.Control type="email" onChange={handleEmail} className="login-input"
                                      placeholder="Enter Email"/>
                    </Form.Group>

                    <Form.Group controlId="login-password">
                        <div className="login-label">Password :
                            <FontAwesomeIcon className="ml-2 " icon={faLock}/>
                        </div>

                        <Form.Control type="password" onChange={handlePassword} className="login-input mt-2"
                                      placeholder="Enter Password"/>
                    </Form.Group>

                    <Button variant="primary" onClick={handleSubmit} className="login-button" type="submit">
                        LOGIN
                    </Button>
                    <p className="forgot-password ">
                        <Button href={"#"} variant="link">Forgot Password?</Button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
