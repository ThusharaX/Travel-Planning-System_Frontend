import React, { useContext } from "react";
import HotelPackageContext from "../../contexts/HotelPackageContext";

const HotelPackageList = () => {
	const { isLoading, hotelPackages } = useContext(HotelPackageContext);

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Hotel Package List</h1>

			{isLoading ? (
				<h1 className="text-center">Loading...</h1>
			) : (
				<div className="flex flex-wrap justify-center">
					{hotelPackages.map((hotelPackage) => (
						<div key={hotelPackage._id} className="w-1/3 m-5 p-5 border border-gray-300 rounded-lg">
							<h1 className="text-2xl">{hotelPackage.name}</h1>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default HotelPackageList;
