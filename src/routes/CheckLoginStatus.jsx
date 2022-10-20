import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const CheckLoginStatus = () => {
	const permissionLevel = localStorage.getItem("permissionLevel");

	if (permissionLevel === "HOTEL_OWNER") {
		return <Navigate to="/hotel-owner" />;
	}
	if (permissionLevel === "TOUR_GUIDE") {
		return <Navigate to="/tour-guide" />;
	}
	if (permissionLevel === "VEHICLE_OWNER") {
		return <Navigate to="/vehicle-owner" />;
	}
	if (permissionLevel === "CUSTOMER") {
		return <Navigate to="/customer" />;
	}
	if (permissionLevel === "CAMPING_VENDOR") {
		return <Navigate to="/camping-vendor" />;
	}
	if (permissionLevel === "ADMIN") {
		return <Navigate to="/admin" />;
	} else {
		return <Outlet />;
	}

	// If the user is authenticated then redirect to the dashboard
	// Otherwise redirect to the login page
	// return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default CheckLoginStatus;
