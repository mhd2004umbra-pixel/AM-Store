import Search from "./search";
export default function Header() {
  return (
    <div className=" :uno: bg-black w-full flex flex-col items-center h-100 text-[#d3ab4d] text-6xl">
      <img
        className=" :uno: max-h-50 no-copy no-drag"
        src="/images/logo.webp"
        alt="Alternative Medizin logo"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
      <header className=" :uno: pointer-none select-none">
        Alternative Medizin
      </header>
      <p className=" :uno: text-[#edcc70] text-3xl pointer-none select-none">
        Little acts of love for yourself
      </p>
      <Search />
    </div>
  );
}
