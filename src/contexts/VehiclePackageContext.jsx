import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VehiclePackageAPI from "./api/VehiclePackageAPI";

const VehiclePackageContext = createContext();

export function VehiclePackageProvider({ children }) {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [vehiclePackages, setVehiclePackages] = useState([]);

	// Camping Package
	const [vehiclePackage, setVehiclePackage] = useState({
		ownerId: "id",
		packageName: "",
		persons: "",
		vehicle: "",
		durantion: "",
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
		console.log("Owner ID context :" + newVehiclePackage.ownerId);

		try {
			setIsLoading(true);
			const response = await VehiclePackageAPI.createVehiclePacakge(newVehiclePackage);
			setVehiclePackages([...vehiclePackages, response.data]);
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
			VehiclePackageAPI.getOneVehiclePackage(id).then((res) => {
				setVehiclePackage(res.data);
			});
		}, []);
	};

	// Edit camping Package
	const editVehiclePackage = (values) => {
		const newVehiclePackage = {
			packageName: values.packageName,
			persons: values.persons,
			vehicle: values.vehicle,
			durantion: values.durantion,
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
		<VehiclePackageContext.Provider
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
		</VehiclePackageContext.Provider>
	);
}

export default VehiclePackageContext;
