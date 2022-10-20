import React from "react";
import HotelPackage from "./HotelPackage";

// HotelPackageProvider
import { HotelPackageProvider } from "../../contexts/HotelPackageContext";

const index = () => {
	return (
		<>
			<HotelPackageProvider>
				<HotelPackage />
			</HotelPackageProvider>
		</>
	);
};

export default index;
