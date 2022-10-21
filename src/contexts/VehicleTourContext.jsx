import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VehicleTourAPI from "./api/VehicleTourApi";

const VehicleTourContext = createContext();

export function VehicleTourProvider({ children }) {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [vehicleTours, setVehicleTours] = useState([]);

	// Hotel Package
	const [vehicleTour, setVehicleTour] = useState({
		ownerId: " ",
		vehicleType: "",
		regNo: "",
		ownersName: "",
		year: "",
		description: "",
		images: [],
	});

	useEffect(() => {
		setIsLoading(true);
		VehicleTourAPI.getVehicles().then((response) => {
			setVehicleTours(response.data);
			setIsLoading(false);
		});
	}, []);

	// Add Hotel Package
	const addVehicle = async (newVehicleTour) => {
		// eslint-disable-next-line no-console
		console.log("Owner ID context :" + newVehicleTour.ownerId);

		try {
			setIsLoading(true);
			const response = await VehicleTourAPI.createVehicle(newVehicleTour);
			setVehicleTours([...vehicleTours, response.data]);
			alert("Vehicle Added Successful...!!!");
			setIsLoading(false);
			window.location.href = "/vehicle-profile";
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	//get One Camping Package

	const getVehiclePackage = (id) => {
		useEffect(() => {
			VehicleTourAPI.getOneVehiclePackage(id).then((res) => {
				setVehicleTour(res.data);
			});
		}, []);
	};

	// Edit camping Package
	const editVehiclePackage = (values) => {
		const newVehiclePackage = {
			vehicleType: values.vehicleType,
			regNo: values.regNo,
			ownersName: values.ownersName,
			year: values.year,
			description: values.description,
		};
		VehicleTourAPI.editVehiclePackage(values.id, newVehiclePackage)
			.then((response) => {
				//console.log(res.data);
				//navigate("/viewres");
				// eslint-disable-next-line no-console
				console.log("updated successfully...");
				navigate("/vehicle");
			})
			.catch((err) => {
				// eslint-disable-next-line no-console
				console.log(err);
			});

		/*setCampingPackages(
				campingPackage.map((campingPackage) => (campingPackage._id === values.id ? response.data : campingPackage))
			);
			form.reset();*/
		//});
	};

	// Delete trainer and update UI
	const deleteVehiclePackage = (id) => {
		VehicleTourAPI.deleteVehiclePackage(id).then(() => {
			setVehicleTours(vehicleTours.filter((vehicleTours) => vehicleTours._id !== id));
		});
	};

	return (
		<VehicleTourContext.Provider
			value={{
				isLoading,
				vehicleTours,
				addVehicle,
				getVehiclePackage,
				editVehiclePackage,
				deleteVehiclePackage,
				setVehicleTour,
				vehicleTour,
			}}
		>
			{children}
		</VehicleTourContext.Provider>
	);
}

export default VehicleTourContext;
