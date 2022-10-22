import React from "react";
import VehiclePackageReport from "./VehiclePackageReport";

import { VehiclePackageProvider } from "../../contexts/VehiclePackageContext";

const index = () => {
	return (
		<>
			<VehiclePackageProvider>
				<VehiclePackageReport />
			</VehiclePackageProvider>
		</>
	);
};

export default index;
