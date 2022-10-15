import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HotelOwnerAPI from "./api/HotelOwnerAPI";

import Joi from "joi";

import { makeToast } from "../components";

const HotelOwnerContext = createContext();

export function HotelOwnerProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState(null);

	const navigate = useNavigate();

	const [hotelOwner, setHotelOwner] = useState({
		uID: "",
		ownerName: "",
		email: "",
		nic: "",
		contactNumber: "",
		password: "",
		hotelName: "",
		hotelAddress: "",
		companyPhoneNumber: "",
		companyRegNo: "",
		profilePicture: "",
		permissionLevel: "",
		createdAt: "",
		updatedAt: "",
	});

	// Form Validation
	const SignUpFormSchema = Joi.object({
		ownerName: Joi.string().min(2).max(20).message("Owner name should be between 2 and 20 characters"),
		email: Joi.string()
			.email({ tlds: { allow: false } })
			.message("Email should be valid"),
		nic: Joi.string().min(10).max(10).message("NIC should be 10 characters"),
		contactNumber: Joi.string().min(10).max(10).message("Phone number should be 10 characters"),
		password: Joi.string().min(6).message("Password should be valid"),
		confirmPassword: Joi.ref("password"),
		hotelName: Joi.string().min(2).max(20).message("Hotel name should be between 2 and 20 characters"),
		hotelAddress: Joi.string().min(2).max(20).message("Hotel address should be between 2 and 20 characters"),
		companyPhoneNumber: Joi.string().min(10).max(10).message("Company phone number should be 10 characters"),
		companyRegNo: Joi.string()
			.min(2)
			.max(20)
			.message("Company registration number should be between 2 and 20 characters"),
		permissionLevel: Joi.string().valid("HOTEL_OWNER"),
	});

	// Hotel Owner Login
	const login = (values) => {
		setIsLoading(true);
		HotelOwnerAPI.login(values)
			.then((response) => {
				localStorage.setItem("uID", response.data._id);
				localStorage.setItem("email", response.data.email);
				localStorage.setItem("authToken", response.data.token);
				localStorage.setItem("permissionLevel", response.data.permissionLevel);
				navigate("/hotel-owner");
				setIsLoggedIn(true);
				setIsLoading(false);
				makeToast({ type: "success", message: "Login Successful" });
			})
			.catch((err) => {
				// Show toast
				setMessage(err.response.data.details.message);
				setIsLoading(false);
				makeToast({ type: "error", message: "Invalid Email or Password" });
			});
	};

	// Hotel Owner Logout
	const logout = () => {
		localStorage.removeItem("authToken");
		localStorage.removeItem("uID");
		localStorage.removeItem("hotelOwnername");
		localStorage.removeItem("permissionLevel");
		navigate("/hotel-owner/login");
		makeToast({ type: "success", message: "Logout Successful" });
	};

	// Hotel Owner Register
	const register = (values) => {
		setIsLoading(true);
		HotelOwnerAPI.register(values)
			.then((response) => {
				localStorage.setItem("uID", response.data._id);
				localStorage.setItem("email", response.data.email);
				localStorage.setItem("authToken", response.data.token);
				localStorage.setItem("permissionLevel", response.data.permissionLevel);
				window.location.href = "/hotel-owner";
				setIsLoggedIn(true);
				setIsLoading(false);
			})
			.catch((err) => {
				setMessage(err.response.data.details.message);
				setIsLoading(false);
			});
	};

	// Update Hotel Owner Profile
	const updateProfile = (values) => {
		setIsLoading(true);
		HotelOwnerAPI.updateProfile(values)
			.then((response) => {
				setHotelOwner(response.data);
				setIsLoading(false);
				makeToast({ type: "success", message: "Profile Updated Successfully" });
			})
			.catch((err) => {
				setMessage(err.response.data.details.message);
				setIsLoading(false);
			});
	};

	useEffect(() => {
		if (localStorage.getItem("uID")) {
			HotelOwnerAPI.getHotelOwnerDetails(localStorage.getItem("uID")).then((response) => {
				setHotelOwner(response.data);
			});
		}
	}, []);

	return (
		<HotelOwnerContext.Provider value={{ updateProfile, login, logout, isLoggedIn, isLoading, message, register, hotelOwner }}>
			{children}
		</HotelOwnerContext.Provider>
	);
}

export default HotelOwnerContext;
