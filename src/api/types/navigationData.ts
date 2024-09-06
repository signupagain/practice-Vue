export type NavigationData = Theme[];

export interface Theme {
	id: string;
	value: string;
	name: string;
	children: Children[];
}

export interface Children {
	id: string;
	value: string;
	name: string;
}
