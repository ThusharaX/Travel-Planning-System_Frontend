import { createContext, useState, useEffect } from "react";
import TourGuideAPI from "./api/TourGuideAPI";
import makeToast from "../components/toast/index";
import Joi from "joi";

const TourGuideContext = createContext();

export function TourGuideProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [tourGuides, setTourGuides] = useState([]);
	const [mailError, setMailError] = useState("");
	const [nicError, setNicError] = useState("");

	const [tourGuide, setTourGuide] = useState({
		tourGuideName: "",
		email: "",
		nic: "",
		contactNumber: "",
		guideArea: "",
		guideCity: "",
		spokenLanguages: "",
		motherTongue: "",
		profilePicture: "null",
		password: "",
	});

	const SignUpFormSchema = Joi.object({
		tourGuideName: Joi.string().min(2).max(20).message("Owner name should be between 2 and 20 characters"),
		email: Joi.string()
			.email({ tlds: { allow: false } })
			.message("Email should be valid"),
		nic: Joi.string().min(10).max(10).message("NIC should be 10 characters"),
		contactNumber: Joi.string().min(10).max(10).message("Phone number should be 10 characters"),
		guideArea: Joi.string().min(2).max(20).message("Owner name should be between 2 and 20 characters"),
		guideCity: Joi.string().min(2).max(20).message("Owner name should be between 2 and 20 characters"),
		spokenLanguages: Joi.string().min(2).max(20).message("Owner name should be between 2 and 20 characters"),
		motherTongue: Joi.string().min(2).max(20).message("Owner name should be between 2 and 20 characters"),
		password: Joi.string().min(4).message("Password should be valid"),	
		profilePicture: Joi.string().min(0).message("Profile picture"),


	});

	// Toast Message

	// Add Tour Guide
	const TourGuideRegister = async (values) => {

		const { error } = SignUpFormSchema.validate(values);
		if (error) {
			makeToast({ type: "error", message: error.details[0].message });
			return;
		}

		TourGuideAPI.tourGuideRegister(values)
			.then((response) => {
				setTourGuides([...tourGuides, response.data]);
				makeToast({ type: "success", message: "Registration Successful" });
				window.location.href = "/tour-guide-login";
			})
			.catch((err) => {
				// eslint-disable-next-line no-console
				console.log(err.response.data);
				if (err.response.data.details == "Email already exists") {
					setMailError(err.response.data.details);
					makeToast({ type: "error", message: "Email already exists" });
				}
				if (err.response.data.details == "NIC already exists") {
					setNicError(err.response.data.details);
					makeToast({ type: "error", message: "NIC already exists" });
				}
			});
	};

	// Tour Guide Login
	const TourGuideLogin = (values) => {
		setIsLoading(true);
		TourGuideAPI.tourGuideLogin(values)
			.then((response) => {
				if (response.data.permissionLevel !== "TOUR_GUIDE") {
					setIsLoading(false);
					return alert("You are not a Tour Guide");
				} else {
					localStorage.setItem("uID", response.data._id);
					localStorage.setItem("username", response.data.tourGuideName);
					localStorage.setItem("Email", response.data.email);
					localStorage.setItem("ContactNumber", response.data.contactNumber);
					localStorage.setItem("authToken", response.data.token);
					localStorage.setItem("permissionLevel", response.data.permissionLevel);
					makeToast({ type: "success", message: "Login Successful" });
					window.location.href = "/tour-guide-dashboard";
					setIsLoggedIn(true);
					setIsLoggedIn(false);
				}
			})
			.catch((err) => {
				setIsLoading(false);
				makeToast({ type: "error", message: "Invalid Email or Password" });
			});
	};

	//Get one Tour Guide
	const getOneTourGuide = (id) => {
		useEffect(() => {
			TourGuideAPI.getOneTourGuide(id).then((res) => {
				setTourGuide(res.data);
			});
		}, []);
	};

	// Edit Tour Guide
	const TourGuideEdit = (values) => {
		const newTourGuide = {
			tourGuideName: values.tourGuideName,
			email: values.email,
			nic: values.nic,
			contactNumber: values.contactNumber,
			guideArea: values.guideArea,
			guideCity: values.guideCity,
			spokenLanguages: values.spokenLanguages,
			motherTongue: values.motherTongue,
		};
		TourGuideAPI.editTourGuide(values.id, newTourGuide)
			.then((response) => {
				makeToast({ type: "success", message: "Profile Updated Successful" });
				window.location.href = "/tour-guide-dashboard";
			})
			.catch((err) => {
				// eslint-disable-next-line no-console
				console.log(err);
			});
	};

	// Tour Guide Logout
	const logout = () => {
		localStorage.removeItem("authToken");
		localStorage.removeItem("uID");
		localStorage.removeItem("username");
		localStorage.removeItem("ContactNumber");
		localStorage.removeItem("Email");
		localStorage.removeItem("permissionLevel");
		window.location.href = "/";
	};

	return (
		<TourGuideContext.Provider
			value={{
				isLoading,
				tourGuides,
				TourGuideRegister,
				tourGuide,
				TourGuideLogin,
				isLoggedIn,
				mailError,
				setMailError,
				nicError,
				setNicError,
				getOneTourGuide,
				logout,
				TourGuideEdit,
				setTourGuide,
			}}
		>
			{children}
		</TourGuideContext.Provider>
	);
}

export default TourGuideContext;
