import { useState } from "react";

import "./WeeklyPlan.css";
import recipes from "../recipes";
import Recipe from "../../types/recipe.d";

import WeeklyPlanCard from "./WeeklyPlanCard";
import FullRecipe from "./FullRecipe";

function WeeklyPlan() {
    const weeksRecipes = recipes.slice(0, 7);
    const weekDays = [
        "LUNES",
        "MARTES",
        "MIÉRCOLES",
        "JUEVES",
        "VIERNES",
        "SÁBADO",
        "DOMINGO"
    ];

    const [currentRecipe, setCurrentRecipe] = useState(weeksRecipes[0]);
    function handleNavClick(recipe: Recipe) {
        setCurrentRecipe(recipe);
    };

    
    return (
        <section className="weekly-plan-section flex flex-col items-center">
            <div>
                <h2 className="text-secondary font-secondary text-[3.5rem] py-[2rem]">Plan Semanal</h2>
            </div>

            {/* Week and Recipe Flex Container */}
            <div className="flex flex-row w-[90%] max-w-[1150px] min-h-[500px]">
                <nav className="w-[30%]">
                    {weeksRecipes.map((recipe, i) => {
                        return (
                            <div key={`${weekDays[i]}`} className="flex flex-col">
                                <div className="flex justify-center align-center w-[100%] bg-beige">
                                    <h3 className="text-primary text-[1.15rem] self-center tracking-[.5rem]">
                                        {weekDays[i]}
                                    </h3>

                                </div>
                                <div
                                    className="hover:cursor-pointer"
                                    onClick={() => handleNavClick(recipe)}
                                >
                                    <WeeklyPlanCard
                                        recipe={recipe}
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