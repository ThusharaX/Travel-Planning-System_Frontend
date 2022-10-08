import React, { useContext, useState } from "react";
import CampingPackageContext from "../../contexts/CampingPackageContext";
import { useParams } from "react-router-dom";
import "../camping-package-edit/camping.css";

const CampingPackageEdit = () => {
	const { getCampingPackage, editCampingPackage, campingPackage, setCampingPackage } =
		useContext(CampingPackageContext);

	const handleChange = (e) => {
		setCampingPackage(e.target.value);
	};

	const { id } = useParams();

	getCampingPackage(id);

	const handleSubmit = (e) => {
		e.preventDefault();

		const newCampingPackage = {
			id: id,
			packageName: e.target.packageName.value,
			persons: e.target.persons.value,
			location: e.target.location.value,
			duration: e.target.duration.value,
			price: e.target.price.value,
			packageDescription: e.target.packageDescription.value,
		};

		editCampingPackage(newCampingPackage);
	};

	return (
		<>
			<h1>Edit</h1>
			<br></br>
			<br></br>
			<br></br>
			<center>
				<div>
					<div className="block p-8 rounded-3xl shadow-lg bg-white max-w-screen-md max-h-full">
						<form onSubmit={handleSubmit}>
							<div className="grid grid-cols-2 gap-x-10">
								<div className="form-group mb-6">
									<label className="labelClass" htmlFor="fname">
										Package Name
									</label>

									<div className="flex ...">
										<input
											type="text"
											value={campingPackage.packageName}
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
											id="packageName"
											aria-describedby="emailHelp123"
											placeholder=""
											onChange={handleChange}
										></input>
									</div>
								</div>
								<div naclassName="form-group mb-6">
									<label htmlFor="fname">Persons</label>
									<div naclassNameName="flex ...">
										<input
											type="text"
											value={campingPackage.persons}
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
											id="persons"
											aria-describedby="emailHelp124"
											placeholder=""
											onChange={handleChange}
										></input>
									</div>
								</div>
							</div>
							<div className="grid grid-cols-2 gap-x-10">
								<div className="form-group mb-10">
									<label htmlFor="fname">Location</label>
									<div classNameName="flex ...">
										<input
											type="text"
											value={campingPackage.location}
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
											id="location"
											aria-describedby="emailHelp123"
											placeholder=""
											onChange={handleChange}
										></input>
									</div>
								</div>

								<div className="form-group mb-6">
									<label htmlFor="fname">Duration</label>
									<div className="flex ...">
										<input
											type="text"
											value={campingPackage.duration}
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
											id="duration"
											aria-describedby="emailHelp124"
											placeholder=""
											onChange={handleChange}
										></input>
									</div>
								</div>
							</div>
							<div className="singleInput">
								<label htmlFor="fname">Price</label>
								<div className="flex ...">
									<div className="form-group mb-4">
										<input
											type="text"
											value={campingPackage.price}
											className="form-control
		  singleInput
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
											id="price"
											aria-describedby="emailHelp124"
											placeholder=""
											onChange={handleChange}
										></input>
									</div>
								</div>
							</div>
							<label htmlFor="fname">Description</label>

							<textarea
								id="packageDescription"
								rows="4"
								className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
								placeholder="Your message..."
								value={campingPackage.packageDescription}
								onChange={handleChange}
							></textarea>
							<br></br>
							<label htmlFor="fname">Upload File</label>

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
								UPDATE
							</button>
						</form>
					</div>
				</div>
			</center>
		</>
	);
};

export default CampingPackageEdit;
