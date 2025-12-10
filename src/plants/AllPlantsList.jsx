import PLANTS from "../data.js";

const AllPlantsList = () => {
  const allPlants = PLANTS;
  console.log(`allPlants`, allPlants);
  return(
    <section className="plants">
      <h2>Available Plants</h2>
        <nav>
          <ul>
            {allPlants.map((singlePlant) => (
              <li
                key={singlePlant.id}
                className="inList"
                >
                {singlePlant.image}
                {singlePlant.name}
                <button className="add2Cart">

                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        </nav>
    </section>
  )
};

export default AllPlantsList;