import React from "react";
import CampingVendorLogin from "./CampingVendorLogin";

import { CampingVenderProvider } from "../../contexts/CampingVenderContext";

const index = () => {
	return (
		<>
			<CampingVenderProvider>
				<CampingVendorLogin />
			</CampingVenderProvider>
		</>
	);
};

export default index;
