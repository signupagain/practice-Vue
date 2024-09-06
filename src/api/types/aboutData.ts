export interface AboutData {
	title: string;
	sub: string;
	crumbs: string;
	p: string;
	aboutLogo: AboutLogo;
	passion: Passion;
}

export interface AboutLogo {
	alt: string;
	src: string;
}

export interface Passion {
	alt: string;
	src: string;
}
