import DaysRecipe from "./DaysRecipe";
import RecipeCarousel from "../Shared/RecipeCarousel";
import WelcomeScreen from "./WelcomeScreen/WelcomeScreen";
import currentWeekRecipes from "../../utils/CurrentWeekRecipes";

function Home() {
    return (
        <>
            <WelcomeScreen />
            <RecipeCarousel
                recipes={currentWeekRecipes}
            />
            <DaysRecipe 
                recipes={currentWeekRecipes}/>
        </>
    );
}

export default Home;