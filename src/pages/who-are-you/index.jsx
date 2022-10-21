import React from "react";
import { Link } from "react-router-dom";

const WhoAreYou = () => {
	// Hotel Owner
	// Tour Guide
	// Camping Vendor
	// Vehicle Owner
	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Who are you</h1>

			{/* 4 cards for 4 types of users */}
			<div className="flex flex-wrap justify-center mt-10">
				{/* Hotel Owner */}
				<div className="w-1/4 m-2">
					<Link to="/hotel-owner">
						<div className="bg-white shadow-md rounded-lg p-4">
							<div className="flex flex-col items-center">
								<div className="w-20 h-20 rounded-full bg-gray-200 flex justify-center items-center">
									<img src="https://img.icons8.com/color-glass/64/000000/hotel-check-in.png" />
								</div>
								<h3 className="text-gray-700 font-medium text-lg mt-3">Hotel Owner</h3>
								<span className="text-sm text-gray-500">You own a hotel and want to list it on our platform</span>
							</div>
						</div>
					</Link>
				</div>
				{/* Tour Guide */}
				<div className="w-1/4 m-2">
					<Link to="/tour-guide-login">
						<div className="bg-white shadow-md rounded-lg p-4">
							<div className="flex flex-col items-center">
								<div className="w-20 h-20 rounded-full bg-gray-200 flex justify-center items-center">
									<img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-tour-guide-travel-agency-flaticons-lineal-color-flat-icons-2.png" />
								</div>
								<h3 className="text-gray-700 font-medium text-lg mt-3">Tour Guide</h3>
								<span className="text-sm text-gray-500">
									You are a tour guide and want to list your tours on our platform
								</span>
							</div>
						</div>
					</Link>
				</div>
				{/* Camping Vendor */}
				<div className="w-1/4 m-2">
					<Link to="/camping-vendor-login">
						<div className="bg-white shadow-md rounded-lg p-4">
							<div className="flex flex-col items-center">
								<div className="w-20 h-20 rounded-full bg-gray-200 flex justify-center items-center">
									<img src="https://img.icons8.com/office/64/000000/camping-tent.png" />
								</div>
								<h3 className="text-gray-700 font-medium text-lg mt-3">Camping Vendor</h3>
								<span className="text-sm text-gray-500">
									{" "}
									You are a camping vendor and want to list your camping items on our platform
								</span>
							</div>
						</div>
					</Link>
				</div>
				{/* Vehicle Owner */}
				<div className="w-1/4 m-2">
					<Link to="/vehicle-owner-login">
						<div className="bg-white shadow-md rounded-lg p-4">
							<div className="flex flex-col items-center">
								<div className="w-20 h-20 rounded-full bg-gray-200 flex justify-center items-center">
									<img src="https://img.icons8.com/dusk/64/000000/vehicle-security.png" />
								</div>
								<h3 className="text-gray-700 font-medium text-lg mt-3">Vehicle Owner</h3>
								<span className="text-sm text-gray-500"> You own a vehicle and want to list it on our platform</span>
							</div>
						</div>
					</Link>
				</div>
				<div className="w-1/4 m-2">
					<Link to="/customer-login">
						<div className="bg-white shadow-md rounded-lg p-4">
							<div className="flex flex-col items-center">
								<div className="w-20 h-20 rounded-full bg-gray-200 flex justify-center items-center">
									<img src="https://img.icons8.com/bubbles/50/000000/user.png" />
								</div>
								<h3 className="text-gray-700 font-medium text-lg mt-3">User</h3>
								<span className="text-sm text-gray-500">
									{" "}
									You are a user and you can to list your favourite items on our platform
								</span>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default WhoAreYou;
