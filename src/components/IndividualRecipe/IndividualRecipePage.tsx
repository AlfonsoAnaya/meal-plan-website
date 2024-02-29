import { useLocation } from 'react-router-dom';
import Ingredient from '../../types/ingredientd.d';
import Recipe from '../../types/recipe.d';
import "./IndividualRecipe.css"

interface IndividualRecipeProps {
  propsRecipe?: Recipe;
}

function IndividualRecipe({ propsRecipe }: IndividualRecipeProps) {
  const { state } = useLocation();
  const recipe = state?.recipeData || propsRecipe;

  return (
    <section className="individual-recipe-section flex flex-col items-center">

      {/* GRID */}
      <div className="individual-recipe-grid w-[100%] md:max-w-[985px] px-2 md:px-4 mt-2 md:mt-16" >

        {/* Recipe Title */}
        <div className="recipe-title flex flex-col justify-center items-left md:border-b-[1px] md:border-b-gray-400">
          <h2 className="text-[1.35rem] md:text-[2.5rem] capitalize text-primary font-[600]">
            {recipe.name}
          </h2>
          <h3 className="recipe-title  text-[1rem] md:text-[1.75rem] text-secondary font-secondary font-[600]">
            {recipe.tagline}
          </h3>
          <div className="small-info flex flex-row gap-4 text-primary text-[.75rem] font-[500] my-1">
            <span className="bg-[#4385be46] py-[.4em] px-[1.1em] rounded-full">
              {recipe.totalTime} min.
            </span>
            <span className="bg-[#4385be46] py-[.4em] px-[1.1em] rounded-full">
              {recipe.difficulty}
            </span>
          </div>
        </div>

        {/* Recipe Img */}
        <div className="recipe-img">
          <img className="block object-cover w-[100%] h-[100%] object-center"
            src={`/${recipe.img}`}
            alt="a bowl of pasta with pesto on a white marble table"></img>
        </div>

        {/* Ingredients */}
        <div className="recipe-ingredients flex flex-col justify-start items-left">
          <details open className="overflow-hidden">
            <summary className="items-center flex font-[600] mb-[.5rem] 
            text-[1.1rem] md:text-[1.5rem] hover:cursor-pointer
            mt-2 md:mt-0">
              <span className="ingredients-span items-center flex">Ingredientes</span>
              <span className="ingredients-arrow">►</span>
            </summary>
          </details>
          <div className="ingredients-content max-h-0 box-border overflow-hidden ">
          {recipe.ingredients.map((ingredient: Ingredient) => {
            return (
              <ul className="method-text font-[400] mb-[1rem]">
                <li>
                  <span>{ingredient.quantity} </span>
                  <span>{ingredient.unit} de </span>
                  <span>{ingredient.name.singular} </span>
                </li>
              </ul>
            )
          })}
          </div>



        </div>

        {/* Method */}
        <div className="recipe-method flex flex-col justify-start items-left text-[18px]">
          <h3 className="font-[600] mb-[.5rem] underline
            text-[1.1rem] md:text-[1.5rem] 
            mt-2 md:mt-0">Instrucciones</h3>
          {recipe.method.map((text: string) => {
            return (
              <p className="method-text font-[300] mb-[1rem]">
                {text}
              </p>
            )
          })}
        </div>
      </div>

    </section>
  );
}

export default IndividualRecipe;