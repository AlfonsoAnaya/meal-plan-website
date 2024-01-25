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
        <section className="weekly-plan-section w-[100%] flex flex-col items-center 
            mt-0 md:mt-16">

            {/* Section Title */}
            <div className="max-w-[1150px] w-[100%] border-b-[1px] border-b-secondary
                block md:hidden"
                >
                <h2 className="text-secondary text-left font-secondary text-[1.5rem] pl-8 py-4">
                    Plan Semanal
                </h2>
            </div>

            {/* Week and Recipe Flex Container */}
            <div className="flex flex-col items-center md:items-start md:flex-row w-[90%] gap-[2em] max-w-[1150px]">
                <nav className="w-[100%] md:w-[30%] flex flex-col gap-[.5em]">
                    {weeksRecipes.map((recipe, i) => {
                        return (
                            <div
                                key={`Day ${i}`}
                                className={`border-b-[1px] border-b-gray-500 flex flex-col ${(weekDays[i] === currentDay)? 'current-day' : ''}`}
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
                <article className="
                    w-[100%] md:w-[70%] md:pl-2">
                    <FullRecipe
                        recipe={currentRecipe}
                    />
                </article>
            </div>



        </section>
    )
};

export default WeeklyPlan