import React from "react";
import { useContext, useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import TourPackageContext from "../../contexts/TourPackageContext";
import { useReactToPrint } from "react-to-print";

const TourPackageReport = () => {
	const { isLoading, tourPackages } = useContext(TourPackageContext);

	const name = localStorage.getItem("username");
	const email = localStorage.getItem("Email");

	// eslint-disable-next-line no-console
	console.log(email);

	//getCampingVendor(id);

	let count = 0;
	let total = 0;

	tourPackages
		.filter((elem) => elem.email == email)
		.map(
			(tourPackage) => (
				console.log("price is" + tourPackage.price), (count = count + 1), (total = total + parseInt(tourPackage.price))
			)
		);

	const componentRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	return (
		<>
			<br></br>
			<br></br>
			<br></br>
			<div ref={componentRef}>
				<br></br>
				<br></br>
				<div className="ml-10 mr-10 bg-primary-blue h-16 text-white">
					<div className="py-2">
						<h1 className="ml-10">Tour Guide Name : {name} </h1>
						<h1 className="ml-10">Tour Guide Email : {email}</h1>
					</div>
				</div>
				<div class="ml-10 mr-10 mt-5 overflow-x-96 relative">
					<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" class="py-3 px-6">
									Tour package Name
								</th>
								<th scope="col" class="py-3 px-6">
									Tour Guide Name
								</th>

								<th scope="col" class="py-3 px-6">
									Email
								</th>
								<th scope="col" class="py-3 px-6">
									Contact
								</th>
								<th scope="col" class="py-3 px-6">
									Price
								</th>

								<th scope="col" class="py-3 px-6">
									Location
								</th>
							</tr>
						</thead>

						{tourPackages
							.filter((elem) => elem.email == email)
							.map((guidePackage) => (
								<tbody>
									<tr class="bg-white ml-5 font-bold border-b dark:bg-gray-800 dark:border-gray-700">
										<td>{guidePackage.tourPackageName}</td>
										<td>{guidePackage.guideName}</td>
										<td>{guidePackage.email}</td>
										<td>{guidePackage.contactNumber}</td>
										<td>{guidePackage.price}</td>
										<td>{guidePackage.location}</td>
									</tr>
								</tbody>
							))}
					</table>
				</div>

				<div className="bg-white h-42 w-80 mt-10 ml-10">
					<h3 className="px-5 py-5">No of Packages : {count}</h3>
					<h3 className="px-5 py-5">Total Amount for Packages : {total}</h3>
				</div>
			</div>

			<div>
				<button
					className="text-center bg-primary-blue text-white w-64 h-10 rounded-lg ml-10 mt-10"
					onClick={handlePrint}
				>
					Download And Print
				</button>
			</div>
		</>
	);
};

export default TourPackageReport;
