import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	envDir: "./environments",
	plugins: [react()],
	resolve: {
		alias: {
			src: path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src"),
		},
	},
});
