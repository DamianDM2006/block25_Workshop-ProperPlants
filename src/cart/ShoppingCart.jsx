const ShoppingCart = ( {cart}) => {
  return (
    <>
      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.image} />
          <p>Quantity:  {item.quantity}</p>
        </div>
      ))}
    </>
  )
};

export default ShoppingCart;