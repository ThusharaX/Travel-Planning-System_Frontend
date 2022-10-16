import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class HotelPackageAPI {
	// Get all hotel packages
	static getHotelPackages() {
		return axios.get(`${BASE_URL}/hotel-package/`, requestConfig);
	}

	// Add a new hotel package
	static createHotelPackage(newHotelPackage) {
		return axios.post(`${BASE_URL}/hotel-package/`, newHotelPackage, requestConfigJson);
	}

	// Get hotel packages by hotel_owner_id
	static getHotelPackageByHotelOwnerId(hotel_owner_id) {
		return axios.get(`${BASE_URL}/hotel-packages/hotel-owner/${hotel_owner_id}`, requestConfig);
	}

	// Delete a hotel package
	static deleteHotelPackage(hotel_package_id) {
		return axios.delete(`${BASE_URL}/hotel-package/${hotel_package_id}`, requestConfig);
	}

	// Edit a hotel package
	static editHotelPackage(hotel_package_id, updatedHotelPackage) {
		return axios.put(`${BASE_URL}/hotel-package/${hotel_package_id}`, updatedHotelPackage, requestConfigJson);
	}

	// Get a hotel package by id
	static getHotelPackageById(hotel_package_id) {
		return axios.get(`${BASE_URL}/hotel-package/${hotel_package_id}`, requestConfig);
	}
}

export default HotelPackageAPI;
