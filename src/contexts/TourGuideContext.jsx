import { createContext, useState } from "react";
import TourGuideAPI from "./api/TourGuideAPI";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const TourGuideContext = createContext();

export function TourGuideProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [tourGuides, setTourGuides] = useState([]);
	const [mailError, setMailError] = useState("");
	const [nicError, setNicError] = useState("");

	const showAlert = () => {
		toast.success("", {
			position: "top-right",
			autoClose: 5000,
		});
		toast.error("", {
			position: "top-right",
			autoClose: 5000,
		});
	};

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

	// Toast Message

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
					toast.success("Login Successful...!!!");
					window.location.href = "/tour-guide-dashboard";
					setIsLoggedIn(true);
					setIsLoggedIn(false);
				}
			})
			.catch((err) => {
				setIsLoading(false);
				toast.error("Invalid Email or Password");
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
				alert("Tour Guide Updated Successfully");
				window.location.href = "/tour-guide-dashboard";
			})
			.catch((err) => {
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
				showAlert,
			}}
		>
			{children}
		</TourGuideContext.Provider>
	);
}

export default TourGuideContext;
