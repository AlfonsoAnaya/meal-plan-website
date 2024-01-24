import Recipe from "../../types/recipe.d";

function WeeklyPlanCard({ recipe }: { recipe: Recipe; }) {
    return (
        <div
        className="recipe-card-weekly flex flex-row h-[90px] bg-beige bg-opacity-30">
            
            {/* RECIPE IMAGE */}
            {/* <div className="recipe-img w-[20%]">
                <img className="block w-[100%] h-[100%] object-cover object-center"
                    src={recipe.img}
                    alt="a bowl of pasta with pesto on a white marble table"></img>
            </div> */}

            {/* RECIPE INFO */}
            <div className="flex flex-col w-[100%] justify-center items-center gap-[.5rem] font-primary font-[400] p-1">
                <h3 
                className="recipe-title capitalize text-[1.25rem] text-primary font-primary font-[600]
                leading-[22px]">
                    {recipe.name}
                </h3>
                <div className="small-info flex flex-row gap-3 text-primary text-[.8rem] font-[500]">
                    <span className="bg-[#4385be26] py-[.3rem] px-[.9rem] rounded-[13px] leading-4">
                        {recipe.prepTime} min
                    </span>
                    <span className="bg-[#4385be26] py-[.3rem] px-[.9rem] rounded-[13px] leading-4">
                        {recipe.difficulty}
                    </span>
                </div>
            </div>

        </div>
    );
}

export default WeeklyPlanCard;