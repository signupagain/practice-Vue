import { http, HttpResponse } from "msw";
import success from "./success.json";

export const formResponse = http.post("/api/contact-us", () =>
	HttpResponse.json(success)
);
