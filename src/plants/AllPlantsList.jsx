

const AllPlantsList = ({ allPlants, addToCart }) => {
  return(
    <section className="plants">
      <h2>Available Plants</h2>
        <nav className="list">
          <ul className="inList">
            {allPlants.map((singlePlant) => (
              <li
                key={singlePlant.id}
                
                >
                {singlePlant.image}
                {singlePlant.name}
                <button
                  className="add2Cart"
                  onClick={() => { addToCart(singlePlant)}}
                >
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