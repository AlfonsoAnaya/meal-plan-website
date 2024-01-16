import RecipeCard from "./RecipeCard";

function RecipeCollection() {
    return (
      <section className="todays-recipe-section flex flex-col items-center my-[4rem]">
        <h3 className="text-[2rem] text-primary font-[600] p-4">Una Selección de Recetas</h3>
        <div className="recipe-grid grid gap-[1.5rem] max-w-[1100px] mx-[2rem]">
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
        </div>
      </section>
    );
  }
  
  export default RecipeCollection;