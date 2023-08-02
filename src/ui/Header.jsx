import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Wanderer's Pizza</Link>

      <p>Abeer</p>

      <SearchOrder />
    </header>
  );
}

export default Header;
