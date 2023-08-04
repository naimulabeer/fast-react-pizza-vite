import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./CartSlice";
import { formatCurrency } from "../../utils/helpers";
import { FaCartShopping } from "react-icons/fa6";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div
      className="bg-gradient-to-r from-[#03071e] to-[#343a40] p-4 text-stone-200 
    text-sm md:text-base flex justify-between items-center"
    >
      <p className="space-x-4 font-semibold sm:text-xl">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">
        <span className="flex items-center justify-center gap-2 text-xl border border-slate-400 px-2 py-1 sm:px-3 sm:py-2  hover:border-slate-500">
          Open cart <FaCartShopping />
        </span>
      </Link>
    </div>
  );
}

export default CartOverview;
