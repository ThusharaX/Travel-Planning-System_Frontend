import React from "react";
import VehicleEdit from "./VehicleEdit";

// VehicleProvider
import { VehicleTourProvider } from "../../contexts/VehicleTourContext";

const index = () => {
	return (
		<>
			<VehicleTourProvider>
				<VehicleEdit />
			</VehicleTourProvider>
		</>
	);
};

export default index;
