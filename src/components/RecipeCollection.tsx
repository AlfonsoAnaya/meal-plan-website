import RecipeCard from "./RecipeCard";
import recipes from "./recipes";


function RecipeCollection() {
  return (
    <section className="todays-recipe-section flex flex-col items-center my-[4rem]">
      <h3 className="text-[2rem] text-primary font-[600] p-4">Una Selección de Recetas</h3>
      <div className="recipe-grid flex flex-wrap justify-center gap-[1.75rem] max-w-[1000px] mx-[2rem]">
        {recipes.map((recipe, i) => {
          return <RecipeCard
            key={recipe.name + i}
            recipe = {recipe}
          />
        })}
      </div>
    </section>
  );
}

export default RecipeCollection;