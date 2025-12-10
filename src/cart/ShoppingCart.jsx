const ShoppingCart = ( {cart, item, addToCart, subFromCart} ) => {
  return (
    <section className="cart">
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.image}</p>
          <p>Quantity:  {item.quantity}</p>
          <button
            className="subtract"
            onClick={() => { subFromCart(item) }}  
          >-</button>
          <button
            className="add"
            onClick={() => { addToCart(item) }}
          >+</button>
        </div>
      ))}
    </section>
  )
};

export default ShoppingCart;