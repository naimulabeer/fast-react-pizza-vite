import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="bg-green-500">
      <Link to="/">Wanderer's Pizza</Link>

      <SearchOrder />

      <p>Abeer</p>
    </header>
  );
}

export default Header;
