import { http, HttpResponse } from "msw";
import AboutData from "./AboutData.json";

export const aboutDataHandler = http.get("about", () =>
	HttpResponse.json(AboutData)
);
