import { useState, useEffect } from "react";

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
    const [currentDay, setCurrentDay] = useState("1")


    function handleNavClick(recipe: Recipe, day: string) {
        setCurrentDay(day);
        setCurrentRecipe(recipe);
        if (isViewportMobile) {
            openRecipeSidenav();
        };
    };

    const openRecipeSidenav = () => {
        const WeeklySection = document.querySelector('.weekly-plan-section');
        WeeklySection?.classList.add("sidenav-open");
    };

    const closeRecipeSidenav = (e:any) => {
        console.log("closing sidenav...")
        console.log(e.target, e.currentTarget)
        if (e.target === e.currentTarget) {
            const WeeklySection = document.querySelector('.weekly-plan-section');
            WeeklySection?.classList.remove("sidenav-open");
        }
        
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
            <div className="flex flex-col items-center md:items-start md:flex-row w-[95%] gap-[2em] max-w-[1150px]">
                <nav className="w-[100%] md:w-[30%] flex flex-col gap-[.5em]">
                    {weeksRecipes.map((recipe, i) => {
                        return (
                            <div key={`Day ${i}`} id={`Day ${i + 1}`}>
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
                            </div>
                        )
                    })}
                </nav>

                {/* RECIPE WITH DETAILS CONDITIONAL ON  IS VIEWPORT MOBILE */}
                {isViewportMobile ?
                    <div className="recipe-sidenav w-[100%] 
                    fixed top-[49px] left-0 right-0 bottom-0 
                    translate-x-[calc(100%)] 
                    backdrop-blur-[2px] bg-[#31313138] z-[99]"
                    onClick={(e) => closeRecipeSidenav(e)}>
                        <article className="h-auto p-[10px] md:pl-2 w-[calc(100%-40px)]  
                            fixed top-[0] left-[40px] right-0 bottom-0 bg-white overflow-y-scroll z-[999]"
                        >
                            <div className="hover:cursor-pointer
                                block md:hidden"
                                onClick={(e) => closeRecipeSidenav(e)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" data-name="Layer 1" viewBox="0 0 52 52"
                                    className="fill-[#616161]"
                                    onClick={(e) => closeRecipeSidenav(e)}
                                >
                                    <path onClick={(e) => closeRecipeSidenav(e)} d="M50 24H6.83L27.41 3.41a2 2 0 0 0 0-2.82 2 2 0 0 0-2.82 0l-24 24a1.79 1.79 0 0 0-.25.31 1.19 1.19 0 0 0-.09.1c0 .07-.07.13-.1.2l-.06.2a.84.84 0 0 0 0 .17 2 2 0 0 0 0 .78.84.84 0 0 0 0 .17l.06.2c0 .07.07.13.1.2a1.19 1.19 0 0 0 .09.15 1.79 1.79 0 0 0 .25.31l24 24a2 2 0 1 0 2.82-2.82L6.83 28H50a2 2 0 0 0 0-4Z" />
                                </svg>
                            </div>

                            <FullRecipe
                                recipe={currentRecipe}
                            />
                        </article> 
                    </div>
                    
                    :
                    <article className="h-auto recipe-sidenav pl-2 w-[70%] static
                        translate-x-0 bg-transparent overflow-y-scroll md:overflow-auto"
                    >
                        <FullRecipe
                            recipe={currentRecipe}
                        />
                    </article>
                }



            </div>



        </section>
    )
};

export default WeeklyPlan