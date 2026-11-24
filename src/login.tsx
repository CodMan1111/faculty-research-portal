import {useState} from 'react'
import logo from './assets/QuinnipiacLogo.jpg'
import jumbotronBackground from './assets/quinnipaic.jpeg'
import Button from 'react-bootstrap/Button'

function Login () { 
    //const [count, setCount] = useState(0);
    return (
        <main
            className="login-jumbotron"
            style={{ backgroundImage: `url(${jumbotronBackground})` }}
        >
            <form className="login-form">
                <div className="login-card">
                    <h1>Research Portal Sign In</h1>
                    <label>Email:</label>
                    <input id="email" type="email" />
                </div>
                <div className="login-card">
                    <label>Password:</label>
                    <input id="password" type="password" />
                    <a href="#">Forgot password</a>
                </div>
                <button className="btn rounded-pill btn-dark" type="submit">Login</button>
                <img src={logo} className="image" alt="Quinnipiac University" />
            </form>
        </main>
        
    )
}

export default Login;