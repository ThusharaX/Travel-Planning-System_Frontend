import React from "react";
import CampingVendorRegister from "./CampingVendorRegister";

//Camping Vendor Provider
import { CampingVenderProvider } from "../../contexts/CampingVenderContext";

const index = () => {
	return (
		<>
			<CampingVenderProvider>
				<CampingVendorRegister />*{" "}
			</CampingVenderProvider>
		</>
	);
};

export default index;
