import { createContext, useState, useEffect } from "react";
import TourPackageAPI from "./api/TourPackageAPI";

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
		images: [],
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
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	return (
		<TourPackageContext.Provider
			value={{
				isLoading,
				tourPackages,
				addTourPackage,
				tourPackage,
			}}
		>
			{children}
		</TourPackageContext.Provider>
	);
}

export default TourPackageContext;
