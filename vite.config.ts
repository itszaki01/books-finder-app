import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import autoprefixer from "autoprefixer";

export default defineConfig({
    plugins: [react()],
    base:'/books-finder/',
    css: {
        postcss: {
            plugins: [
                autoprefixer({}), // add options if needed
            ],
        },
    },
});
