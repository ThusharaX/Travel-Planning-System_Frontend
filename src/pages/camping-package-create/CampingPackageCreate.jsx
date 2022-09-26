import React, { useContext } from "react";
import CampingPackageContext from "../../contexts/CampingPackageContext";

const CampingPackageCreate = () => {
	const { isLoading, addCampingPackage } = useContext(CampingPackageContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		// Convert image to array
		var imageArray = [];
		for (var i = 0; i < e.target.images.files.length; i++) {
			imageArray.push(e.target.images.files[i].name);
		}

		const newCampingPackage = {
			packageName: e.target.packageName.value,
			persons: e.target.persons.value,
			location: e.target.location.value,
			duration: e.target.duration.value,
			price: e.target.price.value,
			packageDescription: e.target.packageDescription.value,
			images: imageArray,
		};
		addCampingPackage(newCampingPackage);
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
							<div className="grid grid-cols-2 gap-x-10">
								<div className="form-group mb-6">
									<label className="labelClass" for="fname">
										Package Name
									</label>

									<div className="flex ...">
										<input
											type="text"
											class="form-control
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
										></input>
									</div>
								</div>
								<div class="form-group mb-6">
									<label for="fname">Persons</label>
									<div className="flex ...">
										<input
											type="text"
											class="form-control
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
										></input>
									</div>
								</div>
							</div>
							<div class="grid grid-cols-2 gap-x-10">
								<div class="form-group mb-10">
									<label for="fname">Location</label>
									<div className="flex ...">
										<input
											type="text"
											class="form-control
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
										></input>
									</div>
								</div>

								<div class="form-group mb-6">
									<label for="fname">Duration</label>
									<div className="flex ...">
										<input
											type="text"
											class="form-control
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
										></input>
									</div>
								</div>
							</div>
							<div className="singleInput">
								<label for="fname">Price</label>
								<div class="flex ...">
									<div class="form-group mb-4">
										<input
											type="text"
											class="form-control
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
										></input>
									</div>
								</div>
							</div>
							<label for="fname">Description</label>

							<textarea
								id="packageDescription"
								rows="4"
								class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
								placeholder="Your message..."
							></textarea>
							<br></br>
							<label for="fname">Upload File</label>

							<div className="mb-4">
								<input
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="images"
									type="file"
									multiple
								/>
							</div>

							<div class="form-group form-check text-center mb-6"></div>
							<button
								type="submit"
								class="
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

export default CampingPackageCreate;