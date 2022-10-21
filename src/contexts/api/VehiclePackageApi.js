import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class TourPackageAPI {
	//Get all vehicle packges
	static getVehiclePackages() {
		return axios.get(`${BASE_URL}/vehicle-package/`, requestConfig);
	}
	// Create Vehicle Package
	static createVehiclePacakge(newTourPackage) {
		return axios.post(`${BASE_URL}/vehicle-package/`, newTourPackage, requestConfigJson);
	}
	// Edit vehicle Package
	static editVehiclePackage(id, newTourPackage) {
		return axios.put(`${BASE_URL}/vehicle-package/${id}`, newTourPackage, requestConfigJson);
	}
	// Get one vehicle Package
	static getOneVehiclePackage(id) {
		return axios.get(`${BASE_URL}/vehicle-package/${id}`, requestConfig);
	}
	// Delete vehicle Package
	static deleteVehiclePackage(id) {
		return axios.delete(`${BASE_URL}/vehicle-package/${id}`, requestConfig);
	}
	// Search Tour Package
	static searchVehiclePackage(search) {
		return axios.get(`${BASE_URL}/vehicle-package/searcch/${search}`, requestConfig);
	}
}

export default TourPackageAPI;
