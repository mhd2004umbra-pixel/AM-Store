import { Link } from "react-router-dom";
export default function Buttons() {
  return (
    <div className=" :uno: my-1 sticky bg-[#F9F6F0] grid grid-cols-5 mx-auto w-full h-8 top-0 shadow-xl">
      <Link to="/Home">
        <button className="button">home</button>
      </Link>
      <Link to="/favourite-list">
        <button className="button">favourite</button>
      </Link>
      <Link to="comparison">
        <button className="button">compare</button>
      </Link>
      <Link to="/cart-menu">
        <button className="button">cart</button>
      </Link>
      <Link to="./dashboard">
        <button className="button">settings</button>
      </Link>
    </div>
  );
}
