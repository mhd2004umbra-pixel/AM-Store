import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import transformerCompileClass from "@unocss/transformer-compile-class";
import { fileURLToPath, URL } from "node:url"; // 1. تمت إضافة هذا السطر

export default defineConfig({
  plugins: [
    {
      name: "debug-request-log",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url || "";
          const watched =
            url === "/" ||
            url.startsWith("/?") ||
            url.includes("index.html") ||
            url.includes("logo") ||
            url.includes("/images/");
          if (watched) {
            res.on("finish", () => {
              // #region agent log
              fetch(
                "http://127.0.0.1:7714/ingest/64fe45b6-dc36-4f58-9078-2d3d3e0c4264",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "X-Debug-Session-Id": "34c47a",
                  },
                  body: JSON.stringify({
                    sessionId: "34c47a",
                    runId: "post-fix",
                    hypothesisId:
                      url === "/" || url.startsWith("/?") ? "A" : "E",
                    location: "vite.config.js:configureServer",
                    message: "dev server response",
                    data: { url, status: res.statusCode },
                    timestamp: Date.now(),
                  }),
                },
              ).catch(() => {});
              // #endregion
            });
          }
          next();
        });
      },
    },
    UnoCSS({
      transformers: [transformerCompileClass()],
      shortcuts: {
        button:
          ":uno: bg-[#f3ece2] border-[#d3ab4d] border-2 rounded-2xl text-center text-lg font-bold cursor-pointer w-10 hover:bg-[#d4ab4d]",
        "card-button":
          " :uno: w-10 sm:w-10 md:w-12 lg:w-14 h-10 sm:h-10 md:h-12 lg:h-14 border-2 color-black p-1 border-[#d3ab4d] bg-[#f3ece2] font-semibold rounded-2xl cursor-pointer",
        "auto-smart-grid":
          "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10",

        "smart-card":
          "flex flex-col justify-between bg-[#f3ece2] rounded-3xl p-3 shadow-2xl h-100 sm:h-100 md:h-120 lg:h-150 border-2 border-[#d3ab4d] ",
      },
    }),
    react(),
  ],
  // 2. تمت إضافة هذا القسم لتعريف المسار المختصر
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
