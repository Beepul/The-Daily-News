import Home from './pages/home/Home';
import './sass/style.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Singlenews from './pages/single-news/Singlenews';
import CategoryPage from './pages/category/CategoryPage';
import SearchPage from './pages/search/SearchPage';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import GoToTop from './components/GoToTop';

function App() {
	return (
		<div className="app">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/details" element={<Singlenews />} />
				<Route path="/category/:cat" element={<CategoryPage />} />
				<Route path="/search" element={<SearchPage />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<GoToTop />
			<Footer />
		</div>
	);
}

export default App;
