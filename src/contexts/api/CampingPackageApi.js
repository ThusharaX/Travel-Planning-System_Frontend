import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class CampingPackageAPI {
	// Get all camping packages
	static getCampingPackages() {
		return axios.get(`${BASE_URL}/camping-package/`, requestConfig);
	}
}

export default CampingPackageAPI;
