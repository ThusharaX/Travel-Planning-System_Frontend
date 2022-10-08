import React, { useContext } from "react";
import "../vehicle-create/vehicle.css";
import VehicleTourContext from "../../contexts/VehicleTourContext";

const VehicleCreate = () => {
	const { isLoading, addVehicle } = useContext(VehicleTourContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		// Convert image to array
		var imageArray = [];
		for (var i = 0; i < e.target.images.files.length; i++) {
			imageArray.push(e.target.images.files[i].name);
		}

		const newVehicle = {
			vehicleType: e.target.vehicleType.value,
			regNo: e.target.regNo.value,
			ownersName: e.target.ownersName.value,
			year: e.target.year.value,
			discription: e.target.discription.value,
			VehicleImage: imageArray,
		};
		addVehicle(newVehicle);
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
											type="text"
											id="vehicleType"
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
										></input>
									</div>
								</div>
								<div className="form-group mb-6">
									<label htmlFor="fname">Reg. Number</label>
									<div className="flex ...">
										<input
											type="text"
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
											id="regNo"
											aria-describedby="emailHelp124"
											placeholder=""
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
										></input>
									</div>
								</div>

								<div className="form-group mb-6">
									<label htmlFor="fname">Year</label>
									<div className="flex ...">
										<input
											type="text"
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
											id="year"
											aria-describedby="emailHelp124"
											placeholder=""
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
								ADD
							</button>
						</form>
					</div>
				</div>
			</center>
		</>
	);
};

export default VehicleCreate;
