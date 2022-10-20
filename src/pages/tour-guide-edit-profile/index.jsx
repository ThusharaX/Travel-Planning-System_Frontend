import React from "react";
import TourGuideEditProfile from "./TourGuideEditProfile";

// Tour Guide Provider
import { TourGuideProvider } from "../../contexts/TourGuideContext";

const index = () => {
	return (
		<>
			<TourGuideProvider>
				<TourGuideEditProfile />
			</TourGuideProvider>
		</>
	);
};

export default index;
