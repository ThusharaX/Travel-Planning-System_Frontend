import React from "react";
import TourPackageList from "./TourPackageList";

// Tour Pacakge Provider
import { TourPackageProvider } from "../../contexts/TourPackageContext";

const index = () => {
	return (
		<>
			<TourPackageProvider>
				<TourPackageList />
			</TourPackageProvider>
		</>
	);
};

export default index;
