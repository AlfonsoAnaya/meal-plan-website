import { useState } from 'react';
// import Ingredient from '../../types/ingredientd.d';
import Recipe from '../../types/recipe.d';

function DatabaseForm() {

  const [formData, setFormData] = useState<Recipe>({
    id: 0,
    name: '',
    tagline: '',
    ingredients: [],
    primaryIngredient: '',
    secondaryIngredient: '',
    portions: 0,
    difficulty: '',
    prepTime: 0,
    totalTime: 0,
    img: '',
    imgThumb: '',
    type: '',
    cuisine: '',
    method: [],
    tips: [],
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
    isHeartHealthy: false,
    isMainDish: false,
    isDessert: false,
    isSideDish: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // If the input type is radio, convert the value to a boolean
    const updatedValue = e.target.type === 'radio' ? value === 'true' : value;
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };




  return (
    <div className="w-[70%] mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h2>Forma Para Base de Datos</h2>
        <form
          className="w-[100%]"
        // onSubmit={handleSubmit}
        >
          {/* Basic Information */}
          <div>
            <label>
              ID (*required):
              <input type="number" name="id" required
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Name (*required):
              <input type="text" name="name" required
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Tagline (*required):
              <input type="text-area" name="tagline" required
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Primary Ingredient (*required):
              <input type="text" name="primaryIngredient" required
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Secondary Ingredient (optional):
              <input type="text" name="secondaryIngredient"
                onChange={handleChange}
              />
            </label>
          </div>



          {/* Ingredients */}
          {/* <div><div>
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
          </div> */}


          <div>
            <label>
              Portions:
              <input type="number" name="portions" required
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Difficulty (*required):
              <input type="text" name="secondaryIngredient" required
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Prep Time:
              <input type="number" name="prepTime" required
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Total Time:
              <input type="number" name="totalTime" required
                onChange={handleChange}
              />
            </label>
          </div>

          {/* BOOLEANS */}

          <div>
            <label>
              Vegan 🥦:
              <input
                type="radio"
                name="isVegan"
                value="true"
                checked={formData.isVegan}
                onChange={handleChange}
              />
              True
            </label>

            <label>
              <input
                type="radio"
                name="isVegan"
                value="false"
                checked={!formData.isVegan}
                onChange={handleChange}
              />
              False
            </label>
          </div>

          <div>
            <label>
              Dairy Free 🥛⛔:
              <input
                type="radio"
                name="isDairyFree"
                value="true"
                checked={formData.isDairyFree}
                onChange={handleChange}
              />
              True
            </label>

            <label>
              <input
                type="radio"
                name="isDairyFree"
                value="false"
                checked={!formData.isDairyFree}
                onChange={handleChange}
              />
              False
            </label>
          </div>

          <div>
            <label>
              Vegetarian 🌿:
              <input
                type="radio"
                name="isVegetarian"
                value="true"
                checked={formData.isVegetarian}
                onChange={handleChange}
              />
              True
            </label>

            <label>
              <input
                type="radio"
                name="isVegetarian"
                value="false"
                checked={!formData.isVegetarian}
                onChange={handleChange}
              />
              False
            </label>
          </div>



          <button type="submit">Submit</button>

        </form>


      </div>
      <div className="mt-6">
        <h3>Current Value:</h3>
        <p>
          {"{"}
          id: {formData.id},<br></br>
          name: '{formData.name}',<br></br>
          tagline: '{formData.tagline}',<br></br>
          primaryIngredient: '{formData.primaryIngredient}',<br></br>
          secondaryIngredient '{formData.secondaryIngredient}',<br></br>
          portions: {formData.portions},<br></br>
          difficulty: '{formData.difficulty}',<br></br>
          prepTime: {formData.prepTime},<br></br>
          totalTime: {formData.totalTime},<br></br>
          isVegan: {formData.isVegan.toString()},<br></br>
          isDairyFree: {formData.isDairyFree.toString()},<br></br>
          isVegetarian: {formData.isVegetarian.toString()},<br></br>
        </p>
        {"}"}
      </div>

    </div>




  )
}

export default DatabaseForm;