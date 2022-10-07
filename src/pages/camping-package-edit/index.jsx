import React from "react";
import CampingPackageEdit from "./CampingPackageEdit";

// Camping Package Provider

import { CampingPackageProvider } from "../../contexts/CampingPackageContext";

const index = () => {
	return (
		<>
			<CampingPackageProvider>
				<CampingPackageEdit />
			</CampingPackageProvider>
		</>
	);
};

export default index;
