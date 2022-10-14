import React from "react";
import "../tour-guide-dashboard/TourGuideDashboard.css";
import TourGuideContext from "../../contexts/TourGuideContext";
import toast, { Toaster } from "react-hot-toast";
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
			<div className="usercard">
				<div className=" flex flex-col bg-white justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12  white:text-dark">
					<img src="../public/user.svg" alt="" className="w-32 h-32 mx-auto rounded-full aspect-square" />
					<div className="space-y-4 text-center divide-y divide-white-700">
						<div className="my-2 space-y-1">
							<h1 className="text-2xl font-bold text-primary-blue">{tourGuide.tourGuideName}</h1>
							<p className="text-sm font-medium text-gray-500 sm:text-base">{tourGuide.email}</p>
						</div>
						<div className="justify-center pt-2 align-center">
							<ul>
								<li className="text-sm font-medium text-gray-500 sm:text-base">Phone: {tourGuide.contactNumber}</li>
								<li className="text-sm font-medium text-gray-500 sm:text-base">NIC: {tourGuide.nic}</li>
								<li className="text-sm font-medium text-gray-500 sm:text-base">Type: {tourGuide.permissionLevel}</li>
							</ul>

							<br></br>

							<div className="mb-6 text-center">
								<button>
									<Link
										to={`/tour-guide-edit-profile/${id}`}
										className="w-full px-8 py-2 font-bold text-white bg-primary-blue rounded-full hover:bg-blue-00 focus:outline-none focus:shadow-outline"
									>
										Edit
									</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="cards">
				<div className="c1">
					<h1 className="addPackage text-primary-blue">Add Tour Package</h1>
					<div className="mb-4">
						<Link to="/tour-package-create">
							<img src="../public/addtourpackage.svg" className=" h-64 w-96 bg-white rounded-lg" alt="" />
						</Link>
					</div>
				</div>
				<div className="c2">
					<h1 className="packageList text-primary-blue">View All Tour Package</h1>
					<div className="mb-4">
						<Link to="/tour-package-list">
							<img src="../public/list.svg" className="h-64 w-96 bg-white rounded-lg" alt="" />
						</Link>
					</div>
				</div>
				<div className="c3 text-primary-blue">
					<h1 className="text-add">Report Generate</h1>
					<div className="mb-4">
						<Link to="/tour-package-report">
							<img src="../public/report.svg" className="h-64 w-96 bg-white rounded-lg" alt="" />
						</Link>
					</div>
				</div>
			</div>
			<Toaster />
		</>
	);
};

export default TourGuideDashboard;
