import { createContext, useState, useEffect } from "react";
import HotelPackageAPI from "./api/HotelPackageAPI";

const HotelPackageContext = createContext();

export function HotelPackageProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false);
	const [hotelPackages, setHotelPackages] = useState([]);

	// Hotel Package
	const [hotelPackage, setHotelPackage] = useState({
		name: "",
		location: "",
		condition: "",
		beds: 0,
		room_no: "",
		cost: 0,
		description: "",
		images: [],
	});

	useEffect(() => {
		setIsLoading(true);
		HotelPackageAPI.getHotelPackages().then((response) => {
			setHotelPackages(response.data);
			setIsLoading(false);
		});
	}, []);

	// Add Hotel Package
	const addHotelPackage = async (newHotelPackage) => {
		try {
			setIsLoading(true);
			const response = await HotelPackageAPI.createHotelPackage(newHotelPackage);
			setHotelPackages([...hotelPackages, response.data]);
			setIsLoading(false);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	return (
		<HotelPackageContext.Provider
			value={{
				isLoading,
				hotelPackages,
				addHotelPackage,
				hotelPackage,
			}}
		>
			{children}
		</HotelPackageContext.Provider>
	);
}

export default HotelPackageContext;
