import { createContext, useState } from "react";
import CustomerAPI from "./api/CustomerAPI";
import makeToast from "../components/toast/index";
import Joi from "joi";

const CustomerContext = createContext();

export function CustomerProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [mailError, setMailError] = useState("");
	const [nicError, setNicError] = useState("");
	const [customers, setCustomers] = useState([]);

	const SignUpFormSchema = Joi.object({
		name: Joi.string().min(2).max(20).message("Owner name should be between 2 and 20 characters"),
		email: Joi.string()
			.email({ tlds: { allow: false } })
			.message("Email should be valid"),
		nic: Joi.string().min(10).max(10).message("NIC should be 10 characters"),
		contactNumber: Joi.string().min(10).max(10).message("Phone number should be 10 characters"),
		password: Joi.string().min(4).message("Password should be valid"),
		profilePicture: Joi.string().min(2).message("Profile picture"),
	});
	// Customer
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
				const { error } = SignUpFormSchema.validate(values);

				// BUG FIX
				if (error) {
					makeToast({ type: "error", message: error.details[0].message });
					return;
				}

				makeToast({ type: "success", message: "Registration Successful" });
				window.location.href = "/customer-login";
			})
			.catch((error) => {
				// eslint-disable-next-line no-console
				console.log(error.response.data);
				if (error.response.data.details == "Email already exists") {
					setMailError(error.response.data.details);
					makeToast({ type: "error", message: "Email already exists" });
				}
				if (error.response.data.details == "NIC already exist") {
					setNicError(error.response.data.details);
					makeToast({ type: "error", message: "NIC already exists" });
				}
			});
	};

	// Customer Login
	const CustomerLogin = (values) => {
		setIsLoading(true);
		CustomerAPI.customerLogin(values)
			.then((response) => {
				if (response.data.permissionLevel !== "CUSTOMER") {
					setIsLoading(false);
					return alert("You are not a Customer");
				} else {
					localStorage.setItem("uID", response.data._id);
					localStorage.setItem("username", response.data.name);
					localStorage.setItem("Email", response.data.email);
					localStorage.setItem("authToken", response.data.token);
					localStorage.setItem("permissionLevel", response.data.permissionLevel);
					makeToast({ type: "success", message: "Login Successful" });
					window.location.href = "/customer-dashboard";
					setIsLoggedIn(true);
					setIsLoggedIn(false);
				}
			})
			.catch((error) => {
				setIsLoading(false);
				makeToast({ type: "error", message: "Invalid Email or Password" });
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
				CustomerLogin,
				// BUG FIX
				setCustomer,
			}}
		>
			{children}
		</CustomerContext.Provider>
	);
}
export default CustomerContext;
