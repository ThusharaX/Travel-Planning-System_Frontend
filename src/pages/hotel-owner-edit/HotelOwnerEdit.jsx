import React, { useContext } from "react";

import HotelOwnerContext from "../../contexts/HotelOwnerContext";

const HotelOwnerEdit = () => {
	const { updateProfile, hotelOwner } = useContext(HotelOwnerContext);

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

		updateProfile(newHotelOwner);
	};

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Hotel Owner Edit</h1>

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
								defaultValue={hotelOwner.ownerName}
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
								defaultValue={hotelOwner.email}
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
								defaultValue={hotelOwner.nic}
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
								defaultValue={hotelOwner.contactNumber}
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
								defaultValue={hotelOwner.password}
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
								defaultValue={hotelOwner.hotelName}
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
								defaultValue={hotelOwner.hotelAddress}
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
								defaultValue={hotelOwner.companyPhoneNumber}
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
								defaultValue={hotelOwner.companyRegNo}
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="profilePicture">
								Profile Picture
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="profilePicture"
								type="text"
								placeholder="Profile Picture URL"
								defaultValue={hotelOwner.profilePicture}
							/>
						</div>
						<div className="mb-6 text-center">
							<button
								className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
								type="submit"
							>
								Update
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default HotelOwnerEdit;
