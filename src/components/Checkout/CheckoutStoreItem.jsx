import CheckoutProductItem from "./checkoutProductItem";

const CheckoutStoreItem = ({ item }) => {
  const calculateTotalPrice = (item) => {
    return item.products.reduce((total, item) => {
      return total + item.price * item.quantity + item.delivery_fee;
    }, 0);
  };

  const calculateTotalItems = (item) => {
    return item.products.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  };

  return (
    <div className="mb-3">
      <p className="text-primary text-medium px-3 mb-3">
        {item.products[0].store.store_name}
      </p>

      {item.products.map((product) => (
        <CheckoutProductItem product={product} />
      ))}

      <hr />
      <div className="border-primary-1 p-2 px-3 w-25">
        <h4 className="text-lead">Standard Delivery | tk 65</h4>
        <p className="text-small">Receive by 11 Jul - 14 Jul</p>
      </div>
      <div className="d-flex justify-content-end">
        <div className="d-flex flex-column align-items-end">
          <p>
            {calculateTotalItems(item)} item(s). Subtotal: tk{" "}
            {calculateTotalPrice(item)}
          </p>
          {/* <p>Saved tk95</p> */}
        </div>
      </div>
    </div>
  );
};

export default CheckoutStoreItem;
