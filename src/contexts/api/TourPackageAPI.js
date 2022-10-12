import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class TourPackageAPI {
	//Get all tour packges
	static getTourPackages() {
		return axios.get(`${BASE_URL}/tour-package/`, requestConfig);
	}
	// Create Tour Package
	static createTourPacakge(newTourPackage) {
		return axios.post(`${BASE_URL}/tour-package/`, newTourPackage, requestConfigJson);
	}
	// Edit Tour Package
	static editTourPackage(id, newTourPackage) {
		return axios.put(`${BASE_URL}/tour-package/${id}`, newTourPackage, requestConfigJson);
	}
	// Get one Tour Package
	static getOneTourPackage(id) {
		return axios.get(`${BASE_URL}/tour-package/${id}`, requestConfig);
	}
	// Delete Tour Package
	static deleteTourPackage(id) {
		return axios.delete(`${BASE_URL}/tour-package/${id}`, requestConfig);
	}
	// Search Tour Package
	static searchTourPackage(search) {
		return axios.get(`${BASE_URL}/tour-package/searcch/${search}`, requestConfig);
	}
}

export default TourPackageAPI;
