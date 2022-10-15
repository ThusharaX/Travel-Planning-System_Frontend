import React, { useContext } from "react";
import HotelOwnerContext from "../../contexts/HotelOwnerContext";
import { Link } from "react-router-dom";

const HotelOwnerDashboard = () => {
	const { updateProfile, hotelOwner, logout } = useContext(HotelOwnerContext);

	return (
		<>
			{/* <h1 className="mt-5 text-4xl text-center">Hotel Owner Dashboard</h1> */}

			{/* Logout button */}
			<div className="flex justify-end m-5">
				<div className="w-1/7">
					<button
						className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
						onClick={logout}
					>
						Logout
					</button>
				</div>
			</div>
			<div className="flex justify-center flex-col sm:flex-row m-5">
				<div className="bg-white shadow-lg text-center flex justify-center flex-col rounded-3xl p-10 space-y-5 sm:w-1/2 sm:m-10">
					{/* <div>DP</div> */}
					<img src="./user.svg" alt="" className="w-32 h-32 mx-auto rounded-full aspect-square" />
					<div className="text-primary-blue font-bold text-3xl">{hotelOwner.ownerName}</div>
					<div className="border border-orange-400 inline-flex justify-center items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
						Hotel Owner
					</div>
					<div>{hotelOwner.hotelName}</div>
					{/* Edit profile button */}
					<div className="mx-auto">
						<button
							className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
							onClick={updateProfile}
						>
							Edit Profile
						</button>
					</div>
				</div>

				<div className="flex flex-col sm:flex-wrap sm:flex-row justify-center">
					{/* Card 1 */}
					<Link to="/hotel-package-create">
						<div className="m-5 p-10 bg-white drop-shadow-lg bg-no-repeat bg-left-bottom md:bg-[url('../public/addPackage.png')] rounded-3xl">
							<h1 className="text-primary-blue font-bold text-lg hover:underline">Add Package</h1>
						</div>
					</Link>

					{/* Card 1 */}
					<Link to="/hotel-package">
						<div className="m-5 p-10 bg-white drop-shadow-lg bg-no-repeat bg-left-top bg-cover md:bg-[url('../public/allHotelPackages.png')] rounded-3xl">
							<h1 className="text-primary-blue font-bold text-lg hover:underline">View All Packages</h1>
						</div>
					</Link>

					{/* Card 1 */}
					<Link to="/hotel-package-report">
						<div className="m-5 p-10 bg-white drop-shadow-lg bg-no-repeat bg-left-top bg-cover md:bg-[url('../public/hotelPackageReport.png')] rounded-3xl">
							<h1 className="text-primary-blue font-bold text-lg hover:underline">Generate Report</h1>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default HotelOwnerDashboard;
