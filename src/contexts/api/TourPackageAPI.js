import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class TourPackageAPI {
	//Get all tour packges
	static getTourPackages() {
		return axios.get(`${BASE_URL}/tour-package/`, requestConfig);
	}
}

export default TourPackageAPI;
