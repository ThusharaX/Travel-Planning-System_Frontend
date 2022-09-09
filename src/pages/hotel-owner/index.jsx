import React from "react";
import HotelOwnerLogin from "./HotelOwnerLogin";
import HotelOwnerRegister from "./HotelOwnerRegister";

const index = () => {
	const [showLogin, setShowLogin] = React.useState(true);
	return (
		<>
			{/* Tailwind CSS tabs for Hotel Owner Login and Register */}
			<div className="flex flex-col items-center justify-center w-full bg-gray-100">
				<div className="flex items-center justify-center w-full h-16 bg-white border-gray-200">
					<div className="flex items-center justify-center w-1/4 h-full border-b border-l">
						<button
							className={`w-full h-full text-lg font-medium text-center text-gray-500 transition duration-150 ease-in-out ${
								showLogin ? "bg-blue-300" : "hover:bg-gray-100"
							}`}
							onClick={() => setShowLogin(true)}
						>
							Login
						</button>
					</div>
					<div className="flex items-center justify-center w-1/4 h-full border-b border-r">
						<button
							className={`w-full h-full text-lg font-medium text-center text-gray-500 transition duration-150 ease-in-out ${
								!showLogin ? "bg-blue-300" : "hover:bg-gray-100"
							}`}
							onClick={() => setShowLogin(false)}
						>
							Register
						</button>
					</div>
				</div>
				<div className="w-full h-full bg-white">{showLogin ? <HotelOwnerLogin /> : <HotelOwnerRegister />}</div>
			</div>
		</>
	);
};

export default index;
