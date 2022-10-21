import { createContext, useState } from "react";
import VehicleOwnerAPI from "./api/VehicleOwnerAPI";
import makeToast from "../components/toast/index";

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

	// Add Vehicle Owner
	const VehicleOwnerRegister = (values) => {
		VehicleOwnerAPI.vehicleOwnerRegister(values)
			.then((response) => {
				setVehicleOwners([...vehicleOwners, response.data]);
				makeToast({ type: "success", message: "Registration Successful" });
				window.location.href = "/vehicle-owner-login";
			})
			.catch((err) => {
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
