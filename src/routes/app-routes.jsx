import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "../components/Header";

// Pages
import { Sample, HotelOwnerLogin, Home, HotelPackageList, HotelPackageCreate, TourPackageList } from "../pages";

const AppRoutes = () => {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/sample" element={<Sample />} />
					<Route path="/hotel-login" element={<HotelOwnerLogin />} />
					<Route path="/hotel-package" element={<HotelPackageList />} />
					<Route path="/tour-package" element={<TourPackageList />} />
					<Route path="/hotel-package-create" element={<HotelPackageCreate />} />
				</Routes>
			</Router>
		</>
	);
};

export default AppRoutes;
