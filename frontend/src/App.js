// Importing Styles 
import './global.css';

// Importing Packages
import {Routes, Route} from 'react-router-dom';
import {lazy, Suspense} from 'react'; // For lazy loading components

// Importing Pages
const Home = lazy(() => import('./pages/home/home'));
const Login = lazy(() => import('./authentication/login/login'));
const Signup = lazy(() => import('./authentication/signup/signup'));

// Importing Layouts
const Sidebar = lazy(() => import('./layouts/sidebar/sidebar'));

const App = () => {
	return (
		<Suspense fallback={<h1>Loading</h1>}>
			<Sidebar/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="*" element={<>Page Not Found</>} />
			</Routes>
		</Suspense>

	);
}

export default App;
