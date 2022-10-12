import React, { useContext, useState } from "react";
import VehicleTourContext from "../../contexts/VehicleTourContext";
import { useParams } from "react-router-dom";

const VehicleEdit = () => {
	const { getVehiclePackage, editVehiclePackage, vehicleTour, setVehicleTour } = useContext(VehicleTourContext);

	const handleChange = (e) => {
		setVehicleTour(e.target.value);
	};

	const { id } = useParams();
	getVehiclePackage(id);

	const handleSubmit = (e) => {
		e.preventDefault();

		const newVehicleTour = {
			id: id,
			vehicleType: e.target.vehicleType.value,
			regNo: e.target.regNo.value,
			ownersName: e.target.ownersName.value,
			year: e.target.year.value,
			discription: e.target.discription.value,
		};
		editVehiclePackage(newVehicleTour);
	};

	return (
		<>
			<br></br>
			<br></br>
			<br></br>

			<center>
				<div>
					<div className="block p-8 rounded-3xl shadow-lg bg-white max-w-screen-md max-h-full">
						<form onSubmit={handleSubmit}>
							<h1 className="text-base">Add Vehicle</h1>

							<br></br>

							<div className="grid grid-cols-2 gap-x-10">
								<div className="form-group mb-6">
									<label className="labelClass" htmlFor="fname">
										Vehicle type
									</label>

									<div className="flex ...">
										<input
											id="vehicleType"
											type="text"
											value={vehicleTour.vehicleType}
											className="form-control
          block
          w-80
          px-3
          py-1.5
          text-base
		  border-indigo-500
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											aria-describedby="emailHelp123"
											placeholder=""
											onChange={handleChange}
										></input>
									</div>
								</div>
								<div className="form-group mb-6">
									<label htmlFor="fname">Reg. Number</label>
									<div className="flex ...">
										<input
											id="regNo"
											type="text"
											value={vehicleTour.regNo}
											className="form-control
          block
          w-80
          px-3
          py-1.5
          text-base
		  border-indigo-500
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											aria-describedby="emailHelp124"
											placeholder=""
											onChange={handleChange}
										></input>
									</div>
								</div>
							</div>
							<div className="grid grid-cols-2 gap-x-10">
								<div className="form-group mb-10">
									<label htmlFor="fname">Owners Name</label>
									<div className="flex ...">
										<input
											type="text"
											value={vehicleTour.ownersName}
											className="form-control
          block
          w-80
          px-3
          py-1.5
          text-base
		  border-indigo-500
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											id="ownersName"
											aria-describedby="emailHelp123"
											placeholder=""
											onChange={handleChange}
										></input>
									</div>
								</div>

								<div className="form-group mb-6">
									<label htmlFor="fname">Year</label>
									<div className="flex ...">
										<input
											id="year"
											type="text"
											value={vehicleTour.year}
											className="form-control
          block
          w-80
          px-3
          py-1.5
          text-base
		  border-indigo-500
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											aria-describedby="emailHelp124"
											placeholder=""
											onChange={handleChange}
										></input>
									</div>
								</div>
							</div>

							<label htmlFor="fname">Description</label>

							<textarea
								id="discription"
								rows="4"
								className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
								placeholder="Your message..."
								value={vehicleTour.discription}
								onChange={handleChange}
							></textarea>
							<br></br>
							<label htmlFor="fname">Vehicle Image</label>

							<div className="mb-4">
								<input
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="images"
									type="file"
									multiple
								/>
							</div>

							<div className="form-group form-check text-center mb-6"></div>
							<button
								type="submit"
								className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
							>
								Update
							</button>
						</form>
					</div>
				</div>
			</center>
		</>
	);
};

export default VehicleEdit;
