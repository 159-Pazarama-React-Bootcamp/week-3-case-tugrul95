import React from "react";
import axios from "axios";
import "./index.css"
import { useState } from "react";
import Input from "../Input";
import Label from "../../Components/Label";
import {
  Link
} from 'react-router-dom';
import { signInWithGoogle } from "../../firebase/config";
import Image from "../../Images/vespa.png";
import backgroundImage from "../../Images/Background.png";

function LoginPage() {
  // api'den kullanıcıları get ile çek ve checkEmail callback'ine parametre olarak gönder  
  const handleSubmit = e => {
    e.preventDefault();
  axios
    .get("http://localhost:3002/users") 
    .then((res) => checkEmail(res.data));
  };
const checkEmail = (getdata) => {
  // getdata içerisindeki veri eğer forma girilen kullanıcı ve parolayı içeriyorsa konsola başarıyla giriş yapıldı diye bastır.
  for (var i = 0, len = getdata.length; i < len; i++) {
    if(getdata[i].username.includes(form.userName) && getdata[i].password.includes(form.password)){
      console.log("Succesfully loginned")
  } 
    } 
    
};

const [form, setForm] = useState({ userName: "", password: "" });
const handleChange = (event) => {
setForm({ ...form, [event.target.name]: event.target.value });};

return (
// arka plana vespa resmini yerleştir
<div className="background"> 
    <img src={backgroundImage} alt="backgroundImage" />
          
  <div className="first-container">

  <img className="vespa" src={Image} alt="Avatar" />
                                    
      <div className="fields">
                <h3 className="logo-text">Your logo</h3>
                <h1 className="login-text"> Login</h1>

                <p className="email">Email</p>
                <div className='input-fields'>
                  <Input
                    label={"Email"}
                    type={"text"}
                    name='userName'
                    placeholder="username@gmail.com"
                    value={form.userName}
                    onChange={handleChange}
                  />
                  <Label text={"Password"}/>
                  <Input
                  label={"Password"}
                    type={"password"}
                    name='password'
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                  />
               </div>
                <div>
                
                <p className="continue-text">or continue with </p>
                </div>
                
                <p className="forgot-password-text">Forgot Password?</p>
                
                
                  <span style={{ display: "flex", justifyContent: "center",}}>
                <p className="dont-text"> Don't have an account yet ? </p>
                <Link to="/register-page">
                <p className="register-text" component={Link} to="/RegisterPage">Register for free</p> {/*yazıya tıkladığında kayıt sayfasına yönlendir*/}
                </Link>
                </span>

        
        <div className="social-container">
        <div className="google-container">  {/*butona tıkladığında google ile giriş fonksiyonu tetiklenir*/}
          <input type="image" alt="img" className="google-button" onClick={signInWithGoogle} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"/>
        </div>
        <div className="github-container"> 
          <input type="image" alt="img" className="github-button" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"/>
        </div>
        <div className="facebook-container">  
          <input type="image" alt="img" className="facebook-button" src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Facebook_icon_2013.svg"/>
        </div>
      <div >
          <button className="button" type="submit" onClick={handleSubmit}>Sign in</button> {/*butona tıkladığında login fonksiyonu tetiklenir*/}
    </div>
        </div>


      
      </div>
     
  </div>
</div>
        );
    }

export default LoginPage;