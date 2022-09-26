import React from "react";
import VehicleList from "./VehicleList";

// VehicleProvider
import { VehicleTourProvider } from "../../contexts/VehicleTourContext";

const index = () => {
	return (
		<>
			<VehicleTourProvider>
				<VehicleList />
			</VehicleTourProvider>
		</>
	);
};

export default index;
