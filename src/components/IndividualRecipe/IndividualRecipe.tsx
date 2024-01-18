import { useLocation } from 'react-router-dom';

function IndividualRecipe() {
  const { state } = useLocation();
  const recipeData = state?.recipeData || null;
  console.log(state);

  return (
    <div>
        <>
            <h1>Aquí hay una recetea muy buena:</h1>
          <h2>{recipeData.name}</h2>
        </>
    </div>
  );
}

export default IndividualRecipe;