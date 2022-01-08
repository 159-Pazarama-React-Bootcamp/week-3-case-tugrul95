import React from "react";
import "./index.css"
import { useState } from "react";
import Input from "../Input";
import {
  Link
} from 'react-router-dom';
import { auth, signInWithGoogle } from "../../firebase/config";
import {
  signInWithEmailAndPassword, 
  onAuthStateChanged
} from "firebase/auth";
import Image from "../../Images/vespa.png"

function LoginPage() {
  
  const [user, setUser] = useState({}); // giriş yapan kullanıcıyı temsil eder
  onAuthStateChanged(auth, (currentUser) => { // sayfa yenilendiğinde kullanıcı girişini tutar
    setUser(currentUser);
  });

    const [form, setForm] = useState({ userName: "", password: "" });
    const handleChange = (event) => {
      setForm({ ...form, [event.target.name]: event.target.value });
    };
    const login = async () => {
      try {
        const user = await signInWithEmailAndPassword( 
          auth, // kullanıcı adı ve parola auth içinde tutulur
          form.userName,
          form.password
        );
        console.log(user); //login işlemi başarılı olursa konsola kullanıcı bilgileri bas
      } catch (error) {
        console.log(error.message); // login işlemi başarısız olursa konsola hata mesajını bas
      }
    };
        return (
// arka plana vespa resmini yerleştir
<div className="background"> 
          <div >
            <img className="img" src={Image} alt="" />
          </div>
          
  <div className="first-container">

    <div className="rectangle">
                    <div className="gray-rectangle"></div>
                    <div className="vespa"></div>
                                    
      <div className="fields">
      <h4> User Logged In:</h4>
              {user.email} 
                <div className="logo-text">
                <p>Your Logo</p>
                </div>
                <div className="login-text">
                <p>Login</p>
                </div>
                <div className="email-text">
                <p>Email</p>
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
                <div>
                <p className="password-text">Password</p>
                <p className="continue-text">or continue with </p>
                </div>
                <div>
                <p className="forgot-password-text">Forgot Password?</p>
                </div>
                <div>
                <p className="dont-text"> Don't have an account yet ? </p>
                <Link to="/register-page">
                <p className="register-text" component={Link} to="/RegisterPage">Register for free</p> {/*yazıya tıkladığında kayıt sayfasına yönlendir*/}
                </Link>
                </div>

        
   
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
          <button className="button" type="submit" onClick={login}>Sign in</button> {/*butona tıkladığında login fonksiyonu tetiklenir*/}
    </div>

      
      </div>
    </div>  
  </div>
</div>
        );
    }

export default LoginPage;