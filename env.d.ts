/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_WEB_TITLE: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
