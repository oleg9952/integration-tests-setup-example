import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupIntegrationTests.ts",
    include: ["src/**/*.integration.test.{ts,tsx}"],
  },
});
