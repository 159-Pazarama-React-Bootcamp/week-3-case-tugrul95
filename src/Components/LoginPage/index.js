import React from "react";
import "./index.css"
import { useState } from "react";
import Input from "../Input";
import {
  Link
} from 'react-router-dom';

function LoginPage() {
    const [form, setForm] = useState({ userName: "", password: "" });
    const handleChange = (event) => {
      setForm({ ...form, [event.target.name]: event.target.value });
    };
        return (
            <div className="first-container">
                <div className="rectangle">
                    <div className="gray-rectangle"></div>
                    <div className="vespa"></div>
                        
            <div className="fields">
                 <div className="logo-text">
                 <p>Your Logo</p>
                 </div>
                 <div className="login-text">
                 <p>Login</p>
                 </div>
                 <div className="email-text">
                <p>Email</p>
                </div>
                <div className="password-text">
                <p>Password</p>
                </div>
                <div className="forgot-password-text">
                <p>Forgot Password?</p>
                </div>
    <div className='input-fields'>
      <Input
        type={"text"}
        name='userName'
        value={form.userName}
        onChange={handleChange}
      />
      <Input
        type={"password"}
        name='password'
        value={form.password}
        onChange={handleChange}
      />

      <div>{JSON.stringify(form)}</div>

    </div>
        <div className="button">
          <button type="submit">Sign in</button>
      </div>

      <div className="register-text">
        <p> Don't have an account yet ? </p>
        <Link to="/register-page">
        <p component={Link} to="/RegisterPage">Register for free</p>
        </Link>

    </div>
    </div>
    </div>
    </div>
        );
    }

export default LoginPage;