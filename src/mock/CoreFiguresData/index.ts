import { http, HttpResponse } from "msw";
import CoreFiguresData from "./CoreFiguresData.json";

export const coreFiguresDataHandler = http.get("/api/core-figures", () =>
	HttpResponse.json(CoreFiguresData)
);
