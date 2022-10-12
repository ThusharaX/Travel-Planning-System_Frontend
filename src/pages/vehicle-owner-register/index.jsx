import React from "react";
import VehicleOwnerRegister from "./VehicleOwnerRegister";

// Vehicle Owner Provider
import { VehicleOwnerProvider } from "../../contexts/VehicleOwnerContext";

const index = () => {
	return (
		<>
			<VehicleOwnerProvider>
				<VehicleOwnerRegister />
			</VehicleOwnerProvider>
		</>
	);
};
export default index;
