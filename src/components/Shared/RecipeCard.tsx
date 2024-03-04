import Recipe from "../../types/recipe.d";

interface RecipeCardProps {
    recipe: Recipe;
    extraInfo?: string;
  }

function RecipeCard({ recipe, extraInfo }: RecipeCardProps) {
    return (
        <div className="flex justify-center align-center">
            <div
                className="recipe-card w-[90%] max-w-[330px] h-[530px] md:max-w-[250px] md:h-[430px]
             flex flex-col gap-4">

                {/* RECIPE IMAGE */}
                <div className="relative recipe-img w-[100%] h-[80%] rounded-lg">
                    <img className="block object-cover w-[100%] h-[100%] object-right-center rounded-lg"
                        src={recipe.img}
                        alt="a bowl of pasta with pesto on a white marble table">
                    </img>
                    {extraInfo 
                    ? <span className="absolute top-[10px] left-[10px] bg-tertiary py-[.4em] px-[1.4em] rounded-full font-sans text-darker text-[1rem] font-[600]">
                    {extraInfo}
                        </span>
                    : ''}
                </div>

                {/* RECIPE INFO */}
                <div className="recipe-info h-[15%] flex flex-col gap-2 justify-start px-2 bg-transparent">
                    <h4 className="recipe-title text-[.95rem] text-primary font-secondary font-[500]">
                        {recipe.name}
                    </h4>
                    {/* <div className="small-info flex flex-row gap-4 text-secondary text-[.85rem] font-[500]">
                        <span >
                            {recipe.difficulty}
                        </span>
                    </div> */}
                </div>
            </div>


        </div>
    );
}

export default RecipeCard;