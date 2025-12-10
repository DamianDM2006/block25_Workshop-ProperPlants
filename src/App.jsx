import { useState } from "react";
import PLANTS from "./data.js";
import AllPlantsList from "./plants/AllPlantsList.jsx";
import ShoppingCart from "./cart/ShoppingCart.jsx";

const App = (singlePlant) => {
  const [allPlants, setAllPlants] = useState(PLANTS);
  const [cart, setCart] = useState([]);

  const addToCart = (singlePlant) => {console.log(singlePlant)};

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
