/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect, useState } from "react";
import HotelPackageContext from "../../contexts/HotelPackageContext";

const HotelPackage = () => {
	const { isLoading, getHotelPackageByID, hotelPackage } = useContext(HotelPackageContext);
	const [showModal, setShowModal] = React.useState(false);
	const [selectedImage, setSelectedImage] = useState("");

	const hotelPackageId = window.location.pathname.split("/")[2];

	useEffect(() => {
		getHotelPackageByID(hotelPackageId);
	}, []);

	return (
		<div>
			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
									<h3 className="text-3xl font-semibold">{hotelPackage.name}</h3>
								</div>
								{/*body*/}
								<div className="relative p-6 flex-auto">
									<img src={selectedImage} alt="hotel" className="w-full border-2 border-black" />
								</div>
								{/*footer*/}
								<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}

			{isLoading ? (
				<h1 className="text-center">Loading...</h1>
			) : (
				<div className="flex space-x-5 justify-center">
					<div className="w-1/2 m-5 p-5 border border-gray-300 rounded-lg bg-white">
						<div className="flex justify-between">
							<h1 className="text-2xl">{hotelPackage.name}</h1>
							<h1 className="text-xl bg-green-500 text-white rounded-full p-3">{hotelPackage.condition}</h1>
						</div>

						<p className="text-sm">{hotelPackage.description}</p>
						<p className="text-sm">{hotelPackage.location}</p>
						<p className="text-sm">Beds : {hotelPackage.beds}</p>
						<h1 className="text-2xl">Rs. {hotelPackage.cost}</h1>

						{/* Loop through the images */}
						<div className="flex space-x-5 justify-center p-5">
							{hotelPackage.images.map((image) => (
								<img
									key={image}
									src={image}
									alt="hotel"
									className="w-1/3 border-2 border-black cursor-pointer"
									onClick={() => {
										setSelectedImage(image);
										setShowModal(true);
									}}
								/>

								// When clicking on the image, it should open a modal with the image
							))}
						</div>
						{/* Add to wishlist button */}
						{/* <div className="flex justify-center">
							<div className="w-3/4 mt-5">
								<button
									type="button"
									className="w-full px-5 py-3 text-white bg-primary-blue rounded-2xl shadow-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
								>
									Add to wishlist
								</button>
							</div>
						</div> */}
					</div>
				</div>
			)}
		</div>
	);
};

export default HotelPackage;
