import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class CampingVendorAPI {
	// Camping Vendor Login
	static campingVendorLogin(values) {
		return axios.post(`${BASE_URL}/camping-vendor/login/`, values, requestConfigJson);
	}
	static campingVendorRegister(values) {
		return axios.post(`${BASE_URL}/camping-vendor/register/`, values, requestConfigJson);
	}
}

export default CampingVendorAPI;
