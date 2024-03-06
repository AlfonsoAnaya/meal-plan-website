import "./WeeklyPlan.css";
import Recipe from "../../types/recipe.d";
import IndividualRecipe from "../IndividualRecipe/IndividualRecipePage";

import "./WeeklyPlanDesktop.css"

interface MyComponentProps {
    weeksRecipes: Recipe[];
    currentRecipe: Recipe;
    handleNavClick: any;
    Weekdays: string[];
    currentDay: string;
}


function WeeklyPlanDesktop(
    { weeksRecipes,
        currentRecipe,
        handleNavClick,
        Weekdays,
        currentDay
     }: MyComponentProps) {

    return (
        <div className="flex flex-col items-center w-[95%] max-w-[1150px]">
            <nav className="sticky top-[109px] z-10 border-box bg-white py-[8px] w-[100%] flex flex-row justify-center gap-[.75em]">
                {Weekdays.map((day, i) => {
                    return (
                        <div key={`Day ${Weekdays[i]}`}>
                            <span  id={`Day ${Weekdays[i]}`}
                                onClick={() => handleNavClick(weeksRecipes[i], Weekdays[i])}
                                className={day===currentDay ? "py-[10px] weekday current hover:cursor-pointer hover:text-secondary px-2 font-[500]" : "py-[10px] weekday hover:cursor-pointer hover:text-secondary px-2 font-[500]"}>
                                {day.toUpperCase()}
                            </span>
                            <span className={day === "Domingo" ? 'hidden' : 'ml-[.75em]'}>|</span>
                        </div>

                    )
                })}

            </nav>

            <article className="recipe-sidenav pl-2  static translate-x-0 bg-transparent overflow-y-scroll md:overflow-auto"
            >
                <IndividualRecipe
                    propsRecipe={currentRecipe}
                />
            </article>




        </div>

    )
};

export default WeeklyPlanDesktop