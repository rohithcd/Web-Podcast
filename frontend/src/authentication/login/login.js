// Importing Styles 
import '../../global.css';
import './login.css';

// Importing Components
import Input from '../../components/authinput/input';

// Importing Packages 
import { Link, useLocation } from 'react-router-dom';

// Importing Constants 
import { API_URL } from '../../utils/constants';

const Login = () => {
    const location = useLocation();

    async function handleFormData(e) {
        e.preventDefault(); // Preventing default form submission
        
        // Getting form data
        const email = e.target.email.value;
        const password = e.target.password.value;

        await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'email': email, 'password': password}) // Converting form data to JSON
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err));




    }

    return (
        <main id="login">
            <section className="login-box">
                <div className="top-section">
                    <Link to="/login" className={("/login" === location.pathname) ? "item-active" : ""}>Login</Link>
                    <Link to="/register" className={("/register" === location.pathname) ? "item-active" : ""}>Register</Link>
                </div>
                <form className="form-section" onSubmit={handleFormData}>
                    <span>
                        <h2>Welcome Aboard</h2>
                        <p>Enter the following details to login.</p>
                    </span>

                    <div className="input-group">
                        <Input type="email" name="email" dummytext="Email" />
                        <Input type="password" name="password" dummytext="Password" />
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