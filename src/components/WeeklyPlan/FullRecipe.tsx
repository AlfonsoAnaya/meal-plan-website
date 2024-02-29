import Ingredient from '../../types/ingredientd.d';
import Recipe from '../../types/recipe.d';

function FullRecipe({ recipe }: { recipe: Recipe }) {


  return (
    <>

      {/* GRID */}
      <div id="full-recipe-grid"
        className="full-recipe-grid flex flex-col gap-2" >

        {/* Recipe Title */}
        <div className="recipe-title flex flex-col justify-center items-left">
          {/* <h2 className="capitalize text-primary font-[600]
            text-[1.75em] md:text-[2.5em]">
            {recipe.name}
          </h2> */}
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
        <div className="recipe-info flex flex-col items-left 
          md:border-b-[1px] md:border-b-gray-500
          justify-start md:justify-between">
          <h3 className="recipe-title   text-secondary font-secondary font-[600]
            text-[1-15rem] md:text-[1.75rem]">
            {recipe.tagline}
          </h3>
          <div className="small-info flex flex-row gap-4 text-dark text-[.8rem] font-[500] my-4">
            <span className="bg-[#4385be35] py-[.3em] px-[.9em] rounded-lg">
              {recipe.portions} porciones
            </span>
            <span className="bg-[#4385be35] py-[.3em] px-[.9em] rounded-lg">
              {recipe.difficulty}
            </span>
            <span className="bg-[#4385be35] py-[.3em] px-[.9em] rounded-lg">
              {recipe.totalTime} min
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
        <div className="recipe-ingredients flex flex-col justify-start items-left
          pr-0 md:pr-[1rem]">
          <h3 className="font-[600] mb-[.5rem] underline
            text-[1.1rem] md:text-[1.5rem] 
            mt-2 md:mt-0">Ingredientes</h3>
          <ul className="mb-[1em]
              text-[1rem] md:text-[1.1rem]
              font-[300] md:font-[600]">
            {recipe.ingredients.map((ingredient: Ingredient, i: number) => {
              return (
                <li key={ingredient.name.singular + i}
                className="mb-[.5em]">
                  {ingredient.unit === "unidad" ?
                    (ingredient.quantity > 1 ?
                      <span>{`${ingredient.quantity} ${ingredient.name.plural}`}</span>
                      : <span>{`${ingredient.quantity} ${ingredient.name.singular}`}</span>
                    )
                    : <span>{`${ingredient.quantity} ${ingredient.unit} de ${ingredient.name.singular}`}</span>
                  }
                </li>
              )
            })}
          </ul>
          {
            recipe.extraRecipeName ?
              <>
                <h4 
                  className="font-[300] mb-[.5rem] underline
                  text-[1.1rem] md:text-[1.5rem] 
                  mt-2 md:mt-0">
                  {recipe.extraRecipeName}
                </h4>
                <ul 
                  className="mb-[1em]
                  text-[1rem] md:text-[1.1rem]
                  font-[300] md:font-[600]">
                  {recipe.extraIngredients?.map((ingredient: Ingredient, i: number) => {
                    return (
                      <li key={ingredient.name.singular + i}
                      className="mb-[.5em]">
                        {ingredient.unit === "unidad" ?
                          (ingredient.quantity > 1 ?
                            <span>{`${ingredient.quantity} ${ingredient.name.plural}`}</span>
                            : <span>{`${ingredient.quantity} ${ingredient.name.singular}`}</span>
                          )
                          : <span>{`${ingredient.quantity} ${ingredient.unit} de ${ingredient.name.singular}`}</span>
                        }
                      </li>
                    )
                  })}
                </ul>
              </>
              : ''
          }
        </div>

        {/* Method */}
        <div className="recipe-method flex flex-col justify-start items-left text-[19px]">
          <h3 className="font-[600] mb-[.5rem] underline
            text-[1.1rem] md:text-[1.5rem] 
            mt-2 md:mt-0">Instrucciones</h3>
          {recipe.method.map((text: string, i: number) => {
            return (
              <p key={"paragraph" + i} className="method-text font-[300] mb-[1rem] text-[1rem] md:text-[1.2rem]">
                {text}
              </p>
            )
          })}
        </div>
      </div >

    </>
  );
}

export default FullRecipe;