import React, { useContext, useEffect, useState } from "react";
import HotelPackageContext from "../../contexts/HotelPackageContext";

const HotelPackageReport = () => {
	const { hotelPackagesByHotelOwnerID } = useContext(HotelPackageContext);

	const [totalHotelPackages, setTotalHotelPackages] = useState(0);
	const [totalHotelPackagesCost, setTotalHotelPackagesCost] = useState(0);
	const [totalBeds, setTotalBeds] = useState(0);

	// Calculate total hotel packages
	useEffect(() => {
		if (hotelPackagesByHotelOwnerID) {
			setTotalHotelPackages(hotelPackagesByHotelOwnerID.length);
			// Calculate total of all prices
			let totalCost = hotelPackagesByHotelOwnerID.reduce((sum, hotelPackage) => sum + hotelPackage.cost, 0);
			setTotalHotelPackagesCost(totalCost);
			// Calculate total of all beds
			let totalBed = hotelPackagesByHotelOwnerID.reduce((sum, hotelPackage) => sum + hotelPackage.beds, 0);
			setTotalBeds(totalBed);
		}
	}, [hotelPackagesByHotelOwnerID]);

	// Print report
	const printReport = () => {
		window.print();
	};

	return (
		<>
			{/* Print report tailwind button */}
			<div className="flex justify-end m-5">
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={printReport}>
					Print Report
				</button>
			</div>

			<div id="report-content">
				<h1 className="mt-5 text-4xl text-center">My Hotel Packages Report</h1>

				{/* Hotel Package Table */}
				<div className="flex flex-col mt-5 mx-5">
					<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
							<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
								<table className="min-w-full divide-y divide-gray-200">
									<thead className="bg-gray-50">
										<tr>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>
												name
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>
												location
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>
												condition
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>
												beds
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>
												room_no
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>
												cost
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>
												description
											</th>
										</tr>
									</thead>
									<tbody className="bg-white divide-y divide-gray-200">
										{hotelPackagesByHotelOwnerID.map((hotelPackage) => (
											<tr key={hotelPackage.id}>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="flex items-center">
														<div className="ml-4">
															<div className="text-sm font-medium text-gray-900">{hotelPackage.name}</div>
														</div>
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-900">{hotelPackage.location}</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-900">{hotelPackage.condition}</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-900">{hotelPackage.beds}</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-900">{hotelPackage.room_no}</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-900">{hotelPackage.cost}</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-900">{hotelPackage.description}</div>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>

				{/* Display hotel packages count */}
				<div className="flex justify-center">
					<div className="flex flex-col justify-center items-center bg-white w-1/2 p-10 shadow-lg rounded-lg mt-10">
						<h1 className="ml-10 text-2xl text-gray-900">Hotel Packages Count: {totalHotelPackages}</h1>
						<h1 className="ml-10 text-2xl text-gray-900">Total Income: {totalHotelPackagesCost}/=</h1>
						<h1 className="ml-10 text-2xl text-gray-900">Total Beds in Hotel: {totalBeds}</h1>
					</div>
				</div>
			</div>
		</>
	);
};

export default HotelPackageReport;
