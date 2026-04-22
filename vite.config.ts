// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.

import fs from "fs";

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
	vite: {
		server: {
			allowedHosts: [".ngrok-free.app"],
			https: fs.existsSync("localhost-key.pem") && fs.existsSync("localhost-cert.pem")
				? {
						key: fs.readFileSync("localhost-key.pem"),
						cert: fs.readFileSync("localhost-cert.pem")
					}
				: false
		}
	}
});
