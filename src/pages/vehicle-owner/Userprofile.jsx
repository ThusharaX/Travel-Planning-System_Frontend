<h1>User profile</h1>;

import "../vehicle-owner/userprofile.css";

const Userprofile = () => {
	return (
		<div>
			<div>
				<div class="flex justify-center">
					<div class="flex justify-center">
						<div class="mb-3 xl:w-96">
							<div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
								<input
									type="search"
									class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									placeholder="Search"
									aria-label="Search"
									aria-describedby="button-addon3"
								></input>
								<button
									class="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
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
			<div class="btn">
				<div class="h-10 grid  grid-cols-3 gap-x-1 content-start ...">
					<button
						type="button"
						class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 w-48 gap-x-1 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
					>
						Sign in with Google
					</button>
					<button
						type="button"
						class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 w-48  focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
					>
						Sign in with Google
					</button>
					<button
						type="button"
						class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 w-48 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
					>
						Sign in with Google
					</button>
				</div>
			</div>
			<div class="usercard">
				<div>
					<div class="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 white:bg-drak-900 white:text-dark-100">
						<img
							src="https://source.unsplash.com/150x150/?portrait?3"
							alt=""
							class="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
						/>
						<div class="space-y-4 text-center divide-y divide-gray-700">
							<div class="my-2 space-y-1">
								<h2 class="text-xl font-semibold sm:text-2xl">Leroy Jenkins</h2>
								<p class="px-5 text-xs sm:text-base dark:text-gray-400">Full-stack developer</p>
							</div>
							<div class="justify-center pt-2 align-center">
								<h3>Company name</h3>
								<h3>Email</h3>
								<h3>Contact Number</h3>
							</div>
						</div>
					</div>
					<br></br>
					<br></br>

					<button
						type="button"
						class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
					>
						<svg
							class="mr-2 -ml-1 w-4 h-4"
							aria-hidden="true"
							focusable="false"
							data-prefix="fab"
							data-icon="google"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 488 512"
						>
							<path
								fill="currentColor"
								d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
							></path>
						</svg>
						Sign in with Google
					</button>
					<br></br>
					<button
						type="button"
						class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
					>
						<svg
							class="mr-2 -ml-1 w-4 h-4"
							aria-hidden="true"
							focusable="false"
							data-prefix="fab"
							data-icon="google"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 488 512"
						>
							<path
								fill="currentColor"
								d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
							></path>
						</svg>
						Sign in with Google
					</button>
				</div>
			</div>
			<div class="table">
				<div class="overflow-x-auto  rounded-sm">
					<div class="flex flex-col justify-center h-full">
						<div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
							<header class="px-5 py-4 border-b border-gray-100">
								<h2 class="font-semibold text-gray-800">Customers</h2>
							</header>
							<div class="p-3">
								<div class="overflow-x-auto">
									<table class="table-auto w-full">
										<thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
											<tr>
												<th class="p-2 whitespace-nowrap">
													<div class="font-semibold text-left">Name</div>
												</th>
												<th class="p-2 whitespace-nowrap">
													<div class="font-semibold text-left">Email</div>
												</th>
												<th class="p-2 whitespace-nowrap">
													<div class="font-semibold text-left">Spent</div>
												</th>
												<th class="p-2 whitespace-nowrap">
													<div class="font-semibold text-center">Country</div>
												</th>
											</tr>
										</thead>
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
														<div class="font-medium text-gray-800">Alex Shatov</div>
													</div>
												</td>
												<td class="p-2 whitespace-nowrap">
													<div class="text-left">alexshatov@gmail.com</div>
												</td>
												<td class="p-2 whitespace-nowrap">
													<div class="text-left font-medium text-green-500">$2,890.66</div>
												</td>
												<td class="p-2 whitespace-nowrap">
													<div class="text-lg text-center">??</div>
												</td>
											</tr>
											<tr>
												<td class="p-2 whitespace-nowrap">
													<div class="flex items-center">
														<div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
															<img
																class="rounded-full"
																src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
																width="40"
																height="40"
																alt="Philip Harbach"
															></img>
														</div>
														<div class="font-medium text-gray-800">Philip Harbach</div>
													</div>
												</td>
												<td class="p-2 whitespace-nowrap">
													<div class="text-left">philip.h@gmail.com</div>
												</td>
												<td class="p-2 whitespace-nowrap">
													<div class="text-left font-medium text-green-500">$2,767.04</div>
												</td>
												<td class="p-2 whitespace-nowrap">
													<div class="text-lg text-center">??</div>
												</td>
											</tr>
											<tr>
												<td class="p-2 whitespace-nowrap">
													<div class="flex items-center">
														<div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
															<img
																class="rounded-full"
																src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
																width="40"
																height="40"
																alt="Mirko Fisuk"
															></img>
														</div>
														<div class="font-medium text-gray-800">Mirko Fisuk</div>
													</div>
												</td>
												<td class="p-2 whitespace-nowrap">
													<div class="text-left">mirkofisuk@gmail.com</div>
												</td>
												<td class="p-2 whitespace-nowrap">
													<div class="text-left font-medium text-green-500">$2,996.00</div>
												</td>
												<td class="p-2 whitespace-nowrap">
													<div class="text-lg text-center">??</div>
												</td>
											</tr>
											<tr>
												<td class="p-2 whitespace-nowrap">
													<div class="flex items-center">
														<div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
															<img
																class="rounded-full"
																src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg"
																width="40"
																height="40"
																alt="Olga Semklo"
															></img>
														</div>
														<div class="font-medium text-gray-800">Olga Semklo</div>
													</div>
												</td>
												<td class="p-2 whitespace-nowrap">
													<div class="text-left">olga.s@cool.design</div>
												</td>
												<td class="p-2 whitespace-nowrap">
													<div class="text-left font-medium text-green-500">$1,220.66</div>
												</td>
												<td class="p-2 whitespace-nowrap">
													<div class="text-lg text-center">??</div>
												</td>
											</tr>
											<tr>
												<td class="p-2 whitespace-nowrap">
													<div class="flex items-center">
														<div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
															<img
																class="rounded-full"
																src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg"
																width="40"
																height="40"
																alt="Burak Long"
															></img>
														</div>
														<div class="font-medium text-gray-800">Burak Long</div>
													</div>
												</td>
												<td class="p-2 whitespace-nowrap">
													<div class="text-left">longburak@gmail.com</div>
												</td>
												<td class="p-2 whitespace-nowrap">
													<div class="text-left font-medium text-green-500">$1,890.66</div>
												</td>
												<td class="p-2 whitespace-nowrap">
													<div class="text-lg text-center">??</div>
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
		</div>
	);
};

export default Userprofile;
