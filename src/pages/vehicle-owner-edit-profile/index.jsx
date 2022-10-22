import React from "react";
import VehicleOwnerEditProfile from "./VehicleOwnerEditProfile";

// Vehicle Owner Provider
import { VehicleOwnerProvider } from "../../contexts/VehicleOwnerContext";

const index = () => {
	return (
		<>
			<VehicleOwnerProvider>
				<VehicleOwnerEditProfile />
			</VehicleOwnerProvider>
		</>
	);
};
export default index;
