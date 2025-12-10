import { useState } from "react";
import PLANTS from "./data.js";
import AllPlantsList from "./plants/AllPlantsList.jsx";
import ShoppingCart from "./cart/ShoppingCart.jsx";

const App = (singlePlant) => {
  const [allPlants, setAllPlants] = useState(PLANTS);
  const [cart, setCart] = useState([]); /** {id, image, name, quantity} */

  const addToCart = (singlePlant) => {
    console.log(singlePlant);
    console.log(cart);

    // const itemIsInCart = true;
    
    // console.log(`itemIsInCart`, itemIsInCart);

    if (itemIsInCart === false) {
      const newItem = { ...singlePlant, quantity: 1 };
      console.log(newItem);
      setCart([...cart, newItem]);
    }
    // else {console.log(`i got passed it`)}
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
        <h2>Cart</h2>
      </main>
      
    </>
  );
};

export default App;
