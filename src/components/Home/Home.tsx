import DaysRecipe from "./DaysRecipe";
import RecipeCollection from "../Shared/RecipeCollection";
import RecipeCarousel from "../Shared/RecipeCarousel";
import WelcomeScreen from "./WelcomeScreen";

function Home() {
    return (
        <>
            <WelcomeScreen />
            <RecipeCarousel />
            <DaysRecipe />
            <RecipeCollection />
            
        </>
    );
}

export default Home;