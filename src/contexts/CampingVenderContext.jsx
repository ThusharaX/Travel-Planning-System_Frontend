import { createContext, useState, useEffect } from "react";
import CampingVendorAPI from "./api/CampingVendorAPI";
import { useNavigate } from "react-router-dom";

const CampingVenderContext = createContext();

export function CampingVenderProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [campingVenders, setCampingVenders] = useState([]);
	const [fileName, setFileName] = useState("");
	const [mailError, setMailError] = useState("");
	const [nicError, setNicError] = useState("");

	const navigate = useNavigate();
	// Camping Package

	useEffect(() => {
		setIsLoading(true);
		CampingVendorAPI.getCampingVendors().then((response) => {
			setCampingVenders(response.data);
			setIsLoading(false);
		});
	}, []);

	const [campingVender, setCampingVender] = useState({
		companyOwnerName: "",
		email: "",
		nic: "",
		contactNumber: "",
		companyName: "",
		companyAddress: "",
		companyPhone: "",
		companyRegisterNumber: "",
		profilePicture: "",
		password: "",
	});

	// Add Camping Vendor
	const CampingVendorRegister = async (values) => {
		CampingVendorAPI.campingVendorRegister(values)
			.then((response) => {
				setCampingVenders([...campingVenders, response.data]);
				alert("Camping Vendor Registration Successful...!!!");
				window.location.href = "/camping-vendor-login";
				campingVenders.reset();
			})
			.catch((err) => {
				console.log(err.response.data);
				if (err.response.data.details == "Email already exists") {
					setMailError(err.response.data.details);
					alert("Email already exist");
				}
				if (err.response.data.details == "NIC already exists") {
					setNicError(err.response.data.details);
					alert("NIC already exists");
				}
			});
	};

	const CampingVendorLogin = (values) => {
		setIsLoading(true);
		CampingVendorAPI.campingVendorLogin(values)
			.then((response) => {
				if (response.data.permissionLevel !== "CAMPING_VENDOR") {
					setIsLoading(false);
					return alert("You are not a Camping Vendor");
				} else {
					localStorage.setItem("uID", response.data._id);
					localStorage.setItem("username", response.data.companyOwnerName);
					localStorage.setItem("Email", response.data.email);
					localStorage.setItem("authToken", response.data.token);
					localStorage.setItem("permissionLevel", response.data.permissionLevel);
					alert("Logged In Successful...!!!");
					window.location.href = "/camping-vendor-dashboard";
					setIsLoggedIn(true);
					setIsLoggedIn(false);
				}
			})
			.catch((err) => {
				setIsLoading(false);
				return alert(err.response.data.details.message);
			});
	};

	//get One Camping Package

	const getCampingVendor = (id) => {
		useEffect(() => {
			CampingVendorAPI.getOneVendorData(id).then((res) => {
				setCampingVender(res.data);
			});
		}, []);
	};

	// Edit camping Package
	const editCampingVendor = (values) => {
		const newCampingOwner = {
			companyOwnerName: values.companyOwnerName,
			email: values.email,
			nic: values.packageName,
			contactNumber: values.contactNumber,
			companyName: values.companyName,
			companyAddress: values.companyAddress,
			companyPhone: values.companyPhone,
			companyRegisterNumber: values.companyRegisterNumber,
		};
		CampingVendorAPI.editCampingVendor(values.id, newCampingOwner)
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

		/*setCampingPackages(
				campingPackage.map((campingPackage) => (campingPackage._id === values.id ? response.data : campingPackage))
			);
			form.reset();*/
		//});
	};

	// Delete trainer and update UI
	const deleteCampingVendor = (id) => {
		CampingVendorAPI.deleteCampingVendor(id).then(() => {
			setCampingVenders(campingVenders.filter((campingVenders) => campingVenders._id !== id));
		});
	};

	return (
		<CampingVenderContext.Provider
			value={{
				isLoading,
				campingVenders,
				CampingVendorRegister,
				CampingVendorLogin,
				editCampingVendor,
				deleteCampingVendor,
				getCampingVendor,
				setCampingVender,
				setFileName,
				fileName,
				campingVender,
			}}
		>
			{children}
		</CampingVenderContext.Provider>
	);
}

export default CampingVenderContext;
