import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import dotenv from 'dotenv';
dotenv.config();

// @ts-ignore
const port =  parseInt(process.env.VITE_PORT, 10) || 3001;

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: port,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.join(__dirname, "src/components"),
      "@constants": path.join(__dirname, "src/constants"),
      "@context": path.join(__dirname, "src/context"),
      "@graphql": path.join(__dirname, "src/graphql"),
      "@layouts": path.join(__dirname, "src/layouts"),
      "@modules": path.join(__dirname, "src/modules"),
      "@pages": path.join(__dirname, "src/pages"),
      "@styles": path.join(__dirname, "src/styles"),
      "@theme": path.join(__dirname, "src/theme"),
      "@stories": path.join(__dirname, "src/stories"),
      "@reducers": path.join(__dirname, "src/reducers"),
    },
  },
});
