import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/footer';
import Home from './components/pages/home'; // Create a new Home component to manage all sections
import ContactMain from './components/pages/contactMain'; // Property Listing page

function App() {
	return (
		<Router>
			<Nav />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/contact-us"
					element={<ContactMain />}
				/>
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
