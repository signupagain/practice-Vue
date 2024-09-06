import { aboutDataHandler } from "./AboutData";
import { clientDataHandler } from "./ClientData";
import { langDataHandler } from "./LangData";
import { navigationDataHandler } from "./NavigationData";
import { coreFiguresDataHandler } from "./CoreFiguresData";

export const handlers = [
	clientDataHandler,
	navigationDataHandler,
	langDataHandler,
	aboutDataHandler,
	coreFiguresDataHandler,
];
