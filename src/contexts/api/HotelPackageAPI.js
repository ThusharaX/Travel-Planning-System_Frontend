import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class HotelPackageAPI {
	// Get all hotel packages
	static getHotelPackages() {
		return axios.get(`${BASE_URL}/hotel-package/`, requestConfig);
	}

	// Add a new hotel package
	static createHotelPackage(newHotelPackage) {
		return axios.post(`${BASE_URL}/hotel-package/`, newHotelPackage, requestConfigJson);
	}
}

export default HotelPackageAPI;
