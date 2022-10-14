import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TourGuideContext from "../../contexts/TourGuideContext";
import toast, { Toaster } from "react-hot-toast";

const TourGuideLogin = () => {
	const { isLoading, TourGuideLogin } = useContext(TourGuideContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		const newTourGuide = {
			email: e.target.email.value,
			password: e.target.password.value,
		};

		TourGuideLogin(newTourGuide);
	};

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Tour Guide Login</h1>

			{isLoading ? (
				<h1 className="text-center">Loading...</h1>
			) : (
				<div className="flex justify-center">
					<div className="w-1/2">
						<form className="mt-5" onSubmit={handleSubmit}>
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
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
									Password
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="password"
									type="password"
									placeholder="******************"
								/>
							</div>
							<div className="mb-6 text-center">
								<button
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="submit"
								>
									Sign In
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
									<Link to="/tour-guide-register">Create an Account.</Link>
								</a>
							</div>
						</form>
					</div>
				</div>
			)}
			<Toaster />
		</>
	);
};

export default TourGuideLogin;
