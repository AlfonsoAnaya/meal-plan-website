import { useState, useEffect } from "react";

import "./WeeklyPlan.css";
import recipes from "../recipes";
import Recipe from "../../types/recipe.d";

import Weekdays from "../../utils/Weekdays";
import IndividualRecipe from "../IndividualRecipe/IndividualRecipePage";

function WeeklyPlanDesktop() {

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
    // const [currentDay, setCurrentDay] = useState("1")


    function handleNavClick(recipe: Recipe, day: string) {
        
        setCurrentRecipe(recipe);
        if (isViewportMobile) {
            openRecipeSidenav();
        };
    };

    const openRecipeSidenav = () => {
        const WeeklySection = document.querySelector('.weekly-plan-section');
        WeeklySection?.classList.add("sidenav-open");
    };

    // const closeRecipeSidenav = (e:any) => {
    //     if (e.target === e.currentTarget) {
    //         const WeeklySection = document.querySelector('.weekly-plan-section');
    //         WeeklySection?.classList.remove("sidenav-open");
    //     }
        
    // }


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
            <div className="flex flex-col items-center w-[95%] max-w-[1150px]">
                <nav className="w-[100%] flex flex-row justify-center gap-[1.5em]">
                    {Weekdays.map((day, i) => {
                        return (
                            <div>
                            <span key={`Day ${Weekdays[i]}`} id={`Day ${Weekdays[i]}`}
                            onClick={() => handleNavClick(weeksRecipes[i], weekDays[i])}
                            className="hover:cursor-pointer hover:text-secondary">
                                {day.toUpperCase()}
                            </span>
                            <span className={day==="Domingo" ? 'hidden' : 'ml-[1.5em]'}>|</span>
                            </div>
                            
                        )
                    })}
                    
                </nav>

               
                
                    <article className="recipe-sidenav pl-2  static
                        translate-x-0 bg-transparent overflow-y-scroll md:overflow-auto"
                    >
                        <IndividualRecipe
                            propsRecipe={currentRecipe}
                        />
                    </article>
                



            </div>

    )
};

export default WeeklyPlanDesktop