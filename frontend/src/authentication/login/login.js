// Importing Styles 
import '../../global.css';
import './login.css';

// Importing Components
import Input from '../../components/authinput/input';

// Importing Packages 
import { Link, useLocation } from 'react-router-dom';

const Login = () => {
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
                        <p>Enter the following details to login.</p>
                    </span>

                    <div className="input-group">
                        <Input type="email" dummytext="Email" />
                        <Input type="password" dummytext="Password" />
                        <div className="final-check">
                            <span>
                                <input type="checkbox" id="remember" /> 
                                remember me
                            </span>
                            <p>forgot password?</p>
                        </div>

                        
                    </div>

                    <button className="auth-btn" type="submit">Login</button>
                </form>
            </section>
        </main>
    );
}

export default Login;