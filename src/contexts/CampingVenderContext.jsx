import { createContext, useState, useEffect } from "react";
import CampingVendorAPI from "./api/CampingVendorAPI";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import { makeToast } from "../components";

const CampingVenderContext = createContext();

export function CampingVenderProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [campingVenders, setCampingVenders] = useState([]);
	const [mailError, setMailError] = useState("");
	const [nicError, setNicError] = useState("");

	const navigate = useNavigate();
	// Camping Package

	useEffect(() => {
		setIsLoading(true);
		CampingVendorAPI.getCampingVendors().then((response) => {
			setCampingVenders(response.data);
			setIsLoading(false);
		});
	}, []);

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

	///register form validation

	const SignUpFormSchema = Joi.object({
		companyOwnerName: Joi.string().min(2).max(20).message("Owner name should be between 2 and 20 characters"),
		email: Joi.string()
			.email({ tlds: { allow: false } })
			.message("Email should be valid"),
		nic: Joi.string().min(10).max(10).message("NIC should be 10 characters"),
		contactNumber: Joi.string().min(10).max(10).message("Phone number should be 10 characters"),
		password: Joi.string().min(4).message("Password should be valid"),
		companyName: Joi.string().min(2).max(20).message("Company name should be between 2 and 20 characters"),
		companyAddress: Joi.string().min(2).max(20).message("Company address should be between 2 and 20 characters"),
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

	// Add Camping Vendor
	const CampingVendorRegister = async (values) => {
		//Validate Form Details

		const { error } = SignUpFormSchema.validate(values);
		if (error) {
			makeToast({ type: "error", message: error.details[0].message });
			return;
		}

		CampingVendorAPI.campingVendorRegister(values)
			.then((response) => {
				setCampingVenders([...campingVenders, response.data]);
				alert("Camping Vendor Registration Successful...!!!");
				window.location.href = "/camping-vendor-login";
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

	const CampingVendorLogin = (values) => {
		setIsLoading(true);

		const { error } = LoginFormSchema.validate(values);
		if (error) {
			makeToast({ type: "error", message: error.details[0].message });
			return;
		}

		//validate form Data

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

	//get One Camping Package

	const getCampingVendor = (id) => {
		useEffect(() => {
			CampingVendorAPI.getOneVendorData(id).then((res) => {
				setCampingVender(res.data);
			});
		}, []);
	};

	// Edit camping Package
	const editCampingVendor = (values) => {
		const newCampingOwner = {
			companyOwnerName: values.companyOwnerName,
			email: values.email,
			nic: values.packageName,
			contactNumber: values.contactNumber,
			companyName: values.companyName,
			companyAddress: values.companyAddress,
			companyPhone: values.companyPhone,
			companyRegisterNumber: values.companyRegisterNumber,
		};
		CampingVendorAPI.editCampingVendor(values.id, newCampingOwner)
			.then((response) => {
				//console.log(res.data);
				//navigate("/viewres");
				// eslint-disable-next-line no-console
				console.log("updated successfully...");
				navigate("/camping-vendor-dashboard");
			})
			.catch((err) => {
				// eslint-disable-next-line no-console
				console.log(err);
			});
	};

	// Delete trainer and update UI
	const deleteCampingVendor = (id) => {
		CampingVendorAPI.deleteCampingVendor(id).then(() => {
			setCampingVenders(campingVenders.filter((campingVen) => campingVen._id !== id));
		});
	};

	return (
		<CampingVenderContext.Provider
			value={{
				isLoading,
				isLoggedIn,
				campingVenders,
				CampingVendorLogin,
				CampingVendorRegister,
				editCampingVendor,
				deleteCampingVendor,
				getCampingVendor,
				setCampingVender,
				campingVender,
				mailError,
				setMailError,
				nicError,
				setNicError,
			}}
		>
			{children}
		</CampingVenderContext.Provider>
	);
}

export default CampingVenderContext;
