import React, { useContext } from "react";

import HotelOwnerContext from "../../contexts/HotelOwnerContext";

const HotelOwnerRegister = () => {
	const { register } = useContext(HotelOwnerContext);

	const initialValues = {
		ownerName: "Thiwanka",
		email: "thiwanka@gmail.com",
		password: "pass",
		confirmPassword: "pass",
		nic: "123456789V",
		contactNumber: "0712345678",
		hotelName: "Hotel XYZ",
		hotelAddress: "Colombo 07",
		companyPhoneNumber: "0112345678",
		companyRegNo: "REG123",
		profilePicture:
			"https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const newHotelOwner = {
			ownerName: e.target.ownerName.value,
			email: e.target.email.value,
			nic: e.target.nic.value,
			contactNumber: e.target.contactNumber.value,
			password: e.target.password.value,
			hotelName: e.target.hotelName.value,
			hotelAddress: e.target.hotelAddress.value,
			companyPhoneNumber: e.target.companyPhoneNumber.value,
			companyRegNo: e.target.companyRegNo.value,
			profilePicture: e.target.profilePicture.value,
		};

		register(newHotelOwner);
	};

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Hotel Owner Register</h1>

			<div className="flex justify-center">
				<div className="w-1/2">
					<form className="mt-5" onSubmit={handleSubmit}>
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
								Profile Picture Link
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="profilePicture"
								type="text"
								placeholder="Profile Picture Link"
								value={initialValues.profilePicture}
							/>
						</div>
						<div className="mb-6 text-center">
							<button
								className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
								type="submit"
							>
								Register
							</button>
						</div>
						<hr className="mb-6 border-t" />
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
