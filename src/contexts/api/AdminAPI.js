import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class AdminAPI {
	// Admin Login
	static login(values) {
		return axios.post(`${BASE_URL}/admin/login`, values, requestConfigJson);
	}

	// Admin Register
	static register(values) {
		return axios.post(`${BASE_URL}/admin/register`, values, requestConfigJson);
	}

	// Get Admin Details
	static getAdminDetails(uid) {
		return axios.get(`${BASE_URL}/admin/${uid}`, requestConfig);
	}

	// Update Admin Details
	static updateProfile(uid, values) {
		return axios.put(`${BASE_URL}/admin-edit/${uid}`, values, requestConfigJson);
	}

	// Get All Hotel Owners
	static getAllHotelOwners() {
		return axios.get(`${BASE_URL}/admin/hotel-owners/all`, requestConfig);
	}

	// Delete Hotel Owner
	static deleteHotelOwner(uid) {
		return axios.delete(`${BASE_URL}/hotel-owner-delete/${uid}`, requestConfig);
	}

	// Get All Tour Guides
	static getAllTourGuides() {
		return axios.get(`${BASE_URL}/tour-guide/`, requestConfig);
	}

	// Delete Tour Guide
	static deleteTourGuide(uid) {
		return axios.delete(`${BASE_URL}/tour-guide/${uid}`, requestConfig);
	}

	// Get All Camping Vendors
	static getAllCampingVendors() {
		return axios.get(`${BASE_URL}/camping-vendor/`, requestConfig);
	}

	// Delete Camping Vendor
	static deleteCampingVendor(uid) {
		return axios.delete(`${BASE_URL}/camping-vendor/${uid}`, requestConfig);
	}

	// Get All Vehicle Owners
	static getAllVehicleOwners() {
		return axios.get(`${BASE_URL}/vehicle-owner/`, requestConfig);
	}

	// Delete Vehicle Owner
	static deleteVehicleOwner(uid) {
		return axios.delete(`${BASE_URL}/vehicle-owner/${uid}`, requestConfig);
	}

	// Get All Customers
	static getAllCustomers() {
		return axios.get(`${BASE_URL}/customer/`, requestConfig);
	}

	// Delete Customer
	static deleteCustomer(uid) {
		return axios.delete(`${BASE_URL}/customer/${uid}`, requestConfig);
	}
}

export default AdminAPI;
