import recipes from "../recipes";
import Ingredient from "../../types/ingredientd.d";

function ShoppingList() {

    const toggleStrikethrough = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        e.currentTarget.classList.toggle("line-through");
        e.currentTarget.classList.toggle("text-gray-500")
    }

    return (
        <section className="shopping-list w-[100%] flex flex-col items-center 
        mt-0 md:mt-12">
            <div className="max-w-[1100px] w-[100%]"
            >
                <div>
                    <h3 className="font-[600] mb-[.5rem] underline
                    text-[1.1rem] md:text-[1.5rem] 
                    mt-2 md:mt-0">Ingredientes</h3>
                    <ul className="mb-[1em]
                    text-[1rem] md:text-[1.1rem]
                    font-[300] md:font-[600]">
                        {/* MAIN RECIPE INGREDIENTS */}
                        {recipes[1].ingredients.map((ingredient: Ingredient, i: number) => {
                            return (
                                <li key={ingredient.name.singular + i}
                                    className="mb-[.5em]"
                                    onClick={toggleStrikethrough}>
                                    {ingredient.unit === "unidad" ?
                                        (ingredient.quantity > 1 ?
                                            <span>{`${ingredient.quantity} ${ingredient.name.plural} `}</span>
                                            : <span>{`${ingredient.quantity} ${ingredient.name.singular} `}</span>
                                        )
                                        : <span>{`${ingredient.quantity} ${ingredient.unit} de ${ingredient.name.singular} `}</span>
                                    }
                                    ({ingredient.category})
                                </li>
                            )
                        })}
                        {/* EXTRA RECIPE INGREDIENTS */}
                        {recipes[1].extraRecipeName ?
                            <>
                                {recipes[1].extraIngredients?.map((ingredient: Ingredient, i: number) => {
                                    return (
                                        <li key={ingredient.name.singular + i}
                                            className="mb-[.5em]"
                                            onClick={toggleStrikethrough}>
                                            {ingredient.unit === "unidad" ?
                                                (ingredient.quantity > 1 ?
                                                    <span>{`${ingredient.quantity} ${ingredient.name.plural} `}</span>
                                                    : <span>{`${ingredient.quantity} ${ingredient.name.singular} `}</span>
                                                )
                                                : <span>{`${ingredient.quantity} ${ingredient.unit} de ${ingredient.name.singular} `}</span>
                                            }
                                            ({ingredient.category})
                                        </li>
                                    )
                                })}
                            </>
                            : ''
                        }
                    </ul>
                </div>
            </div>


        </section>
    )
}

export default ShoppingList;