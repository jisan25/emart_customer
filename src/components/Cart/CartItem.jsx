import CartItemHeading from "./CartItemHeading";
import CartProductItem from "./CartProductItem";

const CartItem = () => {
  return (
    <div className="card mb-3">
      <CartItemHeading />

      <div className="card-body pb-0 mb-0">
        <CartProductItem />
        <CartProductItem />
        <CartProductItem />
        <CartProductItem />
      </div>
    </div>
  );
};

export default CartItem;
