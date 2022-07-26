import React, { Component } from 'react'
import './SignIn.css';


function SignIn(){
    return(
        <div>
            <div className='SignIn-wrapper'>
                <div className="heading">
                    <h2>Sign in</h2>
                    <p>Sign in and start ordering</p>
                </div>
                <div className="form">
                    <div className="login-input">
                        <input placeholder="College ID" className="input-text" type="text" />
                        <input placeholder="Password" className="input-text" type="password" />
                    </div>
                    <div className="frgtPass">
                        <a href="">Forgot Password</a>
                    </div>
                    <div className="checkbox-remember">
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns">Remember Me</label>
                    </div>
                </div>
                    <div className="login-buttons">
                        <div className="normal-login login-btn">
                            <button>Login</button>
                        </div>
                        <div className="google-login login-btn">
                            <button>
                            <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    d="M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16Z"
                                    fill="white"
                                    />
                                    <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M23.8299 16.1818C23.8299 15.6146 23.779 15.0691 23.6845 14.5455H16.1499V17.64H20.4554C20.2699 18.64 19.7063 19.4873 18.859 20.0546V22.0619H21.4445C22.9572 20.6691 23.8299 18.6182 23.8299 16.1818Z"
                                    fill="#4285F4"
                                    />
                                    <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16.1496 24C18.3096 24 20.1205 23.2836 21.4442 22.0618L18.8587 20.0545C18.1423 20.5345 17.226 20.8181 16.1496 20.8181C14.066 20.8181 12.3023 19.4109 11.6732 17.52H9.00049V19.5927C10.3169 22.2072 13.0223 24 16.1496 24Z"
                                    fill="#34A853"
                                    />
                                    <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M11.6735 17.52C11.5135 17.04 11.4226 16.5272 11.4226 16C11.4226 15.4727 11.5135 14.96 11.6735 14.48V12.4072H9.00081C8.45899 13.4872 8.1499 14.709 8.1499 16C8.1499 17.2909 8.45899 18.5127 9.00081 19.5927L11.6735 17.52Z"
                                    fill="#FBBC05"
                                    />
                                    <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16.1496 11.1818C17.3241 11.1818 18.3787 11.5855 19.2078 12.3782L21.5023 10.0836C20.1169 8.79273 18.306 8 16.1496 8C13.0223 8 10.3169 9.79273 9.00049 12.4073L11.6732 14.48C12.3023 12.5891 14.066 11.1818 16.1496 11.1818Z"
                                    fill="#EA4335"
                                    />
                            </svg>
                                Login With Google
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default SignIn;
