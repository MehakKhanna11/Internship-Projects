function CategorySlider() {
  return (
    <div className="categories-container">
      <div className="wrapper">
        <div className="category-card">
          <div className="category-image" onClick={()=>{
            window.location="/recipes/searchcategory/"+"Breakfast"
          }}>
            <img src="https://th.bing.com/th/id/OIP.Yw3d3H8FTI8T7gcHn_UShQHaFj?w=215&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="category-image" />
          </div>
          <div className="category-name"><h2>Breakfast</h2></div>
        </div>
        <div className="category-card" onClick={()=>{
            window.location="/recipes/searchcategory/"+"Lunch"
          }}>
          <div className="category-image">
            <img src="https://th.bing.com/th/id/OIP.dkZoPJFoz2Z5Z7JuwSJmVQHaHZ?w=200&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="category-image" />
          </div>
          <div className="category-name"><h2>Lunch</h2></div>
        </div>
        <div className="category-card" onClick={()=>{
            window.location="/recipes/searchcategory/"+"Snacks"
          }}>
          <div className="category-image">
            <img src="https://th.bing.com/th/id/OIP.whi-DkPyWLk5oMNC12KOgwHaF7?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="category-image" />
          </div>
          <div className="category-name"><h2>Snacks</h2></div>
        </div>
        <div className="category-card" onClick={()=>{
            window.location="/recipes/searchcategory/"+"Dinner"
          }}>
          <div className="category-image">
            <img src="https://th.bing.com/th/id/OIP.WX-uIfSajZjMbEDa7LEHygHaFj?w=237&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="category-image" />
          </div>
          <div className="category-name"><h2>Dinner</h2></div>
        </div>
        <div className="category-card" onClick={()=>{
            window.location="/recipes/searchcategory/"+"Drinks"
          }}>
          <div className="category-image">
            <img src="https://th.bing.com/th/id/OIP.msR5Raym-J3dXEgH0-nZLgHaE7?w=259&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="category-image" />
          </div>
          <div className="category-name"><h2>Beverage</h2></div>
        </div>
      </div>
    </div>
  );
}
export default CategorySlider;
