import { IoMdHeartEmpty } from "react-icons/io";
import { GoInfo } from "react-icons/go";
import { TfiShoppingCart } from "react-icons/tfi";
export default function ProductCard({ Products }) {
  return (
    <div className=" :uno: smart-card bg-[#F9F6F0]">
      <img
        src={Products.image}
        alt={Products.name}
        className=" :uno: h-[50%] object-contain"
      />

      <hr className=" :uno: w-full border border-black" />

      <div className=" :uno: w-full flex flex-row justify-evenly">
        <GoInfo className=" :uno: card-button hover:bg-[#f3d78c] hover:color-black hover:border-black" />
        <IoMdHeartEmpty className=" :uno: card-button hover:bg-[#f3d78c] hover:border-red-6 hover:color-red-6" />
        <TfiShoppingCart className=" :uno: card-button  hover:bg-[#f3d78c] hover:color-black hover:border-black" />
      </div>

      {/* اسم المنتج مع ميزة اقتطاع النص الطويل */}
      <h1 className=" :uno: text-center font-semibold lg:text-2xl">
        {Products.name}
      </h1>

      <span className=" :uno: text-center font-semibold">
        price: {Products.price}
      </span>
    </div>
  );
}
