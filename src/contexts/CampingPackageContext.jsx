import { createContext, useState, useEffect } from "react";
import CampingPackageAPI from "./api/CampingPackageApi";

const CampingPackageContext = createContext();

export function CampingPackageProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false);
	const [campingPackages, setCampingPackages] = useState([]);

	// Camping Package
	const [campingPackage, setCampingPackage] = useState({
		Packagename: "",
		persons: "",
		location: "",
		duration: "",
		price: "",
		packageDescription: "",
		images: [],
	});

	useEffect(() => {
		setIsLoading(true);
		CampingPackageAPI.getCampingPackages().then((response) => {
			setCampingPackages(response.data);
			setIsLoading(false);
		});
	}, []);

	// Add Hotel Package
	const addCampingPackage = async (newCampingPackage) => {
		try {
			setIsLoading(true);
			const response = await CampingPackageAPI.createCampingPackage(newCampingPackage);
			setCampingPackages([...campingPackages, response.data]);
			setIsLoading(false);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	return (
		<CampingPackageContext.Provider
			value={{
				isLoading,
				campingPackages,
				addCampingPackage,
				campingPackage,
			}}
		>
			{children}
		</CampingPackageContext.Provider>
	);
}

export default CampingPackageContext;
