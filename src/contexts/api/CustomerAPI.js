import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class CustomerAPI {
	// Customer Login
	static customerLogin(values) {
		return axios.post(`${BASE_URL}/customer/login/`, values, requestConfigJson);
	}
	// Customer Register
	static customerRegister(values) {
		return axios.post(`${BASE_URL}/customer/register/`, values, requestConfigJson);
	}
	// Get one customer
	static getOneCustomer(id) {
		return axios.get(`${BASE_URL}/customer/${id}`, requestConfig);
	}
	// Get all customer
	static getAllCustomers() {
		return axios.get(`${BASE_URL}/customer/`, requestConfig);
	}
	// Edit customer
	static editCustomer(id, newCustomer) {
		return axios.put(`${BASE_URL}/customer/${id}`, newCustomer, requestConfigJson);
	}
	// Delete Customer
	static deleteCustomer(id) {
		return axios.delete(`${BASE_URL}/customer/${id}`, requestConfig);
	}
	// Search customer
	static searchCustomer(search) {
		return axios.get(`${BASE_URL}/customer/search/${search}`, requestConfig);
	}
}
export default CustomerAPI;
