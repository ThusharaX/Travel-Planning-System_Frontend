import React from "react";
import HotelOwnerRegister from "./HotelOwnerRegister";

import { HotelOwnerProvider } from "../../contexts/HotelOwnerContext";

const Login = () => {
	return (
		<HotelOwnerProvider>
			<HotelOwnerRegister />
		</HotelOwnerProvider>
	);
};

export default Login;
