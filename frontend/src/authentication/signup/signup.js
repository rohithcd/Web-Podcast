// Importing Styles 
import '../../global.css';
import '../login/login.css';

// Importing Components
import Input from '../../components/authinput/input';

// Importing Packages 
import { Link, useLocation } from 'react-router-dom';

const Signup = () => {
    const location = useLocation();

    return (
        <main id="login">
            <section className="login-box">
                <div className="top-section">
                    <Link to="/login" className={("/login" === location.pathname) ? "item-active" : ""}>Login</Link>
                    <Link to="/register" className={("/register" === location.pathname) ? "item-active" : ""}>Register</Link>
                </div>
                <form className="form-section">
                    <span>
                        <h2>Welcome Aboard</h2>
                        <p>Enter the following details to register.</p>
                    </span>

                    <div className="input-group">
                        <Input type="email" dummytext="Email" />
                        <Input type="password" dummytext="Password" />
                        <Input type="password" dummytext="Confirm Password" />
                    </div>

                    <button className="auth-btn" type="submit">Register</button>
                </form>
            </section>
        </main>
    );
}

export default Signup;