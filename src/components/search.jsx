export default function Search() {
  return (
    <div className=" :uno: relative mx-[40%] my-auto">
      <input
        className=" :uno: w-full h-[40%] border-2 border-[#d3ab4d] bg-[#FDFBF7] rounded-3xl text-center bg-no-repeat object-contain bg-right"
        type="text"
        placeholder="find your order :"
      />
      <img
        src="./search-icon.svg"
        className=" :uno: w-5 h-5 pointer-events-none opacity-50 object-contain"
      ></img>
    </div>
  );
}
