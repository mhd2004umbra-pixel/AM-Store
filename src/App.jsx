import { useEffect } from "react"; // 💡 أضفنا هذا السطر لاستخدام الـ useEffect
import Header from "./header";
import Footer from "./footer";
import ProductCard from "./cards";
import { Products } from "./products";
import Buttons from "./buttons";

export default function App() {
  // 👇 الكود السحري لمنع تكبير وتصغير الشاشة على الكمبيوتر واللاب توب
  useEffect(() => {
    // 1. منع التكبير عند الضغط على Ctrl مع حركة عجلة الفأرة (Scroll)
    const handleWheel = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    // 2. منع التكبير عبر أزرار الكيبورد (Ctrl مع أزرار الزائد، الناقص، والـ 0)
    const handleKeyDown = (e) => {
      if (e.ctrlKey && (e.key === "+" || e.key === "-" || e.key === "=" || e.key === "0")) {
        e.preventDefault();
      }
    };

    // تسجيل الأحداث في المتصفح
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    // تنظيف الأحداث عند إغلاق المكون للحفاظ على أداء الذاكرة
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className=" :uno: flex flex-wrap flex-col bg-[#FDFBF7]">
      <Header />
      <Buttons />
      <main className=" :uno: grid grid-cols-2 m-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20">
        {Products.map((item) => (
          <ProductCard key={item.id} Products={item} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
