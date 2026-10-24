export default function Search() {
  return (
    <div className=" :uno: relative w-87.5 mx-auto my-8">
      <input
        className=" :uno: pl-10 pr-10 w-full h-10 border-2 border-[#d3ab4d] bg-white text-black  rounded-3xl text-center box-border bg-no-repeat right-3 font-bold text-2xl object-contain bg-right outline-none"
        type="text"
        placeholder="find your order :"
      />
      <img
        src="./search-icon.svg"
        className=" :uno: absolute right-3.5 top-11 -translate-y-1/2 w-7.5 h-7.5 pointer-events-none opacity-50"
      ></img>
    </div>
  );
}
