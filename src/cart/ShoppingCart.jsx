const ShoppingCart = ( {cart, item, addToCart} ) => {
  return (
    <section className="cart">
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.image}</p>
          <p>Quantity:  {item.quantity}</p>
          <button className="subtract">-</button>
          <button
            className="add"
            onClick={() => { addToCart(item)}}
          >+</button>
        </div>
      ))}
    </section>
  )
};

export default ShoppingCart;