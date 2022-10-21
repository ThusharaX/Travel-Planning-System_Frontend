import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class CampingPackageAPI {
	// Get all camping packages
	static getCampingPackages() {
		return axios.get(`${BASE_URL}/camping-package/`, requestConfig);
	}

	// Add a new hotel package
	static createCampingPackage(newCampingPackage) {
		return axios.post(`${BASE_URL}/camping-package/`, newCampingPackage, requestConfigJson);
	}

	//Get one Camping Package

	static getOnePackageData(id) {
		return axios.get(`${BASE_URL}/camping-Package/${id}`, requestConfigJson);
	}

	//Edit Camping Package

	static editCampingPackage(id, newCampingPackage) {
		return axios.put(`${BASE_URL}/camping-package/${id}`, newCampingPackage, requestConfigJson);
	}

	//Delete Camping Package

	static deleteCampingPackage(id) {
		return axios.delete(`${BASE_URL}/camping-package/${id}`, requestConfig);
	}
}

export default CampingPackageAPI;
