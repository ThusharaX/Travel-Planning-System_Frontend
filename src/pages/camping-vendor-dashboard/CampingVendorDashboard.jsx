import "../camping-vendor-dashboard/CampingVendordashboard.css";
import React, { useContext } from "react";
import CampingPackageContext from "../../contexts/CampingPackageContext";
import CampingVenderContext from "../../contexts/CampingVenderContext";
import { Link } from "react-router-dom";

const CampingVendorDashboard = () => {
	const { isLoading, campingPackages, deleteCampingPackage } = useContext(CampingPackageContext);
	const { getCampingVendor, campingVender } = useContext(CampingVenderContext);

	const id = localStorage.getItem("uID");

	console.log(id);

	getCampingVendor(id);

	return (
		<>
			<div>
				<div>
					<br></br>
					<br></br>
					<div className="flex justify-center">
						<div className="flex justify-center">
							<div className="mb-3 xl:w-96">
								<div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
									<input
										type="search"
										className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
										placeholder="Search"
										aria-label="Search"
										aria-describedby="button-addon3"
									></input>
									<div className="searchbtn">
										<button
											className="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
											type="button"
											id="button-addon3"
										>
											Search
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<br></br>
				<div className="btn">
					<div className="">
						<button
							type="button"
							className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 w-48 gap-x-1 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
						>
							Add New Package
						</button>
						<button
							type="button"
							className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 w-48  focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
						>
							View All Vehicles
						</button>
						<Link
							to="/camping-package-create"
							type="button"
							className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 w-48 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
						>
							Add New Vehicle
						</Link>
					</div>
				</div>
				<div className="usercard">
					<div>
						<div className=" flex flex-col bg-white justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12  white:text-dark">
							<img
								src="https://source.unsplash.com/150x150/?portrait?3"
								alt=""
								className="w-32 h-32 mx-auto rounded-full aspect-square"
							/>
							<div className="space-y-4 text-center divide-y divide-white-700">
								<div className="my-2 space-y-1">
									<h2 className="text-xl font-semibold sm:text-2xl">{campingVender.companyOwnerName}</h2>
								</div>
								<div className="justify-center pt-2 align-center">
									<h3>{campingVender.companyName}</h3>
									<h3>{campingVender.email}</h3>
									<h3>{campingVender.companyPhone}</h3>
								</div>
							</div>
						</div>
						<br></br>
						<br></br>
						<div className="bottombtn">
							<button
								type="button"
								className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
							>
								Edit Profile Details
							</button>
							<br></br>
							<button
								type="button"
								className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
							>
								Edit Profile Image
							</button>
						</div>
					</div>
				</div>
				<div className="table">
					<div className="flex flex-col justify-center h-full">
						<div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
							<header className="px-5 py-4 border-b border-gray-100">
								<h2 className="font-semibold text-gray-800">Customers</h2>
							</header>
							<div className="p-3">
								<div className="overflow-x-auto">
									<table className="table-auto w-full">
										<thead className="text-xs font-semibold uppercase text-blue-400 bg-gray-50">
											<tr>
												<th className="p-3 whitespace-nowrap">
													<div className="font-semibold text-left"></div>
												</th>
												<th className="p-2 ">
													<div className="text-left">Package Name</div>
												</th>
												<th className="p-2 whitespace-nowrap">
													<div className="text-left">Location</div>
												</th>
												<th className="p-2 whitespace-nowrap">
													<div className="text-left">Price(per person)</div>
												</th>

												<th className="p-3 whitespace-nowrap">
													<div className="font-semibold text-left"></div>
												</th>
												<th className="p-3 whitespace-nowrap">
													<div className="font-semibold text-left"></div>
												</th>
											</tr>
										</thead>

										{campingPackages
											.filter((elem) => elem.vendorId == id)
											.map((campingPackage) => (
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
															<div className="text-left">{campingPackage.packageName}</div>
														</td>
														<td className="p-2 whitespace-nowrap">
															<div className="text-left font-semibold">{campingPackage.location}</div>
														</td>
														<td className="p-2 whitespace-nowrap">
															<div className="text-left font-semibold">{campingPackage.price}</div>
														</td>

														<td className="p-2 whitespace-nowrap">
															<Link to={`/camping-package-edit/${campingPackage._id}`} className="">
																<img
																	src="../public/pen-to-square-regular.svg"
																	width="18"
																	height="18"
																	alt="Alex Shatov"
																></img>
															</Link>
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
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>{" "}
		</>
	);
};
export default CampingVendorDashboard;
