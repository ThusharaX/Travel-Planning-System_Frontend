import { createContext, useState, useEffect } from "react";
import HotelPackageAPI from "./api/HotelPackageAPI";

const HotelPackageContext = createContext();

export function HotelPackageProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false);
	const [hotelPackages, setHotelPackages] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		HotelPackageAPI.getHotelPackages().then((response) => {
			setHotelPackages(response.data);
			setIsLoading(false);
		});
	}, []);

	return (
		<HotelPackageContext.Provider
			value={{
				isLoading,
				hotelPackages,
			}}
		>
			{children}
		</HotelPackageContext.Provider>
	);
}

export default HotelPackageContext;
