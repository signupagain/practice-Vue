import axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const instance = axios.create({
	baseURL: "/api",
	timeout: 5000,
});

export const request = setupCache(instance);
