import React, { Component } from 'react';

class Login extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
    <div>
        <nav>
            <img src="/app/src/purplelogo.png" class="logo" alt="digital TA logo"/>
            <p class="slogan">Your digital teacher assististant</p>
            <a href="#" class="signUp">Sign Up</a>
        </nav>
        <div class="mainContent">
        <div class="loginContainer"> {/* log in container*/}
            <form action="" > {/* login form*/}
                <h3>LogIn</h3>
                <hr/>
                <div class="input-container"> {/* holds password and usernames*/}
                    <i class="fa fa-user icon"></i> {/* login container*/}
                    <input type="text" placeholder="Enter Username" class="boxSize"/>
                </div>
                <div class="input-container">
                    <i class="fa fa-key icon"></i> {/* password icon*/}
                    <input type="password" placeholder="Enter password" class="boxSize" />
                </div>
                <button type="submit" class="loginButton">Login</button> 
            </form>
        </div>
        </div>
    </div>
    )
  }
}

export default Login;