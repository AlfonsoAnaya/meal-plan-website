import Recipe from "../../types/recipe.d";

function MonthlyPlanCard( {recipe} : {recipe: Recipe;}) {
    return (
        <div
            className="recipe-card w-[100%] h-[100%]   border-[1px] border-gray-300
             flex flex-col hover:shadow-[4px_2px_10px_#ddd]">

            <h3 className="recipe-title capitalize text-[.85rem] text-primary font-primary font-[400]">{recipe.name}</h3>
            {/* <div className="recipe-img w-[100%] h-[65%]">
                <img className="block object-cover w-[100%] h-[100%] object-center "
                    src={recipe.img}
                    alt="a bowl of pasta with pesto on a white marble table"></img>
            </div>
            <div className="recipe-info h-[35%] flex flex-col justify-between p-2">
                <h4 ">
                    {recipe.name}
                </h4>
                <div className="small-info flex flex-row gap-4 text-primary text-[.75rem] font-[500]">
                    <span className="bg-[#4385be46] py-[.4em] px-[1.1em] ">
                        {recipe.prepTime} min
                    </span>
                    <span className="bg-[#4385be46] py-[.4em] px-[1.1em] ">
                        {recipe.difficulty}
                    </span>
                </div>
            </div> */}

        </div>
    );
}

export default MonthlyPlanCard;