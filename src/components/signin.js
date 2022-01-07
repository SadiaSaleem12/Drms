import React, { useRef, useState } from "react";
import { useUserContext } from "../context/userContext";

import Auth from "./auth";
import Dashboard from "./dashboard";

import "../App.css";
import { Navigate, useNavigate } from "react-router-dom";

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const [error,setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { user,signInUser, forgotPassword } = useUserContext();
  const navigate = useNavigate();
 
 

  async function onSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
   
      try{
        setError("")
        setLoading(true)
        await signInUser(email, password)
        navigate("/Dashboard")
        
    }catch{
      setError("failed")
    }
    setLoading(false)
  
  };

  const forgotPasswordHandler = () => {
    // alert("Please check your email")
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  return (
    <div>
    <div className="form">
      <h2> Login </h2>
      <form onSubmit={onSubmit}>
        {error && <p className="error">{error}</p>}
        <input className="logininput" placeholder="Email" type="email" ref={emailRef} />
        <input className="logininput" placeholder="Password" type="password" ref={psdRef} />
        <button type="submit">Sign In</button>
        <p onClick={forgotPasswordHandler}>Forgot Password?</p>
     
      </form>
    </div>
    </div>
  );
};

export default Signin;
