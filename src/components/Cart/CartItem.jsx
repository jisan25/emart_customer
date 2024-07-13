import CartItemHeading from "./CartItemHeading";
import CartProductItem from "./CartProductItem";

const CartItem = ({ props }) => {
  const { storeCart } = props;
  return (
    <div className="card mb-3">
      <CartItemHeading storeCart={storeCart} />

      <div className="card-body pb-0 mb-0">
        {storeCart.products &&
          storeCart.products.map((item) => <CartProductItem item={item} />)}
      </div>
    </div>
  );
};

export default CartItem;
