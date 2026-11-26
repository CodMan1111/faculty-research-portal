import jumbotronBackground from './assets/quinnipaic.jpeg'
import logo from './assets/QuinnipiacLogo.jpg'
import {supabase} from './supaClient'
import {useState} from 'react'
import {Navigate, useNavigate} from 'react-router'

function Forgot_password () { 
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    async function reset_password_handler(e: React.FormEvent) { 
        e.preventDefault();
        setError('');
        if (!email.endsWith('@quinnipiac.edu')) { 
            setError('Enter your quinnipiac email');
            return;
        }
        const { error } = await supabase.auth.resetPasswordForEmail(email,{redirectTo: `${window.location.origin}/update-password`});
        if (error) {
            setError(error.message);
        } 
        else { 
            navigate('/');
        }
    }
    return (
        <main
            className="forgot-jumbotron"
            style={{ backgroundImage: `url(${jumbotronBackground})` }}
        >
            <form className="forgot-form" onSubmit={reset_password_handler}>
                <div className="forgot-card">
                    <h1>Forgot Password Reset Link</h1>
                    <label>Email:</label>
                    <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)}  />
                </div>
                <button className="btn rounded-pill btn-dark" type="submit">Submit</button>
                {error && <p className="improper-email">{error}</p>}
                <img src={logo} className="image" alt="Quinnipiac University" />
            </form>
        </main>
    )
}

export default Forgot_password;