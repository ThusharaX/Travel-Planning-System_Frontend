import React from "react";
import VehiclePackageReport from "./VehiclePackageReport";

import { VehiclePackageProvider } from "../../contexts/VehiclePackageContext";

const index = () => {
	return (
		<>
			<VehiclePackageProvider>
				<VehiclePackageProvider>
					<VehiclePackageReport />
				</VehiclePackageProvider>
			</VehiclePackageProvider>
		</>
	);
};

export default index;
