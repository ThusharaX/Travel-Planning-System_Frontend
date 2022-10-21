import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import TourPackageContext from "../../contexts/TourPackageContext";

const TourPackageReport = () => {
	const { isLoading, tourPackages } = useContext(TourPackageContext);
	const email = localStorage.getItem("Email");

	// eslint-disable-next-line no-console
	console.log(email);

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Tour Package Report</h1>
			<br></br>

			{isLoading ? (
				<h1 className="text-center">Loading...</h1>
			) : (
				<center>
					<br></br>
					<table>
						<thead className="bg-gray-50 border-b-2 border-gray-200 text-blue-400">
							<tr>
								<th className="p-2 text-lg font-semibold tracking-wider text-left">Tour Package Name</th>
								<th className="p-2 text-lg font-semibold tracking-wider text-left">Tour Guide Name</th>
								<th className="p-2 text-lg font-semibold tracking-wider text-left">Email</th>
								<th className="p-2 text-lg font-semibold tracking-wider text-left">Contact</th>
								<th className="p-2 text-lg font-semibold tracking-wider text-left">Price</th>
								<th className="p-2 text-lg font-semibold tracking-wider text-left">Location</th>
								<th className="p-2 text-lg font-semibold tracking-wider text-left">Duration</th>
							</tr>
						</thead>

						{tourPackages
							.filter((elem) => elem.email == email)
							.map((tourPackage) => (
								// eslint-disable-next-line react/jsx-key
								<tbody>
									<tr className="bg-gray-50 w-full max-w-5xl ">
										<td className="p-2 text-base font-medium tracking-wide text-left ">
											{tourPackage.tourPackageName}
										</td>
										<td className="p-2 text-base font-medium tracking-normal text-left">{tourPackage.guideName}</td>
										<td className="p-2 text-base font-medium tracking-normal text-left">{tourPackage.email}</td>
										<td className="p-2 text-base font-medium tracking-normal text-left">{tourPackage.contactNumber}</td>
										<td className="p-2 text-base font-medium tracking-normal text-left">{tourPackage.price}</td>
										<td className="p-2 text-base font-medium tracking-normal text-left">{tourPackage.location}</td>
										<td className="p-2 text-base font-medium tracking-normal text-left">
											{tourPackage.NumberOfDays} : Day
										</td>
									</tr>
								</tbody>
							))}

						<br></br>
						<button>
							<Link
								to="/#"
								className="w-full px-2 py-3 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline "
								type="submit"
							>
								Report Generate
							</Link>
						</button>
					</table>
				</center>
			)}
		</>
	);
};

export default TourPackageReport;
