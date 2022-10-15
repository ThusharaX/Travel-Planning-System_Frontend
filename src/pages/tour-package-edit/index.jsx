import React from "react";
import TourPackageEdit from "./TourPackageEdit";

// Tour Package Provider
import { TourPackageProvider } from "../../contexts/TourPackageContext";
const index = () => {
	return (
		<>
			<TourPackageProvider>
				<TourPackageEdit />
			</TourPackageProvider>
		</>
	);
};
export default index;
