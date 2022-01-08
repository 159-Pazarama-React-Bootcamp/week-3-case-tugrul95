import React, {Component} from "react";
import "./index.css"
import Hello from "../Components/Hello";
import LoginPage from "../Components/LoginPage";
import Container from "../Components/Container"
import RegisterPage from "../Components/Register";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
class Auth extends Component{
    constructor(props) {
        super(props);
    }
        render() {
            return(
                
                <Container> 
                <Router>
                <Routes>
                    
                    <Route exact path='/' element={< Hello />} />
                    <Route path='/login-page' element={< LoginPage />} />
                    <Route path='/register-page' element={< RegisterPage />} />    
                    </Routes>
                </Router>   
                </Container>
                
            )   
        }
    } 
export default Auth;