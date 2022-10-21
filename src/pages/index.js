import Sample from "./sample";
import Home from "./home";

import Displaypage from "./displaypage";

// Hotel Owner
import HotelOwnerLogin from "./hotel-owner-login";
import HotelOwnerRegister from "./hotel-owner-register";
import HotelOwnerDashboard from "./hotel-owner-dashboard";
import HotelOwnerEdit from "./hotel-owner-edit";

// Admin
import AdminLogin from "./admin-login";
import AdminDashboard from "./admin-dashboard";
import AdminEdit from "./admin-edit";

// Hotel Package
import HotelPackageList from "./hotel-package-list";
import HotelPackageCreate from "./hotel-package-create";
import HotelOwnerManagePackages from "./hotel-owner-manage-packages";
import HotelPackageEdit from "./hotel-package-edit";
import HotelPackageReport from "./hotel-package-report";
import HotelPackage from "./hotel-package";

import VehicleEdit from "./vehicle-edit";
import VehicleList from "./vehicle-owner";
import VehicleCreate from "./vehicle-create";

/* Tour Package */
import TourPackageCreate from "./tour-package-create";
import TourPackageList from "./tour-package-list";
import TourPackageEdit from "./tour-package-edit";
import TourPackageReport from "./tour-package-report-generate";

/*Tour Guide*/
import TourGuideRegister from "./tour-guide-register";
import TourGuideLogin from "./tour-guide-login";
import TourGuideDashboard from "./tour-guide-dashboard";
import TourGuideEditProfile from "./tour-guide-edit-profile";

import CustomerSignup from "./cutomerSignup";

/*Camping Package*/

import CampingPackageList from "./camping-package-list";
import CampingPackageCreate from "./camping-package-create";
import CampingPackageEdit from "./camping-package-edit";

/*Camping Vendor */
import CampingVendorRegister from "./camping-vendor-register";
import CampingVendorLogin from "./camping-vendor-login";
import CampingVendorDashboard from "./camping-vendor-dashboard";

/*Vehicle Owner */
import VehicleOwnerRegister from "./vehicle-owner-register";
import VehicleOwnerLogin from "./vehicle-owner-login";
import Userprofile from "./vehicleOwner-profile";

import WhoAreYou from "./who-are-you";

// Customer
import CustomerRegister from "./customer-register";
import CustomerLogin from "./customer-login";

export {
	Sample,

	// Hotel Owner
	HotelOwnerLogin,
	HotelOwnerRegister,
	HotelOwnerEdit,
	HotelOwnerDashboard,
	Home,

	// Admin
	AdminLogin,
	AdminEdit,
	AdminDashboard,

	// Hotel Package
	HotelPackageList,
	HotelPackageCreate,
	HotelOwnerManagePackages,
	HotelPackageEdit,
	HotelPackageReport,
	HotelPackage,

	/*Camping Package*/
	CampingPackageList,
	CampingPackageCreate,
	CampingPackageEdit,

	/*Tour Package*/
	TourPackageCreate,
	TourPackageList,
	TourPackageEdit,
	TourPackageReport,
	/*Tour Guide*/
	TourGuideRegister,
	TourGuideLogin,
	TourGuideDashboard,
	TourGuideEditProfile,
	CustomerSignup,

	/*Vehicle Package*/
	VehicleList,
	VehicleCreate,
	VehicleEdit,

	/*Camping Vendor */
	CampingVendorRegister,
	CampingVendorLogin,
	CampingVendorDashboard,

	/* Vehicle Owner*/
	VehicleOwnerRegister,
	VehicleOwnerLogin,
	Userprofile,
	WhoAreYou,


	/*Display page*/
	Displaypage,

	/*Customer */
	CustomerRegister,
	CustomerLogin,

};
