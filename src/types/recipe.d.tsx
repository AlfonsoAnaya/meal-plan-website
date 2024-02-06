import Ingredient from "./ingredientd.d"; 

interface Recipe {
    id: number; 
    name: string;
    tagline: string;
    ingredients: Ingredient[];
    primaryIngredient: string;
    secondaryIngredient: string;
    portions: number;
    difficulty: string;
    prepTime: number;
    totalTime: number;
    img: string;
    imgThumb: string;
    type: string;
    cuisine: string[];
    method: string[];
    tips?: string[];
    isVegan: boolean;
    isDairyFree: boolean;
    isVegetarian: boolean;
    isGlutenFree: boolean;
    isSpicy: boolean;
    isQuickAndEasy: boolean;
    isBudgetFriendly: boolean;
    isBatchCooking: boolean;
    isLowCarb: boolean;
    isHighProtein: boolean;
    isLowCalorie: boolean;
    isHeartHealthy: boolean;
    isMainDish: boolean;
    isDessert: boolean;
    isSideDish: boolean;
    isSpringDish: boolean;
    isSummerDish: boolean;
    isAutumnDish: boolean;
    isWinterDish: boolean;
}

export default Recipe 