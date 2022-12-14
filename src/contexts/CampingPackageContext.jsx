import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CampingPackageAPI from "./api/CampingPackageApi";

const CampingPackageContext = createContext();

export function CampingPackageProvider({ children }) {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [campingPackages, setCampingPackages] = useState([]);

	// Camping Package
	const [campingPackage, setCampingPackage] = useState({
		vendorId: "id",
		Packagename: "",
		persons: "",
		location: "",
		duration: "",
		price: "",
		packageDescription: "",
	});

	useEffect(() => {
		setIsLoading(true);
		CampingPackageAPI.getCampingPackages().then((response) => {
			setCampingPackages(response.data);
			setIsLoading(false);
		});
	}, []);

	// Add Hotel Package
	const addCampingPackage = async (newCampingPackage) => {
		// eslint-disable-next-line no-console
		console.log("Owner ID context :" + newCampingPackage.vendorId);

		try {
			setIsLoading(true);
			const response = await CampingPackageAPI.createCampingPackage(newCampingPackage);
			setCampingPackages([...campingPackages, response.data]);
			setIsLoading(false);
			alert("Data added successfully...");
			navigate("/camping-vendor-dashboard");
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	//get One Camping Package

	const getCampingPackage = (id) => {
		useEffect(() => {
			CampingPackageAPI.getOnePackageData(id).then((res) => {
				setCampingPackage(res.data);
			});
		}, []);
	};

	// Edit camping Package
	const editCampingPackage = (values) => {
		const newCampingPackage = {
			packageName: values.packageName,
			persons: values.persons,
			location: values.location,
			duration: values.duration,
			price: values.price,
			packageDescription: values.packageDescription,
		};
		CampingPackageAPI.editCampingPackage(values.id, newCampingPackage)
			.then((response) => {
				//console.log(res.data);
				//navigate("/viewres");
				// eslint-disable-next-line no-console
				console.log("updated successfully...");
				navigate("/camping-vendor-dashboard");
			})
			.catch((err) => {
				// eslint-disable-next-line no-console
				console.log(err);
			});
	};

	// Delete trainer and update UI
	const deleteCampingPackage = (id) => {
		CampingPackageAPI.deleteCampingPackage(id).then(() => {
			setCampingPackages(campingPackages.filter((campingPack) => campingPack._id !== id));
		});
	};

	return (
		<CampingPackageContext.Provider
			value={{
				isLoading,
				campingPackages,
				addCampingPackage,
				getCampingPackage,
				editCampingPackage,
				deleteCampingPackage,
				setCampingPackage,
				campingPackage,
			}}
		>
			{children}
		</CampingPackageContext.Provider>
	);
}

export default CampingPackageContext;
