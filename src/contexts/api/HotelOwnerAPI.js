import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class HotelOwnerAPI {
	// Hotel Owner Login
	static login(values) {
		return axios.post(`${BASE_URL}/hotel-owner/login`, values, requestConfigJson);
	}

	// Hotel Owner Register
	static register(values) {
		return axios.post(`${BASE_URL}/hotel-owner/register`, values, requestConfigJson);
	}

	// Get Hotel Owner Details
	static getHotelOwnerDetails(uid) {
		return axios.get(`${BASE_URL}/hotel-owner/${uid}`, requestConfig);
	}

	// Update Hotel Owner Details
	static updateProfile(uid, values) {
		return axios.put(`${BASE_URL}/hotel-owner-edit/${uid}`, values, requestConfigJson);
	}
}

export default HotelOwnerAPI;
