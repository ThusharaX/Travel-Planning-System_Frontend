import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class VehiclePackageAPI {
	//Get all vehicle packges
	static getVehiclePackages() {
		return axios.get(`${BASE_URL}/vehicle-package/`, requestConfig);
	}
	// Create Vehicle Package
	static createVehiclePacakge(newVehiclePackage) {
		return axios.post(`${BASE_URL}/vehicle-package/`, newVehiclePackage, requestConfigJson);
	}
	// Edit vehicle Package
	static editVehiclePackage(id, newVehiclePackage) {
		return axios.put(`${BASE_URL}/vehicle-package/${id}`, newVehiclePackage, requestConfigJson);
	}
	// Get one vehicle Package
	static getOneVehiclePackage(id) {
		return axios.get(`${BASE_URL}/vehicle-package/${id}`, requestConfigJson);
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

export default VehiclePackageAPI;
