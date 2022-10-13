import React from "react";
import TourGuideContext from "../../contexts/TourGuideContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

const TourGuideDashboard = () => {
	const { isLoading, tourGuide, getOneTourGuide, logout } = useContext(TourGuideContext);

	const id = localStorage.getItem("uID");
	console.log(id);
	getOneTourGuide(id);

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Tour Guide Dashboard</h1>

			<div className="text-center">
				<a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="#">
					<Link to="/tour-package-create">Create Package</Link>
				</a>
			</div>

			<h1>{tourGuide.tourGuideName}</h1>

			<Link to={`/tour-guide-edit-profile/${tourGuide._id}`}>Profile</Link>

			{localStorage.getItem("authToken") ? <button onClick={logout}>Logout</button> : <></>}
		</>
	);
};

export default TourGuideDashboard;
