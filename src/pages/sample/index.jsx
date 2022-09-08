import React from "react";

const Sample = () => {
	return (
		<>
			<br></br>
			<br></br>
			<br></br>
			<center>
				<div>
					<div className="block p-8 rounded-3xl shadow-lg bg-white max-w-screen-md max-h-full">
						<form>
							<div className="heading">Add Tour Package</div>
							<br></br>

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
											id="exampleInput123"
											aria-describedby="emailHelp123"
											placeholder="Package Name"
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
											id="exampleInput124"
											aria-describedby="emailHelp124"
											placeholder="Persons"
										></input>
									</div>
								</div>
							</div>
							<div class="grid grid-cols-2 gap-x-10">
								<div class="form-group mb-10">
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
											id="exampleInput123"
											aria-describedby="emailHelp123"
											placeholder="Vehicle"
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
											id="exampleInput124"
											aria-describedby="emailHelp124"
											placeholder="Duration"
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
											id="exampleInput124"
											aria-describedby="emailHelp124"
											placeholder="Price"
										></input>
									</div>
								</div>
							</div>
							<label for="fname">Description</label>

							<textarea
								id="message"
								rows="4"
								class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
								placeholder="Your message..."
							></textarea>
							<br></br>
							<label for="fname">Upload File</label>
							<input
								class="block w-full cursor-pointer bg-red-50 border border-black-300 text-black-900 focus:outline-none focus:border-transparent text-sm rounded-lg"
								aria-describedby="user_avatar_help"
								id="user_avatar"
								type="file"
							></input>

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

export default Sample;
