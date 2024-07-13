import { cartItemCountAtom } from "@/store/frontend/frontendAtom";
import { useAtomValue } from "jotai";
import Link from "next/link";

const CartOrderSummary = ({ orderSummary }) => {
  const cartItemCount = useAtomValue(cartItemCountAtom);
  return (
    <div className="card p-3">
      <h4 className="mb-2">Order Summary</h4>
      <div className="d-flex justify-content-between">
        <p>Subtotal ({cartItemCount} items)</p>
        <p>৳{orderSummary.sub_total}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Shipping Fee </p>
        <p>৳{orderSummary.shipping_fee}</p>
      </div>
      {/* <div className="d-flex justify-content-between">
        <p>Shipping Fee Discount</p>
        <p> -৳0</p>
      </div> */}
      <div className="d-flex justify-content-between">
        <p>Total</p>
        <p>৳{orderSummary.total}</p>
      </div>
      <Link href={"/checkout"} className="btn btn-primary text-white mt-3">
        PROCEED TO CHECKOUT ({cartItemCount})
      </Link>
    </div>
  );
};

export default CartOrderSummary;
