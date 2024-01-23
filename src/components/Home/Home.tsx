import DaysRecipe from "./DaysRecipe";
import RecipeCollection from "../Shared/RecipeCollection";
import RecipeCarousel from "../Shared/RecipeCarousel";

function Home() {
    return (
        <>
            <DaysRecipe />
            <RecipeCollection />
            <RecipeCarousel />
        </>
    );
}

export default Home;