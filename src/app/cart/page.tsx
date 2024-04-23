import { getCart } from "@/lib/db/cart";
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions";
import { formatPrice } from "@/lib/format";

export const metadata = {
  title: "Your Cart",
};

export default async function CartPage() {
  const cart = await getCart();

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold text-center">Shopping Cart</h1>
      {cart?.items.map((item) => (
        <CartEntry
          cartItem={item}
          key={item.id}
          setProductQuantity={setProductQuantity}
        />
      ))}
      {!cart?.items.length && (
        <p className="text-center text-xl text-gray-900 my-8">
          Your cart is empty😒
        </p>
      )}
      <div className="flex flex-col items-end sm:items-center">
        {cart?.items.length ? (
          <div>
            <p className="mb-3 font-bold text-md">
              Total: {formatPrice(cart?.subtotal || 0)}
            </p>
            <button className="btn btn-primary rounded-lg sm:w-[200px]">
              Checkout
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
