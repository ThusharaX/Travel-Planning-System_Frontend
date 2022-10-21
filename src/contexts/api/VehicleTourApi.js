import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class VehicleTourAPI {
	// Get all vehicles
	static getVehicles() {
		return axios.get(`${BASE_URL}/vehicle/`, requestConfig);
	}

	// Add a new vehicles
	static createVehicle(newVehicle) {
		return axios.post(`${BASE_URL}/vehicle/`, newVehicle, requestConfigJson);
	}

	//Get one Vehicle Package

	static getOneVehiclePackage(id) {
		return axios.get(`${BASE_URL}/vehicle/${id}`, requestConfigJson);
	}

	//Edit Vehicle Package

	static editVehiclePackage(id, newVehiclePackage) {
		return axios.put(`${BASE_URL}/vehicle/${id}`, newVehiclePackage, requestConfigJson);
	}

	//Delete Vehicle Package

	static deleteVehiclePackage(id) {
		return axios.delete(`${BASE_URL}/vehicle/${id}`, requestConfig);
	}
}

export default VehicleTourAPI;
