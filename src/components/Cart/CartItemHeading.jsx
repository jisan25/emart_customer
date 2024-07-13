const CartItemHeading = ({storeCart}) => {
  console.log(storeCart);
  return (
    <div className="card-header bg-white">
      <div className="d-flex justify-content-between align-items-center">
        <p className="roboto-medium text-primary">{storeCart.products && storeCart.products[0].store.store_name}</p>
        <p>Earliest Delivery:11 Jul</p>
      </div>
    </div>
  );
};

export default CartItemHeading;
