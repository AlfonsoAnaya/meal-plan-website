import { useState } from "react";

import "./WeeklyPlan.css";
import recipes from "../recipes";
import Recipe from "../../types/recipe.d";

import WeeklyPlanCard from "./WeeklyPlanCard";
import FullRecipe from "./FullRecipe";

function WeeklyPlan() {
    const weeksRecipes = recipes.slice(0, 7);
    const weekDays = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7"
    ];

    const [currentRecipe, setCurrentRecipe] = useState(weeksRecipes[0]);
    const [currentDay, setCurrentDay] = useState("")

    function handleNavClick(recipe: Recipe, day: string) {
        setCurrentRecipe(recipe);
        setCurrentDay(day);
    };

    return (
        <section className="weekly-plan-section flex flex-col items-center">
            <div className="max-w-[1150px] w-[90%]">
                <h2 className="text-secondary text-left font-secondary text-[3.5rem] py-[2rem]">Plan Semanal</h2>
            </div>

            {/* Week and Recipe Flex Container */}
            <div className="flex flex-row w-[90%] gap-[2em]  min-h-[500px] max-w-[1150px]">
                <nav className="w-[30%]">
                    {weeksRecipes.map((recipe, i) => {
                        return (
                            <div
                                key={`Day ${i}`}
                                className={` border-2 border-transparent flex flex-col ${(weekDays[i] === currentDay)? 'current-day' : ''}`}
                            >
                                {/* <div className="flex justify-center w-[100%] bg-beige">
                                    <h3 className="text-secondary pl-[.7rem] font-tertiary text-[1.25rem] font-[600] tracking-[.7rem]">
                                        {weekDays[i]}
                                    </h3>

                                </div> */}
                                <div
                                    className="hover:cursor-pointer"
                                    onClick={() => handleNavClick(recipe, weekDays[i])}
                                >
                                    <WeeklyPlanCard
                                        recipe={recipe}
                                        weekDay={weekDays[i]}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </nav>
                {/* RECIPE WITH DETAILS */}
                <article className="w-[70%] pl-2">
                    <FullRecipe
                        recipe={currentRecipe}
                    />
                </article>
            </div>



        </section>
    )
};

export default WeeklyPlan