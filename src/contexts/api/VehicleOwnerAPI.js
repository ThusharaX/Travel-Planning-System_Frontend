import axios from "axios";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class VehicleOwnerAPI {
	// Vehicle Owner Login
	static vehicleOwnerLogin(values) {
		return axios.post(`${BASE_URL}/vehicle-owner/login/`, values, requestConfigJson);
	}

	static vehicleOwnerRegister(values) {
		return axios.post(`${BASE_URL}/vehicle-owner/register/`, values, requestConfigJson);
	}
}

export default VehicleOwnerAPI;
