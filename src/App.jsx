import { useState } from "react";
import AllPlantsList from "./plants/AllPlantsList.jsx";

const App = () => {
  return (
    <>
      <header>
        <h1>Damian's Proper Plants</h1>
      </header>
      <main>
        <AllPlantsList />
        <h2>Cart</h2>
      </main>
      
    </>
  );
};

export default App;
