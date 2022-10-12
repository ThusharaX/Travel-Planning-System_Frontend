import { createContext, useState } from "react";
import TourGuideAPI from "./api/TourGuideAPI";
import Joi from "joi";
import { useEffect } from "react";

const TourGuideContext = createContext();

export function TourGuideProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [tourGuides, setTourGuides] = useState([]);
	const [mailError, setMailError] = useState("");
	const [nicError, setNicError] = useState("");

	//Form Validation
	/*	const schema = Joi.object({
		tourGuideName: Joi.string().min(5).max(20).message("Name should be between 4 and 20 characters"),
		email: Joi.string().email().message("Email should be valid"),
		nic: Joi.string().min(10).max(12).message("NIC should be Valid"),
		contactNumber: Joi.string().min(10).max(10).message("Contact Number should be Valid"),
		profilePicture: Joi.string().required(),
		password: Joi.string().min(5).max(20).message("Password should be between 4 and 20 characters"),
	}); */

	const [tourGuide, setTourGuide] = useState({
		//schema: joiResolver(schema),
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

	// Add Tour Guide

	const TourGuideRegister = async (values) => {
		TourGuideAPI.tourGuideRegister(values)
			.then((response) => {
				setTourGuides([...tourGuides, response.data]);
				alert("Tour Guide Registration Successful...!!!");
				window.location.href = "/tour-guide-login";
				tourGuides.reset();
			})
			.catch((err) => {
				console.log(err.response.data);
				if (err.response.data.details == "Email already exists") {
					setMailError(err.response.data.details);
					alert("Email already exist");
				}
				if (err.response.data.details == "NIC already exists") {
					setNicError(err.response.data.details);
					alert("NIC already exists");
				}
			});
	};

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
					alert("Logged In Successfully");
					window.location.href = "/tour-guide-dashboard";
					setIsLoggedIn(true);
					setIsLoggedIn(false);
				}
			})
			.catch((err) => {
				setIsLoading(false);
				return alert(err.response.data.details.message);
			});
	};

	//Get one Tour Guide
	const getTourGuide = (id) => {
		useEffect(() => {
			TourGuideAPI.getOneTourGuide(id).then((res) => {
				setTourGuide(res.data);
			});
		}, []);
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
				getTourGuide,
			}}
		>
			{children}
		</TourGuideContext.Provider>
	);
}

export default TourGuideContext;
