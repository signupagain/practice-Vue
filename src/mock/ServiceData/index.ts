import { http, HttpResponse } from "msw";
import ServiceData from "./ServiceData.json";

export const serviceDataHandler = http.get("/api/service", () =>
	HttpResponse.json(ServiceData)
);
