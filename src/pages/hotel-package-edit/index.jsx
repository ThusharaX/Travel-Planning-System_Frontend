import React from "react";
import HotelPackageEdit from "./HotelPackageEdit";

// HotelPackageProvider
import { HotelPackageProvider } from "../../contexts/HotelPackageContext";

const index = () => {
	return (
		<>
			<HotelPackageProvider>
				<HotelPackageEdit />
			</HotelPackageProvider>
		</>
	);
};

export default index;
