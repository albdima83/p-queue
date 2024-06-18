import {defineConfig} from "tsup";

export default defineConfig({
	entry: [
		"source",
	],
	clean: true,
	treeshake: true,
	format: ["esm", "cjs"],
	dts: true,
	minify: true,
	sourcemap: true,
	// splitting: false,
});
