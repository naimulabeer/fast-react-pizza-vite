import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header
      className="border-b border-slate-200 bg-gradient-to-r from-[#2a9d8f] to-[#5fc0b5] uppercase py-2 px-4 
     flex justify-between items-center"
    >
      <Link
        to="/"
        className="md:tracking-widest flex items-center gap-3 font-extrabold"
      >
        <img src="./wanderer.png" alt="" className="w-10" />
        <span className="sm:text-base text-xs font-rail hover:text-slate-800">
          Wanderer's Pizza 🍕
        </span>
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
