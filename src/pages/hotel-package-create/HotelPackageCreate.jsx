import React, { useContext } from "react";
import HotelPackageContext from "../../contexts/HotelPackageContext";

const HotelPackageCreate = () => {
	const { isLoading, addHotelPackage } = useContext(HotelPackageContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		// Convert image to array
		var imageArray = [];
		for (var i = 0; i < e.target.images.files.length; i++) {
			imageArray.push(e.target.images.files[i].name);
		}

		const newHotelPackage = {
			name: e.target.name.value,
			location: e.target.location.value,
			condition: e.target.condition.value,
			beds: e.target.beds.value,
			room_no: e.target.room_no.value,
			cost: e.target.cost.value,
			description: e.target.description.value,
			images: imageArray,
		};
		addHotelPackage(newHotelPackage);
	};

	return (
		<>
			<h1 className="mt-5 text-4xl text-center font-bold">Add Hotel Package</h1>

			<div className="flex justify-center">
				<div className="border-t w-1/2 px-10 rounded-2xl mt-5 shadow-2xl">
					<form className="mt-5" onSubmit={handleSubmit}>
						{/* side by side */}
						<div className="flex flex-row space-x-4">
							<div className="mb-4 w-1/2">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
									Name
								</label>
								<input
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="name"
									type="text"
									placeholder="Name"
								/>
							</div>
							<div className="mb-4 w-1/2">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="location">
									Location
								</label>
								<input
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="location"
									type="text"
									placeholder="Location"
								/>
							</div>
						</div>
						<div className="flex flex-row space-x-4">
							<div className="mb-4 w-1/2">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="condition">
									Condition
								</label>
								<select
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="condition"
								>
									<option value="AC">AC</option>
									<option value="Non-AC">Non-AC</option>
								</select>
							</div>
							<div className="mb-4 w-1/2">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="beds">
									Beds
								</label>
								<input
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="beds"
									type="number"
									placeholder="Beds"
								/>
							</div>
						</div>
						<div className="flex flex-row space-x-4">
							<div className="mb-4 w-1/2">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="room_no">
									Room No
								</label>
								<input
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="room_no"
									type="text"
									placeholder="Room No"
								/>
							</div>
							<div className="mb-4 w-1/2">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="cost">
									Cost
								</label>
								<input
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="cost"
									type="number"
									placeholder="Cost"
								/>
							</div>
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
							{/* Choose file button color red */}
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="images"
								type="file"
								multiple
							/>
						</div>

						<div className="mb-6 text-center">
							<button
								className="w-full px-4 py-2 font-bold text-white bg-primary-blue rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
								type="submit"
							>
								ADD
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default HotelPackageCreate;
