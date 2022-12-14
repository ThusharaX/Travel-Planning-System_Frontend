import React, { useContext, useState } from "react";
import HotelPackageContext from "../../contexts/HotelPackageContext";
import { Link } from "react-router-dom";

const HotelPackageList = () => {
	const { isLoading, hotelPackages, searchHotelPackage } = useContext(HotelPackageContext);

	const [search, setSearch] = useState("");

	const handleSearch = () => {
		searchHotelPackage(search);
	};

	return (
		<>
			{/* Add Hotel Package Button */}
			<div className="flex justify-between">
				<h1 className="mt-5 text-3xl text-left ml-10 font-bold text-primary-blue">Hotel Packages</h1>
				<div className="mr-10">
					{/* when button clicked, redirect to create page */}
					{localStorage.getItem("permissionLevel") === "HOTEL_OWNER" && (
						<Link to="/hotel-owner/create-package">
							<button className="bg-primary-blue text-white font-bold py-2 px-4 rounded-full mt-5">
								+ Add Hotel Package
							</button>
						</Link>
					)}
				</div>
			</div>

			<div className="flex justify-center">
				<div className="w-3/4 px-10 rounded-2xl mt-5 shadow-2xl border-t">
					{/* Search bar */}
					<div className="flex space-x-5 justify-center">
						<div className="w-3/4 mt-5">
							<input
								type="text"
								className="w-full px-5 py-3 text-gray-700 bg-white rounded-lg shadow-md focus:outline-none focus:shadow-outline border-t"
								placeholder="Search"
								onChange={(e) => setSearch(e.target.value)}
							/>
						</div>

						<div className="w-1/4 mt-5">
							<button
								type="button"
								className="w-full px-5 py-3 text-white bg-primary-blue rounded-lg shadow-md hover:bg-primary-blue-dark focus:outline-none focus:shadow-outline"
								onClick={handleSearch}
							>
								Search
							</button>
						</div>
					</div>

					{isLoading ? (
						<h1 className="text-center">Loading...</h1>
					) : (
						// <div className="flex flex-wrap justify-center">
						<div className="flex space-x-5 justify-center">
							{hotelPackages.map((hotelPackage) => (
								<div key={hotelPackage._id} className="w-1/3 m-5 p-5 border border-gray-300 rounded-lg bg-white">
									{/* side by side */}
									<div className="flex justify-between">
										<Link to={`/hotel-package/${hotelPackage._id}`}>
											<h1 className="text-2xl hover:underline">{hotelPackage.name}</h1>
										</Link>
										<h1 className="text-xl bg-green-500 text-white rounded-full p-3">{hotelPackage.condition}</h1>
									</div>
									<p className="text-sm">{hotelPackage.description}</p>
									<p className="text-sm">{hotelPackage.location}</p>
									<p className="text-sm">Beds : {hotelPackage.beds}</p>
									<h1 className="text-2xl">Rs. {hotelPackage.cost}</h1>

									{/* Add to wishlist button */}
									{/* <div className="flex justify-center">
										<div className="w-3/4 mt-5">
											<button
												type="button"
												className="w-full px-5 py-3 text-white bg-primary-blue rounded-2xl shadow-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
											>
												Add to wishlist
											</button>
										</div>
									</div> */}
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default HotelPackageList;
