import {useState} from 'react'
import logo from './assets/QuinnipiacLogo.jpg'
import jumbotronBackground from './assets/quinnipaic.jpeg'
import Button from 'react-bootstrap/Button'
import forgot from './forgot-password'
import {Link, useNavigate} from 'react-router'
import {supabase} from './supaClient'

function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    async function login_handler(e: React.FormEvent) {
        e.preventDefault();
        setError('');
        if (!email.endsWith('@quinnipiac.edu')) { 
            setError("Enter you quinnipiac email");
            return;
        }

        const { error } = await supabase.auth.signInWithPassword({email,password});
        if (error) { 
            setError(error.message);
        } 
        else { 
             navigate('/');
        }
    }
    return (
        <main
            className="login-jumbotron"
            style={{ backgroundImage: `url(${jumbotronBackground})` }}
        >
            <form className="login-form" onSubmit={login_handler}>
                <div className="login-card">
                    <h1>Research Portal Sign In</h1>
                    <label>Quinnipiac Email:</label>
                    <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="login-card">
                    <label>Password:</label>
                    <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <Link to="/forgot-password">Forgot password</Link>
                    <Link to="/create-account">Create account</Link>
                </div>
                {error && <p className="failed-login">{error}</p>}
                <button className="btn rounded-pill btn-dark" type="submit">Login</button>
                <img src={logo} className="image" alt="Quinnipiac University" />
            </form>
        </main>
    )
}

export default Login;