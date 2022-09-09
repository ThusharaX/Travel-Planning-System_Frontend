import React, { useContext } from "react";
import TourPackageContext from "../../contexts/TourPackageContext";

const TourPackageList = () => {
	const { isLoading, tourPackages } = useContext(TourPackageContext);

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Hotel Package List</h1>

			{isLoading ? (
				<h1 className="text-center">Loading...</h1>
			) : (
				<div className="flex flex-wrap justify-center">
					{tourPackages.map((tourPackage) => (
						<div key={tourPackage._id} className="w-1/3 m-5 p-5 border border-gray-300 rounded-lg">
							<h1 className="text-2xl">{tourPackage.tourPackageName}</h1>
							<h1 className="text-2xl">{tourPackage.guideName}</h1>
							<h1 className="text-2xl">{tourPackage.email}</h1>
							<h1 className="text-2xl">{tourPackage.contactNumber}</h1>
							<h1 className="text-2xl">{tourPackage.price}</h1>
							<h1 className="text-2xl">{tourPackage.NumberOfDays}</h1>
							<h1 className="text-2xl">{tourPackage.location}</h1>
							<h1 className="text-2xl">{tourPackage.description}</h1>
							<h1 className="text-2xl">{tourPackage.images}</h1>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default TourPackageList;
