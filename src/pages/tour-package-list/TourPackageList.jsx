import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TourPackageContext from "../../contexts/TourPackageContext";

import "../tour-package-list/TourPackageList.css";

const TourPackageList = () => {
	const { isLoading, tourPackages, deleteTourPackage } = useContext(TourPackageContext);

	const email = localStorage.getItem("Email");
	// eslint-disable-next-line no-console
	console.log(email);
	//	getTourGuide(email);

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Tour Package List</h1>
			<br></br>

			{isLoading ? (
				<h1 className="text-center">Loading...</h1>
			) : (
				<center>
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
					<br></br>
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

						{tourPackages
							.filter((elem) => elem.email == email)
							.map((tourPackage) => (
								// eslint-disable-next-line react/jsx-key
								<tbody>
									<tr className="bg-gray-50 w-full max-w-5xl ">
										<td className="p-2 text-base font-semibold tracking-wide text-left ">
											{tourPackage.tourPackageName}
										</td>
										<td className="p-2 text-base font-semibold tracking-normal text-left">{tourPackage.guideName}</td>
										<td className="p-2 text-base font-semibold tracking-normal text-left">{tourPackage.email}</td>
										<td className="p-2 text-base font-semibold tracking-normal text-left">
											{tourPackage.contactNumber}
										</td>
										<td className="p-2 text-base font-semibold tracking-normal text-left">{tourPackage.price}</td>
										<td className="p-2 text-base font-semibold tracking-normal text-left">{tourPackage.location}</td>
										<td className="p-2 whitespace-nowrap tracking-normal">
											<Link to={`/tour-package-edit/${tourPackage._id}`} className="">
												<img src="../public/pen-to-square-regular.svg" width="18" height="18" alt="Alex Shatov"></img>
											</Link>
										</td>

										<td className="p-2 whitespace-nowrap">
											<button className="" onClick={() => deleteTourPackage(tourPackage._id)}>
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
