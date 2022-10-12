import { createContext, useState } from "react";
import VehicleOwnerAPI from "./api/VehicleOwnerAPI";

const VehicleOwnerContext = createContext();

export function VehicleOwnerProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [vehicleOwners, setVehicleOwners] = useState([]);

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

	const VehicleOwnerRegister = async (values) => {
		try {
			setIsLoading(true);
			const response = await VehicleOwnerAPI.vehicleOwnerRegister(values);
			setVehicleOwners([...vehicleOwners, response.data]);
			setIsLoading(false);
			alert("Vehicle Owner Registration Successful...!!!");
			window.location.href = "/vehicle-owner-login";
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
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
				VehicleOwnerRegister,
				VehicleOwnerLogin,
			}}
		>
			{children}
		</VehicleOwnerContext.Provider>
	);
}

export default VehicleOwnerContext;
