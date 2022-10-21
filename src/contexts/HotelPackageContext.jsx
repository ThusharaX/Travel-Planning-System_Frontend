import { createContext, useState, useEffect } from "react";
import HotelPackageAPI from "./api/HotelPackageAPI";
import makeToast from "../components/toast";
import { useNavigate } from "react-router-dom";

import Joi from "joi";

const HotelPackageContext = createContext();

export function HotelPackageProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false);
	const [hotelPackages, setHotelPackages] = useState([]);
	// Hotel packages for the current hotel owner
	const [hotelPackagesByHotelOwnerID, setHotelPackagesByHotelOwnerID] = useState([]);

	const navigate = useNavigate();

	// Hotel Package
	const [hotelPackage, setHotelPackage] = useState({
		id: "",
		name: "",
		location: "",
		condition: "",
		beds: 0,
		room_no: "",
		cost: 0,
		description: "",
		images: [],
		hotel_owner_id: "",
	});

	useEffect(() => {
		setIsLoading(true);
		HotelPackageAPI.getHotelPackages().then((response) => {
			setHotelPackages(response.data);
			setIsLoading(false);
		});
		HotelPackageAPI.getHotelPackageByHotelOwnerId(localStorage.getItem("uID")).then((response) => {
			setHotelPackagesByHotelOwnerID(response.data);
			setIsLoading(false);
		});
	}, []);

	// Add Hotel Package validation schema
	const AddHotelPackageFormSchema = Joi.object({
		name: Joi.string().required().min(3).max(50).label("Name"),
		location: Joi.string().required().min(3).max(50).label("Location"),
		condition: Joi.string().required().label("Condition"),
		beds: Joi.number().required().min(1).max(10).label("Beds"),
		room_no: Joi.string().required().max(50).label("Room Number"),
		cost: Joi.number().required().min(1).max(100000).label("Cost"),
		description: Joi.string().required().min(3).max(500).label("Description"),
		images: Joi.array().required().min(1).label("Images"),
		hotel_owner_id: Joi.string().required().min(3).max(50).label("Hotel Owner ID"),
	});

	// Add Hotel Package
	const addHotelPackage = async (newHotelPackage) => {
		// Validate the new hotel package
		const { validationError } = AddHotelPackageFormSchema.validate(newHotelPackage);
		if (validationError) {
			makeToast({ type: "error", message: validationError.details[0].message });
			return;
		}
		try {
			setIsLoading(true);
			const response = await HotelPackageAPI.createHotelPackage(newHotelPackage);
			setHotelPackages([...hotelPackages, response.data]);
			setIsLoading(false);
			navigate("/hotel-owner/manage-packages");
			makeToast({ type: "success", message: "Hotel Package Added Successfully" });
		} catch (addHotelPackageError) {
			// eslint-disable-next-line no-console
			console.log(addHotelPackageError);
		}
	};

	// Get Hotel Package by hotel_owner_id
	const getHotelPackageByHotelOwnerID = async (hotel_owner_id) => {
		try {
			setIsLoading(true);
			const response = await HotelPackageAPI.getHotelPackageByHotelOwnerId(hotel_owner_id);
			setHotelPackagesByHotelOwnerID(response.data);
			setIsLoading(false);
		} catch (getHotelPackageByHotelOwnerIDError) {
			// eslint-disable-next-line no-console
			console.log(getHotelPackageByHotelOwnerIDError);
		}
	};

	// Delete Hotel Package
	const deleteHotelPackage = async (id) => {
		try {
			setIsLoading(true);
			await HotelPackageAPI.deleteHotelPackage(id);
			// Update the hotelPackages state
			setHotelPackagesByHotelOwnerID(hotelPackagesByHotelOwnerID.filter((hotelPack) => hotelPack._id !== id));
			makeToast({ type: "success", message: "Hotel Package deleted successfully" });
			setIsLoading(false);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	// Update Hotel Package
	const updateHotelPackage = async (values) => {
		const hotelPackageID = values.id;
		// eslint-disable-next-line no-console
		console.log("hotelPackageID");
		setIsLoading(true);
		HotelPackageAPI.editHotelPackage(hotelPackageID, values)
			.then((response) => {
				setHotelPackagesByHotelOwnerID(
					hotelPackagesByHotelOwnerID.map((hotelPackageByID) => {
						if (hotelPackageByID._id === hotelPackageID) {
							return response.data;
						}
						return hotelPackageByID;
					})
				);
				setIsLoading(false);
				makeToast({ type: "success", message: "Hotel Package updated successfully" });
				navigate("/hotel-owner/manage-packages");
			})
			.catch((err) => {
				// eslint-disable-next-line no-console
				console.log(err);
				setIsLoading(false);
			});
	};

	// Get Hotel Package by ID
	const getHotelPackageByID = async (id) => {
		try {
			setIsLoading(true);
			const response = await HotelPackageAPI.getHotelPackageById(id);
			setHotelPackage(response.data);
			setIsLoading(false);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	// Search Hotel Package
	const searchHotelPackage = async (searchTerm) => {
		try {
			setIsLoading(true);
			const response = await HotelPackageAPI.searchHotelPackage(searchTerm);
			setHotelPackages(response.data);
			setIsLoading(false);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	return (
		<HotelPackageContext.Provider
			value={{
				isLoading,
				hotelPackages,
				addHotelPackage,
				hotelPackage,
				getHotelPackageByHotelOwnerID,
				deleteHotelPackage,
				hotelPackagesByHotelOwnerID,
				setHotelPackagesByHotelOwnerID,
				updateHotelPackage,
				getHotelPackageByID,
				searchHotelPackage,
			}}
		>
			{children}
		</HotelPackageContext.Provider>
	);
}

export default HotelPackageContext;
