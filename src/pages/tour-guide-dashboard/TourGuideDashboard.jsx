import React from "react";
import { Link } from "react-router-dom";
import "../tour-guide-dashboard/TourGuideDashboard.css";

const TourGuideDashboard = () => {
	return (
		<>
			<div className="usercard">
				<div className=" flex flex-col bg-white justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12  white:text-dark">
					<img
						src="https://source.unsplash.com/150x150/?portrait?3"
						alt=""
						className="w-32 h-32 mx-auto rounded-full aspect-square"
					/>
					<div className="space-y-4 text-center divide-y divide-white-700">
						<div className="my-2 space-y-1">
							<h2 className="text-xl font-semibold sm:text-2xl">Leroy Jenkins</h2>
							<p className="px-5 text-xs sm:text-base dark:text-gray-400">Full-stack developer</p>
						</div>
						<div className="justify-center pt-2 align-center">
							<h3>Company name</h3>
							<h3>Email</h3>
							<h3>Contact Number</h3>
						</div>
					</div>
				</div>
			</div>
			<div className="cards">
				<div className="c1">
					<div className="mb-4">
						<Link to="#">
							<img src="../public/profile1.svg" className=" h-64 w-96 bg-white rounded-lg" alt="" />
						</Link>
					</div>
				</div>

				<div className="c2">
					<div className="mb-4">
						<Link to="#">
							<img src="../public/travel.svg" className="h-64 w-96 bg-white rounded-lg" alt="" />
						</Link>
					</div>
				</div>

				<div className="c3">
					<div className="mb-4">
						<Link to="#">
							<img src="../public/camp.svg" className="h-64 w-96 bg-white rounded-lg" alt="" />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default TourGuideDashboard;
