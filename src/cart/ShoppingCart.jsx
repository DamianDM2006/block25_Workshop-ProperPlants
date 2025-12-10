const ShoppingCart = ( {cart}) => {
  return (
    <>
      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.image} />
          <p>Quantity:  {item.quantity}</p>
          <button idName="subtract">-</button>
          <button idName="add">+</button>
        </div>
      ))}
    </>
  )
};

export default ShoppingCart;