function ExploreRecipes() {
  return (
    <div className="explore-recipes">
      <img
        src="https://media.istockphoto.com/id/1067769764/photo/red-picnic-cloth-on-white-wooden-background.jpg?s=612x612&w=0&k=20&c=Pweq2TZ1J7Bj8s1u26IUmVFLwlPDXLH-g9eElIsINj4="
        alt=""
        id="explore-image"
      />
      <div className="explore-text">
        <h3 id="explore-caption">Explore new recipes</h3>
        <p>Savor the world on a plate with our bite-sized recipes!</p>
        <button id="explore-button" onClick={()=>[
            window.location="/recipes"
        ]}>Explore</button>
      </div>
    </div>
  );
}
export default ExploreRecipes;
