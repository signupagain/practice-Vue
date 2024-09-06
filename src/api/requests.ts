import { request } from ".";
import type { AboutData } from "./types/aboutData";
import type { ClientData } from "./types/clientData";
import type { LangsData } from "./types/langData";
import type { NavigationData } from "./types/navigationData";

export const clientDataRequest = () => request<ClientData>({ url: "/client" });

export const navigationDataRequest = () =>
	request<NavigationData>({ url: "/navigation" });

export const langDataRequest = () => request<LangsData>({ url: "/lang" });

export const aboutDataRequest = () => request<AboutData>({ url: "/about" });
