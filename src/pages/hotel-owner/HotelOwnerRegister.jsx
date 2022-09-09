import React from "react";

const HotelOwnerRegister = () => {
	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Hotel Owner Register</h1>

			<div className="flex justify-center">
				<div className="w-1/2">
					<form className="mt-5">
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="ownerName">
								Owner Name
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="ownerName"
								type="text"
								placeholder="Owner Name"
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
								Email
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="email"
								type="email"
								placeholder="Email"
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="nic">
								NIC
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="nic"
								type="text"
								placeholder="NIC"
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="contactNumber">
								Contact Number
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="contactNumber"
								type="text"
								placeholder="Contact Number"
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
								Password
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="password"
								type="password"
								placeholder="Password"
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="hotelName">
								Hotel Name
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="hotelName"
								type="text"
								placeholder="Hotel Name"
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="hotelAddress">
								Hotel Address
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="hotelAddress"
								type="text"
								placeholder="Hotel Address"
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="companyPhoneNumber">
								Company Phone Number
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="companyPhoneNumber"
								type="text"
								placeholder="Company Phone Number"
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="companyRegNo">
								Company Registration Number
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="companyRegNo"
								type="text"
								placeholder="Company Registration Number"
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="profilePicture">
								Profile Picture
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="profilePicture"
								type="file"
								placeholder="Profile Picture"
							/>
						</div>
						<div className="mb-6 text-center">
							<button
								className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
								type="button"
							>
								Register
							</button>
						</div>
						<hr className="mb-6 border-t" />
						<div className="text-center">
							<a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="#">
								Forgot Password?
							</a>
						</div>
						<div className="text-center">
							<a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="#">
								Already have an account? Login!
							</a>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default HotelOwnerRegister;
