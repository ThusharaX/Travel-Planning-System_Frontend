import React from "react";
import TourPackageList from "./TourPackageCreate";

// Tour Package Provider
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
