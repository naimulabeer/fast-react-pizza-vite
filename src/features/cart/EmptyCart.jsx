import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="py-4 px-3">
      <LinkButton
        to="/menu"
        className="text-sm text-indigo-500 hover:text-indigo-400"
      >
        &larr; Back to menu
      </LinkButton>

      <p className="font-bold mt-6">
        Your cart is still empty. Start adding some pizzas 🤦‍♂️🍕
      </p>
    </div>
  );
}

export default EmptyCart;
