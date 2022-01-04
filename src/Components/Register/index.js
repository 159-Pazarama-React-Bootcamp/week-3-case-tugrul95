import React from "react";
import "./index.css"
import { useState } from "react";
import Input from "../Input";

function RegisterPage() {
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

                 <div className="email-text">
                <p>Email</p>
                </div>
                <div className="password-text">
                <p>Password</p>
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
          <button type="submit">Sign up</button>
      </div>
      

    </div>
    </div>
    </div>
        );
    }

export default RegisterPage;