import React from "react";
import axios from "axios";
import "./index.css"
import { useState } from "react";
import Input from "../Input";

function RegisterPage() {

  const handleSubmit = (event) =>{
    // forma girilen kullanıcı adı ve parolayı api'ye post methoduyla yolla ve konsola kullanıcı kaydoldu diye bastır
      event.preventDefault();
          axios.post("http://localhost:3002/users", {
              username: form.userName,
              password: form.password,
    })
    console.log("User registered") 
  }
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
              <div className="register-password-text">
                <p>Password</p>
              </div>

            <div className='input-fields'>
              <Input
                type={"text"}
                name='userName'
                placeholder="username@gmail.com"
                value={form.userName}
                onChange={handleChange}
                />

              <Input
                type={"password"}
                name='password'
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
              />

            </div>
          <div >
            <button className="button" type="submit" onClick={handleSubmit}>Sign up</button> {/*butona tıkladığında register fonksiyonu tetiklenir*/}
          </div>
      
      </div>
    </div>
  </div>
        );
    }


export default RegisterPage;