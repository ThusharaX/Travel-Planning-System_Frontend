import { createContext, useState, useEffect } from "react";
import CampingPackageAPI from "./api/CampingPackageApi";

const CampingPackageContext = createContext();

export function CampingPackageProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false);
	const [campingPackages, setCampingPackages] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		CampingPackageAPI.getCampingPackages().then((response) => {
			setCampingPackages(response.data);
			setIsLoading(false);
		});
	}, []);

	return (
		<CampingPackageContext.Provider
			value={{
				isLoading,
				campingPackages,
			}}
		>
			{children}
		</CampingPackageContext.Provider>
	);
}

export default CampingPackageContext;
