import { http, HttpResponse } from "msw";
import NavigationData from "./NavigationData.json";

export const navigationDataHandler = http.get("/api/navigation", () =>
	HttpResponse.json(NavigationData)
);
