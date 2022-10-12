import Joi from "joi";
import { createContext, useState, useEffect } from "react";
import TourPackageAPI from "./api/TourPackageAPI";

const TourPackageContext = createContext();

export function TourPackageProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false);
	const [tourPackages, setTourPackages] = useState([]);

	const schemaProfile = Joi.object({
		tourPackageName: Joi.string().required(),
	});

	//Tour Package

	const [tourPackage, setTourPackage] = useState({
		tourPackageName: "",
		guideName: "",
		email: "",
		contactNumber: "",
		price: "",
		NumberOfDays: "",
		location: "",
		description: "",
		images: "",
	});

	//Get all Tour Packages

	useEffect(() => {
		setIsLoading(true);
		TourPackageAPI.getTourPackages().then((response) => {
			setTourPackages(response.data);
			setIsLoading(false);
		});
	}, []);

	// Add Tour Package
	const addTourPackage = async (newTourPackage) => {
		try {
			setIsLoading(true);
			const response = await TourPackageAPI.createTourPacakge(newTourPackage);
			setTourPackages([...tourPackages, response.data]);
			alert("Tour Package Added Successful...!!!");
			setIsLoading(false);
			window.location.href = "/tour-package-list";
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	// Get one Tour Package
	const getOneTourPackage = (id) => {
		useEffect(() => {
			TourPackageAPI.getOneTourPackage(id).then((res) => {
				setTourPackage(res.data);
			});
		}, []);
	};

	// Delete Tour Package
	const deleteTourPackage = (id) => {
		TourPackageAPI.deleteTourPackage(id).then(() => {
			setTourPackages(tourPackages.filter((tourPackages) => tourPackages._id !== id));
		});
	};

	// Edit Tour Package
	const editTourPackage = (values) => {
		const newTourPackage = {
			tourPackageName: values.tourPackageName,
			guideName: values.guideName,
			email: values.email,
			contactNumber: values.contactNumber,
			price: values.price,
			NumberOfDays: values.NumberOfDays,
			location: values.location,
			description: values.description,
		};
		TourPackageAPI.editTourPackage(values.id, newTourPackage)
			.then((response) => {
				console.log("Tour Package Updated Successful...!!!");
				window.location.href = "/tour-package-list";
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<TourPackageContext.Provider
			value={{
				isLoading,
				tourPackages,
				addTourPackage,
				tourPackage,
				schemaProfile,
				getOneTourPackage,
				deleteTourPackage,
				editTourPackage,
				setTourPackage,
			}}
		>
			{children}
		</TourPackageContext.Provider>
	);
}

export default TourPackageContext;
