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
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	return (
		<CampingVenderContext.Provider
			value={{
				isLoading,
				campingVenders,
				CampingVendorRegister,
				campingVender,
			}}
		>
			{children}
		</CampingVenderContext.Provider>
	);
}

export default CampingVenderContext;
