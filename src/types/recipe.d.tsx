import Ingredient from "./ingredientd.d"; 

interface Recipe {
    id: number;
    name: string;
    tagline: string;
    ingredients: Ingredient[];
    portions: number;
    difficulty: string;
    prepTime: number;
    totalTime: number;
    img: string;
    type: string;
    cuisine: string;
    method: string[];
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
}

export default Recipe 