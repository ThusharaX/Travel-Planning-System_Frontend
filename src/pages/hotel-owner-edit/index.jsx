import React from "react";
import HotelOwnerEdit from "./HotelOwnerEdit";

import { HotelOwnerProvider } from "../../contexts/HotelOwnerContext";

const Login = () => {
	return (
		<HotelOwnerProvider>
			<HotelOwnerEdit />
		</HotelOwnerProvider>
	);
};

export default Login;
