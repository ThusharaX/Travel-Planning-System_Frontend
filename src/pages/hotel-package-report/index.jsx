import React from "react";
import HotelPackageReport from "./HotelPackageReport";

// HotelPackageProvider
import { HotelPackageProvider } from "../../contexts/HotelPackageContext";

const index = () => {
	return (
		<>
			<HotelPackageProvider>
				<HotelPackageReport />
			</HotelPackageProvider>
		</>
	);
};

export default index;
