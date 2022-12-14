<h1>User profile</h1>;

import "../vehicleOwner-profile/userprofile.css";

const Userprofile = () => {
	return (
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
					<button
						type="button"
						className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 w-48 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
					>
						Add New Vehicle
					</button>
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
								<h2 className="text-xl font-semibold sm:text-2xl">Leroy Jenkins</h2>
								<p className="px-5 text-xs sm:text-base dark:text-gray-400">Full-stack developer</p>
							</div>
							<div className="justify-center pt-2 align-center">
								<h3>Company name</h3>
								<h3>Email</h3>
								<h3>Contact Number</h3>
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
								<table className="table-auto max-w-96">
									<thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 ">
										<tr>
											<th className="p-2 whitespace-nowrap">
												<div className="font-semibold text-left">Name</div>
											</th>
											<th className="p-2 whitespace-nowrap">
												<div className="font-semibold text-left">Email</div>
											</th>
											<th className="p-2 whitespace-nowrap">
												<div className="font-semibold text-left">Spent</div>
											</th>
											<th className="p-2 whitespace-nowrap">
												<div className="font-semibold text-center">Country</div>
											</th>
											<th className="p-2 whitespace-nowrap">
												<div className="font-semibold text-center"> </div>
											</th>
											<th className="p-2 whitespace-nowrap">
												<div className="font-semibold text-center"> </div>
											</th>
										</tr>
									</thead>
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
													<div className="font-medium text-gray-800">Alex Shatov</div>
												</div>
											</td>
											<td className="p-2 whitespace-nowrap">
												<div className="text-left">alexshatov@gmail.com</div>
											</td>
											<td className="p-2 whitespace-nowrap">
												<div className="text-left font-medium text-green-500">$2,890.66</div>
											</td>
											<td className="p-2 whitespace-nowrap">
												<div className="text-lg text-center">??</div>
											</td>
										</tr>
										<tr>
											<td className="p-2 whitespace-nowrap">
												<div className="flex items-center">
													<div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
														<img
															className="rounded-full"
															src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
															width="40"
															height="40"
															alt="Philip Harbach"
														></img>
													</div>
													<div className="font-medium text-gray-800">Philip Harbach</div>
												</div>
											</td>
											<td className="p-2 whitespace-nowrap">
												<div className="text-left">philip.h@gmail.com</div>
											</td>
											<td className="p-2 whitespace-nowrap">
												<div className="text-left font-medium text-green-500">$2,767.04</div>
											</td>
											<td className="p-2 whitespace-nowrap">
												<div className="text-lg text-center">??</div>
											</td>
										</tr>
										<tr>
											<td className="p-2 whitespace-nowrap">
												<div className="flex items-center">
													<div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
														<img
															className="rounded-full"
															src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
															width="40"
															height="40"
															alt="Mirko Fisuk"
														></img>
													</div>
													<div className="font-medium text-gray-800">Mirko Fisuk</div>
												</div>
											</td>
											<td className="p-2 whitespace-nowrap">
												<div className="text-left">mirkofisuk@gmail.com</div>
											</td>
											<td className="p-2 whitespace-nowrap">
												<div className="text-left font-medium text-green-500">$2,996.00</div>
											</td>
											<td className="p-2 whitespace-nowrap">
												<div className="text-lg text-center">??</div>
											</td>
										</tr>
										<tr>
											<td className="p-2 whitespace-nowrap">
												<div className="flex items-center">
													<div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
														<img
															className="rounded-full"
															src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg"
															width="40"
															height="40"
															alt="Olga Semklo"
														></img>
													</div>
													<div className="font-medium text-gray-800">Olga Semklo</div>
												</div>
											</td>
											<td className="p-2 whitespace-nowrap">
												<div className="text-left">olga.s@cool.design</div>
											</td>
											<td className="p-2 whitespace-nowrap">
												<div className="text-left font-medium text-green-500">$1,220.66</div>
											</td>
											<td className="p-2 whitespace-nowrap">
												<div className="text-lg text-center">??</div>
											</td>
										</tr>
										<tr>
											<td className="p-2 whitespace-nowrap">
												<div className="flex items-center">
													<div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
														<img
															className="rounded-full"
															src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg"
															width="40"
															height="40"
															alt="Burak Long"
														></img>
													</div>
													<div className="font-medium text-gray-800">Burak Long</div>
												</div>
											</td>
											<td className="p-2 whitespace-nowrap">
												<div className="text-left">longburak@gmail.com</div>
											</td>
											<td className="p-2 whitespace-nowrap">
												<div className="text-left font-medium text-green-500">$1,890.66</div>
											</td>
											<td className="p-2 whitespace-nowrap">
												<div className="text-lg text-center">??</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Userprofile;
