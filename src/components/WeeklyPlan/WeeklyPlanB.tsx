import { useState, useEffect } from "react";

import "./WeeklyPlan.css";
import recipes from "../recipes";
import Recipe from "../../types/recipe.d";

import WeeklyPlanCard from "./WeeklyPlanCard";
import FullRecipe from "./FullRecipe";

function WeeklyPlanB() {

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
    const [currentDay, setCurrentDay] = useState("1")


    function handleNavClick(recipe: Recipe, day: string) {
        setCurrentDay(day);
        if (!isViewportMobile) {
            setCurrentRecipe(recipe);
            return;
        };
        if (document.getElementById("Day " + day)?.classList.contains("active-day")) {
            document.getElementById("Day " + day)?.classList.remove("active-day");
        } else {
            document.querySelector(".active-day")?.classList.remove("active-day");
            document.getElementById("Day " + day)?.classList.add("active-day");
        };
        const currentRecipe = document.getElementById(recipe.name + recipe.id)
        currentRecipe?.classList.add("collapsing");
        setTimeout(() => {
            console.log('timeout code')
            document.getElementById(recipe.name + recipe.id)?.classList.remove("collapsing")
        }, 200)
    }


    // boolean state to store whether the viewport is mobile
    const [isViewportMobile, setIsViewportMobile] = useState(false);

    useEffect(() => {
        // Function to check if the viewport width is smaller than 768px
        const handleResize = () => {
            setIsViewportMobile(window.innerWidth < 768);
        };

        // Initial check on component mount
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


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
                            <div key={`Day ${i}`} id={`Day ${i + 1}`}
                                className="relative"
                            >
                                <div
                                    className={`border-b-[1px] border-b-gray-500 flex flex-col ${(weekDays[i] === currentDay) ? 'current-day' : ''}`}
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
                                {isViewportMobile ?
                                    <article id={recipe.name + recipe.id} className="article-recipe">
                                        <FullRecipe
                                            recipe={recipe}
                                        />
                                    </article>
                                    :
                                    <></>
                                }


                            </div>

                        )
                    })}
                </nav>

                {/* RECIPE WITH DETAILS CONDITIONAL ON  IS VIEWPORT MOBILE */}
                {isViewportMobile ?
                    <></>
                    :
                    <article className="
                     w-[70%] pl-2">
                        <FullRecipe
                            recipe={currentRecipe}
                        />
                    </article>
                }

            </div>



        </section>
    )
};

export default WeeklyPlanB