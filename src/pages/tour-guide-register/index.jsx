import React from "react";
import TourGuideRegister from "./TourGuideRegister";

// Tour Guide Provider
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
