import { useState } from 'react';
// import Ingredient from '../../types/ingredientd.d';
import Recipe from '../../types/recipe.d';

function DatabaseForm() {

  const [formData, setFormData] = useState<Recipe>({
    id: 0,
    name: 'name',
    tagline: 'tagline',
    ingredients: [],
    portions: 0,
    difficulty: '',
    prepTime: 0,
    totalTime: 0,
    img: '',
    // imgThumb: '',
    type: '',
    cuisine: '',
    method: [],
    // tips: '',
    isVegan: false,
    isDairyFree: false,
    isVegetarian: false,
    isGlutenFree: false,
    isSpicy: false,
    isQuickAndEasy: false,
    isBudgetFriendly: false,
    isBatchCooking: false,
    isLowCarb: false,
    isHighProtein: false,
    isLowCalorie: false,
    isHeartHealthy: false
    // isMainDish: false,
    // isDessert: false,
    // isSideDish: false,
  });

  


  return (
    <div className="w-[70%] border-2 border-red-200 mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h2>Forma Para Base de Datos</h2>
        <form
          className="w-[100%]"
        // onSubmit={handleSubmit}
        >
          {/* Basic Information */}
          <div>
            <label>
              Name:
              <input type="text" name="name" defaultValue={formData.name}
              // onChange={handleChange} 
              />
            </label>
          </div>

          <div>
            <label>
              Tagline:
              <input type="text-area" name="tagline" defaultValue={formData.tagline}
              // onChange={handleChange} 
              />
            </label>
          </div>



          {/* Ingredients */}
          <div><div>
            <label>Ingredients:</label>
            {formData.ingredients.map((ingredient, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={ingredient.name}
                  placeholder="Ingredient Name"
                // onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
                />
                <input
                  type="text"
                  value={ingredient.quantity}
                  placeholder="Quantity"
                // onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
                />
                <button type="button"
                // onClick={() => handleRemoveIngredient(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button type="button"
            // onClick={handleAddIngredient}
            >
              Add Ingredient
            </button>
          </div>
          </div>


          {/* Other Details */}
          <div>
            <label>
              Portions:
              <input type="number" name="portions" value={formData.portions}
              // onChange={handleChange} 
              />
            </label>
          </div>

          <div>
            <label>
              Prep Time:
              <input type="number" name="prepTime" value={formData.portions}
              // onChange={handleChange} 
              />
            </label>
          </div>

          <div>
            <label>
              Total Time:
              <input type="number" name="totalTime" value={formData.portions}
              // onChange={handleChange} 
              />
            </label>
          </div>

          <div>
            <label>
              Difficulty:
              <input type="text" name="difficulty" value={formData.name}
              // onChange={handleChange} 
              />
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>

  )
}

export default DatabaseForm;