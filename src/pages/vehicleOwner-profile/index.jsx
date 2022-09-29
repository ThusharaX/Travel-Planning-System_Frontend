import React from "react";

import Userprofile from "./Userprofile";

// VehicleProvider
import { VehicleTourProvider } from "../../contexts/VehicleTourContext";

const index = () => {
	return (
		<>
			<VehicleTourProvider>
				<Userprofile />
			</VehicleTourProvider>
		</>
	);
};

export default index;
