import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CampingVendorContext from "../../contexts/CampingVenderContext";

const CampingVendorRegister = () => {
	const { isLoading, CampingVendorRegister } = useContext(CampingVendorContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		const newCampingVendor = {
			companyOwnerName: e.target.companyOwnerName.value,
			email: e.target.email.value,
			nic: e.target.nic.value,
			contactNummber: e.target.contactNummber.value,
			companyName: e.target.companyName.value,
			companyAddress: e.target.companyAddress.value,
			companyPhone: e.target.companyPhone.value,
			companyRegisterNumber: e.target.companyRegisterNumber.value,
			profilePicture: e.target.profilePicture.value,
			password: e.target.password.value,
		};
		CampingVendorRegister(newCampingVendor);
	};

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Camping Vendor Register</h1>

			<div className="flex justify-center">
				<div className="w-1/2">
					<form className="mt-5" onSubmit={handleSubmit}>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="ownerName">
								Company Owner Name
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="companyOwnerName"
								type="text"
								placeholder="Company Owner Name"
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
								placeholder="Email Address"
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="nic">
								NIC / Passport Number
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="nic"
								type="text"
								placeholder="NIC / Passport Number"
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="contactNumber">
								Contact Number
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="contactNumber"
								type="Number"
								placeholder="Contact Number"
							/>
						</div>

						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="contactNumber">
								Which area you Guide
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="guideArea"
								type="text"
								placeholder="example : Colombo"
							/>
						</div>

						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="contactNumber">
								Region or City where you give guide tours
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="guideCity"
								type="text"
								placeholder="example : Colombo City"
							/>
						</div>

						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="contactNumber">
								Spoken Languages
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="spokenLanguages"
								type="text"
								placeholder="example : English"
							/>
						</div>

						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="contactNumber">
								Mother Tongue
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="motherTongue"
								type="text"
								placeholder="example : Sinhala"
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
								placeholder="******************"
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
								type="submit"
							>
								Register
							</button>
						</div>
						<hr className="mb-6 border-t" />

						<div className="text-center">
							<a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="#">
								<Link to="/tour-guide-login">Already have an account? Login!</Link>
							</a>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default CampingVendorRegister;
