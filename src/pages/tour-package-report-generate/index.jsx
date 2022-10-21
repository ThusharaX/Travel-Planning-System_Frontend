import React from "react";
import TourPackageReport from "./TourPackageReport";

// Tour Package Provider
import { TourPackageProvider } from "../../contexts/TourPackageContext";

const index = () => {
	return (
		<>
			<TourPackageProvider>
				<TourPackageReport />
			</TourPackageProvider>
		</>
	);
};

export default index;
