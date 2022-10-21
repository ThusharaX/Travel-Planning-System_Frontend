import { createContext, useState } from "react";
import VehicleOwnerAPI from "./api/VehicleOwnerAPI";
import makeToast from "../components/toast/index";

import Joi from "joi";
import { useEffect } from "react";
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

	// Login Form Validation
	const LoginFormSchema = Joi.object({
		email: Joi.string()
			.email({ tlds: { allow: false } })
			.message("Email should be valid"),
		password: Joi.string().min(4).message("Password should be valid"),
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
				makeToast({ type: "success", message: "Registration Successful" });
				window.location.href = "/vehicle-owner-login";
			})
			.catch((err) => {
				// eslint-disable-next-line no-console
				console.log(err.response.data);
				if (err.response.data.details == "Email already Exists") {
					setMailError(err.response.data.details);
					makeToast({ type: "error", message: "Email already exists" });
				}
				if (err.response.data.details == "NIC already exists") {
					setNicError(err.response.data.details);
					makeToast({ type: "error", message: "NIC already exists" });
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
					makeToast({ type: "success", message: "Login Successful" });
					window.location.href = "/vehicle-profile";
					setIsLoggedIn(true);
					setIsLoggedIn(false);
				}
			})
			.catch((err) => {
				setIsLoading(false);
				makeToast({ type: "error", message: "Invalid Email or Password" });
			});
	};

	// get one Vehicle Owner
	const getOneVehicleOwner = (id) => {
		useEffect(() => {
			VehicleOwnerAPI.getOneVehicleOwner(id).then((res) => {
				setVehicleOwner(res.data);
			});
		}, []);
	};

	// Get all Vehicle Owner
	useEffect(() => {
		setIsLoading(true);
		VehicleOwnerAPI.getAllVehicleOwners().then((response) => {
			setVehicleOwners(response.data);
			setIsLoading(false);
		});
	}, []);

	// Edit Vehicle Owner
	const EditVehicleOwner = (values) => {
		const newVehicleOwner = {
			companyOwnerName: values.companyOwnerName,
			email: values.email,
			nic: values.packageName,
			contactNumber: values.contactNumber,
			companyName: values.companyName,
			companyAddress: values.companyAddress,
			companyPhone: values.companyPhone,
			companyRegisterNumber: values.companyRegisterNumber,
		};
		VehicleOwnerAPI.editVehicleOwner(values.id, newVehicleOwner)
			.then((response) => {
				makeToast({ type: "success", message: "Update Successful" });
				//window.location.href = "/vehicle-profile";
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// Delete Vehicle Owner
	const deleteVehicleOwner = (id) => {
		VehicleOwnerAPI.deleteVehicleOwner(id).then(() => {
			setVehicleOwners(vehicleOwners.filter((vehicleOwner) => vehicleOwner._id !== id));
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
				getOneVehicleOwner,
				setVehicleOwner,
				setVehicleOwners,
				deleteVehicleOwner,
				EditVehicleOwner,
			}}
		>
			{children}
		</VehicleOwnerContext.Provider>
	);
}

export default VehicleOwnerContext;
