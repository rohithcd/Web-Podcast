// Importing Styles 
import './global.css';

// Importing packages
import {Routes, Route} from 'react-router-dom';
import {lazy, Suspense} from 'react'; // For lazy loading components

// Importing Pages
const Home = lazy(() => import('./pages/home/home'));

const App = () => {
	return (
		<Suspense fallback={<h1>Loading</h1>}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<>Page Not Found</>} />
			</Routes>
		</Suspense>

	);
}

export default App;
