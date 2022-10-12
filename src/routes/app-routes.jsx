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
	VehicleEdit,

	/*Camping Vendor */
	CampingVendorRegister,
	CampingVendorLogin,
	CampingVendorDashboard,

	/*Vehicle Owner */
	VehicleOwnerRegister,
	VehicleOwnerLogin,
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

					<Route path="/hotel-package-create" element={<HotelPackageCreate />} />

					<Route path="/camping-package-create" element={<CampingPackageCreate />} />

					<Route path="/vehicle-create" element={<VehicleCreate />} />
					<Route path="/vehicle" element={<VehicleList />} />
					<Route path="/vehicleedit/:id" element={<VehicleEdit />} />
					<Route path="/camping-package-edit/:id" element={<CampingPackageEdit />} />

					{/* Tour Guide */}
					<Route path="/tour-guide-register" element={<TourGuideRegister />} />
					<Route path="/tour-guide-login" element={<TourGuideLogin />} />
					<Route path="/tour-guide-dashboard" element={<TourGuideDashboard />} />

					{/*Tour Package */}
					<Route path="/tour-package-create" element={<TourPackageCreate />} />
					<Route path="/tour-package-list" element={<TourPackageList />} />
					<Route path="/tour-package-edit/:id" element={<TourPackageEdit />} />

					{/*Camping Vendor*/}
					<Route path="/camping-vendor-register" element={<CampingVendorRegister />} />
					<Route path="/camping-vendor-login" element={<CampingVendorLogin />} />
					<Route path="/camping-vendor-dashboard" element={<CampingVendorDashboard />} />
					<Route path="/camping-package-create" element={<CampingPackageCreate />} />
					<Route path="/camping-package-edit/:id" element={<CampingPackageEdit />} />

					<Route path="/camping-package" element={<CampingPackageList />} />

					{/*Vehicle Owner*/}
					<Route path="/vehicle-owner-register" element={<VehicleOwnerRegister />} />
					<Route path="/vehicle-owner-login" element={<VehicleOwnerLogin />} />
					<Route path="/vehicle-create" element={<VehicleCreate />} />
					<Route path="/vehicle" element={<VehicleList />} />
					<Route path="/vehicle-profile" element={<Userprofile />} />

					{/*customer*/}
					<Route path="/customersignup" element={<CustomerSignup />} />
				</Routes>
			</Router>
		</>
	);
};

export default AppRoutes;
