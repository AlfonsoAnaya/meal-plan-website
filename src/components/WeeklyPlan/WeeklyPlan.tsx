import { useState, useEffect } from "react";

import "./WeeklyPlan.css";
import recipes from "../recipes";
import Recipe from "../../types/recipe.d";
import WeeklyPlanDesktop from "./WeeklyPlanDesktop";
import WeeklyPlanMobile from "./WeeklyPlanMobile";
import Weekdays from "../../utils/Weekdays";

function WeeklyPlan() {

    const weeksRecipes = recipes.slice(0, 7);

    const [currentRecipe, setCurrentRecipe] = useState(weeksRecipes[0]);
    const [currentDay, setCurrentDay] = useState(Weekdays[0]);
    const [isViewportMobile, setIsViewportMobile] = useState(window.innerWidth < 768);


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

    useEffect(() => {
        // Function to check if the viewport width is smaller than 768px
        const handleResize = () => {
            setIsViewportMobile(() => window.innerWidth < 768 ? true : false);
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
            mt-0 md:mt-8">
            {isViewportMobile ? (
                <WeeklyPlanMobile
                    weeksRecipes={weeksRecipes}
                    currentRecipe={currentRecipe}
                    currentDay={currentDay}
                    handleNavClick={handleNavClick}
                    isViewportMobile={isViewportMobile}
                    Weekdays={Weekdays}
                />
            ) : (
                <WeeklyPlanDesktop 
                    weeksRecipes={weeksRecipes}
                    currentRecipe={currentRecipe}
                    handleNavClick={handleNavClick}
                    Weekdays={Weekdays}
                    currentDay={currentDay}
                />
            )}

        </section>
    )
};

export default WeeklyPlan