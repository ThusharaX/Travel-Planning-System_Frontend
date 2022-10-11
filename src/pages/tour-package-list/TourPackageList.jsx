import React, { useContext } from "react";
import TourPackageContext from "../../contexts/TourPackageContext";
import "../tour-package-list/TourPackageList.css";

const TourPackageList = () => {
	const { isLoading, tourPackages } = useContext(TourPackageContext);

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Tour Package List</h1>
			<br></br>

			{isLoading ? (
				<h1 className="text-center">Loading...</h1>
			) : (
				<center>
					<table>
						<thead className="bg-gray-50 border-b-2 border-gray-200 text-blue-400">
							<tr>
								<th className="p-2 text-lg font-semibold tracking-wider text-left">Tour Package Name</th>
								<th className="p-2 text-lg font-semibold tracking-wider text-left">Tour Guide Name</th>
								<th className="p-2 text-lg font-semibold tracking-wider text-left">Email</th>
								<th className="p-2 text-lg font-semibold tracking-wider text-left">Contact Number</th>
								<th className="p-2 text-lg font-semibold tracking-wider text-left">Price</th>
								<th className="p-2 text-lg font-semibold tracking-wider text-left">Location</th>
								<th className="p-2 text-lg font-semibold tracking-wider text-left">Edit</th>
								<th className="p-2 text-lg font-semibold tracking-wider text-left">Delete</th>
							</tr>
						</thead>
						{tourPackages.map((tourPackages) => (
							<tbody>
								<tr className="bg-gray-50  ">
									<td className="p-2 text-base font-semibold tracking-wide text-left">
										{tourPackages.tourPackageName}
									</td>
									<td className="p-2 text-base font-semibold tracking-normal text-left">{tourPackages.guideName}</td>
									<td className="p-2 text-base font-semibold tracking-normal text-left">{tourPackages.email}</td>
									<td className="p-2 text-base font-semibold tracking-normal text-left">
										{tourPackages.contactNumber}
									</td>
									<td className="p-2 text-base font-semibold tracking-normal text-left">{tourPackages.price}</td>
									<td className="p-2 text-base font-semibold tracking-normal text-left">{tourPackages.location}</td>
									<td className="p-2 whitespace-nowrap tracking-normal">
										<img src="../public/pen-to-square-regular.svg" width="18" height="18" alt="Alex Shatov"></img>
									</td>

									<td className="p-2 whitespace-nowrap">
										<button className="" onClick={() => deleteCampingPackage(campingPackage._id)}>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5 mr-2"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
												/>
											</svg>
										</button>
									</td>
								</tr>
							</tbody>
						))}
					</table>
				</center>
			)}
		</>
	);
};

export default TourPackageList;
