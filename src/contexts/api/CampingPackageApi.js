import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

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
}

export default CampingPackageAPI;
