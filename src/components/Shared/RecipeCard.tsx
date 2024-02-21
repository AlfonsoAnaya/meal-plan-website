import Recipe from "../../types/recipe.d";

function RecipeCard({ recipe }: { recipe: Recipe }) {
    return (
        <div className="flex justify-center align-center">
            <div
                className="recipe-card w-[90%] max-w-[300px] h-[410px]
             flex flex-col">

                {/* RECIPE IMAGE */}
                <div className="relative recipe-img w-[100%] h-[350px] rounded-lg">
                    <img className="block object-cover w-[100%] h-[100%] object-center rounded-lg"
                        src={recipe.img}
                        alt="a bowl of pasta with pesto on a white marble table">
                    </img>
                    <span className="absolute top-[10px] left-[10px] bg-tertiary py-[.3em] px-[1em] rounded-full font-sans text-darker text-[.9rem] font-[600]">
                        Lunes
                    </span>

                </div>

                {/* RECIPE INFO */}
                <div className="recipe-info h-[35%] flex flex-col justify-between p-2 bg-transparent">
                    <h4 className="recipe-title capitalize text-[.95rem] text-primary font-secondary font-[500]">
                        {recipe.name}
                    </h4>
                    <div className="small-info flex flex-row gap-4 text-secondary text-[.85rem] font-[500]">
                        <span >
                            {recipe.difficulty}
                        </span>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default RecipeCard;