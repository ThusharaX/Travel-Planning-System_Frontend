import React from "react";
import TourGuideDashboard from "./TourGuideDashboard";

// Tour Guide Provider
import { TourGuideProvider } from "../../contexts/TourGuideContext";

const index = () => {
	return (
		<>
			<TourGuideProvider>
				<TourGuideDashboard />
			</TourGuideProvider>
		</>
	);
};

export default index;
