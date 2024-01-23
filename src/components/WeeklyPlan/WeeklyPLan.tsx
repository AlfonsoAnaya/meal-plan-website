import "./WeeklyPlan.css";
import WeeklyPlanCard from "./WeeklyPlanCard";
import recipes from "../recipes";
import { Link } from "react-router-dom";

function WeeklyPlan() {
    return (
        <section className="monthly-plan-section flex flex-col items-center border-2">
            <div>
                <h2 className="text-secondary font-secondary text-[3.5rem] py-[2rem]">Plan mensual</h2>
            </div>
            {/* FLEX CALENDAR */}
            <div className="calendar-container flex flex-col w-[90%] max-w-[1000px] border-2 border-gray-400">
                {/* GRID WEEKDAYS */}
                <ul className="weekdays-grid grid">
                    <li className="weekday">LUNES</li>
                    <li className="weekday">MARTES</li>
                    <li className="weekday">MIÉRCOLES</li>
                    <li className="weekday">JUEVES</li>
                    <li className="weekday">VIERNES</li>
                    <li className="weekday">SÁBADO</li>
                    <li className="weekday">DOMINGO</li>
                </ul>
                {/* GRID RECIPES */}
                <div className="recipes-grid grid">
                    {recipes.map((recipe, i) => {
                        return (
                            <Link
                                key={recipe.name + i}
                                to={`/recipe/${recipe.name}`}
                                state={{ recipeData: recipe }}>
                                <WeeklyPlanCard
                                    recipe={recipe}
                                />
                            </Link>
                        )
                    })}
                </div>

            </div>

        </section>
    )
};

export default WeeklyPlan