import { createContext, useState } from "react";
import CustomerAPI from "./api/CustomerAPI";
import { useEffect } from "react";
import makeToast from "../components/toast/index";

const CustomerContext = createContext();
