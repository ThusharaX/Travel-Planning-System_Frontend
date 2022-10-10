import React from "react";
import CampingVendorDashboard from "./CampingVendorDashboard";

import { CampingPackageProvider } from "../../contexts/CampingPackageContext";
import { CampingVenderProvider } from "../../contexts/CampingVenderContext";

const index = () => {
	return (
		<>
			<CampingPackageProvider>
				<CampingVenderProvider>
					<CampingVendorDashboard />
				</CampingVenderProvider>
			</CampingPackageProvider>
		</>
	);
};

export default index;
