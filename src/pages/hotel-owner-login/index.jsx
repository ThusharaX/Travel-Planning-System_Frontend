import React from "react";
import HotelOwnerLogin from "./HotelOwnerLogin";

import { HotelOwnerProvider } from "../../contexts/HotelOwnerContext";

const Login = () => {
	return (
		<HotelOwnerProvider>
			<HotelOwnerLogin />
		</HotelOwnerProvider>
	);
};

export default Login;
