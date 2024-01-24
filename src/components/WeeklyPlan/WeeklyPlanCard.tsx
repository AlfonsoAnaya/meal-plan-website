import Recipe from "../../types/recipe.d";

function WeeklyPlanCard(
    { recipe, weekDay }: { recipe: Recipe; weekDay: string }
) {
    return (
        <div
            className="recipe-card-weekly flex flex-row h-[75px] bg-beige">

            {/* RECIPE IMAGE */}
            {/* <div className="recipe-img w-[20%]">
                <img className="block w-[100%] h-[100%] object-cover object-center"
                    src={recipe.img}
                    alt="a bowl of pasta with pesto on a white marble table"></img>
            </div> */}

            {/* DAY */}
            <div className="w-[15%] flex justify-center items-center">
                <span className="text-[2.5rem] text-secondary font-tertiary font-[700] leading-4">{weekDay}</span>
            </div>

            {/* RECIPE INFO */}
            <div className="flex flex-col w-[85%] justify-center items-start gap-[.25rem] font-primary font-[400] py-2">
                <h3
                    className="recipe-title capitalize text-[.95rem] text-primary font-secondary font-[400]
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