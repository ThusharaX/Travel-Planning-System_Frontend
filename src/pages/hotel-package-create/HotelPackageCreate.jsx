import React, { useContext } from "react";
import HotelPackageContext from "../../contexts/HotelPackageContext";

const HotelPackageCreate = () => {
	const { isLoading, addHotelPackage } = useContext(HotelPackageContext);

	const initialValues = {
		name: "",
		location: "",
		condition: "",
		beds: "",
		room_no: "",
		cost: "",
		description: "",
		images: "https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80,https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80, https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		hotel_owner_id: "",
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// image e.target.images.value - image1, image2, image3

		// Convert image to array
		var imageArray = [];
		// get string of images separated by comma and split it into array
		var imageString = e.target.images.value;
		imageArray = imageString.split(",");

		const newHotelPackage = {
			name: e.target.name.value,
			location: e.target.location.value,
			condition: e.target.condition.value,
			beds: e.target.beds.value,
			room_no: e.target.room_no.value,
			cost: e.target.cost.value,
			description: e.target.description.value,
			images: imageArray,
			hotel_owner_id: localStorage.getItem("uID"),
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
								Images URL (separated by comma)
							</label>
							{/* Choose file button color red */}
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="images"
								type="text"
								placeholder="Images URL (separated by comma)"
								Value={initialValues.images}
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
