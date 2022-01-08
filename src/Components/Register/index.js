import React from "react";
import "./index.css"
import { useState } from "react";
import Input from "../Input";
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

function RegisterPage() {
  
    const [form, setForm] = useState({ userName: "", password: "" });
    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
      };
      const register = async () => {
        try {
          const user = await createUserWithEmailAndPassword( //girilen email ve parolayla yeni kullanıcı oluştur
            auth,
            form.userName, 
            form.password
          );
          console.log(user);
        } catch (error) {
          console.log(error.message); // kayıt sırasında parola 6 karakterden az girilirse ya da email yanlış girilirse konsola hatayı bastır
        }
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
            <button className="button" type="submit" onClick={register}>Sign up</button> {/*butona tıkladığında register fonksiyonu tetiklenir*/}
          </div>
      
      </div>
    </div>
  </div>
        );
    }


export default RegisterPage;