import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CustomerContext from "../../contexts/CustomerContext";
import "../customer-register/CustomerRegister.css";

const CustomerRegister = () => {
	const { isLoading, CustomerRegister } = useContext(CustomerContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		const newCustomer = {
			name: e.target.name.value,
			email: e.target.email.value,
			nic: e.target.nic.value,
			contactNumber: e.target.contactNumber.value,
			password: e.target.password.value,
			profilePicture: e.target.profilePicture.value,
		};
		CustomerRegister(newCustomer);
	};

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">User Register</h1>

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
											User Name
										</label>

										<div className="flex ...">
											<input
												className="form-control block w-80 px-3 py-1.5 text-base border-indigo-500 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												id="name"
												type="text"
												aria-describedby="emailHelp123"
												placeholder="User Name"
											></input>
										</div>
									</div>

									<div className="form-group mb-6">
										<label htmlFor="fname">Email</label>
										<div className="flex ...">
											<input
												className="form-control block w-80 px-3 py-1.5 text-base border-indigo-500 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												id="email"
												type="email"
												aria-describedby="emailHelp124"
												placeholder="Email Address"
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
												type="text"
												aria-describedby="emailHelp123"
												placeholder="NIC"
											></input>
										</div>
									</div>

									<div className="form-group mb-6">
										<label htmlFor="fname">Contact Number</label>
										<div className="flex ...">
											<input
												className="form-control block  w-80 px-3 py-1.5 text-base border-indigo-500 font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												id="contactNumber"
												type="number"
												aria-describedby="emailHelp124"
												placeholder="Contact Number"
											></input>
										</div>
									</div>
								</div>
								<div className="singleInput">
									<label htmlFor="fname">Password</label>
									<div className="flex ...">
										<div className="form-group mb-4">
											<input
												className="form-control singleInput block w-80 px-3 py-1.5 text-base  border-indigo-500 font-normal text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												id="password"
												type="password"
												aria-describedby="emailHelp124"
												placeholder="************"
											></input>
										</div>
									</div>
								</div>
								<br></br>
								<label htmlFor="fname">Upload File</label>

								<div className="mb-4">
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="profilePicture"
										type="file"
										multiple
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
							</form>
						</div>

						<div className="text-center">
							<a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="#">
								<Link to="/customer-login">Already have an account? Login!</Link>
							</a>
						</div>
					</div>
				)}
			</center>
		</>
	);
};

export default CustomerRegister;
