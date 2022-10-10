import { createContext, useState } from "react";
import CampingVendorAPI from "./api/CampingVendorAPI";

const CampingVenderContext = createContext();

export function CampingVenderProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [campingVenders, setCampingVenders] = useState([]);

	const [campingVender, setCampingVender] = useState({
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

	// Add Camping Vendor

	const CampingVendorRegister = async (values) => {
		try {
			setIsLoading(true);
			const response = await CampingVendorAPI.campingVendorRegister(values);
			setCampingVenders([...campingVenders, response.data]);
			setIsLoading(false);
			alert("Camping Vendor Registration Successful...!!!");
			window.localStorage.href = "/camping-vendor-login";
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	const CampingVendorLogin = (values) => {
		setIsLoading(true);
		CampingVendorAPI.campingVendorLogin(values)
			.then((response) => {
				if (response.data.permissionLevel !== "CAMPING_VENDOR") {
					setIsLoading(false);
					return alert("You are not a Camping Vendor");
				} else {
					localStorage.setItem("uID", response.data._id);
					localStorage.setItem("username", response.data.companyOwnerName);
					localStorage.setItem("Email", response.data.email);
					localStorage.setItem("authToken", response.data.token);
					localStorage.setItem("permissionLevel", response.data.permissionLevel);
					alert("Logged In Successful...!!!");
					window.location.href = "/camping-vendor-dashboard";
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
		<CampingVenderContext.Provider
			value={{
				isLoading,
				campingVenders,
				CampingVendorRegister,
				campingVender,
				CampingVendorLogin,
			}}
		>
			{children}
		</CampingVenderContext.Provider>
	);
}

export default CampingVenderContext;
