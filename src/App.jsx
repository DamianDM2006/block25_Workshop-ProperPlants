import { useState } from "react";
import PLANTS from "./data.js";
import AllPlantsList from "./plants/AllPlantsList.jsx";
import ShoppingCart from "./cart/ShoppingCart.jsx";

const App = (singlePlant, item) => {
  const [allPlants, setAllPlants] = useState(PLANTS);
  const [cart, setCart] = useState([]); /** {id, image, name, quantity} */

  const addToCart = (singlePlant) => {
    console.log(cart);
    
    const itemIsInCart = cart.some(objInCart => objInCart.id === singlePlant.id);
    const objInCart = cart.find((objInCart) => objInCart.id === singlePlant.id);

    if (itemIsInCart === false) {
      const newItem = { ...singlePlant, quantity: 1 };
      setCart([...cart, newItem]);
    }
    else {
      /* const isItem = { ...objInCart, quantity: objInCart.quantity + 1 }; */
      setCart(
        cart.map((sameItem) => {
          if(sameItem.id === objInCart.id) {
            console.log(sameItem);
            return { ...sameItem, quantity: sameItem.quantity + 1}
          } else {
            return sameItem
          }
        })
      );
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
        />
      </main>
      
    </>
  );
};

export default App;
