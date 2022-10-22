import React, { useContext, useRef } from "react";
import VehiclePackageContext from "../../contexts/VehiclePackageContext";
import { useReactToPrint } from "react-to-print";

const VehiclePackageReport = () => {
	const { isLoading, vehiclePackages } = useContext(VehiclePackageContext);
	//const { getCampingPackage, vehiclePackage } = useContext(CampingVenderContext);

	const id = localStorage.getItem("uID");
	const name = localStorage.getItem("username");
	const email = localStorage.getItem("Email");

	let count = 0;
	let total = 0;

	vehiclePackages
		.filter((elem) => elem.ownerId == id)
		.map(
			(vehiclePackage) => (
				console.log("price is" + vehiclePackage.price),
				(count = count + 1),
				(total = total + parseInt(vehiclePackage.price))
			)
		);

	const componentRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	return (
		<>
			<h1>Vehicle Package Report</h1>

			<br></br>
			<br></br>
			<br></br>
			<div ref={componentRef}>
				<br></br>
				<br></br>
				<div className="ml-10 mr-10 bg-primary-blue h-16 text-white">
					<div className="py-2">
						<h1 className="ml-10">Vehicle Owner Name : {name} </h1>
						<h1 className="ml-10">Vehicle Owner Email : {email}</h1>
					</div>
				</div>
				<div class="ml-10 mr-10 mt-5 overflow-x-96 relative">
					<table className="w-full text-sm text-left ">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
							<tr>
								<th scope="col" class="py-3 px-6">
									Vehicle package Name
								</th>
								<th scope="col" class="py-3 px-6">
									Vehicle
								</th>

								<th scope="col" class="py-3 px-6">
									Price
								</th>
							</tr>
						</thead>

						{vehiclePackages
							.filter((elem) => elem.ownerId == id)
							.map((vehiclePackage) => (
								<tbody>
									<tr class="bg-white ml-5 font-bold border-b ">
										<td className="px-5">{vehiclePackage.packageName}</td>
										<td>{vehiclePackage.vehicle}</td>
										<td className="px-6">{vehiclePackage.price}</td>
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

export default VehiclePackageReport;
