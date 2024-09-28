import { request } from ".";

export const contactFormRequest = (data: FormData) =>
	request.post<FormResponse>("/contact-us", data);
