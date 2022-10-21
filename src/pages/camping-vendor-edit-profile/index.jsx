import React from "react";
import CampingVendorEditProfile from "./CampingVendorEditProfile";

// Camping Vendor Provider'
import { CampingVenderProvider } from "../../contexts/CampingVenderContext";
const index = () => {
	return (
		<>
			<CampingVenderProvider>
				<CampingVendorEditProfile />
			</CampingVenderProvider>
		</>
	);
};

export default index;
