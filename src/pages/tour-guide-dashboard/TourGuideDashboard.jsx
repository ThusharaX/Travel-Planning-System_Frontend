import React from "react";
import { Link } from "react-router-dom";

const TourGuideDashboard = () => {
	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Tour Guide Dashboard</h1>

			<div className="text-center">
				<a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="#">
					<Link to="/tour-package-create">Already have an account? Login!</Link>
				</a>
			</div>
		</>
	);
};

export default TourGuideDashboard;
