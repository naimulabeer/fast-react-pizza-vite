import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div
      className="bg-gradient-to-r from-[#03071e] to-[#343a40] p-4 text-stone-200 
    text-sm md:text-base flex justify-between"
    >
      <p className="space-x-4 font-semibold">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
