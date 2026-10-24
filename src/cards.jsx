export default function ProductCard({ Products }) {
  return (
    <div className=" :uno: flex w-75 h-150 bg-[#F9F6F0] border-2 rounded-4xl pb-5 justify-center items-center flex-col shadow-2xl">
      <img
        src={Products.image}
        alt={Products.name}
        className=" :uno: w-70 h-70 mb-5 object-contain shadow-2xl"
      ></img>
      <hr className=" :uno: w-[95%] border-2 border-zinc-500 my-5"></hr>
      <div className=" :uno: w-[80%] flex flex-row justify-around">
        <button
          onClick={() => window.open("./info.jsx")}
          className=" :uno: card-button"
        >
          info
        </button>
        <button
          onClick={() => window.open("./favourite-list.jsx")}
          className=" :uno: card-button"
        >
          fav
        </button>
        <button
          onClick={() => window.open("./cart-menu.jsx")}
          className=" :uno: card-button"
        >
          cart
        </button>
      </div>
      <h2 className=" :uno: w-[95%] mt-5 text-center text-xl font-semibold">
        {Products.name}
      </h2>
      <div className=" :uno: w-full justify-around flex flex-row mt-10">
        <h2 className=" :uno: font-bold text-lg"> stock : {Products.stock}</h2>
        <h2 className=" :uno: font-bold text-lg"> price : {Products.price}</h2>
      </div>
    </div>
  );
}
