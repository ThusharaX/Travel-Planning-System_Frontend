import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import TourPackageContext from "../../contexts/TourPackageContext";

const editTourPackage = () => {
	const { getOneTourPackage, editTourPackage, tourPackage, setTourPackage, isLoading } = useContext(TourPackageContext);

	const handleChange = (e) => {
		setTourPackage(e.target.value);
	};
	const { id } = useParams();

	getOneTourPackage(id);

	const handleSubmit = (e) => {
		e.preventDefault();

		const newTourPackage = {
			id: id,
			tourPackageName: e.target.tourPackageName.value,
			guideName: e.target.guideName.value,
			email: e.target.email.value,
			contactNumber: e.target.contactNumber.value,
			price: e.target.price.value,
			NumberOfDays: e.target.NumberOfDays.value,
			location: e.target.location.value,
			description: e.target.description.value,
		};
		editTourPackage(newTourPackage);
	};

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Tour Package Edit</h1>

			<br></br>
			<center>
				{isLoading ? (
					<h1 className="text-center">Loading...</h1>
				) : (
					<div>
						<div className="block p-8 rounded-3xl shadow-lg bg-white max-w-screen-md max-h-full">
							<form onSubmit={handleSubmit}>
								<div className="grid grid-cols-2 gap-x-10">
									<div className="form-group mb-6">
										<label className="labelClass" htmlFor="fname">
											Tour Package Name
										</label>

										<div className="flex ...">
											<input
												className="form-control block w-80 px-3 py-1.5 text-base border-indigo-500 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												id="tourPackageName"
												value={tourPackage.tourPackageName}
												type="text"
												aria-describedby="emailHelp123"
												placeholder="Tour Package Name"
												onChange={handleChange}
											></input>
										</div>
									</div>

									<div className="form-group mb-6">
										<label htmlFor="fname">Tour Guide Name</label>
										<div className="flex ...">
											<input
												className="form-control block w-80 px-3 py-1.5 text-base border-indigo-500 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												id="guideName"
												value={tourPackage.guideName}
												type="text"
												aria-describedby="emailHelp124"
												placeholder="Tour Guide Name"
												onChange={handleChange}
											></input>
										</div>
									</div>
								</div>
								<div className="grid grid-cols-2 gap-x-10">
									<div className="form-group mb-10">
										<label htmlFor="fname">Email</label>
										<div className="flex ...">
											<input
												className="form-control block w-80 px-3 py-1.5 text-base  border-indigo-500 font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												id="email"
												value={tourPackage.email}
												type="email"
												aria-describedby="emailHelp123"
												placeholder="Email Address"
												onChange={handleChange}
												readOnly
											></input>
										</div>
									</div>

									<div className="form-group mb-6">
										<label htmlFor="fname">Contact Number</label>
										<div className="flex ...">
											<input
												className="form-control block  w-80 px-3 py-1.5 text-base border-indigo-500 font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												id="contactNumber"
												value={tourPackage.contactNumber}
												type="number"
												aria-describedby="emailHelp124"
												placeholder="Contact Number"
												onChange={handleChange}
											></input>
										</div>
									</div>
								</div>

								<div className="grid grid-cols-2 gap-x-10">
									<div className="form-group mb-10">
										<label htmlFor="fname">Package Price</label>
										<div className="flex ...">
											<input
												className="form-control block w-80 px-3 py-1.5 text-base  border-indigo-500 font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												id="price"
												value={tourPackage.price}
												type="number"
												aria-describedby="emailHelp123"
												placeholder="Pacakge Price"
												onChange={handleChange}
											></input>
										</div>
									</div>

									<div className="form-group mb-6">
										<label htmlFor="fname">Number of Days</label>
										<div className="flex ...">
											<input
												className="form-control block  w-80 px-3 py-1.5 text-base border-indigo-500 font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												id="NumberOfDays"
												value={tourPackage.NumberOfDays}
												type="number"
												aria-describedby="emailHelp124"
												placeholder="Number of Days"
												onChange={handleChange}
											></input>
										</div>
									</div>
								</div>

								<div className="singleInput">
									<label htmlFor="fname">Location</label>
									<div className="flex ...">
										<div className="form-group mb-4">
											<input
												className="form-control singleInput block w-80 px-3 py-1.5 text-base  border-indigo-500 font-normal text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												id="location"
												value={tourPackage.location}
												type="text"
												aria-describedby="emailHelp124"
												placeholder="Travel Location"
												onChange={handleChange}
											></input>
										</div>
									</div>
								</div>

								<label htmlFor="fname">Description</label>

								<textarea
									id="description"
									value={tourPackage.description}
									rows="4"
									className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
									placeholder="Describe Here Package"
									onChange={handleChange}
								></textarea>
								<br></br>

								<div className="mb-6 text-center">
									<button
										className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
										type="submit"
									>
										Save
									</button>
								</div>
							</form>
						</div>
					</div>
				)}
			</center>
		</>
	);
};

export default editTourPackage;
