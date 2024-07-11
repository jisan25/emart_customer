import CartItem from "@/components/Cart/CartItem";
import CartOrderSummary from "@/components/Cart/CartOrderSummary";

const CartPage = () => {
  return (
    <div className="container-fluid">
      <div className="row px-xl-5 pt-5">
        <div className="col-md-9">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="col-md-3">
          <CartOrderSummary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
