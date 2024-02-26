import { useState, useEffect } from "react";

import "./WeeklyPlan.css";
import recipes from "../recipes";
import Recipe from "../../types/recipe.d";


import WeeklyPlanDesktop from "./WeeklyPlanDesktop";
import WeeklyPlanMobile from "./WeeklyPlanMobile";

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

    const closeRecipeSidenav = (e: any) => {
        if (e.target === e.currentTarget) {
            const WeeklySection = document.querySelector('.weekly-plan-section');
            WeeklySection?.classList.remove("sidenav-open");
        }

    }


    // boolean state to store whether the viewport is mobile
    const [isViewportMobile, setIsViewportMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        // Function to check if the viewport width is smaller than 768px
        const handleResize = () => {
            setIsViewportMobile(window.innerWidth < 768);
            console.log(window.innerWidth, isViewportMobile)
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
            mt-0 md:mt-12">
            {isViewportMobile ? (
                <WeeklyPlanMobile
                    weeksRecipes={weeksRecipes}
                    currentRecipe={currentRecipe}
                    currentDay={currentDay}
                    handleNavClick={handleNavClick}
                    isViewportMobile={isViewportMobile}
                    closeRecipeSidenav={closeRecipeSidenav}
                    weekDays={weekDays}
                />
            ) : (
                <WeeklyPlanDesktop />
            )}





        </section>
    )
};

export default WeeklyPlan