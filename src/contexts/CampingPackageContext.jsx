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
		try {
			setIsLoading(true);
			const response = await CampingPackageAPI.createCampingPackage(newCampingPackage);
			setCampingPackages([...campingPackages, response.data]);
			setIsLoading(false);
			alert("Data added successfully...");
			navigate("/camping-package");
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
				navigate("/camping-package");
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
	const deleteCampingPackage = (id) => {
		CampingPackageAPI.deleteCampingPackage(id).then(() => {
			setCampingPackages(campingPackages.filter((campingPackages) => campingPackages._id !== id));
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
