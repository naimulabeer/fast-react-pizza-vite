import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header
      className="border-b border-slate-200 bg-gradient-to-r from-[#2a9d8f] to-[#5fc0b5] uppercase py-2 px-4 text-xs 
    lg:text-base flex justify-between items-center"
    >
      <Link
        to="/"
        className="md:tracking-widest flex items-center gap-2 font-extrabold"
      >
        <img src="./wanderer.png" alt="" className="w-8" />
        Wanderers Pizza
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
