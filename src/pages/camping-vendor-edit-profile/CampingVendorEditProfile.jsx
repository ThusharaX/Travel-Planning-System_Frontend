import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CampingVenderContext from "../../contexts/CampingVenderContext";

const CampingVendorEditProfile = () => {
	const { isLoading, getCampingVendor, setCampingVender, editCampingVendor, campingVender } =
		useContext(CampingVenderContext);

	const handleChange = (e) => {
		setCampingVender(e.target.value);
	};

	const { id } = useParams();
	getCampingVendor(id);

	const handleSubmit = (e) => {
		e.preventDefault();

		const newCampingVendor = {
			id: id,
			companyOwnerName: e.target.companyOwnerName.value,
			email: e.target.email.value,
			nic: e.target.nic.value,
			contactNumber: e.target.nic.value,
			companyName: e.target.companyName.value,
			companyAddress: e.target.companyAddress.value,
			companyPhone: e.target.companyAddress.value,
			companyRegisterNumber: e.target.companyRegisterNumber.value,
		};
		editCampingVendor(newCampingVendor);
	};

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Camping Vendor Edit Profile</h1>

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
											Change Company Owner Name
										</label>

										<div className="flex ...">
											<input
												className="form-control block w-80 px-3 py-1.5 text-base border-indigo-500 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												id="companyOwnerName"
												value={campingVender.companyOwnerName}
												type="text"
												aria-describedby="emailHelp123"
												placeholder="Company Owner Name"
												onChange={handleChange}
											></input>
										</div>
									</div>

									<div className="form-group mb-6">
										<label htmlFor="fname">Change Email</label>
										<div className="flex ...">
											<input
												className="form-control block w-80 px-3 py-1.5 text-base border-indigo-500 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												id="email"
												value={campingVender.email}
												type="email"
												aria-describedby="emailHelp124"
												placeholder="Email Address"
												onChange={handleChange}
												readOnly
											></input>
										</div>
									</div>
								</div>
								<div className="grid grid-cols-2 gap-x-10">
									<div className="form-group mb-10">
										<label htmlFor="fname">NIC</label>
										<div className="flex ...">
											<input
												className="form-control block w-80 px-3 py-1.5 text-base  border-indigo-500 font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												id="nic"
												value={campingVender.nic}
												type="text"
												aria-describedby="emailHelp123"
												placeholder="NIC"
												onChange={handleChange}
												readOnly
											></input>
										</div>
									</div>

									<div className="form-group mb-6">
										<label htmlFor="fname">Change Contact Number</label>
										<div className="flex ...">
											<input
												className="form-control block  w-80 px-3 py-1.5 text-base border-indigo-500 font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												id="contactNumber"
												value={campingVender.contactNumber}
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
										<label htmlFor="fname">Change Company Name</label>
										<div className="flex ...">
											<input
												className="form-control block w-80 px-3 py-1.5 text-base  border-indigo-500 font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												id="companyName"
												value={campingVender.companyName}
												type="text"
												aria-describedby="emailHelp123"
												placeholder="Company Name"
												onChange={handleChange}
											></input>
										</div>
									</div>

									<div className="form-group mb-6">
										<label htmlFor="fname">Change Company Address</label>
										<div className="flex ...">
											<input
												className="form-control block  w-80 px-3 py-1.5 text-base border-indigo-500 font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												id="companyAddress"
												value={campingVender.companyAddress}
												type="text"
												aria-describedby="emailHelp124"
												placeholder="Company Address"
												onChange={handleChange}
											></input>
										</div>
									</div>
								</div>

								<div className="grid grid-cols-2 gap-x-10">
									<div className="form-group mb-10">
										<label htmlFor="fname">Change Campany Phone</label>
										<div className="flex ...">
											<input
												className="form-control block w-80 px-3 py-1.5 text-base  border-indigo-500 font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												id="companyPhone"
												value={campingVender.companyPhone}
												type="text"
												aria-describedby="emailHelp123"
												placeholder="Company Phone"
												onChange={handleChange}
											></input>
										</div>
									</div>

									<div className="form-group mb-6">
										<label htmlFor="fname">Company Register Number</label>
										<div className="flex ...">
											<input
												className="form-control block  w-80 px-3 py-1.5 text-base border-indigo-500 font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												id="companyRegisterNumber"
												value={campingVender.companyRegisterNumber}
												type="text"
												aria-describedby="emailHelp124"
												placeholder="Company Register Number"
												onChange={handleChange}
												readOnly
											></input>
										</div>
									</div>
								</div>

								<br></br>
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
				)}
			</center>
		</>
	);
};
export default CampingVendorEditProfile;
