import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import CheckLoginStatus from "./CheckLoginStatus";

// Components
import Header from "../components/Header";

// Pages

import {
	Sample,

	// Hotel Owner
	HotelOwnerLogin,
	HotelOwnerRegister,
	HotelOwnerDashboard,
	HotelOwnerEdit,
	Home,
	AdminLogin,
	AdminDashboard,
	AdminEdit,

	// Hotel Package
	HotelPackageList,
	HotelPackageCreate,
	HotelOwnerManagePackages,
	HotelPackageEdit,
	HotelPackageReport,
	HotelPackage,

	/*Camping Package*/
	CampingPackageCreate,
	CampingPackageList,
	VehicleList,
	VehicleCreate,
	CampingPackageEdit,

	/* Tour Guide */
	TourGuideRegister,
	TourGuideLogin,
	TourGuideDashboard,
	TourGuideEditProfile,

	/* Tour Package */
	TourPackageCreate,
	TourPackageList,
	TourPackageEdit,
	TourPackageReport,
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
	WhoAreYou,

	/*Custommer */
	CustomerRegister,
	CustomerLogin,
} from "../pages";

const AppRoutes = () => {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					{/* Public Routes */}
					<Route path="/" element={<Home />} />
					<Route path="/who-are-you" element={<WhoAreYou />} />
					<Route path="/sample" element={<Sample />} />
					{/* Hotel Package */}
					<Route exact path="/hotel-package" element={<HotelPackageList />} />
					<Route exact path="/hotel-package/:id" element={<HotelPackage />} />

					{/* Check Login Status */}
					<Route exact path="/hotel-owner/login" element={<CheckLoginStatus />}>
						<Route exact path="/hotel-owner/login" element={<HotelOwnerLogin />} />
					</Route>
					<Route exact path="/hotel-owner/register" element={<CheckLoginStatus />}>
						<Route exact path="/hotel-owner/register" element={<HotelOwnerRegister />} />
					</Route>

					{/* Hotel Owner Private Routes */}
					<Route exact path="/hotel-owner" element={<PrivateRoute permissionLevel="HOTEL_OWNER" />}>
						<Route exact path="/hotel-owner" element={<HotelOwnerDashboard />} />
						<Route exact path="/hotel-owner/edit" element={<HotelOwnerEdit />} />
						<Route exact path="/hotel-owner/create-package" element={<HotelPackageCreate />} />
						<Route exact path="/hotel-owner/edit-package/:id" element={<HotelPackageEdit />} />
						<Route exact path="/hotel-owner/manage-packages" element={<HotelOwnerManagePackages />} />
						<Route exact path="/hotel-owner/report" element={<HotelPackageReport />} />
					</Route>

					{/* Check Login Status Admin */}
					<Route exact path="/admin/login" element={<CheckLoginStatus />}>
						<Route exact path="/admin/login" element={<AdminLogin />} />
					</Route>

					{/* Admin Private Routes */}
					<Route exact path="/admin" element={<PrivateRoute permissionLevel="ADMIN" />}>
						<Route exact path="/admin" element={<AdminDashboard />} />
						<Route exact path="/admin/edit" element={<AdminEdit />} />
					</Route>

					<Route path="/camping-package-create" element={<CampingPackageCreate />} />

					<Route path="/vehicle-create" element={<VehicleCreate />} />
					<Route path="/vehicle" element={<VehicleList />} />
					<Route path="/vehicleedit/:id" element={<VehicleEdit />} />
					<Route path="/camping-package-edit/:id" element={<CampingPackageEdit />} />

					{/* Tour Guide */}
					<Route path="/tour-guide-register" element={<TourGuideRegister />} />
					<Route path="/tour-guide-login" element={<TourGuideLogin />} />
					<Route path="/tour-guide-dashboard" element={<TourGuideDashboard />} />
					<Route path="/tour-guide-edit-profile/:id" element={<TourGuideEditProfile />} />

					{/*Tour Package */}
					<Route path="/tour-package-create" element={<TourPackageCreate />} />
					<Route path="/tour-package-list" element={<TourPackageList />} />
					<Route path="/tour-package-edit/:id" element={<TourPackageEdit />} />
					<Route path="/tour-package-report" element={<TourPackageReport />} />

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
					<Route path="/customer-register" element={<CustomerRegister />} />
					<Route path="/customer-login" element={<CustomerLogin />} />
				</Routes>
			</Router>
		</>
	);
};

export default AppRoutes;
