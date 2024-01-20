import {Link} from "react-router-dom";
import RecipeCard from "../Shared/RecipeCard";
import recipes from "../recipes";



function RecipeCollection() {
  return (
    <section className="todays-recipe-section flex flex-col items-center my-[2rem]">
      <h3 className="text-[2rem] text-primary font-[600] p-4">Una Selección de Recetas</h3>
      <div className="recipe-grid flex flex-wrap justify-center gap-[1.75rem] max-w-[1000px] mx-[2rem] my-[1rem]">
        {recipes.map((recipe, i) => {
          return (
          <Link 
            key={recipe.name + i} 
            to={`/recipe/${recipe.name}`}
            state={{ recipeData: recipe }}>
          <RecipeCard
            recipe = {recipe}
          />
          </Link>
        )})}
      </div>
    </section>
  );
}

export default RecipeCollection;