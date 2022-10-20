import React, { useContext } from "react";
import AdminContext from "../../contexts/AdminContext";
import { Link } from "react-router-dom";
import HotelOwnerTable from "./HotelOwnerTable";
import TourGuideTable from "./TourGuideTable";
import CampingVendorTable from "./CampingVendorTable";
import VehicleOwnerTable from "./VehicleOwnerTable";
import CustomerTable from "./CustomerTable";

const AdminDashboard = () => {
	const { admin, logout } = useContext(AdminContext);

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Admin Dashboard</h1>

			{/* Logout button */}
			<div className="flex justify-end m-5">
				<div className="w-1/7 flex flex-row space-x-5">
					<Link to="/admin/edit">
						<button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">
							Edit Profile
						</button>
					</Link>

					<button
						className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
						onClick={logout}
					>
						Logout
					</button>
				</div>
			</div>

			<HotelOwnerTable />
			<TourGuideTable />
			<CampingVendorTable />
			<VehicleOwnerTable />
			<CustomerTable />
		</>
	);
};

export default AdminDashboard;
