import { useState } from "react";
import PLANTS from "./data.js";
import AllPlantsList from "./plants/AllPlantsList.jsx";
import ShoppingCart from "./cart/ShoppingCart.jsx";

const App = (singlePlant, item) => {
  const [allPlants, setAllPlants] = useState(PLANTS);
  const [cart, setCart] = useState([]); /** {id, image, name, quantity} */

  const addToCart = (singlePlant) => {
    const itemIsInCart = cart.some(
      (objInCart) => objInCart.id === singlePlant.id
    );
    const objInCart = cart.find((objInCart) => objInCart.id === singlePlant.id);

    if (itemIsInCart === false) {
      const newItem = { ...singlePlant, quantity: 1 };
      setCart([...cart, newItem]);
    } else {
      setCart(
        cart.map((sameItem) => {
          if (sameItem.id === objInCart.id) {
            return { ...sameItem, quantity: sameItem.quantity + 1 };
          } else {
            return sameItem;
          }
        })
      );
    }
  };

  const subFromCart = (item) => {
    const itemIsInCart = cart.some((objInCart) => objInCart.id === item.id);
    const objInCart = cart.find((objInCart) => objInCart.id === item.id);

    if (itemIsInCart === true && objInCart.quantity > 0) {
      setCart(
        cart.map((sameItem) => {
          if (sameItem.id === objInCart.id && sameItem.quantity > 0) {
            return { ...sameItem, quantity: sameItem.quantity - 1 };
          } else {
            return sameItem;
          }
        })
      );
    }

    if (objInCart.quantity <= 0) {
      setCart(cart.filter((removeItem) => removeItem.quantity !== 0));
    }
  };

  return (
    <>
      <header>
        <h1>Damian's Proper Plants</h1>
      </header>
      <main>
        <AllPlantsList
          allPlants={allPlants}
          singlePlant={singlePlant}
          addToCart={addToCart}
        />
        <ShoppingCart
          cart={cart}
          item={item}
          singlePlant={singlePlant}
          addToCart={addToCart}
          subFromCart={subFromCart}
        />
      </main>
    </>
  );
};

export default App;
