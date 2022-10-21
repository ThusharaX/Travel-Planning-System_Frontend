import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CampingVendorContext from "../../contexts/CampingVenderContext";

const CampingVendorLogin = () => {
	const { isLoading, CampingVendorLogin, isLoggedIn } = useContext(CampingVendorContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		const newCampingVendor = {
			email: e.target.email.value,
			password: e.target.password.value,
		};

		CampingVendorLogin(newCampingVendor);
	};

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Camping Vendor Login</h1>

			<form onSubmit={handleSubmit}>
				<div className="flex justify-center h-full mt-1 max-w-4xl mx-auto mt-20 bg-white rounded-lg shadow-xl">
					<div className=" left bg-primary-blue  rounded-lg">
						<div className="mt-32 ml-16 ">
							<h1 className="text-5xl text-white ">
								Welcome <br></br> Back
							</h1>

							<h4 className="mt-2 text-white">please login to our system</h4>
						</div>
						<div className="img ml-3 mt-16">
							<img class="object-cover w-100 ml-10 h-56" src="camp.svg" alt="img" />
						</div>
					</div>

					<div className="right">
						<div class="ml-20 mr-20 mt-28">
							<h1 class="mb-10 text-2xl text-primary-blue font-bold text-center">Login Here..</h1>
							<div>
								<input
									id="email"
									type="email"
									class="w-80 px-4 py-2 text-sm border rounded-md bg bg-slate-100 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
									placeholder="Email"
								/>
							</div>
							<br></br>
							<div>
								<input
									id="password"
									class="w-80 px-4 py-2 text-sm border rounded-md bg-slate-100 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
									placeholder="Password"
									type="password"
								/>
							</div>
							<p class="mt-4 ml-40">
								<a class="text-sm text-blue-600 hover:underline" href="./forgot-password.html">
									Forgot your password?
								</a>
							</p>

							<div class="flex items-center justify-center gap-4">
								<button
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-10  w-60 py-1.5  rounded-xl"
									href="#"
								>
									Login
								</button>
							</div>
							<br></br>
							<div className="text-center">
								<a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="#">
									Forgot Password?
								</a>
							</div>
							<div className="text-center">
								<a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="#">
									<Link to="/camping-vendor-register">Create an Account.</Link>
								</a>
							</div>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default CampingVendorLogin;
