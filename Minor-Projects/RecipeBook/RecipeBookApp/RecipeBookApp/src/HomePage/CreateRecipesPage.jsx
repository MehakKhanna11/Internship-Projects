function CreateRecipesPage(){
    return (<div className="create-recipe-page">
        <img src="https://th.bing.com/th/id/OIP.rR3Kd_jKsKklfx9VtOCk3gHaE9?rs=1&pid=ImgDetMain"  id="create-recipe-image" />
        <div className="create-recipe-text">
            <h1 id="create-recipe-caption">Create your Own Recipe</h1>
            <p>Invent, Cook, Enjoy, Share!</p>
            <button id="create-recipe-button" onClick={()=>{
                window.location="/addrecipe";
            }}>Get Started</button>
        </div>
    </div>)
}
export default CreateRecipesPage