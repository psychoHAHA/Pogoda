import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  base: "/",
  plugins: [react()],
  // server: { open: true, port: 5173, },
  build: {
    resolve: {
      alias: {
        main: resolve(__dirname, "index.html"),
        404: resolve(__dirname, "public/404.html"),
      },
    },
  },
})
