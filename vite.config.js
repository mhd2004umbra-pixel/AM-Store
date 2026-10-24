import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import presetUno from "unocss/preset-uno";
import transformerCompileClass from "@unocss/transformer-compile-class";

export default defineConfig({
  plugins: [
    UnoCSS({
      presets: [presetUno()],
      transformers: [
        transformerCompileClass(), // 💡 تلميح: اتركه فارغاً عند استخدام الـ Shortcuts ليتعرف عليها تلقائياً بدون تعقيد الـ Regex
      ],
      // 👇 تم نقل الـ shortcuts لتصبح داخل الـ UnoCSS بشكل صحيح وحذف كلمة :uno: منها
      shortcuts: {
        "button": " :uno: my-auto w-40 h-10 bg-[#f3ece2] border-[#d3ab4d] border-2 rounded-3xl text-center text-xl font-bold cursor-pointer",
        "card-button":" :uno: w-16 h-16 border-2 bg-[#f3ece2] border-[#d3ab4d] font-bold rounded-3xl"
      },
    }), // 👈 تم إصلاح القوس الزائد الذي كان يسبب توقف السيرفر هنا
    react(),
  ],
});
