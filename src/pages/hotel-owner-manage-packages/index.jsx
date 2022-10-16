import React from "react";
import HotelOwnerManagePackage from "./HotelOwnerManagePackage";

import { HotelPackageProvider } from "../../contexts/HotelPackageContext";

const Login = () => {
	return (
		<HotelPackageProvider>
			<HotelOwnerManagePackage />
		</HotelPackageProvider>
	);
};

export default Login;
