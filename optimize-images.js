import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "./raw-images";
const outputDir = "./src/images";

// التأكد من وجود المجلدات بدون أخطاء
if (!fs.existsSync(inputDir)) {
  fs.mkdirSync(inputDir, { recursive: true });
  console.log(
    "📁 تم إنشاء مجلد raw-images. ضع صورك بداخله ثم شغل الأمر مجدداً.",
  );
} else {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.readdir(inputDir, (err, files) => {
    if (err) {
      console.error("❌ خطأ في قراءة المجلد:", err);
      return;
    }

    const validFiles = files.filter((file) =>
      /\.(jpe?g|png|webp)$/i.test(file),
    );

    if (validFiles.length === 0) {
      console.log("⚠️ مجلد raw-images فارغ أو لا يحتوي على صور مدعومة.");
      return;
    }

    validFiles.forEach((file) => {
      const inputPath = path.join(inputDir, file);
      const outputFileName = path.parse(file).name + ".webp";
      const outputPath = path.join(outputDir, outputFileName);

      sharp(inputPath)
        .resize({ width: 1000, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath)
        .then(() =>
          console.log(`✅ تمت معالجة وتحويل: ${file} ➔ ${outputFileName}`),
        )
        .catch((error) => console.error(`❌ خطأ في صورة ${file}:`, error));
    });
  });
}
