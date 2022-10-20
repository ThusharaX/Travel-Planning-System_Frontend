import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const permissionLevel = localStorage.getItem("permissionLevel");
	const uID = localStorage.getItem("uID") || null;
	return (
		<>
			<div className="bg-primary-blue text-2xl">
				<div className="max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-8">
					<div className="pr-16 sm:text-center sm:px-16">
						{/* Link to home page */}
						{/* <Link to="/">
							<h1 className="mt-2 mb-2 text-2xl font-bold text-white">Travel Planning System</h1>
						</Link> */}

						{/* Nav links */}
						<nav className="flex justify-between">
							<ul className="flex">
								{/* <li className="mr-6">
									<Link to="/about" className="text-base font-medium text-white hover:text-gray-300">
										About
									</Link>
								</li> */}
								<li className="mr-6">
									<Link to="/" className="text-base font-medium text-white hover:text-gray-300">
										<h1 className="mt-2 mb-2 text-2xl font-bold text-white">Travel Planner</h1>
									</Link>
								</li>
							</ul>

							{/* Hotel Owner */}
							<ul className="flex p-1">
								{permissionLevel === "HOTEL_OWNER" ? (
									<li className="mr-6 bg-white hover:bg-gray-300 px-5 rounded-lg">
										<Link to="/hotel-owner" className="text-base font-bold  text-primary-blue">
											Dashboard
										</Link>
									</li>
								) : (
									<p></p>
								)}

								{/* Hotel packages */}
								<li className="mr-6">
									<Link to="/hotel-package" className="text-base font-medium text-white hover:text-gray-300">
										Hotel Packages
									</Link>
								</li>

								{/* Caming Packages */}
								<li className="mr-6">
									<Link to="/camping-package" className="text-base font-medium text-white hover:text-gray-300">
										Camping Packages
									</Link>
								</li>

								{/* Vehicle Packages */}
								<li className="mr-6">
									<Link to="/vehicle" className="text-base font-medium text-white hover:text-gray-300">
										Vehicle Packages
									</Link>
								</li>

								{/* Tour Packages */}
								<li className="mr-6">
									<Link to="/tour-package-list" className="text-base font-medium text-white hover:text-gray-300">
										Tour Packages
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
