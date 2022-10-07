import React from "react";
import TourGuideLogin from "./TourGuideLogin";

import { TourGuideProvider } from "../../contexts/TourGuideContext";

const index = () => {
	return (
		<>
			<TourGuideProvider>
				<TourGuideLogin />
			</TourGuideProvider>
		</>
	);
};

export default index;
