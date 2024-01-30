import { useLocation } from 'react-router-dom';
import Ingredient from '../../types/ingredientd.d';
import "./IndividualRecipe.css"

function IndividualRecipe() {
  const { state } = useLocation();
  const recipe = state?.recipeData || null;

  return (
    <section className="individual-recipe-section flex flex-col items-center">
            
      {/* GRID */}
      <div className="individual-recipe-grid w-[1000px] mx-[4rem] mt-16" >

        {/* Recipe Title */}
        <div className="recipe-title flex flex-col justify-center items-left border-b-[1px] border-b-gray-500">
          <h2 className="text-[2.5rem] capitalize text-primary font-[600]">
            {recipe.name}
          </h2>
          <h3 className="recipe-title  text-[1.75rem] text-secondary font-secondary font-[600]">
            {recipe.tagline}
          </h3>
          <div className="small-info flex flex-row gap-4 text-primary text-[.75rem] font-[500] my-4">
            <span className="bg-[#4385be46] py-[.4em] px-[1.1em] rounded-full">
              {recipe.totalTime} min.
            </span>
            <span className="bg-[#4385be46] py-[.4em] px-[1.1em] rounded-full">
              {recipe.difficulty}
            </span>
          </div>
        </div>

        {/* Recipe Img */}
        <div className="recipe-img max-h-[450px]">
          <img className="block object-cover w-[100%] h-[100%] object-center"
            src={recipe.img}
            alt="a bowl of pasta with pesto on a white marble table"></img>
        </div>

        {/* Ingredients */}
        <div className="recipe-ingredients flex flex-col justify-start items-left">
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

        {/* Method */}
        <div className="recipe-method flex flex-col justify-start items-left text-[18px]">
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