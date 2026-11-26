import { useState, type FormEvent } from 'react';
import logo from './assets/QuinnipiacLogo.jpg';
import jumbotronBackground from './assets/quinnipaic.jpeg';
import { Link } from 'react-router';
import {supabase} from './supaClient';

function CreateAccount () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError('');
        setMessage('');

        const normalizedEmail = email.trim().toLowerCase();
        if (!normalizedEmail.endsWith('@quinnipiac.edu')) {
            setError('Use your Quinnipiac University email address.');
            return;
        }
        if (password.length < 8) {
            setError('Your password must be at least 8 characters long.');
            return;
        }
        if (password !== confirmPassword) {
            setError('The passwords do not match.');
            return;
        }

        setIsSubmitting(true);
        const { error: signUpError } = await supabase.auth.signUp({
            email: normalizedEmail,
            password,
        });
        setIsSubmitting(false);

        if (signUpError) {
            setError(signUpError.message);
            return
        }

        setMessage('Account created.');
    }

    return (
        <main
            className="login-jumbotron"
            style={{ backgroundImage: `url(${jumbotronBackground})` }}
        >
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="login-card">
                    <h1>Create your account</h1>
                    <label htmlFor="email">Quinnipiac email</label>
                    <input id="email" type="email" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="login-card">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" autoComplete="new-password" minLength={8} required value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="login-card">
                    <label htmlFor="confirm-password">Confirm password</label>
                    <input id="confirm-password" type="password" autoComplete="new-password" minLength={8} required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                </div>
                {error && <p className="failed-login" role="alert">{error}</p>}
                {message && <p role="status">{message}</p>}
                <button className="btn rounded-pill btn-dark" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Creating account...' : 'Create account'}
                </button>
                <p>Already have an account? <Link to="/login">Sign in</Link></p>
                <img src={logo} className="image" alt="Quinnipiac University" />
            </form>
        </main>
    );
}

export default CreateAccount;