import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

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
}

export default VehicleTourAPI;
