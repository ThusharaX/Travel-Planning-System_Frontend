import React from "react";
import HotelPackageList from "./HotelPackageCreate";

// HotelPackageProvider
import { HotelPackageProvider } from "../../contexts/HotelPackageContext";

const index = () => {
	return (
		<>
			<HotelPackageProvider>
				<HotelPackageList />
			</HotelPackageProvider>
		</>
	);
};

export default index;
