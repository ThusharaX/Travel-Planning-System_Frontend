import React, { useContext } from "react";
import VehicleTourContext from "../../contexts/VehicleTourContext";

const VehicleList = () => {
	const { isLoading, vehicleTours } = useContext(VehicleTourContext);

	return (
		<>
			{isLoading ? (
				<h1 className="text-center">Loading...</h1>
			) : (
				<div className="antialiased bg-gray-100 text-gray-600 h-screen px-4 rounded-2xl">
					<h1 className="mt-5 text-4xl text-center">Manage Owners</h1>
					<div className="rounded-lg">
						<br></br>
						<br></br>
						<div className="flex flex-col justify-center h-full ">
							<div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
								<div className="p-3 rounded-lg">
									<div className="overflow-x-auto  rounded-sm">
										<table className="table-auto w-full">
											<thead className="text-xs font-semibold uppercase text-blue-400 bg-gray-50">
												<tr>
													<th className="p-3 whitespace-nowrap">
														<div className="font-semibold text-left"></div>
													</th>
													<th className="p-2 ">
														<div className="text-left">Owners Name</div>
													</th>
													<th className="p-2 whitespace-nowrap">
														<div className="text-left">Vehicle Reg.No</div>
													</th>

													<th className="p-3 whitespace-nowrap">
														<div className="font-semibold text-left"></div>
													</th>
													<th className="p-3 whitespace-nowrap">
														<div className="font-semibold text-left"></div>
													</th>
												</tr>
											</thead>

											{vehicleTours.map((vehicle) => (
												// eslint-disable-next-line react/jsx-key
												<tbody className="text-sm divide-y divide-gray-100">
													<tr>
														<td className="p-2 whitespace-nowrap">
															<div className="flex items-center">
																<div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
																	<img
																		className="rounded-full"
																		src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
																		width="40"
																		height="40"
																		alt="Alex Shatov"
																	></img>
																</div>
															</div>
														</td>
														<td className="p-2 whitespace-nowrap">
															<div className="text-left">{vehicle.ownersName}</div>
														</td>
														<td className="p-2 whitespace-nowrap">
															<div className="text-left font-semibold">{vehicle.regNo}</div>
														</td>

														<td className="p-2 whitespace-nowrap">
															<button className="">
																<img
																	src="../public/pen-to-square-regular.svg"
																	width="18"
																	height="18"
																	alt="Alex Shatov"
																></img>
															</button>
														</td>
														<td className="p-2 whitespace-nowrap">
															<button className="">
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
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default VehicleList;
