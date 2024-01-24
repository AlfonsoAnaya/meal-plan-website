import Ingredient from '../../types/ingredientd.d';
import "./FullRecipe.css"
import Recipe from '../../types/recipe.d';

function FullRecipe({ recipe }: { recipe: Recipe }) {


  return (
    <>

      {/* GRID */}
      <div id="full-recipe-grid" className="full-recipe-grid" >

        {/* Recipe Title */}
        <div className="recipe-title flex flex-col justify-center items-left">
          <h2 className="text-[2.5rem] capitalize text-primary font-[600]">
            {recipe.name}
          </h2>
          {/* <div className="small-info flex flex-row gap-4 text-primary text-[.75rem] font-[500] my-4">
            <span className="bg-[#4385be46] py-[.4em] px-[1.1em] rounded-full">
              {recipe.portions} porciones
            </span>
            <span className="bg-[#4385be46] py-[.4em] px-[1.1em] rounded-full">
              {recipe.difficulty}
            </span>
          </div> */}
        </div>

        {/* Recipe Info */}
        <div className="recipe-info flex flex-col justify-start items-left border-b-[1px] border-b-gray-500">
          <h3 className="recipe-title  text-[1.75rem] text-secondary font-secondary font-[600]">
            {recipe.tagline}
          </h3>
          <div className="small-info flex flex-row gap-4 text-black text-[.85rem] font-[500] my-4">
            <span className="bg-[#4385be46] py-[.4em] px-[1.1em] rounded-full">
              {recipe.portions} porciones
            </span>
            <span className="bg-[#4385be46] py-[.4em] px-[1.1em] rounded-full">
              {recipe.difficulty}
            </span>
            <span className="bg-[#4385be46] py-[.4em] px-[1.1em] rounded-full">
              {recipe.totalTime} min
            </span>
            <span className="bg-[#4385be46] py-[.4em] px-[1.1em] rounded-full">
              {recipe.prepTime} min
            </span>
          </div>
        </div>

        {/* Recipe Img */}
        <div className="recipe-img h-[300px]">
          <img className="block object-cover w-[100%] h-[100%] object-center"
            src={recipe.img}
            alt="a bowl of pasta with pesto on a white marble table"></img>
        </div>

        {/* Ingredients */}
        <div className="recipe-ingredients flex flex-col justify-start items-left">
          {recipe.ingredients.map((ingredient: Ingredient, i: number) => {
            return (
              <ul key={ingredient.name + i} className="font-[600] mb-[1rem]">
                <li>
                  <span>{ingredient.quantity} </span>
                  <span>{ingredient.unit} de </span>
                  <span>{ingredient.name} </span>
                </li>
              </ul>
            )
          })}
        </div>

        {/* Method */}
        <div className="recipe-method flex flex-col justify-start items-left text-[19px]">
          {recipe.method.map((text: string, i: number) => {
            return (
              <p key={"paragraph" + i} className="method-text font-[300] mb-[1rem]">
                {text}
              </p>
            )
          })}
        </div>
      </div>

    </>
  );
}

export default FullRecipe;