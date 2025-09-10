import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "03-react-movies";

const isVercel = !!process.env.VERCEL;

export default defineConfig({
  plugins: [react()],
  base: isVercel ? "/" : `/${repoName}/`,
});
