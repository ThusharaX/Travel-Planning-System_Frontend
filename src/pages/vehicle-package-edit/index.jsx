import React from "react";
import VehiclePackageEdit from "./VehiclePackageEdit";
// VehicleProvider
import { VehiclePackageProvider } from "../../contexts/VehiclePackageContext";

const index = () => {
	return (
		<>
			<VehiclePackageProvider>
				<VehiclePackageEdit />
			</VehiclePackageProvider>
		</>
	);
};

export default index;
