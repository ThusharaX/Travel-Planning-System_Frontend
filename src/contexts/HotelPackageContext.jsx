import { createContext, useState, useEffect } from "react";
import HotelPackageAPI from "./api/HotelPackageAPI";
import makeToast from "../components/toast";
import { useNavigate } from "react-router-dom";

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

	// Add Hotel Package
	const addHotelPackage = async (newHotelPackage) => {
		try {
			setIsLoading(true);
			const response = await HotelPackageAPI.createHotelPackage(newHotelPackage);
			setHotelPackages([...hotelPackages, response.data]);
			setIsLoading(false);
			makeToast({ type: "success", message: "Hotel Package Added Successfully" });
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	// Get Hotel Package by hotel_owner_id
	const getHotelPackageByHotelOwnerID = async (hotel_owner_id) => {
		try {
			setIsLoading(true);
			const response = await HotelPackageAPI.getHotelPackageByHotelOwnerId(hotel_owner_id);
			setHotelPackagesByHotelOwnerID(response.data);
			setIsLoading(false);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	// Delete Hotel Package
	const deleteHotelPackage = async (id) => {
		try {
			setIsLoading(true);
			await HotelPackageAPI.deleteHotelPackage(id);
			// Update the hotelPackages state
			setHotelPackagesByHotelOwnerID(hotelPackagesByHotelOwnerID.filter((hotelPackage) => hotelPackage._id !== id));
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
					hotelPackagesByHotelOwnerID.map((hotelPackage) => {
						if (hotelPackage._id === hotelPackageID) {
							return response.data;
						}
						return hotelPackage;
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
			}}
		>
			{children}
		</HotelPackageContext.Provider>
	);
}

export default HotelPackageContext;
