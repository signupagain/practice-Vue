import { request } from ".";

export const contactFormRequest = (data: FormData) =>
	request.post("/contact-us", data);
