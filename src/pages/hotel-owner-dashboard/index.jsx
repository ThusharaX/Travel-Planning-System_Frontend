import React from "react";
import HotelOwnerDashboard from "./HotelOwnerDashboard";

import { HotelOwnerProvider } from "../../contexts/HotelOwnerContext";

const Login = () => {
	return (
		<HotelOwnerProvider>
			<HotelOwnerDashboard />
		</HotelOwnerProvider>
	);
};

export default Login;
