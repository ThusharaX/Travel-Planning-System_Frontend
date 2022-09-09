import React from "react";
import CampingPackageList from "./CampingPackageList";

// HotelPackageProvider
import { CampingPackageProvider } from "../../contexts/CampingPackageContext";

const index = () => {
	return (
		<>
			<CampingPackageProvider>
				<CampingPackageList />
			</CampingPackageProvider>
		</>
	);
};

export default index;
