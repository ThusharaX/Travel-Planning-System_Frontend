import React, { useContext } from "react";
import VehicleTourContext from "../../contexts/VehicleTourContext";

const VehicleList = () => {
	const { isLoading, vehicleTours } = useContext(VehicleTourContext);

	return (
		<>
			{isLoading ? (
				<h1 className="text-center">Loading...</h1>
			) : (
				<div class="antialiased bg-gray-100 text-gray-600 h-screen px-4 rounded-2xl">
					<h1 className="mt-5 text-4xl text-center">Manage Owners</h1>
					<div class="rounded-lg">
						<br></br>
						<br></br>
						<div class="flex flex-col justify-center h-full ">
							<div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
								<div class="p-3 rounded-lg">
									<div class="overflow-x-auto  rounded-sm">
										<table class="table-auto w-full">
											<thead class="text-xs font-semibold uppercase text-blue-400 bg-gray-50">
												<tr>
													<th class="p-3 whitespace-nowrap">
														<div class="font-semibold text-left"></div>
													</th>
													<th class="p-2 ">
														<div class="text-left">Owner's Name</div>
													</th>
													<th class="p-2 whitespace-nowrap">
														<div class="text-left">Vehicle Reg.No</div>
													</th>

													<th class="p-3 whitespace-nowrap">
														<div class="font-semibold text-left"></div>
													</th>
													<th class="p-3 whitespace-nowrap">
														<div class="font-semibold text-left"></div>
													</th>
												</tr>
											</thead>

											{vehicleTours.map((vehicle) => (
												<tbody class="text-sm divide-y divide-gray-100">
													<tr>
														<td class="p-2 whitespace-nowrap">
															<div class="flex items-center">
																<div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
																	<img
																		class="rounded-full"
																		src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
																		width="40"
																		height="40"
																		alt="Alex Shatov"
																	></img>
																</div>
															</div>
														</td>
														<td class="p-2 whitespace-nowrap">
															<div class="text-left">{vehicle.ownersName}</div>
														</td>
														<td class="p-2 whitespace-nowrap">
															<div class="text-left font-semibold">{vehicle.regNo}</div>
														</td>

														<td class="p-2 whitespace-nowrap">
															<button class="">
																<img
																	src="../public/pen-to-square-regular.svg"
																	width="18"
																	height="18"
																	alt="Alex Shatov"
																></img>
															</button>
														</td>
														<td class="p-2 whitespace-nowrap">
															<button class="">
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	class="h-5 w-5 mr-2"
																	fill="none"
																	viewBox="0 0 24 24"
																	stroke="currentColor"
																>
																	<path
																		stroke-linecap="round"
																		stroke-linejoin="round"
																		stroke-width="2"
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
