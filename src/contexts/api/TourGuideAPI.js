import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class TourGuideAPI {
	// Tour Guide Login
	static tourGuideLogin(values) {
		return axios.post(`${BASE_URL}/tour-package/login`, values, requestConfigJson);
	}

	static tourGuideRegister(values) {
		return axios.post(`${BASE_URL}/tour-package/register`, values, requestConfigJson);
	}
}

export default TourGuideAPI;
