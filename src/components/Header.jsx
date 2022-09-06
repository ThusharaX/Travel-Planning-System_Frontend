import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<div className="bg-blue-500">
				<div className="max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-8">
					<div className="pr-16 sm:text-center sm:px-16">
						{/* Link to home page */}
						<Link to="/">
							<h1 className="mt-2 mb-2 text-2xl font-bold text-white">Travel Planning System</h1>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
