export interface ClientData {
	address: string;
	telephone: string;
	fax: string;
	email: string;
	apps: App[];
}

export interface App {
	id: string;
	name: string;
	logo: string;
	path: string;
}
