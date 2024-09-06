import { HttpResponse, http } from "msw";
import LangData from "./LangData.json";

export const langDataHandler = http.get("/api/lang", () =>
	HttpResponse.json(LangData)
);
