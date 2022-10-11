import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class TourPackageAPI {
	//Get all tour packges
	static getTourPackages() {
		return axios.get(`${BASE_URL}/tour-package/`, requestConfig);
	}

	static createTourPacakge(newTourPackage) {
		return axios.post(`${BASE_URL}/tour-package/`, newTourPackage, requestConfigJson);
	}

	static editTourPackage(id, newTourPackage) {
		return axios.put(`${BASE_URL}/tour-package/${id}`, newTourPackage, requestConfig);
	}

	static deleteTourPackage(id) {
		return axios.delete(`${BASE_URL}/tour-package/${id}`, requestConfig);
	}

	static searchTourPackage(search) {
		return axios.get(`${BASE_URL}/tour-package/searcch/${search}`, requestConfig);
	}
}

export default TourPackageAPI;
