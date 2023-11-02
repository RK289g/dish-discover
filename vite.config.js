import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        // Add the following line to import Ant Design's CSS
        additionalData: `@import "antd/dist/antd.css";`,
      },
    },
  },
},);
