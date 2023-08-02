import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-gradient-to-r from-[#03071e] to-[#343a40] text-stone-200">
      <p>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
