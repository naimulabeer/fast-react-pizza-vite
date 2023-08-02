import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="border-b border-slate-200 bg-green-500 uppercase py-2 px-4">
      <Link to="/" className="tracking-widest flex items-center gap-2">
        <img src="./wanderer.png" alt="" className="w-10" />
        Wanderer's Pizza
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
