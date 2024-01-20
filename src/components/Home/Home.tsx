import DaysRecipe from "./DaysRecipe";
import RecipeCollection from "./RecipeCollection";
import RecipeCarousel from "./RecipeCarousel";

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