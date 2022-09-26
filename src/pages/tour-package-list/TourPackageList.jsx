import React, { useContext } from "react";
import TourPackageContext from "../../contexts/TourPackageContext";

const TourPackageList = () => {
	const { isLoading, tourPackages } = useContext(TourPackageContext);

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Tour Package List</h1>

			{isLoading ? (
				<h1 className="text-center">Loading...</h1>
			) : (
				<div className="flex flex-wrap justify-center">
					{tourPackages.map((tourPackage) => (
						<div key={tourPackage._id} className="w-1/3 m-5 p-5 border border-gray-300 rounded-lg">
							<h1 className="text-2xl">
								<b>Package Name :</b> {tourPackage.tourPackageName}
							</h1>
							<h1 className="text-2xl">
								<b>Guide Name :</b> {tourPackage.guideName}
							</h1>
							<h1 className="text-2xl">
								<b>Email:</b> {tourPackage.email}
							</h1>
							<h1 className="text-2xl">
								<b>Contact Number :</b> {tourPackage.contactNumber}
							</h1>
							<h1 className="text-2xl">
								<b>Pacakge Price :</b> {tourPackage.price}
							</h1>
							<h1 className="text-2xl">
								<b>Number of Days :</b> {tourPackage.NumberOfDays}
							</h1>
							<h1 className="text-2xl">
								<b>Location :</b> {tourPackage.location}
							</h1>
							<h1 className="text-2xl">
								<b>Description : </b> {tourPackage.description}
							</h1>
							<h1 className="text-2xl">{tourPackage.images}</h1>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default TourPackageList;
