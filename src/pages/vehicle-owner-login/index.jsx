import React from "react";
import VehicleOwnerLogin from "./VehicleOwnerLogin";

import { VehicleOwnerProvider } from "../../contexts/VehicleOwnerContext";

const index = () => {
	return (
		<>
			<VehicleOwnerProvider>
				<VehicleOwnerLogin />
			</VehicleOwnerProvider>
		</>
	);
};
export default index;
