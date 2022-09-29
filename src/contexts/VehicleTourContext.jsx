import { createContext, useState, useEffect } from "react";
import VehicleTourAPI from "./api/VehicleTourApi";

const VehicleTourContext = createContext();

export function VehicleTourProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false);
	const [vehicleTours, setVehicleTours] = useState([]);

	// Hotel Package
	const [vehicleTour, setVehicleTour] = useState({
		vehicleType: "",
		regNo: "",
		ownersName: "",
		year: "",
		description: "",
		images: [],
	});

	useEffect(() => {
		setIsLoading(true);
		VehicleTourAPI.getVehicles().then((response) => {
			setVehicleTours(response.data);
			setIsLoading(false);
		});
	}, []);

	// Add Hotel Package
	const addVehicle = async (newVehicleTour) => {
		try {
			setIsLoading(true);
			const response = await VehicleTourAPI.createVehicle(newVehicleTour);
			setVehicleTours([...vehicleTours, response.data]);
			setIsLoading(false);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	return (
		<VehicleTourContext.Provider
			value={{
				isLoading,
				vehicleTours,
				addVehicle,
				vehicleTour,
			}}
		>
			{children}
		</VehicleTourContext.Provider>
	);
}

export default VehicleTourContext;
