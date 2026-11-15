import Search from "./search";
export default function Header() {
  return (
    <div className=" :uno: bg-black w-full flex flex-col items-center h-40vh text-[#d3ab4d] text-3xl text-center">
      <img
        className=" :uno: h-[40%] no-copy no-drag"
        src="/src/assets/logo.webp"
        alt="Alternative Medizin logo"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
      <header className=" :uno: pointer-none select-none">
        Alternative Medizin
      </header>
      <p className=" :uno: text-[#edcc70] text-xl pointer-none select-none">
        Little acts of love for yourself
      </p>
      <Search />
    </div>
  );
}
