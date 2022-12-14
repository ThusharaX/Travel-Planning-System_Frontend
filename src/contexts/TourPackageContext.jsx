import { createContext, useState, useEffect } from "react";
import TourPackageAPI from "./api/TourPackageAPI";
import makeToast from "../components/toast";

const TourPackageContext = createContext();

export function TourPackageProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false);
	const [tourPackages, setTourPackages] = useState([]);

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
			setIsLoading(false);
			makeToast({ type: "success", message: "Tour Package added successful" });
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
			makeToast({ type: "success", message: "Tour Package deleted successful" });
		});
	};

	// Edit Tour Package
	const TourPackageEdit = (values) => {
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
				// eslint-disable-next-line no-console

				window.location.href = "/tour-package-list";
				// eslint-disable-next-line no-console
				makeToast({ type: "success", message: "Tour Package update successful" });
			})
			.catch((error) => {
				// eslint-disable-next-line no-console
				console.log(error);
			});
	};

	return (
		<TourPackageContext.Provider
			value={{
				isLoading,
				tourPackages,
				addTourPackage,
				tourPackage,
				getOneTourPackage,
				deleteTourPackage,
				setTourPackages,
				TourPackageEdit,
				setTourPackage,
			}}
		>
			{children}
		</TourPackageContext.Provider>
	);
}

export default TourPackageContext;
