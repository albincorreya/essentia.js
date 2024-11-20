import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
    base: "/demos/mood-classifiers/dist/",
    server: {
        https: true,
        headers: {
            "cross-origin-embedder-policy": "require-corp",
            "cross-origin-opener-policy": "same-origin"
        }
    },
    plugins: [
        basicSsl()
    ]
})