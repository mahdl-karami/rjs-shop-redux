function cartTotal(cartProducts) {
  const arr = [];
  let totalCount = 0;
  let totalPrice = 0;
  cartProducts?.map((product) => {
    const obj = { count: product["count"], price: product["price"] };
    arr.push(obj);
  });
  arr?.map((obj) => (totalCount = totalCount + obj["count"]));
  arr?.map((obj) => (totalPrice = totalPrice + obj["count"] * obj["price"]));
  return { totalCount, totalPrice };
}

export default cartTotal;
