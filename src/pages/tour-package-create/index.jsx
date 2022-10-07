import React from "react";
import TourPackageCreate from "./TourPackageCreate";

// Tour Package Provider
import { TourPackageProvider } from "../../contexts/TourPackageContext";

const index = () => {
	return (
		<>
			<TourPackageProvider>
				<TourPackageCreate />
			</TourPackageProvider>
		</>
	);
};

export default index;
