import { http, HttpResponse } from "msw";
import ClientData from "./ClientData.json";

export const clientDataHandler = http.get("/api/client", () =>
	HttpResponse.json(ClientData)
);
