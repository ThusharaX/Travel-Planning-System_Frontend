import React from "react";
import CampingPackageReport from "./CampingPackageReport";

import { CampingPackageProvider } from "../../contexts/CampingPackageContext";
import { CampingVenderProvider } from "../../contexts/CampingVenderContext";

const index = () => {
	return (
		<>
			<CampingPackageProvider>
				<CampingVenderProvider>
					<CampingPackageReport />
				</CampingVenderProvider>
			</CampingPackageProvider>
		</>
	);
};

export default index;
