import { useState, useEffect } from "react";
import recipes from "../recipes";
import Ingredient from "../../types/ingredientd.d";
//import Recipe from "../../types/recipe.d";
import RecipeCategories from "../../utils/RecipeCategories";
import "./ShoppingList.css";
import ShoppingListCard from "./ShoppingListWeeklyCard";

const { IngredientCategories } = RecipeCategories;

const initialIngredientsState = Object.fromEntries(
    IngredientCategories.map((category: string) => [category, []])
);


function ShoppingList() {
    const [ingredientsState, setIngredientsState] = useState<{ [key: string]: Ingredient[] }>(initialIngredientsState);
    const [weeklyRecipes] = useState(recipes.slice(0, 7));
    const [selectedRecipes, setSelectedRecipes] = useState<number[]>([])
    const [listIngredients, setListIngredients] = useState<Ingredient[]>([]);


    const weekDays = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7"
    ];

    const updateIngredientsState = (category: string, newIngredient: Ingredient) => {
        setIngredientsState((prevState) => {
            const updatedCategoryIngredients = [...prevState[category], newIngredient];
            return {
                ...prevState,
                [category]: updatedCategoryIngredients
            };
        });
    };

    // UPDATE THE LIST OF INGREDIENTS EACH TIME THE SELECTED RECIPES CHANGE
    useEffect(() => {
        setListIngredients([]);
        selectedRecipes.forEach((num) => {
            weeklyRecipes[num].ingredients.forEach((ingredient) => {
                setListIngredients((prevState) => [...prevState, ingredient])
            });
            weeklyRecipes[num].extraIngredients?.forEach((ingredient) => {
                setListIngredients((prevState) => [...prevState, ingredient])
            })
        });
    }, [selectedRecipes]);

// UPDATE THE STATE HOLDING THE INGREDIENTS BY CATEGORY EACH TIME THE LIST OF INGREDIENTS CHANGE
useEffect(() => {
    setIngredientsState(initialIngredientsState);
    listIngredients.forEach((ingredient) => {
        updateIngredientsState(ingredient.category, ingredient)
    })
}, [listIngredients])

// TOGGLE STRIKETHROUGH
const toggleStrikethrough = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.currentTarget.classList.toggle("line-through");
    e.currentTarget.classList.toggle("text-gray-500");
    e.currentTarget.classList.toggle("selected-ingredient")
}

// ADD AND DELETE RECIPES FROM SELECTION
function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>, day: string) {
    const dayNum = parseInt(day)-1;

    if (!selectedRecipes.includes(dayNum)) {
        setSelectedRecipes((prevState) => [...prevState, dayNum]);
    } else {
        let newState = [...selectedRecipes];
        newState.splice(newState.indexOf(dayNum));
        setSelectedRecipes(newState);
    }

    e.currentTarget.classList.toggle("selected-day")
};


return (
    <section className="shopping-list w-[100%] flex flex-col items-center p-4
        mt-0 md:mt-12">
        <div className="max-w-[1100px] w-[100%] flex gap-8"
        >
            <div className="w-[100%] md:w-[30%] flex flex-col gap-[.5em]">
                {weeklyRecipes.map((recipe, i) => {
                    return (
                        <div key={`Day ${i}`} id={`Day ${i + 1}`}>
                            <div
                                className={`border-b-[1px] border-b-gray-500 flex flex-col`}
                            >
                                <div
                                    className="hover:cursor-pointer"
                                    onClick={(e) => handleClick(e, weekDays[i])}
                                >
                                    <ShoppingListCard
                                        recipe={recipe}
                                        weekDay={weekDays[i]}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="w-[100%] md:w-[60%]">
                <h3 className="font-[600] mb-[.5rem] underline
                    text-[1.1rem] md:text-[1.5rem] 
                    mt-2 md:mt-0">Ingredientes</h3>
                <ul>

                    {/* MAP THROUGH THE KEYS OF THE OBEJCT HOLDING THE CATEGORIZED INGREDIENTS */}
                    {Object.keys(ingredientsState).map((key) => {
                        return (

                            // RENDER A CATEGORY TITLE ONLY WHEN IT CONTAINS AT LEAST ONE ELEMENT
                            ingredientsState[key].length > 0 ?
                                <div key={key} className="font-sans">
                                    <h3 className="text-[1.1rem] md:text-[1.25rem] font-[600]">{key}</h3>
                                    <ul className="mb-[1em]
                                        text-[1rem] md:text-[1.1rem]
                                        font-[300] md:font-[400]">

                                        {/* RENDER THE LIST OF INGREDIENTS IN EACH KEY  */}
                                        {ingredientsState[key].map((ingredient: Ingredient, i: number) => {
                                            return (
                                                <li key={ingredient.name.singular + i}
                                                    className="shopping-list-item mb-[.5em] flex gap-2 items-center"
                                                    onClick={toggleStrikethrough}>
                                                    <span className="checkbox">
                                                        <span className="checkmark"></span>
                                                    </span>
                                                    {ingredient.unit === "unidad" ?
                                                        (ingredient.quantity > 1 ?
                                                            <span>{`${ingredient.quantity} ${ingredient.name.plural} `}</span>
                                                            : <span>{`${ingredient.quantity} ${ingredient.name.singular} `}</span>
                                                        )
                                                        : <span>{`${ingredient.quantity} ${ingredient.unit} de ${ingredient.name.singular} `}</span>
                                                    }
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                : ''
                        )
                    })}

                </ul>
            </div>
        </div>


    </section>
)
}

export default ShoppingList;