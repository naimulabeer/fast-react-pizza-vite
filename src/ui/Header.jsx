import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="bg-green-500 uppercase">
      <Link to="/" className="tracking-widest">
        Wanderer's Pizza
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
