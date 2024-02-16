import {Link} from "react-router-dom";
import RecipeCard from "./RecipeCard";
import recipes from "../recipes";


function RecipeCarousel() {
  return (
    <section className="todays-recipe-section flex flex-col items-center bg-primary">
      <h3 className="text-[2rem] text-white font-[600] pt-10">El plan de esta semana</h3>
      <div className="recipe-grid flex flex-row justify-center gap-[1.75rem] w-[90%] mx-[2rem] py-[2rem]">
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

export default RecipeCarousel;