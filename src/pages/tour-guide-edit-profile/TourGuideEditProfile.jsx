import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import TourGuideContext from "../../contexts/TourGuideContext";

const TourGuideEditProfile = () => {
	const { isLoading, getOneTourGuide, tourGuide, TourGuideEdit, setTourGuide } = useContext(TourGuideContext);

	const handleChange = (e) => {
		setTourGuide(e.target.value);
	};

	const { id } = useParams();
	getOneTourGuide(id);

	const handleSubmit = (e) => {
		e.preventDefault();

		const newTourGuide = {
			id: id,
			tourGuideName: e.target.tourGuideName.value,
			email: e.target.email.value,
			nic: e.target.nic.value,
			contactNumber: e.target.contactNumber.value,
			guideArea: e.target.guideArea.value,
			guideCity: e.target.guideCity.value,
			spokenLanguages: e.target.spokenLanguages.value,
			motherTongue: e.target.motherTongue.value,
		};
		TourGuideEdit(newTourGuide);
	};

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Tour Guide Edit Profile</h1>

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
											Change Tour Guide Name
										</label>

										<div className="flex ...">
											<input
												className="form-control block w-80 px-3 py-1.5 text-base border-indigo-500 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												id="tourGuideName"
												value={tourGuide.tourGuideName}
												type="text"
												aria-describedby="emailHelp123"
												placeholder="Tour Guide Name"
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
												value={tourGuide.email}
												type="email"
												aria-describedby="emailHelp124"
												placeholder="Email Address"
												onChange={handleChange}
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
												value={tourGuide.nic}
												type="text"
												aria-describedby="emailHelp123"
												placeholder="NIC"
												onChange={handleChange}
											></input>
										</div>
									</div>

									<div className="form-group mb-6">
										<label htmlFor="fname">Change Contact Number</label>
										<div className="flex ...">
											<input
												className="form-control block  w-80 px-3 py-1.5 text-base border-indigo-500 font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												id="contactNumber"
												value={tourGuide.contactNumber}
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
										<label htmlFor="fname">Change Guide Area</label>
										<div className="flex ...">
											<input
												className="form-control block w-80 px-3 py-1.5 text-base  border-indigo-500 font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												id="guideArea"
												value={tourGuide.guideArea}
												type="text"
												aria-describedby="emailHelp123"
												placeholder="Guide Area"
												onChange={handleChange}
											></input>
										</div>
									</div>

									<div className="form-group mb-6">
										<label htmlFor="fname">Change Guide City</label>
										<div className="flex ...">
											<input
												className="form-control block  w-80 px-3 py-1.5 text-base border-indigo-500 font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												id="guideCity"
												value={tourGuide.guideCity}
												type="text"
												aria-describedby="emailHelp124"
												placeholder="Guide City"
												onChange={handleChange}
											></input>
										</div>
									</div>
								</div>

								<div className="grid grid-cols-2 gap-x-10">
									<div className="form-group mb-10">
										<label htmlFor="fname">Change Spoken Language</label>
										<div className="flex ...">
											<input
												className="form-control block w-80 px-3 py-1.5 text-base  border-indigo-500 font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												id="spokenLanguages"
												value={tourGuide.spokenLanguages}
												type="text"
												aria-describedby="emailHelp123"
												placeholder="Spoken Language"
												onChange={handleChange}
											></input>
										</div>
									</div>

									<div className="form-group mb-6">
										<label htmlFor="fname">Mother Tongue</label>
										<div className="flex ...">
											<input
												className="form-control block  w-80 px-3 py-1.5 text-base border-indigo-500 font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												id="motherTongue"
												value={tourGuide.motherTongue}
												type="text"
												aria-describedby="emailHelp124"
												placeholder="Mother Tongue"
												onChange={handleChange}
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

export default TourGuideEditProfile;
