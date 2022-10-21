import React, { useContext } from "react";
import AdminContext from "../../contexts/AdminContext";

const TourGuideTable = () => {
	const { tourGuides, deleteTourGuide, getTourGuideCount } = useContext(AdminContext);

	return (
		<div>
			<h1 className="text-center text-xl text-primary-blue font-bold mt-10">Tour Guides : {getTourGuideCount()}</h1>

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
											Name
										</th>

										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Email
										</th>

										{/* Update and Delete icon */}
										<th scope="col" className="relative px-6 py-3">
											<span className="sr-only">Edit</span>
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									{tourGuides.map((tourGuide) => (
										<tr key={tourGuide._id}>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="flex items-center">
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900">{tourGuide.tourGuideName}</div>
													</div>
												</div>
											</td>

											<td className="px-6 py-4 whitespace-nowrap">
												<div className="flex items-center">
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900">{tourGuide.email}</div>
													</div>
												</div>
											</td>

											{/* Delete icon */}
											<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
												<p
													href="#"
													className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
													onClick={() => deleteTourGuide(tourGuide._id)}
												>
													Delete
												</p>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TourGuideTable;
