import React from "react";
import VehiclePackage from "./vehiclePackage";

// HotelPackageProvider
import { VehiclePackageProvider } from "../../contexts/VehiclePackageContext";

const index = () => {
	return (
		<>
			<VehiclePackageProvider>
				<VehiclePackage />
			</VehiclePackageProvider>
		</>
	);
};

export default index;
