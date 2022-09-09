import { createContext, useState, useEffect } from "react";
import TourPackageAPI from "./api/TourPackageAPI";

const TourPackageContext = createContext();

export function TourPackageProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false);
	const [tourPackages, setTourPackages] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		TourPackageAPI.getTourPackages().then((response) => {
			setTourPackages(response.data);
			setIsLoading(false);
		});
	}, []);

	return (
		<TourPackageContext.Provider
			value={{
				isLoading,
				tourPackages,
			}}
		>
			{children}
		</TourPackageContext.Provider>
	);
}

export default TourPackageContext;
