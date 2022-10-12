import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "../components/Header";

// Pages

import {
	Sample,

	// Hotel Owner
	HotelOwnerLogin,
	HotelOwnerRegister,
	Home,
	HotelPackageList,
	HotelPackageCreate,
	CampingPackageCreate,
	CampingPackageList,
	VehicleList,
	VehicleCreate,
	CampingPackageEdit,

	/* Tour Guide */
	TourGuideRegister,
	TourGuideLogin,

	/* Tour Package */
	TourPackageCreate,
	TourPackageList,
	TourGuideDashboard,
	TourPackageEdit,
	Userprofile,
	CustomerSignup,

	/*Camping Vendor */
	CampingVendorRegister,
	CampingVendorLogin,
	CampingVendorDashboard,
} from "../pages";

const AppRoutes = () => {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/sample" element={<Sample />} />

					{/* Hotel Owner */}
					<Route path="/hotel-owner-login" element={<HotelOwnerLogin />} />
					<Route path="/hotel-owner-register" element={<HotelOwnerRegister />} />

					{/* Hotel Package */}
					<Route path="/hotel-package" element={<HotelPackageList />} />

					<Route path="/camping-package" element={<CampingPackageList />} />
					<Route path="/hotel-package-create" element={<HotelPackageCreate />} />

					<Route path="/camping-package-create" element={<CampingPackageCreate />} />

					<Route path="/vehicle-create" element={<VehicleCreate />} />
					<Route path="/vehicle" element={<VehicleList />} />
					<Route path="/camping-package-edit/:id" element={<CampingPackageEdit />} />

					{/* Tour Guide */}
					<Route path="/tour-guide-register" element={<TourGuideRegister />} />
					<Route path="/tour-guide-login" element={<TourGuideLogin />} />
					<Route path="/tour-guide-dashboard" element={<TourGuideDashboard />} />

					{/*Tour Package */}
					<Route path="/tour-package-create" element={<TourPackageCreate />} />
					<Route path="/tour-package-list" element={<TourPackageList />} />
					<Route path="/tour-package-edit/:id" element={<TourPackageEdit />} />

					<Route path="/vehicle-profile" element={<Userprofile />} />

					<Route path="/customersignup" element={<CustomerSignup />} />

					{/*Camping Vendor*/}
					<Route path="/camping-vendor-register" element={<CampingVendorRegister />} />
					<Route path="/camping-vendor-login" element={<CampingVendorLogin />} />
					<Route path="/camping-vendor-dashboard" element={<CampingVendorDashboard />} />
				</Routes>
			</Router>
		</>
	);
};

export default AppRoutes;
