import React from "react";
import VehicleList from "./VehicleList";
import Userprofile from "./Userprofile";

// VehicleProvider
import { VehicleTourProvider } from "../../contexts/VehicleTourContext";

const index = () => {
	return (
		<>
			<VehicleTourProvider>
				<VehicleList />
			</VehicleTourProvider>
			<Userprofile />
		</>
	);
};

export default index;
