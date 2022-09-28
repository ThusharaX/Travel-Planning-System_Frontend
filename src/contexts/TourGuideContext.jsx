import { createContext, useState, useEffect } from "react";
import TourGuideAPI from "./api/TourGuideAPI";
import Joi from "joi";

const TourGuideContext = createContext();

export function TourGuideProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false);
	const [tourGuides, setTourGuides] = useState([]);

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
		profilePicture: "null",
		password: "",
	});

	// Add Tour Guide

	const addTourGuide = async (newTourGuide) => {
		try {
			setIsLoading(true);
			const response = await TourGuideAPI.tourGuideRegister(newTourGuide);
			setTourGuides([...tourGuides, response.data]);
			setIsLoading(false);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	/*const addTourGuide = (values) => {
		setIsLoading(true);
		const newTourGuide = {
			tourGuideName: values.tourGuideName,
			email: values.email,
			nic: values.nic,
			contactNumber: values.contactNumber,
			profilePicture: values.profilePicture,
			password: values.password,
		};
		TourGuideAPI.tourGuideRegister(newTourGuide)
			.then((response) => {
				// setIsLoading(false);
			})
			.catch((err) => {
				//eslint-disable-next-line no-console
				console.log(err.response.data);
				if (err.response.data.details == "Email Already Exists") {
					setMailError(err.response.data.details);
				}
				if (err.response.data.details == "NIC Already Exists") {
					setNicError(err.response.data.details);
				}
				if (err.response.data.details == "Username Already Exists") {
					setUserNameError(err.response.data.details);
				}
			});
	}; */

	return (
		<TourGuideContext.Provider
			value={{
				isLoading,
				tourGuides,
				addTourGuide,
				tourGuide,
			}}
		>
			{children}
		</TourGuideContext.Provider>
	);
}

export default TourGuideContext;
