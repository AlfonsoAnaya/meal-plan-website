import getToday from "../../utils/Today";
import Recipe from "../../types/recipe.d";
import emptyRecipe from "../../utils/EmptyRecipe";

interface DaysRecipeProps {
  recipes: Recipe[];
}

function DaysRecipe( { recipes } : DaysRecipeProps) {

  const todayString = getToday();
  const todayInt = new Date().getDay();
  let recipe:Recipe = emptyRecipe[0];

  if (todayInt === 0) recipe = recipes[6]
  if (todayInt > 0) recipe = recipes[todayInt - 1]

  return (
    <section className="todays-recipe-section flex flex-col items-center bg-grayLight">
      <div className="flex flex-row max-w-[1100px] mx-[2rem] my-16 gap-[1.5rem] ">
        <div className=" relative recipe-img max-w-[50%] max-h-[650px]">
          <img className="block object-cover w-[100%] h-[100%] object-center]"
            src={recipe.img}
            alt={recipe.imgAlt}></img>
            <span className="absolute top-[25px] left-[25px] bg-tertiary py-[.8rem] px-[2.5rem] rounded-full font-sans text-darker text-[1.25rem] font-[600]">
                    {todayString}
              </span>
        </div>
        <div className="recipe-info flex flex-col justify-center max-w-[50%] items-left gap-8">
          <h2 className="text-[1.35rem] md:text-[2.5rem] text-primary font-[600]">
            {recipe.name}
          </h2>
          <h3 className="recipe-title  text-[1rem] md:text-[1.75rem] text-secondary font-secondary font-[600]">
            {recipe.tagline}
          </h3>
          <div className="small-info font-sans flex flex-wrap flex-row gap-4 text-darker text-[.80rem] font-[500] my-1
            [&>*]:bg-gray-200 [&>*]:py-[.2em] [&>*]:px-[.8em] [&>*]:rounded-sm">
            <span className="">
              Tiempo total: {recipe.totalTime} min.
            </span>
            <span className="">
              Preparación: {recipe.prepTime} min.
            </span>
            <span className="">
              {recipe.portions} porciones
            </span>
            { recipe.isVegetarian ? 
            <span className="">
              Vegetariano
            </span> 
            : ''}
            { recipe.isVegan ? 
            <span className="">
              Vegano
            </span> 
            : ''}
          </div>
        </div>

      </div>
    </section>
  );
}

export default DaysRecipe;
