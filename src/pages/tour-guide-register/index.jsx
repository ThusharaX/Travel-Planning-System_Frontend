import React from "react";
import TourGuideRegister from "./TourGuideRegister";

// TourGuideProvider
import { TourGuideProvider } from "../../contexts/TourGuideContext";

const index = () => {
	return (
		<>
			<TourGuideProvider>
				<TourGuideRegister />
			</TourGuideProvider>
		</>
	);
};

export default index;
