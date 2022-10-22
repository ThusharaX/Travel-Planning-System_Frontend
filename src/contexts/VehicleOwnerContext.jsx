import { createContext, useState } from "react";
import VehicleOwnerAPI from "./api/VehicleOwnerAPI";

import Joi from "joi";

import { makeToast } from "../components";

const VehicleOwnerContext = createContext();

export function VehicleOwnerProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [vehicleOwners, setVehicleOwners] = useState([]);
	const [mailError, setMailError] = useState("");
	const [nicError, setNicError] = useState("");

	const [vehicleOwner, setVehicleOwner] = useState({
		companyOwnerName: "",
		email: "",
		nic: "",
		contactNumber: "",
		companyName: "",
		companyAddress: "",
		companyPhone: "",
		companyRegisterNumber: "",
		profilePicture: "",
		password: "",
	});

	const SignUpFormSchema = Joi.object({
		companyOwnerName: Joi.string().min(2).max(20).message("Owner name should be between 2 and 20 characters"),
		email: Joi.string()
			.email({ tlds: { allow: false } })
			.message("Email should be valid"),
		nic: Joi.string().min(10).max(10).message("NIC should be 10 characters"),
		contactNumber: Joi.string().min(10).max(10).message("Phone number should be 10 characters"),
		password: Joi.string().min(4).message("Password should be valid"),

		companyName: Joi.string().min(2).max(20).message("Hotel name should be between 2 and 20 characters"),
		companyAddress: Joi.string().min(2).max(20).message("Hotel address should be between 2 and 20 characters"),
		companyPhone: Joi.string().min(10).max(10).message("Company phone number should be 10 characters"),
		companyRegisterNumber: Joi.string()
			.min(2)
			.max(20)
			.message("Company registration number should be between 2 and 20 characters"),
		profilePicture: Joi.string().min(0).message("Profile picture"),
	});

	// Add Vehicle Owner
	const VehicleOwnerRegister = (values) => {
		const { error } = SignUpFormSchema.validate(values);
		if (error) {
			makeToast({ type: "error", message: error.details[0].message });
			return;
		}

		VehicleOwnerAPI.vehicleOwnerRegister(values)
			.then((response) => {
				setVehicleOwners([...vehicleOwners, response.data]);
				alert("Vehicle Owner Registration Successful...!");
				window.location.href = "/vehicle-owner-login";
			})
			.catch((err) => {
				// eslint-disable-next-line no-console
				console.log(err.response.data);
				if (err.response.data.details == "Email already Exists") {
					setMailError(err.response.data.details);
					alert("Email already Exists");
				}
				if (err.response.data.details == "NIC already exists") {
					setNicError(err.response.data.details);
					alert("NIC already exists");
				}
			});
	};

	// Vehicle Owner Login
	const VehicleOwnerLogin = (values) => {
		setIsLoading(true);

		const { error } = LoginFormSchema.validate(values);
		if (error) {
			makeToast({ type: "error", message: error.details[0].message });
			return;
		}

		VehicleOwnerAPI.vehicleOwnerLogin(values)
			.then((response) => {
				if (response.data.permissionLevel !== "VEHICLE_OWNER") {
					setIsLoading(false);
					return alert("You are not a Vehicle Owner");
				} else {
					localStorage.setItem("uID", response.data._id);
					localStorage.setItem("username", response.data.companyOwnerName);
					localStorage.setItem("Email", response.data.email);
					localStorage.setItem("authToken", response.data.token);
					localStorage.setItem("permissionLevel", response.data.permissionLevel);
					alert("Logged In Successful...!!!");
					window.location.href = "/vehicle-profile";
					setIsLoggedIn(true);
					setIsLoggedIn(false);
				}
			})
			.catch((err) => {
				setIsLoading(false);
				return alert(err.response.data.details.message);
			});
	};

	return (
		<VehicleOwnerContext.Provider
			value={{
				isLoading,
				vehicleOwner,
				vehicleOwners,
				VehicleOwnerLogin,
				VehicleOwnerRegister,
				setMailError,
				mailError,
				setNicError,
				nicError,
				isLoggedIn,
			}}
		>
			{children}
		</VehicleOwnerContext.Provider>
	);
}

export default VehicleOwnerContext;
