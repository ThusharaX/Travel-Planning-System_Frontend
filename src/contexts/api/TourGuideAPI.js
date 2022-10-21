import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class TourGuideAPI {
	// Tour Guide Login
	static tourGuideLogin(values) {
		return axios.post(`${BASE_URL}/tour-guide/login/`, values, requestConfigJson);
	}
	// Tour Guide Register
	static tourGuideRegister(values) {
		return axios.post(`${BASE_URL}/tour-guide/register/`, values, requestConfigJson);
	}
	// Get one Tour Guide
	static getOneTourGuide(id) {
		return axios.get(`${BASE_URL}/tour-guide/${id}`, requestConfig);
	}
	// Get all Tour Guide
	static getTourGuides() {
		return axios.get(`${BASE_URL}/tour-guide/${id}`, requestConfig);
	}
	// Edit Tour Guide
	static editTourGuide(id, newTourPackage) {
		return axios.put(`${BASE_URL}/tour-guide/${id}`, newTourPackage, requestConfigJson);
	}
	// Delete Tour Guide
	static deleteTourGuide(id) {
		return axios.delete(`${BASE_URL}/tour-guide/${id}`, requestConfig);
	}
	// Search Tour Guide
	static searchTourGuide(search) {
		return axios.get(`${BASE_URL}/tour-guide/search/${search}`, requestConfig);
	}
}

export default TourGuideAPI;
