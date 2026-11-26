import jumbotronBackground from './assets/quinnipaic.jpeg'
import logo from './assets/QuinnipiacLogo.jpg'
function Forgot_password () { 
    return (
        <main
            className="forgot-jumbotron"
            style={{ backgroundImage: `url(${jumbotronBackground})` }}
        >
            <form className="forgot-form">
                <div className="forgot-card">
                    <h1>Forgot Password Reset Link</h1>
                    <label>Email:</label>
                    <input id="email" type="email" />
                </div>
                <button className="btn rounded-pill btn-dark" type="submit">Submit</button>
                <img src={logo} className="image" alt="Quinnipiac University" />
            </form>
        </main>
    )
}

export default Forgot_password;