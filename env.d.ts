/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_DEFAULT_LOCALE: string;
	readonly VITE_COMPANY_NAME: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
