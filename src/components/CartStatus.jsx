import cartTotal from "../helpers/cartTotal";

function CartStatus({ cartProducts }) {
  const { totalCount, totalPrice } = cartTotal(cartProducts);
  return (
    <div className="cart-status">
      <h5>Total Count : {totalCount}</h5>
      <h5>Total Price : {totalPrice} $</h5>
      <h5>Status : Waiting for checkout</h5>
    </div>
  );
}

export default CartStatus;
