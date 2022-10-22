import "../camping-vendor-dashboard/CampingVendordashboard.css";
import React, { useContext, useState, useRef } from "react";
import CampingPackageContext from "../../contexts/CampingPackageContext";
import CampingVenderContext from "../../contexts/CampingVenderContext";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { defaults } from "joi";

const CampingPackageReport = () => {
	const { isLoading, campingPackages, deleteCampingPackage } = useContext(CampingPackageContext);
	const { getCampingVendor, campingVender } = useContext(CampingVenderContext);

	const id = localStorage.getItem("uID");
	const name = localStorage.getItem("username");
	const email = localStorage.getItem("Email");
	// eslint-disable-next-line no-console
	getCampingVendor(id);

	let count = 0;
	let total = 0;

	campingPackages
		.filter((elem) => elem.vendorId == id)
		.map(
			(campingPackage) => (
				console.log("price is" + campingPackage.price),
				(count = count + 1),
				(total = total + parseInt(campingPackage.price))
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
						<h1 className="ml-10">Vendor Name : {name} </h1>
						<h1 className="ml-10">Vendor Email : {email}</h1>
					</div>
				</div>
				<div class="ml-10 mr-10 mt-5 overflow-x-96 relative">
					<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" class="py-3 px-6">
									package Name
								</th>
								<th scope="col" class="py-3 px-6">
									Location
								</th>

								<th scope="col" class="py-3 px-6">
									Price
								</th>
							</tr>
						</thead>

						{campingPackages
							.filter((elem) => elem.vendorId == id)
							.map((campingPackage) => (
								<tbody>
									<tr class="bg-white ml-5 font-bold border-b dark:bg-gray-800 dark:border-gray-700">
										<td className="px-5">{campingPackage.packageName}</td>
										<td>{campingPackage.location}</td>
										<td className="px-6">{campingPackage.price}</td>
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

export default CampingPackageReport;
