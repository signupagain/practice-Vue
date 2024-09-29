import i18next, { type InitOptions } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resources from "./@types/resources";
import type { App } from "vue";
import I18NextVue from "i18next-vue";

const i18nOption: InitOptions = {
	debug: import.meta.env.MODE === "development",
	lng: import.meta.env.VITE_DEFAULT_LOCALE ?? "zh-Hant-TW",
	fallbackLng: "zh-Hant-TW",
	defaultNS: "common",
	resources: {
		"zh-Hant-TW": resources,
	},
};

i18next.use(LanguageDetector).init(i18nOption);

export function i18n(app: App<Element>) {
	app.use(I18NextVue, { i18next });
	return app;
}
