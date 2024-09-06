import { aboutDataHandler } from "./AboutData";
import { clientDataHandler } from "./ClientData";
import { langDataHandler } from "./LangData";
import { navigationDataHandler } from "./NavigationData";
import { coreFiguresDataHandler } from "./CoreFiguresData";
import { serviceDataHandler } from "./ServiceData";

export const handlers = [
	clientDataHandler,
	navigationDataHandler,
	langDataHandler,
	aboutDataHandler,
	coreFiguresDataHandler,
	serviceDataHandler,
];
