import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "src/scrollpro.ts"),
            name: "scrollpro",
            fileName: "scrollpro",
        },
        outDir: "lib",
    },
    plugins: [
        dts({
            exclude: ["node_modules/**", "src/demo/**/*"],
        }),
    ],
});
