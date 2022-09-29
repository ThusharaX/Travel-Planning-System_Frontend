import React from "react";
import CampingPackageList from "./CampingPackageCreate";

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
