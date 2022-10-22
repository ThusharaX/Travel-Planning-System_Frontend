import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class CampingVendorAPI {
	// Camping Vendor Login
	static campingVendorLogin(values) {
		return axios.post(`${BASE_URL}/camping-vendor/login/`, values, requestConfigJson);
	}
	static campingVendorRegister(values) {
		return axios.post(`${BASE_URL}/camping-vendor/register/`, values, requestConfigJson);
	}

	// Get all camping packages
	static getCampingVendors() {
		return axios.get(`${BASE_URL}/camping-vendor/`, requestConfig);
	}

	//Get one Camping Package

	static getOneVendorData(id) {
		return axios.get(`${BASE_URL}/camping-vendor/${id}`, requestConfigJson);
	}

	//Edit Camping Package

	static editCampingVendor(id, newCampingVendor) {
		return axios.put(`${BASE_URL}/camping-vendor/${id}`, newCampingVendor, requestConfigJson);
	}

	//Delete Camping Package

	static deleteCampingVendor(id) {
		return axios.delete(`${BASE_URL}/camping-vendor/${id}`, requestConfig);
	}
}

export default CampingVendorAPI;
