import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VehiclePackageAPI from "./api/VehiclePackageApi";

const CampingPackageContext = createContext();

export function VehiclePackageProvider({ children }) {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [vehiclePackages, setVehiclePackages] = useState([]);

	// Camping Package
	const [vehiclePackage, setVehiclePackage] = useState({
		ownerId: "id",
		Packagename: "",
		persons: "",
		vehicle: "",
		duration: "",
		price: "",
		description: "",
	});

	useEffect(() => {
		setIsLoading(true);
		VehiclePackageAPI.getVehiclePackages().then((response) => {
			setVehiclePackages(response.data);
			setIsLoading(false);
		});
	}, []);

	// Add Hotel Package
	const addVehiclePackage = async (newVehiclePackage) => {
		console.log("Owner ID context :" + newVehiclePackage.vendorId);

		try {
			setIsLoading(true);
			const response = await VehiclePackageAPI.createVehiclePackage(newVehiclePackage);
			setCampingPackages([...vehiclePackages, response.data]);
			setIsLoading(false);
			alert("Data added successfully...");
			navigate("/vehicle-profile");
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	//get One Vehicle Package

	const getVehiclePackage = (id) => {
		useEffect(() => {
			VehiclePackageAPI.getOnePackageData(id).then((res) => {
				setVehiclePackage(res.data);
			});
		}, []);
	};

	// Edit camping Package
	const editVehiclePackage = (values) => {
		const newVehiclePackage = {
			Packagename: values.packageName,
			persons: values.persons,
			vehicle: values.vehicle,
			duration: values.duration,
			price: values.price,
			description: values.description,
		};
		VehiclePackageAPI.editVehiclePackage(values.id, newVehiclePackage)
			.then((response) => {
				//console.log(res.data);
				//navigate("/viewres");
				// eslint-disable-next-line no-console
				console.log("updated successfully...");
				navigate("/vehicle-profile");
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
		VehiclePackageAPI.deleteVehiclePackage(id).then(() => {
			setVehiclePackages(vehiclePackages.filter((vehiclePackages) => vehiclePackages._id !== id));
		});
	};

	return (
		<CampingPackageContext.Provider
			value={{
				isLoading,
				vehiclePackages,
				addVehiclePackage,
				getVehiclePackage,
				editVehiclePackage,
				deleteVehiclePackage,
				setVehiclePackage,
				vehiclePackage,
			}}
		>
			{children}
		</CampingPackageContext.Provider>
	);
}

export default CampingPackageContext;
