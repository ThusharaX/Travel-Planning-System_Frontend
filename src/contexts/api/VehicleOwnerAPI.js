import axios from "axios";
import requestConfigJson from "./requestConfigJson";
import requestConfig from "./requestConfig";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class VehicleOwnerAPI {
	// Vehicle Owner Login
	static vehicleOwnerLogin(values) {
		return axios.post(`${BASE_URL}/vehicle-owner/login/`, values, requestConfigJson);
	}

	static vehicleOwnerRegister(values) {
		return axios.post(`${BASE_URL}/vehicle-owner/register/`, values, requestConfigJson);
	}
	static getOneVehicleOwner(id) {
		return axios.get(`${BASE_URL}/vehicle-owner/${id}`, requestConfigJson);
	}
	static getAllVehicleOwners() {
		return axios.get(`${BASE_URL}/vehicle-owner/`, requestConfig);
	}
	static editVehicleOwner(id, newVehicleOwner) {
		return axios.put(`${BASE_URL}/vehicle-owner/${id}`, newVehicleOwner, requestConfigJson);
	}
	static deleteVehicleOwner(id) {
		return axios.delete(`${BASE_URL}/vehicle-owner/${id}`, requestConfig);
	}
	static searchVehicleOwner(search) {
		return axios.get(`${BASE_URL}/vehicle/owner/search/${search}`, requestConfig);
	}
}

export default VehicleOwnerAPI;
