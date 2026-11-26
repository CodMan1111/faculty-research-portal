import { useState } from 'react'
import { useNavigate } from 'react-router'
import jumbotronBackground from './assets/quinnipaic.jpeg'
import logo from './assets/QuinnipiacLogo.jpg'
import { supabase } from './supaClient'

function update_password () { 
    const [password, setPassword] = useState('');
    const [confirm, confirmPassword] = useState('');
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    async function update_password_handler (e: React.FormEvent) { 
        e.preventDefault();
        setError('');

        if (password.length < 8) {
            setError('Your password must be at least 8 characters long.');
            return;
        }
        if (password !== confirm) {
            setError('The passwords do not match.');
            return;
        }
        const {error} = await supabase.auth.updateUser({password});

        if (error) { 
            setError(error.message);
        }
        else {
            setMessage('Account password is reset');
            setTimeout(() => navigate('/'), 1000);
        }
    }
    return (
        <main className="forgot-jumbotron" style={{ backgroundImage: `url(${jumbotronBackground})` }}>
            <form className="forgot-form" onSubmit={update_password_handler}>
                <div className="forgot-card">
                    <h1>Set a New Password</h1>
                    <label>New Password:</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <label>Confirm Password:</label>
                    <input type="password" value={confirm} onChange={e => confirmPassword(e.target.value)} />
                </div>
                <button className="btn rounded-pill btn-dark" type="submit">Update Password</button>
                {error && <p className="improper-email">{error}</p>}
                {message && <p>{message}</p>}
                <img src={logo} className="image" alt="Quinnipiac University" />
            </form>
        </main>
    )
}

export default update_password;