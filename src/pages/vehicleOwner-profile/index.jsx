import React from "react";

import Userprofile from "./Userprofile";

// VehicleProvider
import { VehicleTourProvider } from "../../contexts/VehicleTourContext";
import { VehiclePackageProvider } from "../../contexts/VehiclePackageContext";

const index = () => {
	return (
		<>
			<VehiclePackageProvider>
				<Userprofile />
			</VehiclePackageProvider>
		</>
	);
};

export default index;
