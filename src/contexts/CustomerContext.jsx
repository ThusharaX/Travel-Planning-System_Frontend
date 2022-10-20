import { createContext, useState } from "react";
import CustomerAPI from "./api/CustomerAPI";
import { useEffect } from "react";
import makeToast from "../components/toast/index";

const CustomerContext = createContext();

export function CustomerProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [mailError, setMailError] = useState("");
	const [nicError, setNicError] = useState("");

	const [customers, setCustomers] = useState([]);

	const [customer, setCustomer] = useState({
		name: "",
		email: "",
		nic: "",
		contactNumber: "",
		profilePicture: "null",
		password: "",
	});

	// Add customer
	const CustomerRegister = async (values) => {
		CustomerAPI.customerRegister(values)
			.then((response) => {
				setCustomers([...customers, response.data]);
				makeToast({ type: "success", message: "Registration Successful" });
				window.location.href = "/customer-login";
			})
			.catch((err) => {
				console.log(err.response.data);
				if (err.response.data.details == "Email already exists") {
					setMailError(err.response.data.details);
					makeToast({ type: "error", message: "Email already exists" });
				}
				if (err.response.data.details == "NIC already exist") {
					setNicError(err.response.data.details);
					makeToast({ type: "error", message: "NIC already exists" });
				}
			});
	};

	return (
		<CustomerContext.Provider
			value={{
				isLoading,
				isLoggedIn,
				mailError,
				nicError,
				customer,
				CustomerRegister,
			}}
		>
			{children}
		</CustomerContext.Provider>
	);
}
export default CustomerContext;
