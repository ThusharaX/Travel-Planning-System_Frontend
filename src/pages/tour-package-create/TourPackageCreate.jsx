import React, { useContext } from "react";
import TourPackageContext from "../../contexts/TourPackageContext";

const TourPackageCreate = () => {
	const { isLoading, addTourPackage } = useContext(TourPackageContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		var imageArray = [];
		for (var i = 0; i < e.target.images.files.length; i++) {
			imageArray.push(e.target.images.files[i].name);
		}

		const newTourPackage = {
			tourPackageName: e.target.tourPackageName.value,
			guideName: e.target.guideName.value,
			email: e.target.email.value,
			contactNumber: e.target.contactNumber.value,
			price: e.target.price.value,
			NumberOfDays: e.target.NumberOfDays.value,
			location: e.target.location.value,
			description: e.target.description.value,
			images: imageArray,
		};

		addTourPackage(newTourPackage);
	};

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Tour Package Create</h1>

			<div className="flex justify-center">
				<div className="w-1/2">
					<form className="mt-5" onSubmit={handleSubmit}>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
								Tour Package Name
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="tourPackageName"
								type="text"
								placeholder="Tour Package Name"
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="location">
								Guide Name
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="guideName"
								type="text"
								placeholder="Tour Guide Name"
							/>
						</div>

						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="location">
								Email
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="email"
								type="email"
								placeholder="Tour Guide Email"
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="location">
								Contact Number
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="contactNumber"
								type="number"
								placeholder="Contact Number"
							/>
						</div>

						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="location">
								Cost
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="price"
								type="number"
								placeholder="Cost"
							/>
						</div>

						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="beds">
								Number Of Days
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="NumberOfDays"
								type="number"
								placeholder="Number Of Days"
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="room_no">
								Location
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="location"
								type="text"
								placeholder="Location"
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="description">
								Description
							</label>
							<textarea
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="description"
								type="text"
								placeholder="Description"
							/>
						</div>
						{/* Select multiple images */}
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="images">
								Images
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="images"
								type="file"
								multiple
							/>
						</div>

						<div className="mb-6 text-center">
							<button
								className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
								type="submit"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default TourPackageCreate;
