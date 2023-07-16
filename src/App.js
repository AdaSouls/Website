import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from './component/scrollToTop/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';

// Home Pages Import
import AdaSouls from './pages/AdaSouls';

// Pages 
// import AboutUs from './pages/AboutUs';
// import Contact from './pages/Contact';

// Css Import
import './assets/scss/app.scss';

const App = () => {
  return (
    <Router>
		<ScrollToTop>
			<Routes>
				<Route path={process.env.PUBLIC_URL + "/"} element={<AdaSouls />}/>
				{/* <Route path={process.env.PUBLIC_URL + "/about-us"} element={<AboutUs />}/>
				<Route path={process.env.PUBLIC_URL + "/contact"} element={<Contact />}/> */}
			</Routes>
		</ScrollToTop>
    </Router>
  )
}

export default App; 
