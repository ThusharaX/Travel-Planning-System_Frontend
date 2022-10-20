import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminAPI from "./api/AdminAPI";

import Joi from "joi";

import { makeToast } from "../components";

const AdminContext = createContext();

export function AdminProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState(null);

	const navigate = useNavigate();

	const [admin, setAdmin] = useState({
		uID: "",
		name: "",
		email: "",
		password: "",
		permissionLevel: "",
		createdAt: "",
		updatedAt: "",
	});

	// Get All Hotel Owners
	const [hotelOwners, setHotelOwners] = useState([]);
	// Get All Tour Guides
	const [tourGuides, setTourGuides] = useState([]);
	// Get All Camping Vendors
	const [campingVendors, setCampingVendors] = useState([]);
	// Get All Vehicle Owners
	const [vehicleOwners, setVehicleOwners] = useState([]);
	// Get All Customers
	const [customers, setCustomers] = useState([]);

	// Login Form Validation
	const LoginFormSchema = Joi.object({
		email: Joi.string()
			.email({ tlds: { allow: false } })
			.message("Email should be valid"),
		password: Joi.string().min(4).message("Password should be valid"),
	});

	// Admin Login
	const login = (values) => {
		setIsLoading(true);
		// Validate
		const { error } = LoginFormSchema.validate(values);
		if (error) {
			makeToast({ type: "error", message: error.details[0].message });
			return;
		}

		AdminAPI.login(values)
			.then((response) => {
				localStorage.setItem("uID", response.data._id);
				localStorage.setItem("email", response.data.email);
				localStorage.setItem("authToken", response.data.token);
				localStorage.setItem("permissionLevel", response.data.permissionLevel);
				navigate("/admin");
				setIsLoggedIn(true);
				setIsLoading(false);
				window.location.reload();
				makeToast({ type: "success", message: "Login Successful" });
			})
			.catch((err) => {
				// Show toast
				setMessage(err.response.data.details.message);
				setIsLoading(false);
				makeToast({ type: "error", message: "Invalid Email or Password" });
			});
	};

	// Admin Logout
	const logout = () => {
		localStorage.removeItem("authToken");
		localStorage.removeItem("uID");
		localStorage.removeItem("adminname");
		localStorage.removeItem("permissionLevel");
		navigate("/admin/login");
		window.location.reload();
		makeToast({ type: "success", message: "Logout Successful" });
	};

	// Update Admin Profile
	const updateProfile = (values) => {
		const uID = localStorage.getItem("uID");
		setIsLoading(true);
		AdminAPI.updateProfile(uID, values)
			.then((response) => {
				setAdmin(response.data);
				setIsLoading(false);
				makeToast({ type: "success", message: "Profile Updated Successfully" });
				navigate("/admin");
			})
			.catch((err) => {
				setMessage(err.response.data.details.message);
				setIsLoading(false);
			});
	};

	// Delete Hotel Owner Account
	const deleteHotelOwner = async (id) => {
		try {
			setIsLoading(true);
			await AdminAPI.deleteHotelOwner(id);
			// Update the hotel owners state on removing hotel owner
			setHotelOwners(hotelOwners.filter((hotelOwner) => hotelOwner._id !== id));
			makeToast({ type: "success", message: "Hotel Owner deleted successfully" });
			setIsLoading(false);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	// Delete Tour Guide Account
	const deleteTourGuide = async (id) => {
		try {
			setIsLoading(true);
			await AdminAPI.deleteTourGuide(id);
			// Update the hotel owners state on removing hotel owner
			setHotelOwners(tourGuides.filter((tourGuide) => tourGuide._id !== id));
			makeToast({ type: "success", message: "Tour Guide deleted successfully" });
			setIsLoading(false);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	// Delete Camping Vendor Account
	const deleteCampingVendor = async (id) => {
		try {
			setIsLoading(true);
			await AdminAPI.deleteCampingVendor(id);
			// Update the hotel owners state on removing hotel owner
			setHotelOwners(campingVendors.filter((campingVendor) => campingVendor._id !== id));
			makeToast({ type: "success", message: "Camping Vendor deleted successfully" });
			setIsLoading(false);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	// Delete Vehicle Owner Account
	const deleteVehicleOwner = async (id) => {
		try {
			setIsLoading(true);
			await AdminAPI.deleteVehicleOwner(id);
			// Update the hotel owners state on removing hotel owner
			setHotelOwners(vehicleOwners.filter((vehicleOwner) => vehicleOwner._id !== id));
			makeToast({ type: "success", message: "Vehicle Owner deleted successfully" });
			setIsLoading(false);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	// Delete Customer Account
	const deleteCustomer = async (id) => {
		try {
			setIsLoading(true);
			await AdminAPI.deleteCustomer(id);
			// Update the hotel owners state on removing hotel owner
			setHotelOwners(customers.filter((customer) => customer._id !== id));
			makeToast({ type: "success", message: "Vehicle Owner deleted successfully" });
			setIsLoading(false);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	useEffect(() => {
		if (localStorage.getItem("uID")) {
			AdminAPI.getAdminDetails(localStorage.getItem("uID")).then((response) => {
				setAdmin(response.data);
			});
			AdminAPI.getAllHotelOwners().then((response) => {
				setHotelOwners(response.data);
			});
			AdminAPI.getAllTourGuides().then((response) => {
				setTourGuides(response.data);
			});
			AdminAPI.getAllCampingVendors().then((response) => {
				setCampingVendors(response.data);
			});
			AdminAPI.getAllVehicleOwners().then((response) => {
				setVehicleOwners(response.data);
			});
			AdminAPI.getAllCustomers().then((response) => {
				setCustomers(response.data);
			});
		}
	}, [hotelOwners, tourGuides, campingVendors, vehicleOwners, customers]);

	// Hotel Owner Count
	const getHotelOwnerCount = () => {
		return hotelOwners.length;
	};

	// Tour Guide Count
	const getTourGuideCount = () => {
		return tourGuides.length;
	};

	// Camping Vendor Count
	const getCampingVendorCount = () => {
		return campingVendors.length;
	};

	// Vehicle Owner Count
	const getVehicleOwnerCount = () => {
		return vehicleOwners.length;
	};

	// Customer Count
	const getCustomerCount = () => {
		return customers.length;
	};

	return (
		<AdminContext.Provider
			value={{
				updateProfile,
				login,
				logout,
				isLoggedIn,
				isLoading,
				message,
				admin,
				hotelOwners,
				deleteHotelOwner,
				getHotelOwnerCount,
				tourGuides,
				deleteTourGuide,
				getTourGuideCount,
				campingVendors,
				deleteCampingVendor,
				getCampingVendorCount,
				vehicleOwners,
				deleteVehicleOwner,
				getVehicleOwnerCount,
				customers,
				deleteCustomer,
				getCustomerCount,
			}}
		>
			{children}
		</AdminContext.Provider>
	);
}

export default AdminContext;
